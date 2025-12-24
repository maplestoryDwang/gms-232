package net.swordie.ms.world;

import net.swordie.ms.ServerConstants;
import net.swordie.ms.client.Account;
import net.swordie.ms.client.Client;
import net.swordie.ms.client.User;
import net.swordie.ms.client.character.Char;
import net.swordie.ms.client.surprisemission.SurpriseMissionModule;
import net.swordie.ms.connection.OutPacket;
import net.swordie.ms.enums.WorldId;
import net.swordie.ms.loaders.FieldData;
import net.swordie.ms.util.ErrorLogger;
import net.swordie.ms.util.Util;
import net.swordie.ms.util.container.Tuple;
import net.swordie.ms.world.field.Field;
import net.swordie.ms.world.field.instance.Instance;
import net.swordie.orm.dao.CharDao;
import net.swordie.orm.dao.SworDaoFactory;
import net.swordie.orm.dao.UserDao;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import java.util.*;
import java.util.concurrent.ConcurrentHashMap;
import java.util.stream.Collectors;

/**
 * Created on 11/2/2017.
 */
public class Channel {

    private static final UserDao userDao = (UserDao) SworDaoFactory.getByClass(User.class);
    private static final CharDao charDao = (CharDao) SworDaoFactory.getByClass(Char.class);
    private static final Logger log = LogManager.getRootLogger();

    //CHANNELITEM struct
    private int port;
    private String name;
    private WorldId worldId;
    private int channelId;
    private boolean adultChannel;
    private Map<Integer, Field> fields;
    private Map<Integer, TransferInfo> transfers;
    private Map<Integer, Char> chars = new ConcurrentHashMap<>();
    private List<Tuple<Integer, Instance>> instances = new ArrayList<>(); // < enterFieldId , Instance >
    public final int MAX_DISPLAY_SIZE = 100;
    public final int MAX_SIZE = 1000;

    private Channel(String name, World world, int channelId, boolean adultChannel) {
        this.name = name;
        this.worldId = world.getWorldId();
        this.channelId = channelId;
        this.adultChannel = adultChannel;
        this.port = ServerConstants.LOGIN_PORT + 100 + channelId;
        this.fields = new HashMap<>();
        this.transfers = new HashMap<>();
    }

    public Channel(World world, int channelId) {
        this(world.getName() + "-" + channelId, world, channelId, false);
    }

    public Channel(WorldId worldId, int channelId) {
        this.name = worldId + "-" + channelId;
        this.worldId = worldId;
        this.channelId = channelId;
        this.adultChannel = false;
        this.port = ServerConstants.LOGIN_PORT + (100 * worldId.getVal()) + channelId;
        this.fields = new HashMap<>();
        this.transfers = new HashMap<>();
    }

    public String getName() {
        return name;
    }

    public int getGaugePx() {
        return (int) Math.max(1, (chars.size() * 64D) / MAX_DISPLAY_SIZE);
    }

    public WorldId getWorldId() {
        return worldId;
    }

    public int getChannelId() {
        return channelId;
    }

    public boolean isAdultChannel() {
        return adultChannel;
    }

    public void setAdultChannel(boolean adultChannel) {
        this.adultChannel = adultChannel;
    }

    public int getPort() {
        return port;
    }

    public Map<Integer, Field> getFields() {
        return fields;
    }

    /**
     * Gets a {@link Field} corresponding to a given ID. If it doesn't exist, creates one.
     *
     * @param id The map ID of the field.
     * @return The (possibly newly created) Field.
     */
    public Field getField(int id) {
        if (getFields().containsKey(id)) {
            return getFields().get(id);
        }
        return createAndReturnNewField(id);
    }

    private Field createAndReturnNewField(int id) {
        Field newField = FieldData.getFieldCopyById(id, true);
        if (newField != null) {
            newField.setChannelInstance(this);
            getFields().put(id, newField);
        }
        return newField;
    }

    public Map<Integer, TransferInfo> getTransfers() {
        if (transfers == null) {
            transfers = new HashMap<>();
        }
        return transfers;
    }

    public void addClientInTransfer(Channel oldChannel, Channel newChannel, int characterId, Client client) {
        getTransfers().put(characterId, new TransferInfo(client, client.getUser(), oldChannel, newChannel));
    }

    public void removeClientFromTransfer(int characterId) {
        getTransfers().remove(characterId);
    }

    public Map<Integer, Char> getChars() {
        return chars;
    }

    public void addChar(Char chr) {
        getChars().put(chr.getId(), chr);
    }

    public void removeChar(Char chr) {
        getChars().remove(chr.getId());
    }

    public Char getCharById(int id) {
        return getChars().get(id);
    }

    public Char getCharByName(String name) {
        return Util.findWithPred(getChars().values(), chr -> chr.getName().equalsIgnoreCase(name));
    }

    public void broadcastPacket(OutPacket outPacket) {
        for (Char chr : getChars().values()) {
            chr.write(outPacket);
        }
    }

    public void broadcastPacketByChr(Char byChr, OutPacket outPacket) {
        for (Char chr : getChars().values()) {

            // Skip over characters that have 'byChr' blacklisted
            if (chr.hasChrBlacklisted(byChr.getId())) {
                continue;
            }
            chr.write(outPacket);
        }
    }

    public void clearCache() {
        Set<Integer> toRemove = new HashSet<>();
        for (Field field : new HashSet<>(getFields().values())) {
            if (field.getChars().size() == 0) {
                toRemove.add(field.getId());
                field.clear();
            }
        }
        getFields().keySet().removeAll(toRemove);
    }

    public void shutdown() {
        for (Char chr : getChars().values()) {
            try {
                if (chr.getUser() != null) {
                    userDao.saveOrUpdate(chr.getUser(), null);
                } else {
                    charDao.saveOrUpdate(chr);
                }
                chr.getClient().close();
            } catch (Exception e) {
                ErrorLogger.logAsClientError(e);
            }
        }
    }

    public void removeField(Field field) {
        getFields().remove(field.getId());
    }

    public void removeCharsOfUser(User user) {
        List<Char> toRemove = new ArrayList<>();
        for (var chr : getChars().values()) {
            if (chr.getUser() == null || chr.getUser().getId() == user.getId()) {
                toRemove.add(chr);
            }
        }
        for (var chr : toRemove) {
            if (chr.getField() != null) {
                chr.getField().removeChar(chr);
            }
            removeChar(chr);
            if (chr.getClient() != null) {
                chr.getClient().close();
            }
        }
    }

    public Account getAccountById(int accountId) {
        for (var chr : getChars().values()) {
            var acc = chr.getAccount();
            if (acc != null && acc.getId() == accountId) {
                return acc;
            }
        }
        return null;
    }

    public void checkForItemExpiry() {
        for (var chr : getChars().values()) {
            chr.checkAndRemoveExpiredItems();
        }
    }

    public void updateBurningFieldLevel() {
        for (var field : getFields().values()) {
            field.updateBurningFieldLevel();
        }
    }

    public void updateFields() {
        new HashSet<>(getFields().values()).forEach(Field::update);
        var uniqueInstances = getChars().values().stream()
                .map(Char::getInstance)
                .filter(Objects::nonNull)
                .collect(Collectors.toSet());
        uniqueInstances.forEach(Instance::update);
    }

    public void generateMobs() {
        new HashSet<>(getFields().values()).forEach(f -> f.generateMobs(false));
        var uniqueInstances = getChars().values().stream()
                .map(Char::getInstance)
                .filter(Objects::nonNull)
                .collect(Collectors.toSet());
        var fields = new HashSet<Field>();
        uniqueInstances.forEach(i -> fields.addAll(i.getFields().values()));
        fields.forEach(f -> f.generateMobs(false));
    }

    public void generateHarvests() {
        new HashSet<>(getFields().values()).forEach(Field::spawnRandomHarvest);
    }

    public void updateChars() {
        getChars().values().forEach(Char::update);
    }

    public void giveSurpriseMissions() {
        getChars().values().forEach(SurpriseMissionModule::tryStartSurpriseMission);
    }

    public User getUserFromTransfer(int userId) {
        for (var transferInfo : new HashSet<>(getTransfers().values())) {
            var client = transferInfo.getClient();
            if (client != null && client.getUser() != null && client.getUser().getId() == userId) {
                return client.getUser();
            }
        }

        return null;
    }

    /**
     * Removes all user's characters currently in transfer
     * @param user the user to remove from transfer
     */
    public void removeUserFromTransfer(User user) {
        for (var acc : user.getAccounts()) {
            for (var chr : acc.getCharacters()) {
                if (chr != null) {
                    removeClientFromTransfer(chr.getId());
                }
            }
        }
    }

    /**
     * Invoked on the start of each new day (server Time)
     */
    public void onNewDay() {
        for (var chr : getChars().values()) {
            chr.onNewDay();
        }
    }

    public List<Tuple<Integer, Instance>> getInstances() {
        return instances;
    }

    public void setInstances(List<Tuple<Integer, Instance>> instances) {
        this.instances = instances;
    }

    public void addInstance(int enterFieldId, Instance instance) {
        getInstances().add(new Tuple<>(enterFieldId, instance));
    }

    public void removeInstance(Instance instance) {
        var tuple = getInstances().stream().filter(t -> t.getRight() == instance).findFirst().orElse(null);
        if (tuple != null) {
            getInstances().remove(tuple);
        }
    }
}
