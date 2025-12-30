package net.swordie.ms.connection.netty;

import io.netty.channel.ChannelHandlerContext;
import io.netty.channel.SimpleChannelInboundHandler;
import net.swordie.ms.Server;
import net.swordie.ms.ServerConstants;
import net.swordie.ms.client.Client;
import net.swordie.ms.client.User;
import net.swordie.ms.client.character.Char;
import net.swordie.ms.connection.InPacket;
import net.swordie.ms.handlers.Handler;
import net.swordie.ms.handlers.header.InHeader;
import net.swordie.ms.util.ErrorLogger;
import net.swordie.ms.util.HandleTimeInfo;
import net.swordie.ms.util.Util;
import net.swordie.ms.world.TransferInfo;
import net.swordie.orm.dao.SworDaoFactory;
import net.swordie.orm.dao.UserDao;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import java.io.File;
import java.io.IOException;
import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
import java.net.URL;
import java.net.URLDecoder;
import java.util.*;
import java.util.jar.JarEntry;
import java.util.jar.JarFile;

import static net.swordie.ms.connection.netty.NettyClient.CLIENT_KEY;


/**
 * Created by Sjonnie on 2/28/2017.
 */
public class ChannelHandler extends SimpleChannelInboundHandler<InPacket> {
    private static final UserDao userDao = (UserDao) SworDaoFactory.getByClass(User.class);

    public static final Map<InHeader, HandleTimeInfo> timeInfo  = new HashMap<>();
    private static final Logger log = LogManager.getRootLogger();
    private static final Map<InHeader, Method> handlers = new HashMap<>();



    public static void initHandlers(boolean mayOverride) {
        long start = System.currentTimeMillis();
        String packageName = "net.swordie.ms.handlers"; // handlers包路径
        Set<Class<?>> classes = getClasses(packageName);

        for (Class<?> clazz : classes) {
            for (Method method : clazz.getMethods()) {
                Handler handler = method.getAnnotation(Handler.class);
                if (handler != null) {
                    log.info("[HandlerLoader] Load method: " + clazz.getName() + "#" + method.getName());

                    InHeader header = handler.op();
                    if (header != InHeader.NO) {
                        if (handlers.containsKey(header) && !mayOverride) {
                            throw new IllegalArgumentException(
                                    String.format("Multiple handlers for header %s! (%s , %s)",
                                            header, handlers.get(header).getName(), method.getName()));
                        }
                        handlers.put(header, method);
                    }

                    // 多 Header 支持
                    for (InHeader h : handler.ops()) {
                        handlers.put(h, method);
                    }
                }
            }
        }

        log.info("Initialized " + handlers.size() + " handlers in " +
                (System.currentTimeMillis() - start) + "ms.");
    }

    public static Set<Class<?>> getClasses(String packageName) {
        Set<Class<?>> classes = new HashSet<>();
        String packagePath = packageName.replace(".", "/");

        try {
            Enumeration<URL> resources =
                    Thread.currentThread().getContextClassLoader().getResources(packagePath);

            while (resources.hasMoreElements()) {
                URL resource = resources.nextElement();
                String protocol = resource.getProtocol();

                // 运行于IDE、普通目录
                if ("file".equals(protocol)) {
                    File dir = new File(resource.toURI());
                    findClassesInDir(packageName, dir, classes);
                }

                // 运行于 JAR 内
                else if ("jar".equals(protocol)) {
                    String jarPath = resource.getPath().substring(5, resource.getPath().indexOf("!"));
                    try (JarFile jarFile = new JarFile(URLDecoder.decode(jarPath, "UTF-8"))) {
                        Enumeration<JarEntry> entries = jarFile.entries();
                        while (entries.hasMoreElements()) {
                            JarEntry entry = entries.nextElement();
                            String name = entry.getName();
                            if (name.startsWith(packagePath) && name.endsWith(".class")) {
                                String className = name.replace("/", ".").replace(".class", "");
                                classes.add(Class.forName(className));
                            }
                        }
                    }
                }
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        return classes;
    }

    // 递归扫描文件目录
    private static void findClassesInDir(String packageName, File dir, Set<Class<?>> classes) {
        if (!dir.exists()) return;

        for (File file : dir.listFiles()) {
            if (file.isDirectory()) {
                findClassesInDir(packageName + "." + file.getName(), file, classes);
            } else if (file.getName().endsWith(".class")) {
                String className = packageName + "." + file.getName().replace(".class", "");
                try {
                    classes.add(Class.forName(className));
                } catch (ClassNotFoundException ignored) {}
            }
        }
    }

    public static void initHandlersV0(boolean mayOverride) {



        long start = System.currentTimeMillis();
        String handlersDir = ServerConstants.HANDLERS_DIR;
        Set<File> files = new HashSet<>();
        Util.findAllFilesInDirectory(files, new File(handlersDir));
        for (File file : files) {
            try {
                // grab all files in the handlers dir, strip them to their package name, and remove .java extension
                String className = file.getPath()
                        .replaceAll("[\\\\|/]", ".")
                        .split("src\\.main\\.java\\.")[1]
                        .replaceAll("\\.java", "");
                Class clazz = Class.forName(className);
                for (Method method : clazz.getMethods()) {
                    log.info("load handler method: =========================================================================================" + method.getName());
                    Handler handler = method.getAnnotation(Handler.class);
                    if (handler != null) {
                        InHeader header = handler.op();
                        if (header != InHeader.NO) {
                            if (handlers.containsKey(header) && !mayOverride) {
                                throw new IllegalArgumentException(String.format("Multiple handlers found for header %s! " +
                                        "Had method %s, but also found %s.", header, handlers.get(header).getName(), method.getName()));
                            }
                            handlers.put(header, method);
                        }
                        InHeader[] headers = handler.ops();
                        for (InHeader h : headers) {
                            handlers.put(h, method);
                        }
                    }
                }
            } catch (ClassNotFoundException e) {
                e.printStackTrace();
            }
        }
        log.info("Initialized " + handlers.size() + " handlers in " + (System.currentTimeMillis() - start) + "ms.");
    }

    public ChannelHandler(boolean autoRelease) {
        super(autoRelease);
    }

    @Override
    public void channelActive(ChannelHandlerContext ctx) {
        NettyClient o = ctx.channel().attr(CLIENT_KEY).get();
//        if(!LoginAcceptor.channelPool.containsKey(o.getIP())) {
//            System.out.println("[Dropping currently unknown client]");
//            o.close();
//        }
    }

    @Override
    public void channelInactive(ChannelHandlerContext ctx) {
        log.debug("[ChannelHandler] | Channel inactive.");

        Client c = (Client) ctx.channel().attr(CLIENT_KEY).get();
        if (c != null) {
            User user = c.getUser();
            Char chr = c.getChr();
            if (chr != null && !chr.isChangingChannel() && c == chr.getClient()) {
                // client is gone without getting a new connection, and we're not expecting it
                chr.logout();
            } else if (chr != null) {
                // changing channel, or client changed (AKA this function is called after handleMigrateIn)
                chr.getClient().getChannelInstance().removeChar(chr);
                var worldId = chr.getWorld().getWorldId().getVal();
                var transfer = Server.getInstance().getTransferInfo(chr.getId(), worldId);
                if (transfer != null) {
                    transfer.setState(TransferInfo.State.Removed);
                }
                userDao.saveOrUpdate(chr.getUser(), chr);
            } else if (user != null && user.getCurrentChr() != null) {
                // login
                // chr == null, but user.getCurrentChr() == null: handleMigrateIn was too early, just save user
                var world = user.getCurrentWorld();
                if (world == null) {
                    world = user.getCurrentChr().getWorld();
                }
                if (world != null) {
                    var transfer = Server.getInstance().getTransferInfo(user.getCurrentChr().getId(), world.getWorldId().getVal());
                    if (transfer != null) {
                        transfer.setState(TransferInfo.State.Removed);
                    }
                }
                userDao.saveOrUpdate(user, null);
            } else if (user != null) {
                // from char select => alt+f4/crash
                // just save user, just in case (make users wait 2 min to ensure old client is gone)
                userDao.saveOrUpdate(user, null);
                Server.getInstance().removeUser(user);
            }
        }
        NettyClient o = ctx.channel().attr(CLIENT_KEY).get();
        if (o != null) {
            o.close();
        }
    }

    @Override
    public void channelRead0(ChannelHandlerContext ctx, InPacket inPacket) {
        Client c = (Client) ctx.channel().attr(CLIENT_KEY).get();
        Char chr = c.getChr();
        short op = inPacket.decodeShort();
        if (op >= InHeader.BEGIN_USER.getValue()
                && !c.getEncryptedHeaderToNormalHeaders().isEmpty()) {
            op = c.getEncryptedHeaderToNormalHeaders().getOrDefault(op, (short) -1);
        }
        if (op == -1 || !Server.OPCODE_ENCRYPTION) {
//            op = inPacket.decodeShort();
        }
        InHeader inHeader = InHeader.getInHeaderByOp(op);
        if (inHeader == null) {
            handleUnknown(inPacket, op);
            return;
        }
        if (!InHeader.isSpamHeader(InHeader.getInHeaderByOp(op))) {
            log.debug(String.format("[In]\t| %s, %d/0x%s\t| %s", InHeader.getInHeaderByOp(op), op, Integer.toHexString(op).toUpperCase(), inPacket));
        }
        if (chr == null && op >= InHeader.BEGIN_USER.getValue()) {
            // leftover packets from ingame after logging out
            return;
        }

        Method method = handlers.get(inHeader);
        long start = System.currentTimeMillis();
        try {
            if (method == null) {
                handleUnknown(inPacket, op);
            } else {
                Class clazz = method.getParameterTypes()[0];
                try {
                    if (method.getParameterTypes().length == 3) {
                        method.invoke(this, chr, inPacket, inHeader);
                    } else if (clazz == Client.class) {
                        method.invoke(this, c, inPacket);
                    } else if (clazz == Char.class) {
                        method.invoke(this, chr, inPacket);
                    } else {
                        log.error("Unhandled first param type of handler {}, type = {}", method.getName(), clazz);
                    }
                } catch (IllegalAccessException | InvocationTargetException e) {
                    if (Server.DEBUG || inHeader.isAlwaysShowExceptions()
                            || (Server.SHOW_EXCEPTIONS && !inHeader.isIgnoreShowExceptions())
                    ) {
                        if (inHeader == InHeader.MIGRATE_IN) {
                            ErrorLogger.logAsClientError(e.getCause());
                        }

                        if (e instanceof InvocationTargetException && e.getCause() != null) {
                            e.getCause().printStackTrace();
                        } else {
                            e.printStackTrace();
                        }
                    }
                }
            }
        } finally {
            inPacket.release();
            if (Server.DEBUG_PACKET_TIMES) {
                addTimeInfo(inHeader, start);
            }
        }
    }

    private void addTimeInfo(InHeader header, long start) {
        long timeTaken = System.currentTimeMillis() - start;
        var info = timeInfo.computeIfAbsent(header, HandleTimeInfo::new);
        info.addInfo(timeTaken);
    }

    private void handleUnknown(InPacket inPacket, short opCode) {
        if (!InHeader.isSpamHeader(InHeader.getInHeaderByOp(opCode))) {
            log.debug(String.format("Unhandled opcode %s/0x%s, packet %s", opCode, Integer.toHexString(opCode).toUpperCase(), inPacket));
        }
    }

    @Override
    public void exceptionCaught(ChannelHandlerContext ctx, Throwable cause) {
        if (cause instanceof IOException) {
            log.debug("Client forcibly closed the game.");
        } else {
            cause.printStackTrace();
        }
    }
}
