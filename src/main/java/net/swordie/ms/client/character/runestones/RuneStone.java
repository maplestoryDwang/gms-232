package net.swordie.ms.client.character.runestones;

import net.swordie.ms.client.character.Char;
import net.swordie.ms.client.character.quest.QuestManagerHandler;
import net.swordie.ms.client.character.skills.Option;
import net.swordie.ms.client.character.skills.Skill;
import net.swordie.ms.client.character.skills.info.SkillInfo;
import net.swordie.ms.client.character.skills.temp.TemporaryStatManager;
import net.swordie.ms.connection.packet.UserLocal;
import net.swordie.ms.connection.packet.WvsContext;
import net.swordie.ms.constants.GameConstants;
import net.swordie.ms.enums.*;
import net.swordie.ms.handlers.executors.EventManager;
import net.swordie.ms.life.AffectedArea;
import net.swordie.ms.life.Summon;
import net.swordie.ms.life.mob.Mob;
import net.swordie.ms.loaders.SkillData;
import net.swordie.ms.util.Position;
import net.swordie.ms.util.Util;
import net.swordie.ms.world.field.Field;
import net.swordie.ms.world.field.modules.EliteFieldModule;

import java.util.concurrent.ScheduledFuture;

import static net.swordie.ms.client.character.skills.SkillStat.*;
import static net.swordie.ms.client.character.skills.temp.CharacterTemporaryStat.*;

/**
 * Created by Asura on 6-6-2018.
 */
public class RuneStone {
    private static final int MAX_CURSE_LEVEL = 4;

    private RuneType runeType;
    private Position position;
    private boolean flip;
    private long creationTime;

    private EventType eventType;
    private ScheduledFuture randAreaAttackTimer;

    public static final int LIBERATED_RUNE_POWER = 80002280;
    public static final int SEALED_RUNE_POWER = 80002282;
    public static final int LIBERATE_THE_SWIFT_RUNE = 80001427;
    public static final int LIBERATE_THE_RECOVERY_RUNE = 80001428;
    public static final int LIBERATE_THE_DESTRUCTIVE_RUNE = 80001431; // DoT
    public static final int LIBERATE_THE_DESTRUCTIVE_RUNE_BUFF = 80001432; // Buff
    public static final int LIBERATE_THE_RUNE_OF_THUNDER = 80001752;
    public static final int LIBERATE_THE_RUNE_OF_MIGHT = 80001753;
    public static final int LIBERATE_THE_RUNE_OF_DARKNESS = 80001754;
    public static final int LIBERATE_THE_RUNE_OF_RICHES = 80001755;
    public static final int LIBERATE_THE_RUNE_OF_GREED = 80002281;
    public static final int LIBERATE_THE_RUNE_OF_SKILL = 80001875;

    // new 214
    public static final int LIBERATE_THE_RUNE_OF_PURIFICATION = 80002888;
    public static final int LIBERATE_THE_RUNE_OF_CONTACT = 80002889;
    public static final int LIBERATE_THE_RUNE_OF_IGNITION = 80002890;

    public static final int LIBERATE_THE_RUNE_OF_MIGHT_2 = 80001757;
    public static final int LIBERATE_THE_RUNE_OF_THUNDER_2 = 80001762;

    public RuneStone() {
        creationTime = Util.getCurrentTimeLong();
    }

    public RuneType getRuneType() {
        return runeType;
    }

    public void setRuneType(RuneType runeType) {
        this.runeType = runeType;
    }

    public Position getPosition() {
        return position;
    }

    public void setPosition(Position position) {
        this.position = position;
    }

    public boolean isFlip() {
        return flip;
    }

    public void setFlip(boolean flip) {
        this.flip = flip;
    }

    public int getCurseLevel() {
        var minutesSince = Util.getMinutesSince(getCreationTime());
        return minutesSince < 5 ? 0
                : minutesSince < 10 ? 1
                : minutesSince < 15 ? 2
                : minutesSince < 20 ? 3
                : 4;
    }

    public long getCreationTime() {
        return creationTime;
    }

    public void setCreationTime(long creationTime) {
        this.creationTime = creationTime;
    }

    public static RuneStone getRandomRuneStone(Field field) {
        var runeStone = new RuneStone();
        runeStone.setRuneType(Util.getRandomFromCollection(RuneType.values()));
        runeStone.setEventType(Util.getRandomFromCollection(EventType.values()));

        Position position = field.getRandomPosOnWalkableFoothold(50, false, false);

        runeStone.setPosition(position);
        runeStone.setFlip(false);

        return runeStone;
    }

    public void showRuneCurseMessageToChr(Char chr) {
        chr.write(WvsContext.weatherEffectNotice(
                WeatherEffNoticeType.CursedRune,
                String.format(GameConstants.RUNE_NOTICE_TEXT, getCurseLevel(), getCurseLevel() * GameConstants.RUNE_CURSE_MULTIPLIER_PER_LEVEL),
                5000));
    }

    public void activateRuneStoneEffect(Char chr) {
        if (chr.hasSkillOnCooldown(RuneStone.SEALED_RUNE_POWER)) {
            return;
        }

        switch (runeType) {
            case Swiftness:
                applyRuneSwiftness(chr);
                break;
            case Recovery:
                applyRuneRecovery(chr);
                break;
            case Destruction:
                applyRuneDestruction(chr);
                break;
            case Thunder:
                applyRuneThunder(chr);
                break;
            case Might:
                applyRuneMight(chr);
                break;
            case Darkness:
                applyRuneDarkness(chr);
                break;
            case Riches:

                //TODO  Drop stuff from the sky

                applyRuneRiches(chr);
                break;
            case Skill:
                // Handled in Char.java : setSkillCooldown
                break;
            case Purification:
                applyRunePurification(chr);
                break;
            case Contact:
                applyRuneContact(chr);
                break;
            case Ignition:
                applyRuneIgnition(chr);
                break;
        }

        // Common EXP buff
        TemporaryStatManager tsm = chr.getTemporaryStatManager();
        Skill skill = SkillData.getSkillDeepCopyById(LIBERATED_RUNE_POWER);
        int skillID = skill.getSkillId();
        skill.setCurrentLevel(1);
        int slv = skill.getCurrentLevel();
        SkillInfo si = SkillData.getSkillInfoById(skill.getSkillId());
        Option o1 = new Option();
        o1.rOption = skillID;
        o1.nOption = si.getValue(indieExp, slv);
        o1.tOption = (int) (si.getValue(time, slv) * (chr.getTotalStat(BaseStat.runeBuffTimerR) / 100D));
        tsm.putCharacterStatValue(IndieEXP, o1);
        tsm.sendSetStatPacket();

        // Special Node Activation
        chr.getSpecialNode().activateSpecialNode("rune", chr, null);

        // Surprise Mission Activation
        QuestManagerHandler.handleRuneAct(chr.getQuestManager());
    }

    private void applyRuneSwiftness(Char chr) {
        TemporaryStatManager tsm = chr.getTemporaryStatManager();
        Skill skill = SkillData.getSkillDeepCopyById(LIBERATE_THE_SWIFT_RUNE);
        int skillID = skill.getSkillId();
        skill.setCurrentLevel(1);
        int slv = skill.getCurrentLevel();
        SkillInfo si = SkillData.getSkillInfoById(skill.getSkillId());
        Option o1 = new Option();
        Option o3 = new Option();
        Option o4 = new Option();
        int t = (int) (si.getValue(time, slv) * (chr.getTotalStat(BaseStat.runeBuffTimerR) / 100D));
        o1.rOption = skillID;
        o1.nOption = si.getValue(indieBooster, slv);
        o1.tStart = Util.getCurrentTime();
        o1.tOption = t;
        tsm.putCharacterStatValue(IndieBooster, o1);
        o3.rOption = skillID;
        o3.nOption = si.getValue(indieJump, slv);
        o3.tStart = Util.getCurrentTime();
        o3.tOption = t;
        tsm.putCharacterStatValue(IndieJump, o3);
        o4.rOption = skillID;
        o4.nOption = si.getValue(indieSpeed, slv);
        o4.tStart = Util.getCurrentTime();
        o4.tOption = t;
        tsm.putCharacterStatValue(IndieSpeed, o4);
        tsm.sendSetStatPacket();
    }

    private void applyRuneRecovery(Char chr) {
        TemporaryStatManager tsm = chr.getTemporaryStatManager();
        Skill skill = SkillData.getSkillDeepCopyById(LIBERATE_THE_RECOVERY_RUNE);
        int skillID = skill.getSkillId();
        skill.setCurrentLevel(1);
        int slv = skill.getCurrentLevel();
        SkillInfo si = SkillData.getSkillInfoById(skill.getSkillId());
        Option o2 = new Option();
        Option o3 = new Option();
        Option o4 = new Option();
        int t = (int) (si.getValue(time, slv) * (chr.getTotalStat(BaseStat.runeBuffTimerR) / 100D));
        // HP Regen handled in Job.java : handleAttack
        o2.nOption = si.getValue(dotHealHPPerSecondR, slv);
        o2.rOption = skillID;
        o2.tOption = t;
        tsm.putCharacterStatValue(IndieDrainHP, o2);
        o3.nOption = si.getValue(ignoreMobDamR, slv);
        o3.rOption = skillID;
        o3.tOption = t;
        tsm.putCharacterStatValue(IgnoreMobDamR, o3);
        o4.rOption = skillID;
        o4.nOption = si.getValue(indieAsrR, slv);
        o4.tStart = Util.getCurrentTime();
        o4.tOption = t;
        tsm.putCharacterStatValue(IndieAsrR, o4);
        tsm.putCharacterStatValue(IndieTerR, o4);
        tsm.sendSetStatPacket();
    }

    private void applyRuneDestruction(Char chr) {
        int slv = 1;
        TemporaryStatManager tsm = chr.getTemporaryStatManager();
        Option o1 = new Option();

        // Attack of the Rune
        AffectedArea aa = AffectedArea.getPassiveAA(chr, LIBERATE_THE_DESTRUCTIVE_RUNE, slv);
        chr.getField().spawnAffectedArea(aa);

        // Buff of the Rune
        SkillInfo si = SkillData.getSkillInfoById(RuneStone.LIBERATE_THE_DESTRUCTIVE_RUNE_BUFF); // Buff Info
        o1.rOption = RuneStone.LIBERATE_THE_DESTRUCTIVE_RUNE_BUFF;
        o1.nOption = si.getValue(indieDamR, slv); // 50% DamR
        o1.tOption = (int) (si.getValue(time, slv) * (chr.getTotalStat(BaseStat.runeBuffTimerR) / 100D));
        tsm.putCharacterStatValue(IndieDamR, o1);
        tsm.sendSetStatPacket();
    }

    private void applyRuneGreed(Char chr) {
        TemporaryStatManager tsm = chr.getTemporaryStatManager();
        Skill skill = SkillData.getSkillDeepCopyById(LIBERATE_THE_RUNE_OF_GREED);
        int slv = 1;
        SkillInfo si = SkillData.getSkillInfoById(skill.getSkillId());
        Option o = new Option();

        o.nOption = si.getValue(mesoAmountUp, slv);
        o.rOption = skill.getSkillId();
        o.tOption = (int) (60 * (chr.getTotalStat(BaseStat.runeBuffTimerR) / 100D)); // no time SkillStat
        tsm.putCharacterStatValue(MesoUpByItem, o);
    }

    private void applyRuneThunder(Char chr) {
        TemporaryStatManager tsm = chr.getTemporaryStatManager();
        Skill skill = SkillData.getSkillDeepCopyById(LIBERATE_THE_RUNE_OF_THUNDER_2);
        int skillID = skill.getSkillId();
        skill.setCurrentLevel(1);
        int slv = skill.getCurrentLevel();
        SkillInfo si = SkillData.getSkillInfoById(skill.getSkillId());
        Option o1 = new Option();

        // RandAreaAttack Buff
        int tOption = (int) (SkillData.getSkillInfoById(80001756).getValue(time, slv) * (chr.getTotalStat(BaseStat.runeBuffTimerR) / 100D));

        o1.nOption = 1;
        o1.rOption = skillID;
        o1.tOption = tOption;
        tsm.putCharacterStatValue(RandAreaAttack, o1);
        tsm.sendSetStatPacket();

        int executes = tOption / (GameConstants.THUNDER_RUNE_ATTACK_DELAY);

        int fieldID = chr.getFieldID();
        EventManager.stopTimer(randAreaAttackTimer);
        randAreaAttackTimer = EventManager.addFixedRateEvent(() -> randAreaAttack(fieldID, tsm, chr), GameConstants.THUNDER_RUNE_ATTACK_DELAY * 1000, GameConstants.THUNDER_RUNE_ATTACK_DELAY * 1000, executes);
    }

    private void randAreaAttack(int fieldID, TemporaryStatManager tsm, Char chr) {
        if (chr == null || chr.getField() == null || tsm.getOptByCTSAndSkill(RandAreaAttack, LIBERATE_THE_RUNE_OF_THUNDER_2) == null || fieldID != chr.getFieldID()) {
            if (randAreaAttackTimer != null) {
                EventManager.stopTimer(randAreaAttackTimer);
            }
            return;
        }

        Mob randomMob = Util.getRandomFromCollection(chr.getField().getMobs());

        if (randomMob != null) {
            chr.write(UserLocal.userRandAreaAttackRequest(randomMob, LIBERATE_THE_RUNE_OF_THUNDER_2));
        }
    }

    private void applyRuneMight(Char chr) {
        TemporaryStatManager tsm = chr.getTemporaryStatManager();
        Skill skill = SkillData.getSkillDeepCopyById(LIBERATE_THE_RUNE_OF_MIGHT_2);
        int skillID = skill.getSkillId();
        skill.setCurrentLevel(1);
        int slv = skill.getCurrentLevel();
        SkillInfo si = SkillData.getSkillInfoById(skill.getSkillId());
        Option o1 = new Option();
        Option o2 = new Option();
        int t = (int) (si.getValue(time, slv) * (chr.getTotalStat(BaseStat.runeBuffTimerR) / 100D));
        o1.nOption = si.getValue(x, slv);
        o1.rOption = skillID;
        o1.tOption = t;
        tsm.putCharacterStatValue(Inflation, o1);
        o2.rOption = skillID;
        o2.nOption = si.getValue(indieSpeed, slv);
        o2.tOption = t;
        tsm.putCharacterStatValue(IndieSpeed, o2);
        tsm.putCharacterStatValue(IndieJump, o2);
        tsm.sendSetStatPacket();
    }

    private void applyRuneDarkness(Char chr) {
        Field field = chr.getField();
        int numberOfEliteMobsSpawned = GameConstants.DARKNESS_RUNE_NUMBER_OF_ELITE_MOBS_SPAWNED;
        for (int i = 0; i < numberOfEliteMobsSpawned; i++) {
            Mob mob = Util.getRandomFromCollection(field.getMobs());
            EliteFieldModule.spawnEliteVersion(field, mob);
        }
    }

    private void applyRuneRiches(Char chr) {
        chr.chatMessage(ChatType.BlackOnWhite, "This rune's effect has not yet been implemented.");
    }

    private void applyRunePurification(Char chr) {
        int tOpt = (int) (SkillData.getSkillInfoById(LIBERATE_THE_RUNE_OF_PURIFICATION).getValue(time, 1) * (chr.getTotalStat(BaseStat.runeBuffTimerR) / 100D));
        Field field = chr.getField();
        Summon purifcationSummon = Summon.getSummonByNoCTS(chr, LIBERATE_THE_RUNE_OF_PURIFICATION, 1);
        purifcationSummon.setMoveAbility(MoveAbility.Stop);
        purifcationSummon.setAssistType(AssistType.Attack);
        purifcationSummon.setSummonTerm(tOpt);
        purifcationSummon.setPosition(getPosition());
        field.spawnSummonAndRemoveOld(purifcationSummon);

        TemporaryStatManager tsm = chr.getTemporaryStatManager();
        Option o = new Option();
        o.nOption = 1;
        o.rOption = LIBERATE_THE_RUNE_OF_PURIFICATION;
        o.tOption = tOpt;
        o.xOption = 0; // shows progress bar on Summon
        tsm.putCharacterStatValue(RuneOfPurification, o);
        tsm.sendSetStatPacket();
    }

    private void applyRuneContact(Char chr) {
        int tOpt = (int) (SkillData.getSkillInfoById(LIBERATE_THE_RUNE_OF_CONTACT).getValue(time, 1) * (chr.getTotalStat(BaseStat.runeBuffTimerR) / 100D));
        Field field = chr.getField();
        Summon purifcationSummon = Summon.getSummonBy(chr, LIBERATE_THE_RUNE_OF_CONTACT, 1);
        purifcationSummon.setMoveAbility(MoveAbility.Stop);
        purifcationSummon.setAssistType(AssistType.Attack);
        purifcationSummon.setSummonTerm(tOpt);
        purifcationSummon.setPosition(getPosition());
        field.spawnSummonAndRemoveOld(purifcationSummon);
    }

    private void applyRuneIgnition(Char chr) {
        int tOpt = (int) (SkillData.getSkillInfoById(LIBERATE_THE_RUNE_OF_IGNITION).getValue(time, 1) * (chr.getTotalStat(BaseStat.runeBuffTimerR) / 100D));
        TemporaryStatManager tsm = chr.getTemporaryStatManager();
        Option o = new Option();
        o.nOption = 1;
        o.rOption = LIBERATE_THE_RUNE_OF_IGNITION;
        o.tOption = tOpt;
        tsm.putCharacterStatValue(RuneOfPurification, o);
        tsm.sendSetStatPacket();
    }

    public EventType getEventType() {
        return eventType;
    }

    public void setEventType(EventType eventType) {
        this.eventType = eventType;
    }

    public enum EventType {
        None,
        Halloween,
        Anniverssary,
        NewYear,
        Honey,
        SummerWaterFight,
    }
}
