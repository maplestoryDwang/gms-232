package net.swordie.ms.client.partyquests.towerofoz;

import net.swordie.ms.Server;
import net.swordie.ms.client.character.Char;
import net.swordie.ms.client.party.Party;
import net.swordie.ms.client.rankings.RankingModule;
import net.swordie.ms.client.rankings.RankingResult;
import net.swordie.ms.client.rankings.RankingType;
import net.swordie.ms.connection.packet.*;
import net.swordie.ms.connection.packet.field.FieldPacket;
import net.swordie.ms.connection.packet.model.MessagePacket;
import net.swordie.ms.constants.OzConstants;
import net.swordie.ms.constants.QuestConstants;
import net.swordie.ms.enums.BaseStat;
import net.swordie.ms.enums.WeatherEffNoticeType;
import net.swordie.ms.enums.WorldId;
import net.swordie.ms.handlers.executors.EventManager;
import net.swordie.ms.util.Util;
import net.swordie.ms.util.container.Tuple;
import net.swordie.ms.world.field.fieldeffect.FieldEffect;
import net.swordie.ms.world.field.instance.Instance;
import net.swordie.orm.dao.CharDao;
import net.swordie.orm.dao.SworDaoFactory;

import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.TimeUnit;
import java.util.stream.Collectors;

/**
 * Created on 04/07/2021.
 *
 * @author Asura
 */
public class OzTowerModule {

    private static final CharDao chrDao = (CharDao) SworDaoFactory.getByClass(Char.class);

    // Helper Method
    public static int getFloorByFieldId(int fieldId) {
        return (fieldId % 100_000) / 1000;
    }

    public static void clearStage(Instance instance, Char chr) {
        clearStage(instance, chr, true);
    }

    public static void clearStage(Instance instance, Char chr, boolean clearEffect) {
        var fieldId = chr.getFieldID();
        var curFloor = getFloorByFieldId(fieldId);

        if (!hasClearedThisFloor(instance, fieldId)) {
            instance.addProperty(OzConstants.UNLOCKED_FLOOR, curFloor + 1); // Unlocked next stage
            clearKillAndDamageInfo(instance);
            if (clearEffect) {
                instance.broadcast(FieldPacket.fieldEffect(FieldEffect.getFieldEffectFromWz("monsterPark/clearF", 0))); // broadcast 'clear' effect
            }
        }
    }

    public static void clearKillAndDamageInfo(Instance instance) {
        instance.addProperty(OzConstants.DAMAGE_DEALT, 0L); // reset dmg dealt
        instance.addProperty(OzConstants.KILL_COUNT, 0); // reset kill count
    }

    public static boolean hasClearedThisFloor(Instance instance, int fieldId) {
        var unlockedFloor = (int) instance.getProperty(OzConstants.UNLOCKED_FLOOR);
        var curFloor = getFloorByFieldId(fieldId);
        return unlockedFloor > curFloor;
    }

    public static void saveOzInfoOntoQR(Instance instance, int chrId) {
        var chr = Server.getInstance().getWorldById(WorldId.Bera.getVal()).getCharByID(chrId); // Grab char by Id from Online characters
        var isOnline = chr != null;
        if (!isOnline) {
            chr = chrDao.getById(chrId); // if char is offline. extract from db and save once quest values have been set
        }

        if (chr == null) {
            return;
        }

        var qOzClears = chr.getQuestManager().getOrCreateQuestById(QuestConstants.TOWER_OF_OZ_DAILY_CLEARS);
        var qOzRewards = chr.getQuestManager().getOrCreateQuestById(QuestConstants.TOWER_OF_OZ_REWARD);

        var floorReached = (int) instance.getProperty(OzConstants.CURRENT_FLOOR);
        var duration = (int) (instance.getTotalInstanceDuration() / 1000);
        var ozPoints = OzConstants.getOzPointsByFloor(floorReached, chr.getTotalStat(BaseStat.ozBoostR));
        var exp = OzConstants.getExpByFloor(floorReached);
        var rewardItemId = OzConstants.getRewardItemByFloor(floorReached);
        var rewardItemQuantity = 1;

        qOzClears.setProperty("tf", qOzClears.getIntProperty("tf") + floorReached);

        qOzRewards.setProperty("f", floorReached);
        qOzRewards.setProperty("t", duration);
        qOzRewards.setProperty("points", ozPoints);
        qOzRewards.setProperty("exp", exp);
        qOzRewards.setProperty("reward", rewardItemId);
        qOzRewards.setProperty("reward_q", rewardItemQuantity);

        if (!isOnline) {
            chrDao.saveOrUpdate(chr);
        }
    }

    public static void saveOzRanking(Instance instance) {
        var names = instance.getChars().stream().map(Char::getName).collect(Collectors.toList());
        var floorReached = (int) instance.getProperty(OzConstants.CURRENT_FLOOR);
        var duration = (int) (instance.getTotalInstanceDuration() / 1000);
        var display = new ArrayList<String>();
        display.add("Floor: " + floorReached);
        display.addAll(names);
        RankingModule.add(new RankingResult(RankingType.Oz, floorReached, duration, display));
    }

    // Give Oz Rewards and show UI if the Quest properties are filled (AKA someone finished Oz and has yet to collect their rewards)
    public static void giveOzRewards(Char chr) {
        var qOzRewards = chr.getQuestManager().getOrCreateQuestById(QuestConstants.TOWER_OF_OZ_REWARD);

        // is quest is empty. Nothing to reward -> do not show UI
        if (!qOzRewards.hasProperty("f")) {
            return;
        }

        // Get Info from QR
        var floorReached = qOzRewards.getIntProperty("f");
        var duration = qOzRewards.getIntProperty("t");
        var ozPoints = qOzRewards.getIntProperty("points");
        var exp = qOzRewards.getIntProperty("exp");
        var rewardItemId = qOzRewards.getIntProperty("reward");
        var rewardItemQuantity = qOzRewards.getIntProperty("reward_q");

        if (!chr.canHold(rewardItemId, rewardItemQuantity)) {
            chr.chatMessage("Your Oz rewards are waiting for you. Make some room in your inventory and reenter the map.");
            return;
        }

        // Add Reward Item
        chr.addItemToInventory(rewardItemId, rewardItemQuantity);

        // Add Oz Points
        var qOzPoints = chr.getQuestManager().getOrCreateQuestById(QuestConstants.OZ_POINTS);
        qOzPoints.setProperty("point", qOzPoints.getIntProperty("point") + ozPoints);
        chr.write(WvsContext.message(MessagePacket.questRecordExMessage(qOzPoints)));

        // clear properties -> rewards have been given.
        qOzRewards.getProperties().clear();
        qOzRewards.setQrValue("");

        chr.write(WvsContext.towerResultUIOpen(floorReached, duration, ozPoints, exp, rewardItemId, rewardItemQuantity));
    }

    public static int getTimeByInstance(Char partyLeader, Party party) {
        return (int) party.getPartyMembersInField(partyLeader).stream().mapToInt(OzTowerModule::getTimeByChr).average().orElse(10 * 60);
    }

    public static int getTimeByChr(Char chr) {
        var time = OzConstants.START_TIME;

        var q = chr.getQuestManager().getOrCreateQuestById(QuestConstants.TOWER_OF_OZ_PILL_SLOT);
        q.convertQRValueToProperties();
        var properties = q.getProperties();
        for (var entry : properties.entrySet()) {
            var key = entry.getKey();

            if (!key.startsWith("slot")) {
                continue;
            }

            var value = Integer.parseInt(entry.getValue());

            if (value > 0) {
                var ozPill = OzPillType.getByVal(value);
                if (ozPill == null) {
                    continue;
                }

                time += ozPill.getTimeExtension();
            }
        }

        return time;
    }

    public static void clearPillsForInstance(Instance instance) {
        instance.getChars().forEach(OzTowerModule::clearPillsForChr);
    }

    public static void clearPillsForChr(Char chr) {
        var q = chr.getQuestManager().getOrCreateQuestById(QuestConstants.TOWER_OF_OZ_PILL_SLOT);
        q.convertQRValueToProperties();
        var properties = q.getProperties();
        for (var entry : properties.entrySet()) {
            var key = entry.getKey();
            var value = entry.getValue();

            if (Integer.parseInt(value) >= 0) {
                q.setProperty(key, 0);
            }
        }
        chr.write(WvsContext.message(MessagePacket.questRecordExMessage(q)));
    }

    /**
     * Use pill slot and return if success.
     *
     * @param chr
     * @param itemId
     * @return
     */
    public static boolean usePill(Char chr, int itemId) {
        if (chr.getInstance() != null || chr.getFieldID() != OzConstants.OZ_LOBBY) {
            return false;
        }

        var freePillSlots = getFreePillSlots(chr);
        if (freePillSlots <= 0) {
            return false;
        }

        var ozPill = OzConstants.PILLS.getOrDefault(itemId, null);
        if (ozPill == null) {
            return false;
        }

        var key = getFirstFreePillSlot(chr);
        if (key.equals("")) {
            return false;
        }

        var q = chr.getQuestManager().getOrCreateQuestById(QuestConstants.TOWER_OF_OZ_PILL_SLOT);

        q.setProperty(key, ozPill.getVal());
        chr.write(WvsContext.message(MessagePacket.questRecordExMessage(q)));

        // Update Timer
        updateOzTimer(chr, true);
        return true;
    }

    public static void updateOzTimer(Char chr, boolean pause) {
        var ozTimerSec = getTimeByChr(chr);
        chr.write(CUIHandler.towerOfOzUpdate(pause, ozTimerSec * 1000, ozTimerSec * 1000));
    }

    /**
     * Returns the amount of unlocked pill slots for the character.
     *
     * @param chr
     * @return
     */
    public static int getUnlockedPillSlots(Char chr) {
        var q = chr.getQuestManager().getOrCreateQuestById(QuestConstants.TOWER_OF_OZ_PILL_SLOT);
        q.convertQRValueToProperties();
        var properties = q.getProperties();
        return (int) properties.entrySet().stream().filter(entry -> entry.getKey().startsWith("slot") && !entry.getValue().equals("-1")).count();
    }

    public static int getFreePillSlots(Char chr) {
        var q = chr.getQuestManager().getOrCreateQuestById(QuestConstants.TOWER_OF_OZ_PILL_SLOT);
        q.convertQRValueToProperties();
        var properties = q.getProperties();
        return (int) properties.entrySet().stream().filter(entry -> entry.getKey().startsWith("slot") && entry.getValue().equals("0")).count();
    }

    private static String getFirstFreePillSlot(Char chr) {
        var q = chr.getQuestManager().getOrCreateQuestById(QuestConstants.TOWER_OF_OZ_PILL_SLOT);
        for (var i = 1; i <= OzConstants.MAX_PILL_SLOTS; i++) {
            var key = "slot" + i;

            if (q.hasProperty(key)) {
                var val = q.getIntProperty(key);
                if (val == 0) {
                    return key;
                }
            }
        }
        return "";
    }

    public static int getNextUnlockPillSlot(Char chr) {
        var q = chr.getQuestManager().getOrCreateQuestById(QuestConstants.TOWER_OF_OZ_PILL_SLOT);
        for (var i = 1; i <= OzConstants.MAX_PILL_SLOTS; i++) {
            var key = "slot" + i;

            if (!q.hasProperty(key)) {
                return i;
            }
            var val = q.getIntProperty(key);

            if (val == -1) {
                return i;
            }
        }
        return -1;
    }

    public static void unlockPillSlot(Char chr, int slotNumber) {
        var q = chr.getQuestManager().getOrCreateQuestById(QuestConstants.TOWER_OF_OZ_PILL_SLOT);
        q.setProperty("slot"+slotNumber, 0);
        chr.write(WvsContext.message(MessagePacket.questRecordExMessage(q)));
    }

    public static void increaseOzPoints(Char chr, int inc) {
        deductOzPoints(chr, -inc);
    }

    public static void deductOzPoints(Char chr, int deductable) {
        var q = chr.getQuestManager().getOrCreateQuestById(QuestConstants.OZ_POINTS);
        var curOzPoints = q.getIntProperty("point");
        q.setProperty("point", curOzPoints - deductable);
        chr.write(WvsContext.message(MessagePacket.questRecordExMessage(q)));
    }

    public static int getOzPoints(Char chr) {
        var q = chr.getQuestManager().getOrCreateQuestById(QuestConstants.OZ_POINTS);
        return q.getIntProperty("point");
    }

    public static int getCompletedFloors(Char chr) {
        var qOzClears = chr.getQuestManager().getOrCreateQuestById(QuestConstants.TOWER_OF_OZ_DAILY_CLEARS);
        return Math.min(200, qOzClears.getIntProperty("tf"));
    }

    // F2
    public static void showSealBreakerCard(Instance instance, String colour, String displayColour, int number) {
        instance.broadcast(UserPacket.effect(Effect.avatarOriented("Effect/OnUserEff.img/aquarisTower/cardChange/" + displayColour)));
        instance.broadcast(UserPacket.effect(Effect.avatarOrientedRepeat("Effect/OnUserEff.img/aquarisTower/card/" + colour + "/" + number, 0, 1)));

        var msg = "Card Obtained: ";
        switch (displayColour) {
            case "v":
                msg += "Violet";
                break;
            case "r":
                msg += "Red " + number;
                break;
            case "g":
                msg += "Green " + number;
                break;
            case "b":
                msg += "Blue " + number;
                break;
            case "y":
                msg += "Yellow " + number;
                break;
        }

        instance.chatMessage(msg);
    }

    public static void hideSealBreakerCard(Instance instance) {
        instance.broadcast(UserPacket.effect(Effect.avatarOriented("Effect/OnUserEff.img/aquarisTower/success")));
        instance.broadcast(UserPacket.effect(Effect.avatarOrientedRepeat("", 0, 1)));
    }

    public synchronized static void randomiseSeals(Char chr) {
        var instance = chr.getInstance();
        if (instance == null || instance.hasProperty("F6_Inited")) {
            return;
        }
        instance.addProperty("F6_Inited", true);

        var reactors = chr.getField().getReactors();
        for (var reactor : reactors) {
            if (reactor.getTemplateId() >= 9260004 && reactor.getTemplateId() <= 9260007) {
                reactor.setState((byte) Util.getRandomInclUpperBound(0, 6));
                instance.broadcast(ReactorPool.reactorChangeState(reactor, (short) 0, (byte) 0));
            }
        }

    }

    // F33
    public synchronized static void randomisePointers(Char chr) {
        var instance = chr.getInstance();
        if (instance == null || instance.hasProperty("F33_Inited")) {
            return;
        }
        instance.addProperty("F33_Inited", true);

        var reactors = chr.getField().getReactors();
        for (var reactor : reactors) {
            if (reactor.getTemplateId() == OzConstants.DIRECTION_SIGN) {
                // 0 = Left
                // 1 = Up
                // 2 = Right
                // 3 = Down
                reactor.setState((byte) Util.getRandom(0, 4));
                instance.broadcast(ReactorPool.reactorChangeState(reactor, (short) 0, (byte) 0));
            }
        }
    }

    // F36
    public static void displayF36Pattern(Instance instance, String pattern) {
        List<Tuple<String, String>> mobs = new ArrayList<>();
        for (var c : pattern.toCharArray()) {
            switch (c) {
                case '1':
                    mobs.add(new Tuple<>("Mushroom", "Map/Effect2.img/aquaris/36F_1"));
                    break;
                case '2':
                    mobs.add(new Tuple<>("Snail", "Map/Effect2.img/aquaris/36F_2"));
                    break;
                case '3':
                    mobs.add(new Tuple<>("Pig", "Map/Effect2.img/aquaris/36F_3"));
                    break;
                case '4':
                    mobs.add(new Tuple<>("Slime", "Map/Effect2.img/aquaris/36F_4"));
                    break;
            }
        }

        var delay = 0; // ms
        var show_duration = 1000;
        for (var t : mobs) {
            var mob = t.getLeft();
            var pic = t.getRight();
            EventManager.addEvent(() -> {
                instance.broadcast(WvsContext.weatherEffectNotice(WeatherEffNoticeType.Oz_Secreta, mob, show_duration));
                instance.broadcast(FieldPacket.fieldEffect(FieldEffect.getFieldEffectFromWz(pic, 0)));
            }, delay, TimeUnit.MILLISECONDS);

            delay += show_duration + 500;
        }
    }

    // F38
    public static int selectRandomF38Mob(Instance instance) {
        var mobList = new ArrayList<Tuple<Integer, String>>() {{
            add(new Tuple<>(OzConstants.PEACH_MONKEY, "Map/Effect2.img/aquaris/38F_1"));
            add(new Tuple<>(OzConstants.GRIZZLY, "Map/Effect2.img/aquaris/38F_2"));
            add(new Tuple<>(OzConstants.PANDA, "Map/Effect2.img/aquaris/38F_3"));
        }};

        var randMob = Util.getRandomFromCollection(mobList);

        instance.broadcast(FieldPacket.fieldEffect(FieldEffect.getFieldEffectFromWz(randMob.getRight(), 0)));

        return randMob.getLeft();
    }
}
