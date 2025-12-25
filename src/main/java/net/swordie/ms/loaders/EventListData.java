package net.swordie.ms.loaders;

import net.swordie.ms.ServerConstants;
import net.swordie.ms.connection.OutPacket;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;
import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Path;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

/**
 * Created on 25/12/2025.
 *
 * @author Someone who played SwordieMS
 */
public final class EventListData {
    private static final Logger log = LogManager.getRootLogger();
    private static final Path CONFIG_PATH = Path.of(ServerConstants.LOADINS_DIR + "/EventLists.json");
    private static final List<EventListDataRecord> EVENTS = new ArrayList<>();

    public record EventListDataRecord(
            int id,
            String title,
            String description,
            int startTime,
            int endTime,
            int startDate,
            int endDate,
            List<Integer> rewardItems
    ) {
        public void encode(OutPacket outPacket) {
            outPacket.encodeInt(id);
            outPacket.encodeString(title);
            outPacket.encodeString(description);
            outPacket.encodeInt(startTime);
            outPacket.encodeInt(endTime);
            outPacket.encodeInt(startDate);
            outPacket.encodeInt(endDate);

            outPacket.encodeInt(0);
            outPacket.encodeInt(0);
            outPacket.encodeByte(0); // ?
            outPacket.encodeByte(0); // ?
            outPacket.encodeByte(0); // ?
            outPacket.encodeByte(0); // ?
            outPacket.encodeByte(1); // ?

            outPacket.encodeInt(rewardItems != null ? rewardItems.size() : 0);
            if (rewardItems != null) {
                rewardItems.forEach(outPacket::encodeInt);
            }

            outPacket.encodeInt(0);
            outPacket.encodeByte(0);
            outPacket.encodeByte(0);
        }
    }

    public static synchronized void load() {
        EVENTS.clear();

        if (!Files.exists(CONFIG_PATH)) {
            log.warn("EventLists.json not found: {}", CONFIG_PATH);
            return;
        }

        JSONParser parser = new JSONParser();

        try {
            String content = Files.readString(CONFIG_PATH, StandardCharsets.UTF_8);
            JSONArray root = (JSONArray) parser.parse(content);

            for (Object obj : root) {
                JSONObject data = (JSONObject) obj;

                int id = ((Long) data.get("id")).intValue();
                String title = (String) data.get("title");
                String description = (String) data.get("description");
                int startTime = ((Long) data.get("startTime")).intValue();
                int endTime = ((Long) data.get("endTime")).intValue();
                int startDate = ((Long) data.get("startDate")).intValue();
                int endDate = ((Long) data.get("endDate")).intValue();

                List<Integer> rewardItems = new ArrayList<>();
                JSONArray rewards = (JSONArray) data.get("rewardItems");
                if (rewards != null) {
                    for (Object r : rewards) {
                        rewardItems.add(((Long) r).intValue());
                    }
                }

                EVENTS.add(new EventListDataRecord(
                        id,
                        title,
                        description,
                        startTime,
                        endTime,
                        startDate,
                        endDate,
                        rewardItems
                ));
            }

            log.info("Loaded EventList {} event(s).", EVENTS.size());

        } catch (IOException | ParseException e) {
            log.error("Failed to load EventLists.json", e);
        }
    }

    public static void reload() {
        // Reloadable via admin commands
        load();
    }

    public static List<EventListDataRecord> getActiveEvents() {
        int today = Integer.parseInt(new SimpleDateFormat("yyyyMMdd").format(new Date()));
        return EVENTS.stream()
                .filter(e -> e.endDate() >= today)
                .toList();
    }

    public static List<EventListDataRecord> getAllEvents() {
        return List.copyOf(EVENTS);
    }

    public static void encode(OutPacket outPacket, List<EventListDataRecord> events) {
        outPacket.encodeInt(events.size());
        for (EventListDataRecord e : events) {
            e.encode(outPacket);
        }
    }
}