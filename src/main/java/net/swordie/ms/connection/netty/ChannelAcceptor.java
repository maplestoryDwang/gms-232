package net.swordie.ms.connection.netty;

import io.netty.bootstrap.ServerBootstrap;
import io.netty.channel.ChannelFuture;
import io.netty.channel.ChannelInitializer;
import io.netty.channel.ChannelOption;
import io.netty.channel.EventLoopGroup;
import io.netty.channel.nio.NioEventLoopGroup;
import io.netty.channel.socket.SocketChannel;
import io.netty.channel.socket.nio.NioServerSocketChannel;
import net.swordie.ms.client.Client;
import net.swordie.ms.connection.crypto.MapleCrypto;
import net.swordie.ms.connection.packet.Login;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import java.util.Random;

import static net.swordie.ms.connection.netty.NettyClient.CLIENT_KEY;

public class ChannelAcceptor implements Runnable {

    public net.swordie.ms.world.Channel channel;
    private static final Logger log = LogManager.getRootLogger();

    @Override
    public void run() {
        // Taken from http://netty.io/wiki/user-guide-for-4.x.html

        EventLoopGroup bossGroup = new NioEventLoopGroup();
        EventLoopGroup workerGroup = new NioEventLoopGroup();
        try {
            ServerBootstrap b = new ServerBootstrap();
            b.group(bossGroup, workerGroup);
            b.channel(NioServerSocketChannel.class);
            b.childHandler(new ChannelInitializer<SocketChannel>() {

                @Override
                protected void initChannel(SocketChannel ch) {

                    ch.pipeline().addLast(new PacketDecoder(), new ChannelHandler(true), new PacketEncoder());

                    byte[] siv = new byte[4];
                    byte[] riv = new byte[4];

                    Random random = new Random();
                    random.nextBytes(siv);
                    random.nextBytes(riv);

                    Client c = new Client(ch, siv, riv);
                    c.write(Login.sendConnect(riv, siv));

                    ch.attr(CLIENT_KEY).set(c);
                    ch.attr(Client.CRYPTO_KEY).set(new MapleCrypto());

                    c.startPingSending();
                }
            });

            b.childOption(ChannelOption.TCP_NODELAY, true);
            b.childOption(ChannelOption.SO_KEEPALIVE, true);

            // Bind and start to accept incoming connections.
            ChannelFuture f = b.bind(channel.getPort()).sync();
            log.info(String.format("Channel %s-%d listening on port %d", channel.getWorldId(), channel.getChannelId(), channel.getPort()));
            // Wait until the server socket is closed.
            // In this example, this does not happen, but you can do that to gracefully
            // shut down your server.
            f.channel().closeFuture().sync();
        } catch (InterruptedException e) {
            e.printStackTrace();
        } finally {
            workerGroup.shutdownGracefully();
            bossGroup.shutdownGracefully();
        }
    }
}
