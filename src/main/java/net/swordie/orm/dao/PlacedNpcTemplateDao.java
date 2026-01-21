package net.swordie.orm.dao;

import net.swordie.ms.connection.db.DatabaseManager;
import net.swordie.ms.life.npc.PlacedNpcTemplate;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

public class PlacedNpcTemplateDao implements SworDao<PlacedNpcTemplate> {

    private static final Logger log = LogManager.getLogger();

    public List<PlacedNpcTemplate> getByMapId(int mapId) {
        var objs = DatabaseManager.executeSelect(this, 
                "SELECT * FROM npc WHERE mapid = ?", 
                "npc", 
                mapId);
        
        List<PlacedNpcTemplate> npcs = new ArrayList<>();
        for (var obj : objs) {
            if (obj != null) {
                npcs.add((PlacedNpcTemplate) obj);
            }
        }
        
        log.debug("Loaded {} placed NPC templates for map {}", npcs.size(), mapId);
        return npcs;
    }

    public List<PlacedNpcTemplate> getAll() {
        var objs = DatabaseManager.executeSelect(this, 
                "SELECT * FROM npc", 
                "npc");
        
        List<PlacedNpcTemplate> npcs = new ArrayList<>();
        for (var obj : objs) {
            if (obj != null) {
                npcs.add((PlacedNpcTemplate) obj);
            }
        }
        
        log.debug("Loaded {} total placed NPC templates", npcs.size());
        return npcs;
    }

    public void delete(PlacedNpcTemplate template) {
        if (template == null || template.getId() == 0) {
            log.debug("Trying to delete object {} that is null or has id 0", template);
            return;
        }
        DatabaseManager.executeQuery("DELETE FROM npc WHERE id = ?", template.getId());
        log.debug("Deleted placed NPC template with id {}", template.getId());
    }


    public void deleteByMapId(int mapId) {
        DatabaseManager.executeQuery("DELETE FROM npc WHERE mapid = ?", mapId);
        log.debug("Deleted all placed NPC templates for map {}", mapId);
    }

    public void saveOrUpdate(PlacedNpcTemplate template) {
        if (template == null) {
            return;
        }

        boolean isInsert = template.getId() == 0;
        String query;
        
        if (isInsert) {
            query = "INSERT INTO npc(" +
                    "npcid, " +
                    "mapid, " +
                    "x, " +
                    "y, " +
                    "cy, " +
                    "rx0, " +
                    "rx1, " +
                    "fh" +
                    ") VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
            
            long id = DatabaseManager.executeQuery(query,
                    template.getNpcid(),
                    template.getMapid(),
                    template.getX(),
                    template.getY(),
                    template.getCy(),
                    template.getRx0(),
                    template.getRx1(),
                    template.getFh());
            
            template.setId((int) id);
            log.debug("Inserted new placed NPC template with id {}", id);
        } else {
            query = "UPDATE npc SET " +
                    "npcid = ?, " +
                    "mapid = ?, " +
                    "x = ?, " +
                    "y = ?, " +
                    "cy = ?, " +
                    "rx0 = ?, " +
                    "rx1 = ?, " +
                    "fh = ? " +
                    "WHERE id = ?";
            
            DatabaseManager.executeQuery(query,
                    template.getNpcid(),
                    template.getMapid(),
                    template.getX(),
                    template.getY(),
                    template.getCy(),
                    template.getRx0(),
                    template.getRx1(),
                    template.getFh(),
                    template.getId());
            
            log.debug("Updated placed NPC template with id {}", template.getId());
        }
    }

    @Override
    public PlacedNpcTemplate fromResultSet(ResultSet resultSet, String alias) {
        PlacedNpcTemplate template = null;

        try {
            template = new PlacedNpcTemplate();
            template.setId(resultSet.getInt(alias + ".id"));
            template.setNpcid(resultSet.getInt(alias + ".npcid"));
            template.setMapid(resultSet.getInt(alias + ".mapid"));
            template.setX(resultSet.getInt(alias + ".x"));
            template.setY(resultSet.getInt(alias + ".y"));
            template.setCy(resultSet.getInt(alias + ".cy"));
            template.setRx0(resultSet.getInt(alias + ".rx0"));
            template.setRx1(resultSet.getInt(alias + ".rx1"));
            template.setFh(resultSet.getInt(alias + ".fh"));
        } catch (SQLException e) {
            log.error("Error creating PlacedNpcTemplate from ResultSet", e);
        }

        return template;
    }
}
