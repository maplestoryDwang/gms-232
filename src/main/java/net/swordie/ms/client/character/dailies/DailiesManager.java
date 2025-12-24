package net.swordie.ms.client.character.dailies;

import net.swordie.ms.Server;
import net.swordie.ms.client.character.Char;
import net.swordie.ms.client.character.dailies.handleddailies.CommerceVoyageDaily;
import net.swordie.ms.client.character.dailies.handleddailies.OzTowerDaily;
import net.swordie.ms.client.character.quest.QuestManager;
import net.swordie.ms.client.dailies.AccountDailyEntries;
import net.swordie.ms.client.dailies.ContentReset;
import net.swordie.ms.connection.packet.WvsContext;
import net.swordie.ms.connection.packet.model.MessagePacket;
import net.swordie.ms.constants.QuestConstants;
import net.swordie.ms.enums.DailyEntry;
import net.swordie.ms.util.FileTime;
import net.swordie.ms.util.container.Tuple;
import net.swordie.orm.dao.AccountDailyEntriesDao;
import net.swordie.orm.dao.ContentResetDao;
import net.swordie.orm.dao.SworDaoFactory;

import java.time.LocalDateTime;
import java.time.ZoneId;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

/**
 * Created on 24/05/2021.
 *
 * @author Asura
 */
public class DailiesManager {

    private final int weeklyResetDay = 5; // Day of the week that weekly reset should happen (Used if the server is down for longer amount of time)
    private final ContentResetDao contentResetDao = (ContentResetDao) SworDaoFactory.getByClass(ContentReset.class);
    private final AccountDailyEntriesDao accountDailyEntriesDao = (AccountDailyEntriesDao) SworDaoFactory.getByClass(AccountDailyEntries.class);

    private static final CommerceVoyageDaily commerceVoyageDaily = new CommerceVoyageDaily();
    private static final OzTowerDaily ozTowerDaily = new OzTowerDaily();
    private List<ContentReset> contentResets;

    private static final Map<DailyType, IDaily> dailies = Map.ofEntries(
            Map.entry(DailyType.CommerceVoyage, commerceVoyageDaily),
            Map.entry(DailyType.OzTower, ozTowerDaily)
    );

    private static final List<Tuple<Integer, DailyEntry>> accountDailyResetQuests = new ArrayList<>() {{
        add(new Tuple<>(QuestConstants.WHIP_THE_WHELPS, DailyEntry.WhipTheWhelps));
        add(new Tuple<>(QuestConstants.DEFEAT_GOLDEN_WYVERN, DailyEntry.DefeatGoldenWyvern));
    }};

    /**
     * Save Last Time Updated into DailiesQuest.
     *
     * @param dailyType
     * @param chr
     */
    public static void update(DailyType dailyType, Char chr) {
        var quest = chr.getQuestManager().getOrCreateQuestById(QuestConstants.DAILIES_QUEST);
        quest.setProperty(String.valueOf(dailyType.getVal()), FileTime.currentTime().toYYMMDDHHMMSS());
    }

    /**
     * Reset dailies by calling their _Daily implementation. And does NOT bypass LastUpdate checks.
     *
     * @param chr
     */
    public void reset(Char chr) {
        reset(chr, false);
    }


    /**
     * Reset dailies by calling their _Daily implementation.
     *
     * @param chr
     * @param bypassCheck Whether to bypass lastUpdate check
     */
    public void reset(Char chr, boolean bypassCheck) {
        var quest = chr.getQuestManager().getOrCreateQuestById(QuestConstants.DAILIES_QUEST);

        for (var entry : dailies.entrySet()) {
            var dailyType = entry.getKey();

            if (!quest.hasProperty(String.valueOf(dailyType.getVal()))) {
                continue;
            }

            if (bypassCheck) {
                entry.getValue().reset(chr, this);
                continue;
            }

            LocalDateTime lastUpdate = LocalDateTime.ofInstant(FileTime.fromYYMMDDHHMMSS(quest.getProperty(String.valueOf(dailyType.getVal()))).toInstant(), ZoneId.systemDefault());
            LocalDateTime now = LocalDateTime.now();

            // Last update NOT today -> reset
            if (now.getDayOfYear() > lastUpdate.getDayOfYear() || now.getYear() != lastUpdate.getYear()) {
                entry.getValue().reset(chr, this);
            }
        }
    }

    // Basic resets
    public void initialize() {
        List<ContentReset> contentResets = getContentResets();
        for (DailyEntry dailyEntry : DailyEntry.values()) {
            ContentReset contentReset = contentResets.stream().filter(cr -> cr.getDailyEntry().equals(dailyEntry)).findAny().orElse(null);
            if (contentReset == null) {
                // make new, since there's none done
                ContentReset newContentReset = new ContentReset(dailyEntry);
                contentResets.add(newContentReset);
                contentResetDao.saveOrUpdate(newContentReset);
            }
        }

        onNewDayGlobal(); // Check if since last restart anything needs to be reset, not Server.onNewDay since no one is online
    }


    public void onNewDayGlobal() {
        var accounts =  Server.getInstance().getAllOnlineCharacters()
                .stream()
                .map(Char::getAccount)
                .collect(Collectors.toSet());
        for (ContentReset contentReset : getContentResets()) {
            // Check if content needs to be reset (last reset + daysPerReset < curTime)
            if (contentReset.getStartDate().toLocalDateTime().plusDays(contentReset.getDailyEntry().getDaysPerReset()).isBefore(FileTime.currentTime().toLocalDateTime())) {
                // Reset content
                accountDailyEntriesDao.resetDailyEntries(contentReset.getDailyEntry()); // for offline peeps
                accounts.forEach(a -> a.getDailyEntries().setRemainingEntries(contentReset.getDailyEntry(), -1)); // for online peeps

                // get the new latest reset time
                FileTime lastResetTime = contentReset.getStartDate();
                while (lastResetTime.toLocalDateTime().plusDays(contentReset.getDailyEntry().getDaysPerReset()).isBefore(FileTime.currentTime().toLocalDateTime())) {
                    lastResetTime = FileTime.fromDate(lastResetTime.toLocalDateTime().plusDays(contentReset.getDailyEntry().getDaysPerReset()));
                }
                contentReset.setStartDate(lastResetTime);
                contentResetDao.saveOrUpdate(contentReset);
            }
        }
    }


    private List<ContentReset> getContentResets() {
        if (contentResets == null) {
            contentResets = contentResetDao.getList();
        }
        return contentResets;
    }

    // This function is ran daily
    public void resetQuests(Char chr) {
        chr.getAccount().refreshDailyEntriesList();
        QuestManager qm = chr.getQuestManager();

        for (var quest : accountDailyResetQuests) {
            int questid = quest.getLeft();
            if ((qm.hasQuestCompleted(questid) || qm.hasQuestInProgress(questid)) && (chr.getAccount().getRemainingEntriesClean(quest.getRight()) == -1)) {
                if (chr.getAccount().getCompletedAccountQuests().contains(questid)) {
                    chr.getAccount().removeCompletedAccountQuest(questid);
                }
                qm.removeQuest(questid);
            }
        }


        if (chr.getAccount().getRemainingEntriesClean(DailyEntry.VanishingJourney) == -1) {
            for (int quest : QuestConstants.VANISHING_JOURNEY_QUESTS) {
                qm.removeQuest(quest);
            }
            chr.getAccount().removeCompletedAccountQuest(QuestConstants.VANISHING_JOURNEY_DAILY_QUEST);
        }

        if (chr.getAccount().getRemainingEntriesClean(DailyEntry.ChuChu) == -1) {
            for (int quest : QuestConstants.CHUCHU_QUESTS) {
                qm.removeQuest(quest);
            }
            chr.getAccount().removeCompletedAccountQuest(QuestConstants.CHU_CHU_DAILY_QUEST);
        }

        if (chr.getAccount().getRemainingEntriesClean(DailyEntry.Lachelein) == -1) {
            for (int quest : QuestConstants.LACHELEIN_QUESTS) {
                qm.removeQuest(quest);
            }
            chr.getAccount().removeCompletedAccountQuest(QuestConstants.LACHELEIN_DAILY_QUEST);
        }

        if (chr.getAccount().getRemainingEntriesClean(DailyEntry.Arcana) == -1) {
            for (int quest : QuestConstants.ARCANA_QUESTS) {
                qm.removeQuest(quest);
            }
            chr.getAccount().removeCompletedAccountQuest(QuestConstants.ARCANA_DAILY_QUEST);
        }

        if (chr.getAccount().getRemainingEntriesClean(DailyEntry.Morass) == -1) {
            for (int quest : QuestConstants.MORASS_QUESTS) {
                qm.removeQuest(quest);
            }
            chr.getAccount().removeCompletedAccountQuest(QuestConstants.MORASS_DAILY_QUEST);
        }

        if (chr.getAccount().getRemainingEntriesClean(DailyEntry.Esfera) == -1) {
            for (int quest : QuestConstants.ESFERA_QUESTS) {
                qm.removeQuest(quest);
            }
            chr.getAccount().removeCompletedAccountQuest(QuestConstants.ESFERA_DAILY_QUEST);
        }

        if (chr.getAccount().getRemainingEntriesClean(DailyEntry.Cernium) == -1) {
            for (int quest : QuestConstants.CERNIUM_QUESTS) {
                qm.removeQuest(quest);
            }
            chr.getAccount().removeCompletedAccountQuest(QuestConstants.CERNIUM_DAILY_QUEST);
        }

        if (chr.getAccount().getRemainingEntriesClean(DailyEntry.HotelArcus) == -1) {
            for (int quest : QuestConstants.HOTEL_ARCUS_QUESTS) {
                qm.removeQuest(quest);
            }
            chr.getAccount().removeCompletedAccountQuest(QuestConstants.HOTEL_ARCUS_DAILY_QUEST);
        }

        if (chr.getAccount().getRemainingEntriesClean(DailyEntry.PowerCrystal) == -1) {
            qm.getQuestById(QuestConstants.POWER_CRYSTAL_QUEST).setQrValue("count=" + QuestConstants.POWER_CRYSTAL_WEEKLY_COUNT + ";max=" + QuestConstants.POWER_CRYSTAL_WEEKLY_COUNT + ";type=2");
            chr.write(WvsContext.message(MessagePacket.questRecordExMessage(qm.getQuestById(QuestConstants.POWER_CRYSTAL_QUEST))));
        }

    }

}
