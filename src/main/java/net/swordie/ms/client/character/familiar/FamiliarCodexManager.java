package net.swordie.ms.client.character.familiar;

import net.swordie.ms.client.character.Char;
import net.swordie.ms.client.character.items.ItemOption;
import net.swordie.ms.client.character.quest.Quest;
import net.swordie.ms.client.character.quest.QuestManager;
import net.swordie.ms.connection.packet.CFamiliar;
import net.swordie.ms.connection.packet.UserLocal;
import net.swordie.ms.connection.packet.WvsContext;
import net.swordie.ms.connection.packet.model.MessagePacket;
import net.swordie.ms.constants.GameConstants;
import net.swordie.ms.constants.QuestConstants;
import net.swordie.ms.enums.BaseStat;
import net.swordie.ms.enums.EnterType;
import net.swordie.ms.life.Familiar;
import net.swordie.ms.loaders.FamiliarData;
import net.swordie.ms.loaders.ItemData;
import net.swordie.ms.loaders.containerclasses.familiarcodex.BadgeInfo;
import net.swordie.ms.world.field.Field;
import net.swordie.orm.dao.FamiliarDao;
import net.swordie.orm.dao.SworDaoFactory;

import java.util.*;

/**
 * Created on 25/04/2020.
 *
 * @author Asura
 */
public class FamiliarCodexManager {

    private static final FamiliarDao familiarDao = (FamiliarDao) SworDaoFactory.getByClass(Familiar.class);

    private static final int BADGE_REQ_SLOT1 = 1;
    private static final int BADGE_REQ_SLOT2 = 8;

    private int id;
    private Char chr;
    private int summonGauge = GameConstants.MAX_SUMMON_GAUGE; // 2000
    private int familiarSlots = GameConstants.STARTING_FAMILIAR_SLOTS; // 100
    private Set<Familiar> familiars;
    private int[] activeFamiliars = new int[GameConstants.ACTIVE_FAMILIARS_SLOTS];
    private int[] activeBadges = new int[] { // Default
            -1, -1, -1, -1,
              -1, -1, -1, -1,
    };
    private Set<Integer> collectedFamiliars;
    private boolean familiarsSummoned;
    private List<Familiar> currentActiveFamiliars;


    public FamiliarCodexManager() {
    }

    public FamiliarCodexManager(Char chr) {
        this.chr = chr;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public Char getChr() {
        return chr;
    }

    public void setChr(Char chr) {
        this.chr = chr;
    }

    public int[] getActiveFamiliars() {
        return activeFamiliars;
    }

    public void setActiveFamiliars(int[] activeFamiliars) {
        this.activeFamiliars = activeFamiliars;
    }

    public Set<Familiar> getFamiliars() {
        if (familiars == null) {
            familiars = familiarDao.byChar(getChr());
        }
        for (Familiar f : familiars) {
            f.setChr(getChr());
        }
        return familiars;
    }

    public void setFamiliars(Set<Familiar> familiars) {
        this.familiars = familiars;
    }

    public Familiar getFamiliarByID(int familiarID) {
        return getFamiliars().stream().filter(f -> f.getId() == familiarID).findAny().orElse(null);
    }

    public Familiar getFamiliarByTemplateId(int templateId) {
        return getFamiliars().stream().filter(f -> f.getFamiliarID() == templateId).findFirst().orElse(null);
    }

    public void addFamiliar(Familiar familiar) {
        getFamiliars().add(familiar);
        getCollectedFamiliars().add(familiar.getFamiliarID());
    }

    public void removeFamiliar(Familiar familiar) {
        if (familiar != null) {
            getFamiliars().remove(familiar);
            familiarDao.delete(familiar);
        }
    }

    public void removeFamiliars(List<Familiar> familiars) {
        chr.write(UserLocal.familiarRemoveResult(familiars));
        for (Familiar f : familiars) {
            removeFamiliar(f);
        }
    }

    public int getSummonGauge() {
        return summonGauge;
    }

    public void setSummonGauge(int summonGauge) {
        this.summonGauge = summonGauge;
    }

    public int[] getActiveBadges() {
        return activeBadges;
    }

    public void setActiveBadges(int[] activeBadges) {
        this.activeBadges = activeBadges;
    }

    public int getFamPoints() {
        QuestManager qm = chr.getQuestManager();
        Quest quest = qm.getOrCreateQuestById(QuestConstants.FAMILIAR_POINTS);

        return quest.getIntProperty("point");
    }

    public void setFamPoints(int famPoints) {
        QuestManager qm = chr.getQuestManager();
        Quest quest = qm.getOrCreateQuestById(QuestConstants.FAMILIAR_POINTS);

        quest.setProperty("point", famPoints);
        chr.write(WvsContext.message(MessagePacket.questRecordExMessage(quest)));
    }

    public void addFamPoints(int famPoints) {
        setFamPoints(getFamPoints() + famPoints);
    }

    public void deductFamPoints(int famPoints) {
        addFamPoints(-famPoints);
    }

    public int getFamiliarSlots() {
        return familiarSlots;
    }

    public void setFamiliarSlots(int familiarSlots) {
        this.familiarSlots = Math.min(familiarSlots, GameConstants.MAX_FAMILIAR_SLOTS);
    }

    public void incFamiliarSlots(int inc) {
        setFamiliarSlots(getFamiliarSlots() + inc);
    }

    public boolean isFamiliarsSummoned() {
        return familiarsSummoned;
    }

    public void setFamiliarsSummoned(boolean familiarsSummoned) {
        this.familiarsSummoned = familiarsSummoned;
    }

    public List<Familiar> getActiveFamiliarsToSummon() {
        List<Familiar> fams = new ArrayList<>();
        for (int famId : getActiveFamiliars()) {
            if (famId == 0) {
                continue;
            }
            Familiar f = getFamiliarByID(famId);
            if (f != null) {
                f.setIdx(fams.size());
                fams.add(f);
            }
        }
        setCurrentActiveFamiliars(fams);
        return fams;
    }

    public void summonFamiliars() {
        summonFamiliars(EnterType.Animation);
    }

    public void summonFamiliars(EnterType enterType) {
        Field field = getChr().getField();
        List<Familiar> fams = getActiveFamiliarsToSummon();
        if (fams.size() > 0) {
            for (Familiar f : fams) {
                field.spawnFamiliar(f, null, enterType);
            }
            setFamiliarsSummoned(true);
            field.broadcastPacket(CFamiliar.familiarEnterField(fams, true, false));
        }
    }

    public void banishFamiliars() {
        Field field = getChr().getField();
        List<Familiar> fams = new ArrayList<>();
        for (Familiar f : getActiveFamiliarsToSummon()) {
            field.removeFamiliar(f);
            fams.add(f);
        }
        setFamiliarsSummoned(false);
        setCurrentActiveFamiliars(null);
        field.broadcastPacket(CFamiliar.familiarEnterField(fams, false, false));
    }

    public Set<Integer> getCollectedFamiliars() {
        if (collectedFamiliars == null) {
            collectedFamiliars = familiarDao.getCollectedFamiliars(chr);
        }

        return collectedFamiliars;
    }

    public void addCollectedFamiliar(int familiarId) {
        getCollectedFamiliars().add(familiarId);
    }

    public Map<Integer, FamiliarBadgeInfo> getBadgePageInfo() {
        Map<Integer, FamiliarBadgeInfo> badgeInfoMap = new HashMap<>();

        for (int familiarId : getCollectedFamiliars()) {
            var familiarInfo = FamiliarData.getFamiliarInfoById(familiarId);

            if (familiarInfo == null || familiarInfo.getBadgeSetIds().size() == 0) {
                continue;
            }

            for (int badgeId : familiarInfo.getBadgeSetIds()) {
                var badgeInfo = FamiliarData.getBadgeInfoById(badgeId);

                var set = badgeId / 4;
                if (!badgeInfoMap.containsKey(set)) {
                    badgeInfoMap.put(set, new FamiliarBadgeInfo());
                }

                var familiarBadgeInfo = badgeInfoMap.get(set);
                familiarBadgeInfo.addFamiliar(familiarId, badgeId, badgeInfo.getPositionOfFamiliar(familiarId));
            }
        }

        return badgeInfoMap;
    }

    public double getBaseStat(BaseStat baseStat) {
        double stat = 0;
        if (baseStat == null) {
            return stat;
        }

        // Familiar
        if (isFamiliarsSummoned()) {
            for (Familiar f : getActiveFamiliarsToSummon()) {
                stat += f.getBaseStat(baseStat);
            }
        }

        // Badge
        for (int badgeId : getActiveBadges()) {
            BadgeInfo bi = FamiliarData.getBadgeInfoById(badgeId);
            if (bi == null) {
                continue;
            }

            for (int option : bi.getOptions()) {
                ItemOption io = ItemData.getFamiliarOptionById(option);
                if (io != null) {
                    Map<BaseStat, Double> valMap = io.getStatValuesByLevel(1);
                    stat += valMap.getOrDefault(baseStat, 0D);
                }
            }
        }

        return stat;
    }

    public void initQuestsForSlots() {
        var qm = chr.getQuestManager();
        var activeBadgeCount = Arrays.stream(getActiveBadges()).filter(i -> i >= 0).count();
        if (activeBadgeCount >= BADGE_REQ_SLOT1 && !qm.hasQuestInProgress(QuestConstants.FAMILIAR_SLOT1)) {
            qm.addQuestWithQr(chr, QuestConstants.FAMILIAR_SLOT1, "famimax=1");
        }
        if (activeBadgeCount >= BADGE_REQ_SLOT2 && !qm.hasQuestCompleted(QuestConstants.FAMILIAR_SLOT2)) {
            qm.completeQuest(QuestConstants.FAMILIAR_SLOT2);
        }
    }

    public void updateForClient(int mask) {
        chr.write(UserLocal.codexUpdate(this, mask));
    }

    public Familiar getFamiliarByIdx(byte idx) {
        return getCurrentActiveFamiliars().get(idx);
    }

    public List<Familiar> getCurrentActiveFamiliars() {
        return currentActiveFamiliars;
    }

    public void setCurrentActiveFamiliars(List<Familiar> currentActiveFamiliars) {
        this.currentActiveFamiliars = currentActiveFamiliars;
    }

    public int getActiveFamiliarPreset() {
        return 0;
    }

    public int getActiveBadgePreset() {
        return 0;
    }
}
