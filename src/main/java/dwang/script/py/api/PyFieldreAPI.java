package dwang.script.py.api;

import dwang.script.DwangScriptBaseApi;
import net.swordie.ms.client.Client;
import net.swordie.ms.client.character.Char;
import net.swordie.ms.client.party.Party;
import net.swordie.ms.connection.packet.Effect;
import net.swordie.ms.connection.packet.UserPacket;
import net.swordie.ms.connection.packet.WvsContext;
import net.swordie.ms.connection.packet.field.FieldPacket;
import net.swordie.ms.connection.packet.field.LucidFieldPacket;
import net.swordie.ms.enums.WeatherEffNoticeType;
import net.swordie.ms.life.drop.Drop;
import net.swordie.ms.life.drop.DropInfo;
import net.swordie.ms.life.mob.Mob;
import net.swordie.ms.loaders.ItemData;
import net.swordie.ms.scripts.FieldTransferInfo;
import net.swordie.ms.util.Position;
import net.swordie.ms.util.Rect;
import net.swordie.ms.util.Util;
import net.swordie.ms.util.container.Tuple;
import net.swordie.ms.world.field.Field;
import net.swordie.ms.world.field.Portal;
import net.swordie.ms.world.field.bosses.gollux.FallingCatcher;
import net.swordie.ms.world.field.fieldeffect.FieldEffect;
import net.swordie.ms.world.field.fieldeffect.GreyFieldType;
import net.swordie.ms.world.field.instance.Instance;
import org.python.core.PyTuple;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

/**
 * @author  dwang
 * @date 2026/2/27
 * @description
 */
public interface PyFieldreAPI extends PyBossAPI {
    default void warpField(int fieldId, int portalId) {
        for (Char chrz : new HashSet<>(getField().getChars())) {
            chrz.warp(fieldId, portalId);
        }
    }

    default void warpField(int fieldId) {
        for (Char chrz : new HashSet<>(getField().getChars())) {
            chrz.warp(fieldId, 0);
        }
    }

    
    default void warp(int fieldId) {
        warp(fieldId, 0);
    }

    default void warp(int fieldId, boolean executeAfterScript) {
        warp(fieldId, 0, executeAfterScript, false);
    }

    
    default void warp(int fieldId, int portalId) {
        warp(fieldId, portalId, true, false);
    }

    default void warp(int fieldId, int portalId, boolean instanceField) {
        warp(fieldId, portalId, true, instanceField);
    }

    default void warp(int fieldId, int portalId, boolean executeAfterScript, boolean instanceField) {
        if (executeAfterScript) {
            FieldTransferInfo fti = getInitData(). getFieldTransferInfo();
            fti.setFieldId(fieldId);
            fti.setPortal(portalId);
            fti.setIsInstanceField(instanceField);
        } else {
            getChr().warp(fieldId, portalId);
        }
    }

    default void changeChannelAndWarp(int channel, int fieldID, boolean executeAfterScript, boolean instanceField) {
        if (executeAfterScript) {
            FieldTransferInfo fti = getInitData(). getFieldTransferInfo();
            fti.setChannel(channel);
            fti.setFieldId(fieldID);
            fti.setIsInstanceField(instanceField);
        } else {
            Client c = getChr().getClient();
            c.setOldChannel(c.getChannel());
            getChr().changeChannelAndWarp((byte) channel, fieldID);
        }
    }

    default void changeChannelAndWarp(int channel, int fieldID) {
        changeChannelAndWarp(channel, fieldID, true, false);
    }

    
    default int getFieldID() {
        return getField().getId();
    }

    default void warpInstanceOut() {
        warpInstance(-1, false, 0, false);
    }

    default void warpInstanceIn(int id, int portal) {
        warpInstance(id, true, portal, false);
    }

    default void warpInstanceIn(int id, int portalId, boolean partyAllowed) {
        warpInstance(id, true, portalId, partyAllowed);
    }

    default void warpInstanceOut(int id, int portal) {
        warpInstance(id, false, portal, false);
    }

    
    default void warpInstanceIn(int id) {
        warpInstance(id, true, 0, false);
    }

    
    default void warpInstanceOut(int id) {
        warpInstance(id, false, 0, false);
    }

    private void warpInstance(int fieldId, boolean in, int portalId, boolean partyAllowed) {
        getChr().getBossInfo().reset();

        Instance instance;
        if (in) {
            // warp party in if there is a party and party is allowed, solo instance otherwise
            Party party = getChr().getParty();
            if (party == null || !partyAllowed) {
                instance = new Instance(getChr());
            } else {
                instance = new Instance(party);
            }
            // setup the instance & warp
            instance.setup(fieldId, portalId);
        } else {
            instance = getChr().getInstance();
            stopEvents();
            if (instance == null) {
                // no info, just warp them
                getChr().setDeathCount(-1);
                getChr().warp(fieldId, portalId);
            } else {

                // remove chr from eligible instance members
                int forcedReturn;
                int forcedReturnPortal;
                if (fieldId >= 0) {
                    forcedReturn = fieldId;
                    forcedReturnPortal = portalId;
                } else {
                    forcedReturn = instance.getForcedReturn();
                    forcedReturnPortal = instance.getForcedReturnPortalId();
                }

                instance.removeChar(getChr(), forcedReturn, forcedReturnPortal, true, true);
            }
        }
    }

    default void setInstanceTime(int seconds) {
        setInstanceTime(seconds, 0);
    }

    default void setInstanceTime(int seconds, int forcedReturnFieldId) {
        Instance instance = getChr().getInstance();
        if (instance != null) {
            if (forcedReturnFieldId != 0) {
                instance.setForcedReturn(forcedReturnFieldId);
            }
            if (instance.getRemainingTime() / 1000 < System.currentTimeMillis()) {
                // don't override old timeout value
                instance.setTimeout(seconds);
            }
        }
    }

    
    default int getReturnField() {
        // Do this to prevent infinite returnField Loop
        int returnField = getInitData(). getReturnField();
        if (getField().getId() == returnField || returnField < 100000000) {
            return 100000000;
        }
        return returnField;
    }

    
    default void setReturnField(int returnField) {
        getInitData(). setReturnField(returnField);
    }

    
    default void setReturnField() {
        setReturnField(getFieldID());
    }

    
    default boolean hasMobsInField() {
        return getAmountOfMobsInField() > 0;
    }

    default boolean hasMobsInField(int fieldId) {
        return getAmountOfMobsInField(fieldId) > 0;
    }

    default boolean hasMobsInField(int fieldId, int templateId) {
        return getAmountOfMobsInField(fieldId, templateId) > 0;
    }

    
    default int getAmountOfMobsInField() {
        return getField().getMobs().size();
    }

    default int getAmountOfMobsInField(int fieldId) {
        var field = getChr().getOrCreateFieldByCurrentInstanceType(fieldId);
        return field.getMobs().size();
    }

    default int getAmountOfMobsInField(int fieldId, int templateId) {
        var field = getChr().getOrCreateFieldByCurrentInstanceType(fieldId);
        return (int) field.getMobs().stream()
                .filter(m -> m.getTemplateId() == templateId)
                .count();
    }

    default void killMobs() {
        List<Mob> mobs = new ArrayList<>(getField().getMobs());
        for (Mob mob : mobs) {
            mob.die(false);
        }
    }

    default void killMobs(int templateId) {
        List<Mob> mobs = new ArrayList<>(getField().getMobs());
        for (Mob mob : mobs) {
            if (mob.getTemplateId() == templateId) {
                mob.die(false);
            }
        }
    }

    default void showWeatherNoticeToField(String text, WeatherEffNoticeType type) {
        showWeatherNoticeToField(text, type, 7000); // 7 seconds
    }

    default void showWeatherNoticeToField(String text, WeatherEffNoticeType type, int duration) {
        Field field = getField();
        field.broadcastPacket(WvsContext.weatherEffectNotice(type, text, duration));
    }

    default void showEffectToField(String dir) {
        showEffectToField(dir, 0);
    }

    default void showEffectToField(String dir, int delay) {
        Field field = getField();
        field.broadcastPacket(UserPacket.effect(Effect.effectFromWZ(dir, false, delay, 4, 0)));
    }

    default void showFieldEffect(String dir) {
        showFieldEffect(dir, 0);
    }

    
    default void showFieldEffect(String dir, int delay) {
        getField().broadcastPacket(FieldPacket.fieldEffect(FieldEffect.getFieldEffectFromWz(dir, delay)));
    }

    
    default void showObjectFieldEffect(String objectEffectName) {
        getField().broadcastPacket(FieldPacket.fieldEffect(FieldEffect.getFieldEffectFromObject(objectEffectName)));
    }

    
    default void setPortalEnabled(String portalName, boolean enabled) {
        Portal portal = getField().getInfo().getPortalByName(portalName);
        if (portal != null) {
            portal.setEnabled(enabled);
        }
    }

    default void showFieldEffectToField(String dir) {
        showFieldEffect(dir, 0);
    }

    default void showFieldEffectToField(String dir, int delay) {
        Field field = getField();
        field.broadcastPacket(FieldPacket.fieldEffect(FieldEffect.getFieldEffectFromWz(dir, delay)));
    }

    default void showOffFieldEffect(String dir) {
        getChr().write(FieldPacket.fieldEffect(FieldEffect.getOffFieldEffectFromWz(dir, 0)));
    }

    default void changeBGM(String dir, int startTime, int idk) {
        getChr().write(FieldPacket.fieldEffect(FieldEffect.changeBGM(dir, startTime, idk)));
    }

    default void bgmVolumeOnly(boolean volumeOnly) {
        getChr().write(FieldPacket.fieldEffect(FieldEffect.bgmVolumeOnly(volumeOnly)));
    }

    default void bgmVolume(int volume, int fadingDuration) {
        getChr().write(FieldPacket.fieldEffect(FieldEffect.bgmVolume(volume, fadingDuration)));
    }

    default void showFieldBackgroundEffect(String dir) {
        showFieldBackgroundEffect(dir, 0);
    }

    default void showFieldBackgroundEffect(String dir, int delay) {
        getChr().write(FieldPacket.fieldEffect(FieldEffect.getFieldBackgroundEffectFromWz(dir, delay)));
    }

    default void showFadeTransition(int duration, int fadeInTime, int fadeOutTime) {
        getChr().write(FieldPacket.fieldEffect(FieldEffect.takeSnapShotOfClient2(fadeInTime, duration, fadeOutTime, true)));
    }

    default void showFade(int duration) {
        getChr().write(FieldPacket.fieldEffect(FieldEffect.takeSnapShotOfClient(duration)));
    }

    default void setFieldColour(GreyFieldType colorFieldType, short red, short green, short blue, int time) {
        getChr().write(FieldPacket.fieldEffect(FieldEffect.setFieldColor(colorFieldType, red, green, blue, time)));
    }

    default void setFieldGrey(GreyFieldType colorFieldType, boolean show) {
        getChr().write(FieldPacket.fieldEffect(FieldEffect.setFieldGrey(colorFieldType, show)));
    }

    default void removeOverlapScreen(int duration) {
        getChr().write(FieldPacket.fieldEffect(FieldEffect.removeOverlapScreen(duration)));
    }

    default void onLayer(int duration, String key, int x, int y, int z, String origin, int org, boolean postRender, int idk, boolean repeat) {
        getChr().write(FieldPacket.fieldEffect(FieldEffect.onOffLayer(0, duration, key, x, y, z, origin, org, postRender, idk, repeat)));
    }

    default void moveLayer(int duration, String key, int x, int y) {
        getChr().write(FieldPacket.fieldEffect(FieldEffect.onOffLayer(1, duration, key, x, y, 0, null, 0, false, 0, false)));
    }

    default void offLayer(int duration, String key, boolean repeat) {
        getChr().write(FieldPacket.fieldEffect(FieldEffect.onOffLayer(2, duration, key, 0, 0, 0, null, 0, false, 0, repeat)));
    }

    default void spineScreen(boolean binary, boolean loop, boolean postRender, int endDelay, String path,
                            String animationName, String keyName) {
        getChr().write(FieldPacket.fieldEffect(FieldEffect.spineScreen(binary, loop, postRender, endDelay, path, animationName, keyName)));
    }

    default void offSpineScreen(String keyName, int type, String aniName, int alphaTime) {
        getChr().write(FieldPacket.fieldEffect(FieldEffect.offSpineScreen(keyName, type, aniName, alphaTime)));
    }

    
    default void dropItem(int itemId, int x, int y) {
        dropItem(itemId, 1, x, y);
    }

    default void dropItem(int itemId, int quantity, int x, int y) {
        Field field = getField();
        Drop drop = new Drop(-1);
        drop.setItem(ItemData.getItemDeepCopy(itemId));
        drop.getItem().setQuantity(quantity);
        Position position = new Position(x, y);
        drop.setPosition(position);
        field.drop(drop, position, true);
    }

    
    default void dropItems(Set<Tuple<Integer, Integer>> dropInfos, int x, int y, int ownerId) {
        Set<DropInfo> dropInfoSet = new HashSet<>();
        for (Tuple<Integer, Integer> dropInfo : dropInfos) {
            int itemid = dropInfo.getLeft(); // itemId
            int chance = dropInfo.getRight(); // per 10,000

            DropInfo di = new DropInfo(itemid, chance); // add min/max Quantity if needed
            dropInfoSet.add(di);
        }

        getField().drop(dropInfoSet, new Position(x, y), ownerId);
    }

    default void dropItemsWithQuantity(List<List<Integer>> drops, int x, int y, int ownerId) {
        Set<DropInfo> dropInfoSet = new HashSet<>();
        for (var drop : drops) {
            var itemid = drop.get(0);
            var quantity = drop.get(1);

            DropInfo di = new DropInfo(itemid, 10000);
            di.setMinQuant(quantity);
            di.setMaxQuant(quantity);
            dropInfoSet.add(di);
        }

        getField().drop(dropInfoSet, new Position(x, y), ownerId);
    }

    
    default Set<DropInfo> genDropInfoFromPyTuples(List<PyTuple> tuples) {
        Set<DropInfo> dropInfos = new HashSet<>();
        for (PyTuple tuple : tuples) {
            int itemId = (int) tuple.get(0);
            int chance = (int) tuple.get(1);

            dropInfos.add(new DropInfo(itemId, chance));
        }

        return dropInfos;
    }

    default Set<DropInfo> genDropInfoQuantityFromPyTuples(List<List<Integer>> tuples) {
        Set<DropInfo> dropInfos = new HashSet<>();
        for (var tuple : tuples) {
            int itemId = tuple.get(0);
            int quantity = tuple.get(1);

            dropInfos.add(new DropInfo(itemId, 10000));
        }

        return dropInfos;
    }

    
    default Position newPosition(int x, int y) {
        return new Position(x, y);
    }

    
    default void teleportInField(Position position) {
        getChr().write(FieldPacket.teleport(position, getChr()));
    }

    
    default void teleportInField(int x, int y) {
        teleportInField(new Position(x, y));
    }

    
    default void teleportToPortal(int portalId) {
        Portal portal = getField().getInfo().getPortalByID(portalId);
        if (portal != null) {
            Position position = new Position(portal.getX(), portal.getY());
            getChr().write(FieldPacket.teleport(position, getChr()));
        }
    }

    default Drop getDropInRect(int itemID, Rect rect) {
        Field field = getField();
        if (field == null) {
            field = getField();
        }
        return field.getDropsInRect(rect).stream()
                .filter(drop -> drop.getItem() != null && drop.getItem().getItemId() == itemID)
                .findAny().orElse(null);
    }

    
    default Drop getDropInRect(int itemID, int rectRange) {
        return getDropInRect(itemID, new Rect(
                new Position(
                        getChr().getPosition().getX() - rectRange,
                        getChr().getPosition().getY() - rectRange),
                new Position(
                        getChr().getPosition().getX() + rectRange,
                        getChr().getPosition().getY() + rectRange))
        );

    }

    default void changeFoothold(String footholdName, boolean show) {
        changeFoothold(footholdName, show, 0, 0);
    }

    default void changeFoothold(String footholdName, boolean show, int x, int y) {
        getChr().getField().broadcastPacket(FieldPacket.footholdAppear(footholdName, show, new Position(x, y)));
    }

    default void createFallingCatcher(String templateStr, int hpR, int amount, int chance) {
        Field field = getField();
        List<Position> positions = new ArrayList<>();
        for (int i = 0; i < amount; i++) {
            if (Util.succeedProp(chance)) {
                positions.add(Util.getRandomFromCollection(field.getInfo().getFootholds().values()).getRandomPosition());
            }
        }
        createFallingCatcher(templateStr, hpR, positions);
    }

    default void createFallingCatcher(String templateStr, int hpR, List<Position> positions) {
        FallingCatcher fallingCatcher = new FallingCatcher(templateStr, hpR, positions);
        getField().broadcastPacket(LucidFieldPacket.createFallingCatcher(fallingCatcher));
    }
}
