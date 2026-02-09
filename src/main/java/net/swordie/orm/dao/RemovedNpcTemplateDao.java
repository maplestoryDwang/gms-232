package net.swordie.orm.dao;

import net.swordie.ms.connection.db.DatabaseManager;
import net.swordie.ms.life.npc.RemovedNpcTemplate;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

public class RemovedNpcTemplateDao implements SworDao<RemovedNpcTemplate> {

    private static final Logger log = LogManager.getLogger();

    public List<RemovedNpcTemplate> getByMapId(int mapId) {
        var objs = DatabaseManager.executeSelect(this, 
                "SELECT * FROM removednpcs WHERE mapid = ?", 
                "removednpcs", 
                mapId);
        
        List<RemovedNpcTemplate> npcs = new ArrayList<>();
        for (var obj : objs) {
            if (obj != null) {
                npcs.add((RemovedNpcTemplate) obj);
            }
        }
        
        log.debug("Loaded {} removed NPC templates for map {}", npcs.size(), mapId);
        return npcs;
    }

    public List<RemovedNpcTemplate> getAll() {
        var objs = DatabaseManager.executeSelect(this, 
                "SELECT * FROM removednpcs", 
                "removednpcs");
        
        List<RemovedNpcTemplate> npcs = new ArrayList<>();
        for (var obj : objs) {
            if (obj != null) {
                npcs.add((RemovedNpcTemplate) obj);
            }
        }
        
        log.debug("Loaded {} total removed NPC templates", npcs.size());
        return npcs;
    }

    public void delete(RemovedNpcTemplate template) {
        if (template == null || template.getId() == 0) {
            log.debug("Trying to delete object {} that is null or has id 0", template);
            return;
        }
        DatabaseManager.executeQuery("DELETE FROM removednpcs WHERE id = ?", template.getId());
        log.debug("Deleted removed NPC template with id {}", template.getId());
    }

    public void deleteByMapId(int mapId) {
        DatabaseManager.executeQuery("DELETE FROM removednpcs WHERE mapid = ?", mapId);
        log.debug("Deleted all removed NPC templates for map {}", mapId);
    }

    public void saveOrUpdate(RemovedNpcTemplate template) {
        if (template == null) {
            return;
        }

        boolean isInsert = template.getId() == 0;
        String query;
        
        if (isInsert) {
            query = "INSERT INTO removednpcs(" +
                    "npcid, " +
                    "mapid" +
                    ") VALUES (?, ?)";
            
            long id = DatabaseManager.executeQuery(query,
                    template.getNpcid(),
                    template.getMapid());
            
            template.setId((int) id);
            log.debug("Inserted removed NPC template: {}", template);
        } else {
            query = "UPDATE removednpcs SET " +
                    "npcid = ?, " +
                    "mapid = ? " +
                    "WHERE id = ?";
            
            DatabaseManager.executeQuery(query,
                    template.getNpcid(),
                    template.getMapid(),
                    template.getId());
            
            log.debug("Updated removed NPC template: {}", template);
        }
    }

    @Override
    public RemovedNpcTemplate fromResultSet(ResultSet resultSet, String alias) {
        RemovedNpcTemplate template = new RemovedNpcTemplate();
        try {
            template.setId(resultSet.getInt(alias + ".id"));
            template.setNpcid(resultSet.getInt(alias + ".npcid"));
            template.setMapid(resultSet.getInt(alias + ".mapid"));
        } catch (SQLException e) {
            log.error("Error building RemovedNpcTemplate from ResultSet", e);
        }
        return template;
    }
}
