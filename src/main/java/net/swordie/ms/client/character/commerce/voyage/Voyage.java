package net.swordie.ms.client.character.commerce.voyage;

import net.swordie.ms.client.character.Char;
import net.swordie.ms.client.character.commerce.voyage.voyagefield.VoyageFieldType;
import net.swordie.ms.connection.packet.VoyageFieldPool;
import net.swordie.ms.connection.packet.WvsContext;
import net.swordie.ms.connection.packet.field.FieldPacket;
import net.swordie.ms.connection.packet.model.MessagePacket;
import net.swordie.ms.constants.FieldConstants;
import net.swordie.ms.constants.ItemConstants;
import net.swordie.ms.constants.QuestConstants;
import net.swordie.ms.handlers.executors.EventManager;
import net.swordie.ms.loaders.EtcData;
import net.swordie.ms.loaders.containerclasses.VoyageInfo;
import net.swordie.ms.util.Util;

import java.util.List;
import java.util.concurrent.TimeUnit;
import java.util.stream.Collectors;

/**
 * Created on 23/05/2021.
 *
 * @author Asura
 */
public class Voyage {

    public synchronized static void spawnHorde(Char chr) {
        var instance = chr.getInstance();
        if (instance == null || instance.getProperty("spawnHorde") != null || !FieldConstants.isVoyageField(chr.getFieldID())) {
            return;
        }
        instance.addProperty("spawnHorde", true);

        var voyageId = (int) instance.getProperty("voyage");
        var vi = EtcData.getVoyageInfoById(voyageId);

        // Check if current duration + shortened duration  is more than estimated, -> Completed Voyage
        var totalVoyageDuration = Util.getCurrentTime() - ((int) instance.getProperty("startTime"));
        var shortenedDuration = (int) instance.getProperty("shortenedDuration");
        var estimatedVoyageDuration = ((int) instance.getProperty("duration")) * 1000;
        if (totalVoyageDuration + shortenedDuration >= estimatedVoyageDuration) {
            completeVoyage(chr, voyageId);
            return;
        }


        // Broadcast Tepes warning BlowWeather
        tepesBlowWeather(chr, VoyageConstants.getRandomStartHordeMessage());


        // Grab current time, to be used to see if there's a shortened duration
        instance.addProperty("lastHorde", Util.getCurrentTime());

        // Show Horde Timer
        var hordeTime = Util.getRandomFromCollection(vi.getTimeAdv().keySet()) * 1000;
        startHordeTimer(chr, hordeTime);

        // Create actual timer that will warp out of instance for <HordeTimer seconds>. remove if horde is finished.
        chr.getInstance().setTimeout(hordeTime / 1000); // min

        // Spawn Horde
        spawnHordeMobs(chr, vi, totalVoyageDuration+shortenedDuration, estimatedVoyageDuration);
        instance.getProperties().remove("finishHorde");
        instance.getProperties().remove("spawnHorde");
    }

    public synchronized static void finishHorde(Char chr) {
        var instance = chr.getInstance();
        if (instance == null || instance.getProperty("finishHorde") != null || !FieldConstants.isVoyageField(chr.getFieldID())) {
            return;
        }
        instance.addProperty("finishHorde", true);
        var isStarting = instance.getProperty("lastHorde") == null || (int) instance.getProperty("lastHorde") == -1;

        // Broadcast Tepes victory BlowWeather
        if (isStarting) {
            tepesBlowWeather(chr, VoyageConstants.getRandomStartVoyageMessage());
        } else {
            tepesBlowWeather(chr, VoyageConstants.getRandomDefeatHordeMessage());
        }

        // Remove actual timer that will warp out of instance
        chr.getInstance().stopEvents();

        // Update Shortened Duration
        instance.addProperty("shortenedDuration", calculateShortenedDuration(chr));

        EventManager.addEvent(() -> spawnHorde(chr), VoyageConstants.TIME_BETWEEN_HORDES, TimeUnit.MILLISECONDS);
    }

    public static void incMobsEliminated(Char chr, int amount) {
        var instance = chr.getInstance();
        if (instance == null || !FieldConstants.isVoyageField(chr.getFieldID())) {
            return;
        }

        VoyageFieldInfo info = new VoyageFieldInfo(VoyageFieldType.MobsEliminated);
        info.mobKills = (int) instance.getProperty("kills");
        info.mobKills += amount;
        instance.addProperty("kills", info.mobKills);
        chr.write(VoyageFieldPool.voyageFieldInfo(info));
    }

    public static void spawnHordeMobs(Char chr, VoyageInfo vi, int totalVoyageDuration, int estimatedVoyageDuration) {
        var instance = chr.getInstance();
        if (instance == null || !FieldConstants.isVoyageField(chr.getFieldID())) {
            return;
        }

        var progress = ((double) totalVoyageDuration / estimatedVoyageDuration) * 100;

        var mobList = vi.getMobList();

        // Logic when to spawn Boss
        var canSpawnGrosso = progress >= VoyageConstants.GROSSO_PROGRESS && instance.getProperty("Grosso") == null && mobList.contains(VoyageConstants.GROSSO_POLPO);
        var canSpawnLivyatan = progress >= VoyageConstants.LIVYATAN_PROGESS && instance.getProperty("Livyatan") == null && mobList.contains(VoyageConstants.LIVYATAN);
        if (canSpawnGrosso || canSpawnLivyatan) {
            spawnBoss(chr, vi.getVoyageId(), canSpawnGrosso, canSpawnLivyatan);
            return;
        }

        // Logic when to spawn Blockade
        var rand = Util.succeedProp(30);
        if (rand) {
            spawnBlockade(chr, vi.getVoyageId(), mobList);
        } else {
            spawnHordeWave(chr, vi.getVoyageId());
        }
    }

    private static int calculateShortenedDuration(Char chr) {
        var instance = chr.getInstance();
        if (instance == null || !FieldConstants.isVoyageField(chr.getFieldID())) {
            return 0;
        }

        var prop = instance.getProperty("lastHorde");
        if (prop == null) {
            return 0;
        }
        var lastHorde = (int) prop;
        if (lastHorde == -1) {
            return 0;
        }

        if (instance.getProperty("hordeTime") == null) {
            return 0;
        }
        var curTime = Util.getCurrentTime();
        var hordeTime = (int) instance.getProperty("hordeTime");
        var shortenedDurationAdd = hordeTime - (curTime - lastHorde);
        var shortenedDuration = (int) instance.getProperty("shortenedDuration");

        if (shortenedDurationAdd >= hordeTime || shortenedDurationAdd <= 0) { // If it took longer to finish the horde than the timer allows. don't add to shortened duration
            return shortenedDuration;
        }

        var newShortenedDuration = shortenedDuration + shortenedDurationAdd;
        instance.addProperty("shortenedDuration", newShortenedDuration);

        updateShortenedDuration(chr, newShortenedDuration);

        return newShortenedDuration;
    }

    private static void updateShortenedDuration(Char chr, int shortenedDuration) {
        var info = new VoyageFieldInfo(VoyageFieldType.ShortenedVoyageDuration);
        info.shortenedDuration = shortenedDuration;

        chr.write(VoyageFieldPool.voyageFieldInfo(info));
    }

    private static void startHordeTimer(Char chr, int hordeTime) {
        var instance = chr.getInstance();
        if (instance == null || !FieldConstants.isVoyageField(chr.getFieldID())) {
            return;
        }

        instance.addProperty("hordeTime", hordeTime);
        instance.addProperty("lastHorde", Util.getCurrentTime());

        var info = new VoyageFieldInfo(VoyageFieldType.HordeTimer);
        info.hordeTimerSec = hordeTime;
        info.hideHordeTimer = false;

        chr.write(VoyageFieldPool.voyageFieldInfo(info));
    }

    private static void completeVoyage(Char chr, int voyageId) {
        var instance = chr.getInstance();
        if (instance == null || !FieldConstants.isVoyageField(chr.getFieldID())) {
            return;
        }

        // Set QR values of QuestConstants VOYAGE and VOYAGE_TOTAL
        var amountOfVoyages = updateVoyageQuestInfo(chr, voyageId);

        // Give EXP and Denaros
        chr.getVessel().gainExp(VoyageConstants.getExpReward(voyageId));
        var denaroQuantity = VoyageConstants.getDenaroReward(voyageId, chr.getVessel());
        if (denaroQuantity > 0 && chr.canHold(ItemConstants.COMMERCI_DENARO, denaroQuantity)) {
            chr.addItemToInventory(ItemConstants.COMMERCI_DENARO, denaroQuantity);
        }

        // Voyage Complete
        var info = new VoyageFieldInfo(VoyageFieldType.VoyageCompleted);

        info.voyageId = (int) instance.getProperty("voyage");
        info.shortenedDuration = (int) instance.getProperty("shortenedDuration");
        info.shortenedDuration = Math.min(info.shortenedDuration, EtcData.getVoyageInfoById(info.voyageId).getTimeSec() * 1000);
        info.mobKills = (int) instance.getProperty("kills");
        info.voyageCompletedAmount = amountOfVoyages;

        info.basicIncome = denaroQuantity;
        info.bonusIncome = denaroQuantity;

        chr.write(VoyageFieldPool.voyageFieldInfo(info));
    }

    private static int updateVoyageQuestInfo(Char chr, int voyageId) {
        var qm = chr.getQuestManager();
        var voyagesQuest = qm.getOrCreateQuestById(QuestConstants.VOYAGES); // 0=X;1=Y
        var voyagesTotalQuest = qm.getOrCreateQuestById(QuestConstants.VOYAGES_TOTAL); // Near=X

        var curVoyagesById = voyagesQuest.getIntProperty(String.valueOf(voyageId));
        curVoyagesById++;
        voyagesQuest.setProperty(String.valueOf(voyageId), curVoyagesById);

        var curTotalVoyages = voyagesTotalQuest.getIntProperty("Near");
        curTotalVoyages++;
        voyagesTotalQuest.setProperty("Near", curTotalVoyages);
        chr.write(WvsContext.message(MessagePacket.questRecordExMessage(voyagesTotalQuest)));
        chr.write(WvsContext.message(MessagePacket.questRecordExMessage(voyagesQuest)));

        return curVoyagesById;
    }

    private static void tepesBlowWeather(Char chr, String msg) {
        chr.write(FieldPacket.removeBlowWeather());
        chr.write(FieldPacket.blowWeather(VoyageConstants.TEPES_WEATHER_ITEMID, msg));
    }

    private static void spawnHordeWave(Char chr, int voyageId) {
        if (Util.getRandomBool()) {
            spawnMix(chr, voyageId);
        } else if (Util.getRandomBool()) {
            spawnPirates(chr, voyageId);
        } else {
            spawnSirens(chr, voyageId);
        }
    }

    private static void spawnSirens(Char chr, int voyageId) {
        var spawnPos = VoyageConstants.getRandomSpawnPosition();
        for (int i = 0; i < VoyageConstants.MOBS_SPAWNED_PER_HORDE; i++) {
            chr.getField().spawnMob(VoyageConstants.SIREN, spawnPos.getX(), spawnPos.getY(), false, VoyageConstants.getMobHp(voyageId, VoyageConstants.SIREN));
        }
    }

    private static void spawnPirates(Char chr, int voyageId) {
        var spawnPos = VoyageConstants.getRandomSpawnPosition();
        for (int i = 0; i < VoyageConstants.MOBS_SPAWNED_PER_HORDE; i++) {
            chr.getField().spawnMob(VoyageConstants.CAPTAIN_BLOOD_PIRATE, spawnPos.getX(), spawnPos.getY(), false, VoyageConstants.getMobHp(voyageId, VoyageConstants.CAPTAIN_BLOOD_PIRATE));
        }
    }

    private static void spawnMix(Char chr, int voyageId) { // Mix of Pirates & Sirens
        var spawnPos = VoyageConstants.getRandomSpawnPosition();
        for (int i = 0; i < VoyageConstants.MOBS_SPAWNED_PER_HORDE / 2; i++) {
            chr.getField().spawnMob(VoyageConstants.SIREN, spawnPos.getX(), spawnPos.getY(), false, VoyageConstants.getMobHp(voyageId, VoyageConstants.SIREN));
            chr.getField().spawnMob(VoyageConstants.CAPTAIN_BLOOD_PIRATE, spawnPos.getX(), spawnPos.getY(), false, VoyageConstants.getMobHp(voyageId, VoyageConstants.CAPTAIN_BLOOD_PIRATE));
        }
    }

    private static void spawnBlockade(Char chr, int voyageId, List<Integer> mobList) {
        var spawnPos = VoyageConstants.BLOCKADE_POSITION;
        var blockadeMobList = mobList.stream().filter(id -> id.equals(VoyageConstants.OCEAN_REEF_RUNNER) || id.equals(VoyageConstants.CORAL_REEF_RUNNER)).collect(Collectors.toList());
        if (blockadeMobList.size() > 0) {
            var mobTemplateId = Util.getRandomFromCollection(blockadeMobList);
            chr.getField().spawnMob(mobTemplateId, spawnPos.getX(), spawnPos.getY(), false, VoyageConstants.getMobHp(voyageId, mobTemplateId));
        } else {
            spawnHordeWave(chr, voyageId);
        }
    }

    private static void spawnBoss(Char chr, int voyageId, boolean canSpawnGrosso, boolean canSpawnLivyatan) {
        if (canSpawnGrosso) {
            spawnGrossoPolpo(chr, voyageId);
        } else if (canSpawnLivyatan){
            spawnLivyatan(chr, voyageId);
        } else {
            spawnHordeWave(chr, voyageId);
        }
    }

    private static void spawnGrossoPolpo(Char chr, int voyageId) {
        var spawnPosBoss = VoyageConstants.GROSSO_POLPO_BOSS_POSITION;
        var spawnPosArms = VoyageConstants.GROSSO_POLPO_ARMS_POSITION;

        var mobTemplateId = VoyageConstants.GROSSO_POLPO;
        chr.getField().spawnMob(mobTemplateId, spawnPosBoss.getX(), spawnPosBoss.getY(), false, VoyageConstants.getMobHp(voyageId, mobTemplateId));
        chr.getField().spawnMob(VoyageConstants.GROSSO_POLPO_ARMS, spawnPosArms.getX(), spawnPosArms.getY(), false, 1);
        chr.getInstance().addProperty("Grosso", true);
    }

    private static void spawnLivyatan(Char chr, int voyageId) {
        var spawnPos = VoyageConstants.BLOCKADE_POSITION;

        var mobTemplateId = VoyageConstants.LIVYATAN;
        chr.getField().spawnMob(mobTemplateId, spawnPos.getX(), spawnPos.getY(), false, VoyageConstants.getMobHp(voyageId, mobTemplateId));
        chr.getInstance().addProperty("Livyatan", true);
    }
}
