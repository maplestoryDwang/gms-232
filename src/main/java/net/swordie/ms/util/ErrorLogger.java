package net.swordie.ms.util;

import net.swordie.ms.ServerConstants;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import java.io.FileWriter;
import java.io.IOException;
import java.time.LocalDateTime;

public class ErrorLogger {
    private static final Logger log = LogManager.getLogger();

    public static void logAsClientError(String toLog) {
        Util.makeDirIfAbsent(ServerConstants.LOG_DIR);
        log.error(toLog);
        try (var writer = new FileWriter(ServerConstants.LOG_DIR + "/clienterror.txt", true)){
            writer.write(String.format("[%s] %s", LocalDateTime.now(), toLog));
            writer.write("\r\n");
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    public static void logAsClientError(Throwable ex) {
        Util.makeDirIfAbsent(ServerConstants.LOG_DIR);
        try (var writer = new FileWriter(ServerConstants.LOG_DIR + "/clienterror.txt", true)){
            log.error(ex.getMessage());
            var sb = new StringBuilder();
            for (var st : ex.getStackTrace()) {
                sb.append(String.format("%s: %s\r\n", ex.getClass(), st.toString()));
            }
            writer.write(String.format("[%s] %s", LocalDateTime.now(), sb.toString()));
            writer.write("\r\n");
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
