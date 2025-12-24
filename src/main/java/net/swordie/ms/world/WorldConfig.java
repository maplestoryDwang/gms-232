package net.swordie.ms.world;

import net.swordie.ms.enums.WorldId;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.Properties;

public class WorldConfig {

    private WorldId worldId;

    private String name;

    private int maxChannels;

    private String eventMessage;

    private int mobExpMultiplier;

    private int nxExpMultiplier;

    public static WorldConfig byConfigFile(File file) {
        try (InputStream input = new FileInputStream(file)) {

            Properties prop = new Properties();

            // load a properties file
            prop.load(input);

            var cfg = new WorldConfig();
            var enabled = Boolean.parseBoolean(prop.getProperty("world.enabled"));
            if (!enabled) {
                return null;
            }
            cfg.worldId = WorldId.valueOf(prop.getProperty("world.id"));
            cfg.name = prop.getProperty("world.name");
            cfg.maxChannels = Integer.parseInt(prop.getProperty("world.maxChannels"));
            cfg.eventMessage = prop.getProperty("world.eventMessage");
            cfg.mobExpMultiplier = Integer.parseInt(prop.getProperty("world.mobExpMultiplier"));
            cfg.nxExpMultiplier = Integer.parseInt(prop.getProperty("world.nxExpMultiplier"));

            return cfg;
        } catch (IOException ex) {
            ex.printStackTrace();
        }

        return null;
    }

    public World toWorld() {
        var world = new World(worldId, name, maxChannels, eventMessage);
        world.setConfig(this);
        return world;
    }

    public int getMobExpMultiplier() {
        return mobExpMultiplier;
    }

    public int getNxExpMultiplier() {
        return nxExpMultiplier;
    }
}
