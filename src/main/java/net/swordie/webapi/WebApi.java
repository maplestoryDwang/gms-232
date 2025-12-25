package net.swordie.webapi;

import com.sun.net.httpserver.HttpServer;
import jakarta.ws.rs.Path;
import net.swordie.ms.ServerConstants;
import net.swordie.ms.util.Util;
import net.swordie.webapi.exceptions.CorsExceptionHandler;
import net.swordie.webapi.exceptions.ExceptionHandler;
import net.swordie.webapi.interceptor.RequestInterceptor;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.jboss.resteasy.core.AsynchronousDispatcher;
import org.jboss.resteasy.core.providerfactory.ResteasyProviderFactoryImpl;
import org.jboss.resteasy.plugins.providers.jackson.ResteasyJackson2Provider;
import org.jboss.resteasy.plugins.server.sun.http.HttpContextBuilder;

import java.io.File;
import java.net.InetSocketAddress;
import java.util.HashSet;
import java.util.Set;

public class WebApi {

    private static final Logger log = LogManager.getLogger();
    public static final String ROUTES_DIR = ServerConstants.DIR + "/src/main/java/net/swordie/webapi/routes";

    public void init() {
        log.info("Initializing web API.");
        long start = System.currentTimeMillis();

        HttpServer server = createHttpServer();

        server.setExecutor(null);
        server.start();

        log.info(String.format("Initialied web API on port %d in %dms.", ServerConstants.WEB_API_PORT, System.currentTimeMillis() - start));
    }

    private HttpServer createHttpServer() {
        HttpServer httpServer = null;

        try {
            InetSocketAddress address = new InetSocketAddress(ServerConstants.WEB_API_PORT);
            httpServer = HttpServer.create(address, 0);

            var contextBuilder = new HttpContextBuilder();
            contextBuilder.setPath("/api");
            initRoutes(contextBuilder);
            initProviders(contextBuilder);
            contextBuilder.bind(httpServer);
        } catch (Exception e) {
            System.out.println("Failed to create HTTPS server on port " + ServerConstants.WEB_API_PORT + " of localhost");
            e.printStackTrace();
        }

        return httpServer;
    }

    private void initProviders(HttpContextBuilder contextBuilder) {
        contextBuilder.getDeployment().setDispatcher(new AsynchronousDispatcher(new ResteasyProviderFactoryImpl()));
        var providerFactory = contextBuilder.getDeployment().getDispatcher().getProviderFactory();
        providerFactory.registerProvider(ExceptionHandler.class);
        providerFactory.registerProvider(CorsExceptionHandler.class);
        providerFactory.registerProvider(ResteasyJackson2Provider.class);
        providerFactory.registerProvider(RequestInterceptor.class);
    }

    private void initRoutes(HttpContextBuilder contextBuilder) {
        Set<File> files = new HashSet<>();
        Util.findAllFilesInDirectory(files, new File(ROUTES_DIR));
        for (File file : files) {
            try {
                // grab all files in the handlers dir, strip them to their package name, and remove .java extension
                String className = file.getPath()
                        .replaceAll("[\\\\|/]", ".")
                        .split("src\\.main\\.java\\.")[1]
                        .replaceAll("\\.java", "");
                Class clazz = Class.forName(className);
                var pathAnnotation = (Path) clazz.getAnnotation(Path.class);
                if (pathAnnotation == null) {
                    log.info(String.format("Not binding class %s, as no @Path annotation could be found.", className));
                    continue;
                }

                contextBuilder.getDeployment().getActualResourceClasses().add(clazz);
            } catch (ClassNotFoundException e) {
                e.printStackTrace();
            }
        }
    }
}
