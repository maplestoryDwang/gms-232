package net.swordie.ms.connection.api;

import com.google.common.util.concurrent.ThreadFactoryBuilder;
import io.netty.channel.ChannelHandlerContext;
import io.netty.channel.SimpleChannelInboundHandler;
import net.swordie.ms.Server;
import net.swordie.ms.client.Client;
import net.swordie.ms.connection.InPacket;
import net.swordie.ms.handlers.ApiRequestHandler;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.ThreadFactory;

import static net.swordie.ms.connection.netty.NettyClient.CLIENT_KEY;

/**
 * @author Sjonnie
 * Created on 10/5/2018.
 */
public class ApiHandler extends SimpleChannelInboundHandler<InPacket> {

    private static final Logger log = LogManager.getLogger();

    private static final ThreadFactory namedThreadFactory = new ThreadFactoryBuilder().setNameFormat("api-%d").build();
    private static final ExecutorService API_EXECUTOR_SERVICE = Executors.newCachedThreadPool(namedThreadFactory);

    @Override
    protected void channelRead0(ChannelHandlerContext ctx, InPacket inPacket) {
        Client c = (Client) ctx.channel().attr(CLIENT_KEY).get();
        short op = inPacket.decodeShort();
        ApiInHeader opHeader = ApiInHeader.getByVal(op);
        if (opHeader == null) {
            handleUnknown(inPacket, op);
            return;
        }
        long start = System.currentTimeMillis();
        if (Server.DEBUG) {
            log.debug(String.format("[API In]\t| %s, %d/0x%s\t| %s", ApiInHeader.getInHeaderByOp(op), op, Integer.toHexString(op).toUpperCase(), inPacket));
        }
        handleApiRequest(inPacket, c, opHeader, start);
    }

    private void handleApiRequest(InPacket inPacket, Client c, ApiInHeader opHeader, long start) {
        try {
            switch (opHeader) {
                case REQUEST_TOKEN:
                    ApiRequestHandler.handleTokenRequest(c, inPacket);
                    break;
                case CREATE_ACCOUNT_REQUEST:
                    ApiRequestHandler.handleCreateAccountRequest(c, inPacket);
                    break;
                case SHUTDOWN_SERVER:
                    ApiRequestHandler.handleShutdownServer(c, inPacket);
                    break;
                case CANCEL_SHUTDOWN:
                    ApiRequestHandler.handleCancelShutdown(c, inPacket);
                    break;
                case LOGOUT_REQUEST:
                    ApiRequestHandler.handleLogoutRequest(c, inPacket);
                    break;
            }
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            inPacket.release();
        }
    }

    private void handleUnknown(InPacket inPacket, short op) {
        log.warn("Unknown API request " + op);
    }
}
