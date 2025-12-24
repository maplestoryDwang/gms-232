package net.swordie.ms.client.jobs.legend;

import net.swordie.ms.client.Client;
import net.swordie.ms.client.character.Char;
import net.swordie.ms.client.character.info.HitInfo;
import net.swordie.ms.client.character.skills.BypassCooldownCheckType;
import net.swordie.ms.client.character.skills.Option;
import net.swordie.ms.client.character.skills.Skill;
import net.swordie.ms.client.character.skills.SkillUseSource;
import net.swordie.ms.client.character.skills.atom.forceatom.ForceAtom;
import net.swordie.ms.client.character.skills.atom.forceatom.ForceAtomCollisionInfo;
import net.swordie.ms.client.character.skills.info.*;
import net.swordie.ms.client.character.skills.temp.CharacterTemporaryStat;
import net.swordie.ms.client.character.skills.temp.TemporaryStatManager;
import net.swordie.ms.client.jobs.Job;
import net.swordie.ms.client.jobs.adventurer.archer.BowMaster;
import net.swordie.ms.client.jobs.adventurer.archer.Marksman;
import net.swordie.ms.client.jobs.adventurer.archer.Pathfinder;
import net.swordie.ms.client.jobs.adventurer.magician.Bishop;
import net.swordie.ms.client.jobs.adventurer.magician.FirePoison;
import net.swordie.ms.client.jobs.adventurer.magician.IceLightning;
import net.swordie.ms.client.jobs.adventurer.pirate.Buccaneer;
import net.swordie.ms.client.jobs.adventurer.pirate.Cannoneer;
import net.swordie.ms.client.jobs.adventurer.pirate.Corsair;
import net.swordie.ms.client.jobs.adventurer.thief.BladeMaster;
import net.swordie.ms.client.jobs.adventurer.thief.NightLord;
import net.swordie.ms.client.jobs.adventurer.thief.Shadower;
import net.swordie.ms.client.jobs.adventurer.warrior.DarkKnight;
import net.swordie.ms.client.jobs.adventurer.warrior.Hero;
import net.swordie.ms.client.jobs.adventurer.warrior.Paladin;
import net.swordie.ms.connection.InPacket;
import net.swordie.ms.connection.packet.Effect;
import net.swordie.ms.connection.packet.UserLocal;
import net.swordie.ms.connection.packet.UserPacket;
import net.swordie.ms.connection.packet.UserRemote;
import net.swordie.ms.connection.packet.field.FieldPacket;
import net.swordie.ms.constants.JobConstants;
import net.swordie.ms.constants.MobConstants;
import net.swordie.ms.enums.ForceAtomEnum;
import net.swordie.ms.handlers.executors.EventManager;
import net.swordie.ms.life.AffectedArea;
import net.swordie.ms.life.mob.Mob;
import net.swordie.ms.life.mob.MobStat;
import net.swordie.ms.life.mob.MobTemporaryStat;
import net.swordie.ms.loaders.SkillData;
import net.swordie.ms.util.Position;
import net.swordie.ms.util.Rect;
import net.swordie.ms.util.Util;
import net.swordie.ms.world.field.Field;
import net.swordie.ms.world.field.fieldeffect.FieldEffect;
import org.python.modules.math;

import java.util.*;
import java.util.concurrent.ScheduledFuture;
import java.util.concurrent.TimeUnit;
import java.util.stream.Collectors;

import static net.swordie.ms.client.character.skills.BypassCooldownCheckType.BypassCheckAndCooldown;
import static net.swordie.ms.client.character.skills.SkillStat.*;
import static net.swordie.ms.client.character.skills.temp.CharacterTemporaryStat.*;
import static net.swordie.ms.life.mob.MobStat.*;

/**
 * Created on 12/14/2017.
 */
public class Phantom extends Job {

    public static final int JUDGMENT_DRAW_1 = 20031209;
    public static final int JUDGMENT_DRAW_2 = 20031210;
    public static final int JUDGMENT_DRAW_AUTO_MANUAL = 20031260;

    public static final int SKILL_SWIPE = 20031207;
    public static final int LOADOUT = 20031208;
    public static final int TO_THE_SKIES = 20031203;
    public static final int DEXTEROUS_TRAINING = 20030206;
    public static final int GHOSTWALK = 20031211;
    public static final int SHROUD_WALK = 20031205;

    public static final int IMPECCABLE_MEMORY_I = 24001001;

    public static final int IMPECCABLE_MEMORY_II = 24101001;
    public static final int CANE_BOOSTER = 24101005; //Buff
    public static final int CARTE_BLANCHE = 24100003;

    public static final int IMPECCABLE_MEMORY_III = 24111001;
    public static final int FINAL_FEINT = 24111002; //Buff (Unlimited Duration) Gone upon Death
    public static final int BAD_LUCK_WARD = 24111003; //Buff
    public static final int CLAIR_DE_LUNE = 24111005; //Buff

    public static final int IMPECCABLE_MEMORY_IV = 24121001;
    public static final int PRIERE_DARIA = 24121004; //Buff
    public static final int VOL_DAME = 24121007; // Special Buff
    public static final int MAPLE_WARRIOR_PH = 24121008; //Buff
    public static final int CARTE_NOIR = 24120002;              //80001890
    public static final int HEROS_WILL_PH = 24121009;
    public static final int PENOMBRE = 24121003;
    public static final int MILLE_AIGUILLES = 24121000;
    public static final int TEMPEST = 24121005;

    public static final int HEROIC_MEMORIES_PH = 24121053;
    public static final int CARTE_ROSE_FINALE = 24121052;

    // V skill
    public static final int LUCK_OF_THE_DRAW = 400041009;
    public static final int LUCK_OF_THE_DRAW_ATOM = 400041010;
    public static final int LUCK_OF_THE_DRAW_RED_CROSS = 400041011;
    public static final int LUCK_OF_THE_DRAW_TREE_OF_LIFE = 400041012;
    public static final int LUCK_OF_THE_DRAW_HOURGLASS = 400041013;
    public static final int LUCK_OF_THE_DRAW_SHARP_SWORD = 400041014;
    public static final int LUCK_OF_THE_DRAW_COMBINED = 400041015;

    public static final int ACE_IN_THE_HOLE = 400041022;
    public static final int ACE_IN_THE_HOLE_ATOM = 400041023;
    public static final int ACE_IN_THE_HOLE_FINISHER = 400041024;

    public static final int PHANTOMS_MARK = 400041040;
    public static final int PHANTOMS_MARK_2 = 400041045;
    public static final int PHANTOMS_MARK_3 = 400041046;

    public static final int RIFT_BREAK_TELEPORT = 400041055; // hold key arrow
    public static final int RIFT_BREAK_ALL_ATTACKS_IN_ONE = 400041056;


    public static final int CARTE_ATOM = 80001890;

    private static final int[] addedSkills = new int[]{
            SKILL_SWIPE,
            LOADOUT,
            TO_THE_SKIES,
            DEXTEROUS_TRAINING,
            JUDGMENT_DRAW_AUTO_MANUAL,
            SHROUD_WALK,
    };
    private ScheduledFuture healOTByLuckOfTheDrawTimer;

    private boolean isCaneSkill(int skillId) {
        return skillId == 24001000 || skillId == 24101000 || skillId == 24101002 || skillId == 24111000 || skillId == 24111006 || skillId == 24121010 || skillId == MILLE_AIGUILLES;
    }

    private byte cardAmount;
    private byte phantomMarkMille = 0;
    private Set<Job> stealJobHandlers = new HashSet<>();

    public Phantom(Char chr) {
        super(chr);
        if (isHandlerOfJob(chr.getJob())) {
            for (int id : addedSkills) {
                if (!chr.hasSkill(id)) {
                    Skill skill = SkillData.getSkillDeepCopyById(id);
                    skill.setCurrentLevel(skill.getMasterLevel());
                    chr.addSkill(skill);
                }
            }
            // Warrior
            stealJobHandlers.add(new Hero(chr));
            stealJobHandlers.add(new Paladin(chr));
            stealJobHandlers.add(new DarkKnight(chr));

            // Mage
            stealJobHandlers.add(new FirePoison(chr));
            stealJobHandlers.add(new IceLightning(chr));
            stealJobHandlers.add(new Bishop(chr));

            // Bowman
            stealJobHandlers.add(new BowMaster(chr));
            stealJobHandlers.add(new Marksman(chr));
            stealJobHandlers.add(new Pathfinder(chr));

            // Thief
            stealJobHandlers.add(new NightLord(chr));
            stealJobHandlers.add(new Shadower(chr));
            stealJobHandlers.add(new BladeMaster(chr));
            
            // Pirate
            stealJobHandlers.add(new Buccaneer(chr));
            stealJobHandlers.add(new Corsair(chr));
            stealJobHandlers.add(new Cannoneer(chr));

            // [Phantom] Custom Skill Change
            if (chr.getLevel() >= 10 && !chr.hasSkill(GHOSTWALK)) {
                chr.addSkill(GHOSTWALK, 1, 1);
            }
        }
    }

    @Override
    public boolean isHandlerOfJob(short id) {
        return JobConstants.isPhantom(id);
    }

    @Override
    public void setCharCreationStats(Char chr) {
        super.setCharCreationStats(chr);
        chr.setStolenSkills(new HashSet<>());
        chr.setChosenSkills(new HashSet<>());
        chr.getAvatarData().getCharacterStat().setPosMap(915000000);
    }


    private void giveJudgmentDrawBuff(int skillId) {
        Skill skill = chr.getSkill(skillId);
        if (skill == null) {
            return;
        }

        SkillInfo si = SkillData.getSkillInfoById(skillId);
        int slv = skill.getCurrentLevel();

        TemporaryStatManager tsm = chr.getTemporaryStatManager();
        Option o = new Option();
        int randomInt = new Random().nextInt((skillId == JUDGMENT_DRAW_1 ? 2 : 5)) + 1;
        int xOpt = 0;
        switch (randomInt) {
            case 1: // Crit Rate
                xOpt = si.getValue(v, slv);
                break;
            case 2: // Item Drop Rate
                xOpt = si.getValue(w, slv);
                break;
            case 3: // AsrR & TerR
                xOpt = si.getValue(x, slv);
                break;
            case 4: // Defense %
                xOpt = 10;
                break;
            case 5: // Life Drain
                xOpt = 1;
                break;
        }
        chr.write(UserPacket.effect(Effect.avatarOriented("Skill/2003.img/skill/20031210/affected/" + (randomInt - 1))));
        chr.write(UserRemote.effect(chr.getId(), Effect.avatarOriented("Skill/2003.img/skill/20031210/affected/" + (randomInt - 1))));

        o.nOption = randomInt;
        o.rOption = skill.getSkillId();
        o.tOption = si.getValue(time, slv);
        o.xOption = xOpt;
        tsm.putCharacterStatValue(Judgement, o);
        tsm.sendSetStatPacket();
    }


    // Attack related methods ------------------------------------------------------------------------------------------

    @Override
    public void handleAttack(Client c, AttackInfo attackInfo) {
        if (attackInfo.skillId != LUCK_OF_THE_DRAW_ATOM) {
            for (Job jobHandler : stealJobHandlers) {
                jobHandler.handleAttack(c, attackInfo);
            }
        }
        Char chr = c.getChr();
        TemporaryStatManager tsm = chr.getTemporaryStatManager();
        Skill skill = chr.getSkill(attackInfo.skillId);
        int skillID = 0;
        SkillInfo si = null;
        boolean hasHitMobs = attackInfo.mobAttackInfo.size() > 0;
        int slv = 0;
        if (skill != null) {
            si = SkillData.getSkillInfoById(skill.getSkillId());
            slv = (byte) skill.getCurrentLevel();
            skillID = skill.getSkillId();
        }
        if (hasHitMobs
                && attackInfo.skillId != CARTE_NOIR
                && attackInfo.skillId != CARTE_BLANCHE
                && attackInfo.skillId != LUCK_OF_THE_DRAW_ATOM) {
            doCarteNoir(attackInfo);
            drainLifeByJudgmentDraw();
            if (chr.hasSkill(PHANTOMS_MARK) && hasHitMobs && (isCaneSkill(attackInfo.skillId) || attackInfo.skillId == TEMPEST)) {
                setPhantomMarkOnMob(attackInfo);
            }
        }

        Option o1 = new Option();
        Option o2 = new Option();
        Option o3 = new Option();
        switch (attackInfo.skillId) {
            case CARTE_ROSE_FINALE:
                for (Position position : attackInfo.positions) {
                    AffectedArea aa = AffectedArea.getAffectedArea(chr, attackInfo);
                    aa.setPosition(position);
                    aa.setDelay((short) 13);
                    aa.setRect(aa.getPosition().getRectAround(si.getFirstRect()));
                    chr.getField().spawnAffectedArea(aa);
                }
                break;
        }

        super.handleAttack(c, attackInfo);
    }

    @Override
    public BypassCooldownCheckType canBypassCooldownCheck(int skillId, AttackInfo attackInfo, SkillUseInfo sui, SkillUseSource source) {

        switch (skillId) {
            case GHOSTWALK:
                if (chr.getLevel() >= 10) {
                    return BypassCheckAndCooldown;
                }
                break;
        }


        // Using attackInfo.skillId, as skillId is corrected through SkillConstants.getCorrectCooltimeSkill
        // And they need to be handled separately.
        switch (attackInfo.skillId) {
            case RIFT_BREAK_ALL_ATTACKS_IN_ONE:
                if (sui.multiAttackInfoSequenceCounter > 1) {
                    return BypassCheckAndCooldown;
                }
                break;
            case RIFT_BREAK_TELEPORT:
                if (chr.hasSkillOnCooldown(skillId)) {
                    return BypassCheckAndCooldown;
                }
                break;
        }
        return super.canBypassCooldownCheck(skillId, attackInfo, sui, source);
    }

    private void setPhantomMarkOnMob(AttackInfo attackInfo) {
        TemporaryStatManager tsm = chr.getTemporaryStatManager();
        Option o1 = new Option();
        Option o2 = new Option();
        SkillInfo si = SkillData.getSkillInfoById(PHANTOMS_MARK);
        byte slv = (byte) chr.getSkillLevel(PHANTOMS_MARK);

        int count = 1;
        int prevMobId = 0;
        if (attackInfo.skillId == MILLE_AIGUILLES) {
            if (phantomMarkMille < si.getValue(y, slv)) {
                phantomMarkMille++;
                return;
            }
            phantomMarkMille = 0;
        }
        if (tsm.hasStat(PhantomMarkMobStat)) {
            count = tsm.getOption(PhantomMarkMobStat).nOption;
            prevMobId = tsm.getOption(PhantomMarkMobStat).xOption;
        }

        int finalPrevMobId = prevMobId;
        boolean hitsPrevMob = attackInfo.mobAttackInfo.stream().anyMatch(mai -> mai.mobId == finalPrevMobId);
        if (hitsPrevMob) {
            Mob mob = (Mob) chr.getField().getLifeByObjectID(finalPrevMobId);
            if (mob != null) {
                count++;
                o1.nOption = count > si.getValue(s2, slv) ? si.getValue(s2, slv) : count;
                o1.xOption = finalPrevMobId;
            }
        } else {
            o1.nOption = 1;
            for (MobAttackInfo mai : attackInfo.mobAttackInfo) {
                Mob mob = (Mob) chr.getField().getLifeByObjectID(mai.mobId);
                if (mob == null) {
                    continue;
                }
                o1.xOption = mob.getObjectId();

                if (mob.isBoss()) { //  QoL | If attacking boss, boss will get hit.
                    break;
                }
            }
        }

        o1.rOption = si.getSkillId();
        o1.tOption = si.getValue(time, slv);
        tsm.putCharacterStatValue(PhantomMarkMobStat, o1);
        o2.nOption = 1;
        o2.rOption = si.getSkillId();
        o2.xOption = (tsm.hasStat(PhantomMark) ? (tsm.getOption(PhantomMark).xOption + 1 > si.getValue(q, slv) ? si.getValue(q, slv) : tsm.getOption(PhantomMark).xOption + 1) : 1);
        tsm.putCharacterStatValue(PhantomMark, o2);
        tsm.sendSetStatPacket();
    }

    private void doCarteNoir(AttackInfo attackInfo) {
        if (attackInfo.skillId == MILLE_AIGUILLES) {
            var ai = new AttackInfo();
            ai.mobAttackInfo = new ArrayList<>() {{ add(attackInfo.mobAttackInfo.get(0)); }};
            ai.skillId = attackInfo.skillId;
            ai.mobCount = 1;
            cartDeck(1);
            createCarteForceAtom(ai);
        } else {
            cartDeck(attackInfo.mobCount);
            createCarteForceAtom(attackInfo);
        }
    }

    private void createCarteForceAtom(AttackInfo attackInfo) {
        if (!chr.hasSkill(CARTE_BLANCHE) || attackInfo.mobCount <= 0) {
            return;
        }
        boolean hasNoir = chr.hasSkill(CARTE_NOIR);
        ForceAtomEnum fae = hasNoir ? ForceAtomEnum.PHANTOM_CARD_2 : ForceAtomEnum.PHANTOM_CARD_1;
        int skillId = hasNoir ? CARTE_NOIR : CARTE_BLANCHE;
        List<Integer> targets = new ArrayList<>();
        List<ForceAtomInfo> faiList = new ArrayList<>();
        int propp = hasNoir ? chr.getSkillStatValue(prop, CARTE_NOIR) : chr.getSkillStatValue(prop, CARTE_BLANCHE);

        for (var mai : attackInfo.mobAttackInfo) {
            if (Util.succeedProp(propp)) {
                ForceAtomInfo fai = new ForceAtomInfo(chr.getNewForceAtomKey(), fae.getInc(), Util.getRandom(15, 30), Util.getRandom(15, 30),
                        0, Util.getRandom(0, 50), Util.getCurrentTime(), 0, 0,
                        new Position());
                faiList.add(fai);
                targets.add(mai.mob != null ? mai.mobId : 0);
            }
        }

        chr.createForceAtom(new ForceAtom(false, 0, chr.getId(), fae,
                true, targets, skillId, faiList, new Rect(), 0, 0,
                new Position(), skillId, new Position(), 0));
    }

    private void createCarteForceAtomByJudgmentDraw() {
        if (!chr.hasSkill(CARTE_BLANCHE)) {
            return;
        }
        boolean hasNoir = chr.hasSkill(CARTE_NOIR);
        Rect rect = new Rect(
                new Position(
                        chr.getPosition().getX() - 450,
                        chr.getPosition().getY() - 450),
                new Position(
                        chr.getPosition().getX() + 450,
                        chr.getPosition().getY() + 450)
        );
        List<Mob> mobs = chr.getField().getMobsInRect(rect).stream().filter(m -> !MobConstants.isFriendlyMob(m.getTemplateId())).collect(Collectors.toList());
        if (mobs.size() <= 0) {
            return;
        }
        Mob mob = Util.getRandomFromCollection(mobs);
        var attCount = chr.hasSkill(JUDGMENT_DRAW_2) ? 10 : 5;
        ForceAtomEnum fae = hasNoir ? ForceAtomEnum.PHANTOM_CARD_2 : ForceAtomEnum.PHANTOM_CARD_1;
        int skillId = hasNoir ? CARTE_NOIR : CARTE_BLANCHE;
        List<Integer> targets = new ArrayList<>();
        List<ForceAtomInfo> faiList = new ArrayList<>();
        for (int i = 0; i < attCount; i++) {

            ForceAtomInfo fai = new ForceAtomInfo(chr.getNewForceAtomKey(), fae.getInc(), 18, 20,
                    0, 15 * i, Util.getCurrentTime(), 0, 0,
                    new Position());
            faiList.add(fai);
            targets.add(mob.getObjectId());
        }
        chr.createForceAtom(new ForceAtom(false, 0, chr.getId(), fae,
                true, targets, skillId, faiList, new Rect(), 0, 0,
                mob.getPosition(), skillId, mob.getPosition(), 0));
    }

    public void handleCancelKeyDownSkill(Char chr, int skillID) {
        switch (skillID) {
            case LUCK_OF_THE_DRAW:
                drawCardByLuckOfTheDraw();
                break;
            case SHROUD_WALK:
                TemporaryStatManager tsm = chr.getTemporaryStatManager();
                tsm.removeStatsBySkill(skillID);
                break;
        }
        super.handleCancelKeyDownSkill(chr, skillID);
    }

    private void createAceInTheHoleForceAtom(int mobId) {
        Field field = chr.getField();
        if (!chr.hasSkill(ACE_IN_THE_HOLE)) {
            return;
        }
        Skill skill = chr.getSkill(ACE_IN_THE_HOLE);
        SkillInfo si = SkillData.getSkillInfoById(ACE_IN_THE_HOLE);
        int slv = skill.getCurrentLevel();
        ForceAtomEnum fae = ForceAtomEnum.ACE_IN_THE_HOLE;

        Mob mob = (Mob) field.getLifeByObjectID(mobId);
        ForceAtomInfo forceAtomInfo = new ForceAtomInfo(chr.getNewForceAtomKey(), fae.getInc(), 25, 8,
                270 + Util.getRandom(0, 30), 500, Util.getCurrentTime(), 1, 0,
                new Position());
        ForceAtom fa = new ForceAtom(false, 0, chr.getId(), fae,
                true, mob == null ? 0 : mob.getObjectId(), ACE_IN_THE_HOLE_ATOM, forceAtomInfo, chr.getPosition().getRectAround(si.getFirstRect()), 0, 300,
                chr.getPosition(), 0, mob == null ? new Position() : mob.getPosition(), 0);
        fa.setMaxRecreationCount(si.getValue(z, slv));
        chr.createForceAtom(fa);
    }

    public void handleForceAtomCollision(ForceAtom fa, ForceAtomCollisionInfo faci) {
        var faKey = faci.forceAtomKey;
        var position = faci.position;

        if (fa != null && fa.getCurRecreationCount(faKey) >= fa.getMaxRecreationCount(faKey) && fa.getSkillId() == ACE_IN_THE_HOLE_ATOM) {
            chr.write(UserLocal.aceInTheHoleFinisher(ACE_IN_THE_HOLE_FINISHER, chr.getSkillLevel(ACE_IN_THE_HOLE), position));
        }

        super.handleForceAtomCollision(fa, faci);
    }

    private void drainLifeByJudgmentDraw() {
        if (!chr.hasSkill(JUDGMENT_DRAW_2)) {
            return;
        }
        Skill skill = chr.getSkill(JUDGMENT_DRAW_2);
        SkillInfo si = SkillData.getSkillInfoById(skill.getSkillId());
        int slv = skill.getCurrentLevel();
        TemporaryStatManager tsm = chr.getTemporaryStatManager();
        if (tsm.hasStat(Judgement) && tsm.getOption(Judgement).nOption == 5) {
            int healrate = si.getValue(z, slv);
            chr.heal((int) (chr.getMaxHP() * ((double) healrate / 100)));
        }
    }

    private int getMaxCards() {
        int num = 0;
        if (chr.hasSkill(CARTE_BLANCHE)) {
            num = 20;
        }
        if (chr.hasSkill(CARTE_NOIR)) {
            num = 40;
        }
        return num;
    }

    private void resetCardStack() {
        setCardAmount((byte) 0);
    }

    public byte getCardAmount() {
        return cardAmount;
    }

    public void setCardAmount(byte cardAmount) {
        this.cardAmount = cardAmount;
        chr.write(UserLocal.incJudgementStack(getCardAmount()));
        if (cardAmount >= getMaxCards() && getMaxCards() > 0) {
            createCarteForceAtomByJudgmentDraw();
            giveJudgmentDrawBuff(chr.hasSkill(JUDGMENT_DRAW_2) ? JUDGMENT_DRAW_2 : JUDGMENT_DRAW_1);
            resetCardStack();
        }
    }

    private void cartDeck() {
        cartDeck(1);
    }

    private void cartDeck(int num) {
        if (num == 0) {
            return;
        }
        var curAmount = getCardAmount();
        setCardAmount((byte) Math.min(getMaxCards(), curAmount + num));
    }


    // Skill related methods -------------------------------------------------------------------------------------------

    @Override
    public void handleSkill(Char chr, TemporaryStatManager tsm, int skillId, int slv, InPacket inPacket, SkillUseInfo skillUseInfo) {
        super.handleSkill(chr, tsm, skillId, slv, inPacket, skillUseInfo);
        for (Job jobHandler : stealJobHandlers) {
            jobHandler.handleSkill(chr, tsm, skillId, slv, inPacket, skillUseInfo);
        }
        Skill skill = chr.getSkill(skillId);
        SkillInfo si = null;
        if (skill != null) {
            si = SkillData.getSkillInfoById(skillId);
        }
        Option o1 = new Option();
        Option o2 = new Option();
        Option o3 = new Option();
        Option o4 = new Option();
        switch (skillId) {
            case SHROUD_WALK:
                o1.nOption = 300;
                o1.rOption = skillId;
                o1.tOption = si.getValue(time, slv);
                tsm.putCharacterStatValue(Invisible, o1, true);
                break;
            case VOL_DAME:
                stealBuffVolDame();
                break;
            case JUDGMENT_DRAW_1:
            case JUDGMENT_DRAW_2:
                createCarteForceAtomByJudgmentDraw();
                giveJudgmentDrawBuff(skillId);
                resetCardStack();
                break;
            case ACE_IN_THE_HOLE:
                inPacket.decodeByte(); // 1
                var mobId = inPacket.decodeInt();
                for (int i = 0; i < si.getValue(bulletCount, slv); i++) {
                    createAceInTheHoleForceAtom(mobId);
                }
                break;
            case ACE_IN_THE_HOLE_FINISHER:
                var position = inPacket.decodePosition();
                ForceAtom fa = chr.getForceAtoms().values().stream().filter(f -> f.getSkillId() == ACE_IN_THE_HOLE_ATOM).findFirst().orElse(null);
                if (fa != null) {
                    for (int key : fa.getKeys()) {
                        chr.removeForceAtomByKey(key);
                    }
                }

                chr.write(UserLocal.aceInTheHoleFinisher(ACE_IN_THE_HOLE_FINISHER, chr.getSkillLevel(ACE_IN_THE_HOLE), position));
                break;
            case PHANTOMS_MARK:
                List<Integer> extraSkillList = new ArrayList<>();
                Objects.requireNonNull(si).getExtraSkillInfo().forEach(map -> extraSkillList.addAll(map.keySet()));
                chr.write(FieldPacket.registerExtraSkill(skillUseInfo.endingPosition, skillId, extraSkillList, skillUseInfo.isLeft));
                tsm.removeStatsBySkill(skillId);

                o1.nOption = 1;
                o1.rOption = skillId;
                o1.tOption = 2;
                tsm.putCharacterStatValue(IndieNotDamaged, o1, true);
                break;
            case GHOSTWALK:
                // [Phantom] Custom Skill Change | Use 'Ghostwalk' to quick swap between presets
                if (chr.getLevel() >= 10) {
                    SkillStealManager.swapPresets(chr);
                } else {
                    o1.nOption = si.getValue(x, slv);
                    o1.rOption = skillId;
                    o1.tOption = si.getValue(time, slv);
                    tsm.putCharacterStatValue(DarkSight, o1);
                }
                break;
            case CANE_BOOSTER:
                o1.nOption = si.getValue(x, slv);
                o1.rOption = skillId;
                o1.tOption = si.getValue(time, slv);
                tsm.putCharacterStatValue(IndieBooster, o1);
                break;
            case FINAL_FEINT:
                o1.nOption = 1;
                o1.rOption = skillId;
                o1.tOption = si.getValue(time, slv);
                tsm.putCharacterStatValue(ReviveOnce, o1, true);
                break;
            case BAD_LUCK_WARD:
                o1.nOption = si.getValue(indieMhpR, slv);
                o1.rOption = skillId;
                o1.tOption = si.getValue(time, slv);
                tsm.putCharacterStatValue(IndieMHPR, o1);
                o2.nOption = si.getValue(indieMmpR, slv);
                o2.rOption = skillId;
                o2.tOption = si.getValue(time, slv);
                tsm.putCharacterStatValue(IndieMMPR, o2);
                o3.nOption = si.getValue(x, slv);
                o3.rOption = skillId;
                o3.tOption = si.getValue(time, slv);
                tsm.putCharacterStatValue(AsrR, o3);
                o4.nOption = si.getValue(y, slv);
                o4.rOption = skillId;
                o4.tOption = si.getValue(time, slv);
                tsm.putCharacterStatValue(TerR, o4);
                break;
            case PENOMBRE:
                o1.nOption = si.getValue(y, slv);
                o1.rOption = skillId;
                o1.tOption = si.getValue(time, slv);
                tsm.putCharacterStatValue(IndieIgnoreMobpdpR, o1);
                break;
            case CLAIR_DE_LUNE:
                o1.nOption = si.getValue(indiePad, slv);
                o1.rOption = skillId;
                o1.tOption = si.getValue(time, slv);
                tsm.putCharacterStatValue(IndiePAD, o1);
                o2.nOption = si.getValue(indieAcc, slv);
                o2.rOption = skillId;
                o2.tOption = si.getValue(time, slv);
                tsm.putCharacterStatValue(IndieACC, o2);
                break;
            case PRIERE_DARIA:
                o1.rOption = skillId;
                o1.nOption = si.getValue(indieDamR, slv);
                o1.tOption = si.getValue(time, slv);
                tsm.putCharacterStatValue(IndieDamR, o1);
                o2.rOption = skillId;
                o2.nOption = si.getValue(indieIgnoreMobpdpR, slv);
                o2.tOption = si.getValue(time, slv);
                tsm.putCharacterStatValue(IndieIgnoreMobpdpR, o2);
                break;
            case HEROIC_MEMORIES_PH:
                o1.rOption = skillId;
                o1.nOption = si.getValue(indieDamR, slv);
                o1.tOption = si.getValue(time, slv);
                tsm.putCharacterStatValue(IndieDamR, o1);
                break;
        }
        tsm.sendSetStatPacket();
    }

    @Override
    public void handleUserSkillInfo(SkillUseInfo sui) {

        switch (sui.skillID) {
            case RIFT_BREAK_TELEPORT:
            case RIFT_BREAK_ALL_ATTACKS_IN_ONE:
                var remaining = sui.phantomRiftBreaksRemaining;
                var cdRMulti = chr.getSkillStatValueD(z, RIFT_BREAK_TELEPORT);
                var finalCdR = remaining * cdRMulti;
                chr.reduceSkillCoolTime(RIFT_BREAK_TELEPORT, (int) finalCdR);
                break;
        }

        super.handleUserSkillInfo(sui);
    }

    //PowerGuard
    //NotDamaged
    //EPAD
    //DamAbsorbShield
    private void stealBuffVolDame() {
        TemporaryStatManager tsm = chr.getTemporaryStatManager();
        Option o1 = new Option();

        if (!chr.hasSkill(VOL_DAME)) {
            return;
        }

        Skill skill = chr.getSkill(VOL_DAME);
        SkillInfo si = SkillData.getSkillInfoById(skill.getSkillId());
        int slv = skill.getCurrentLevel();

        Rect rect = new Rect(   //NPE when using the skill's rect
                new Position(
                        chr.getPosition().getX() - 250,
                        chr.getPosition().getY() - 250),
                new Position(
                        chr.getPosition().getX() + 250,
                        chr.getPosition().getY() + 250)
        );
        List<Mob> mobs = chr.getField().getMobsInRect(rect);
        if (mobs.size() <= 0) {
            return;
        }
        MobStat buffFromMobStat = MobStat.Mystery; //Needs to be initialised
        MobStat[] mobStats = new MobStat[]{ //Ordered from Weakest to Strongest, since  the for loop will save the last MobsStat
                PCounter,           //Dmg Reflect 600%
                MCounter,           //Dmg Reflect 600%
                PImmune,            //Dmg Recv -40%
                MImmune,            //Dmg Recv -40%
                PowerUp,            //Attack +40
                MagicUp,            //Attack +40
                MobStat.Invincible, //Invincible for short time
        };
        for (Mob mob : mobs) {
            MobTemporaryStat mts = mob.getTemporaryStat();
            List<MobStat> currentMobStats = Arrays.stream(mobStats).filter(mts::hasCurrentMobStat).collect(Collectors.toList());
            for (MobStat currentMobStat : currentMobStats) {
                if (mts.hasCurrentMobStat(currentMobStat)) {
                    mts.removeMobStat(currentMobStat);
                    buffFromMobStat = currentMobStat;
                }
            }
        }
        switch (buffFromMobStat) {
            case PCounter:
            case MCounter:
                o1.nOption = si.getValue(y, slv);
                o1.rOption = skill.getSkillId();
                o1.tOption = 30;
                tsm.putCharacterStatValue(PowerGuard, o1);
                break;
            case PImmune:
            case MImmune:
                o1.nOption = si.getValue(x, slv);
                o1.rOption = skill.getSkillId();
                o1.tOption = 30;
                tsm.putCharacterStatValue(CharacterTemporaryStat.EVA, o1); //as a check to allow for DmgReduction in the Hit Handler
                break;
            case PowerUp:
            case MagicUp:
                o1.nOption = si.getValue(epad, slv);
                o1.rOption = skill.getSkillId();
                o1.tOption = 30;
                tsm.putCharacterStatValue(CharacterTemporaryStat.PAD, o1);
                break;
            case Invincible:
                o1.nOption = 1;
                o1.rOption = skill.getSkillId();
                o1.tOption = 5;
                tsm.putCharacterStatValue(NotDamaged, o1);
                break;
        }
        tsm.sendSetStatPacket();
    }

    public void createLuckOfTheDrawForceAtom() {
        Skill skill = chr.getSkill(LUCK_OF_THE_DRAW);
        SkillInfo si = SkillData.getSkillInfoById(skill.getSkillId());
        int slv = skill.getCurrentLevel();

        //Rect rect = chr.getRectAround(si.getFirstRect());
        Rect rect = chr.getRectAround(new Rect(-700, -400, 0, 40));
        if (!chr.isLeft()) {
            rect = rect.horizontalFlipAround(chr.getPosition().getX());
        }
        List<Integer> targetList = new ArrayList<>();
        List<ForceAtomInfo> faiList = new ArrayList<>();
        ForceAtomEnum fae = ForceAtomEnum.PHANTOM_CARD_2;
        List<Mob> possibleTargetMobs = chr.getField().getMobsInRect(rect).stream().filter(m -> !MobConstants.isFriendlyMob(m.getTemplateId())).collect(Collectors.toList());
        for (int i = 0; i < 14; i++) {
            Mob mob = Util.getRandomFromCollection(possibleTargetMobs);
            int fImpact = new Random().nextInt(15) + 15;
            int sImpact = new Random().nextInt(5) + 8;
            int angle = new Random().nextInt(60) + 295;
            int fullR = new Random().nextInt(360);
            int radius = new Random().nextInt(20) + 70;
            ForceAtomInfo forceAtomInfo = new ForceAtomInfo(chr.getNewForceAtomKey(), fae.getInc(), fImpact, sImpact,
                    angle, 30 * i, Util.getCurrentTime(), 0, 0,
                    new Position((int) (radius * math.cos(fullR)), (int) (radius * math.sin(fullR))));
            faiList.add(forceAtomInfo);
            targetList.add(mob != null ? mob.getObjectId() : 0);
        }
        chr.createForceAtom(new ForceAtom(false, 0, chr.getId(), fae,
                true, targetList, LUCK_OF_THE_DRAW_ATOM, faiList, rect, 0, 0,
                new Position(), LUCK_OF_THE_DRAW_ATOM, new Position(), 0));

    }

    private void drawCardByLuckOfTheDraw() {
        List<Integer> randomCardSkillId = Arrays.asList(
                LUCK_OF_THE_DRAW_RED_CROSS,
                LUCK_OF_THE_DRAW_TREE_OF_LIFE,
                LUCK_OF_THE_DRAW_HOURGLASS,
                LUCK_OF_THE_DRAW_SHARP_SWORD,
                LUCK_OF_THE_DRAW_COMBINED
        );

        int drawnCard = Util.getRandomFromCollection(randomCardSkillId);
        Option o1 = new Option();
        Option o2 = new Option();
        Option o3 = new Option();
        Option o4 = new Option();
        Option o5 = new Option();
        SkillInfo si = SkillData.getSkillInfoById(drawnCard);
        int slv = chr.getSkillLevel(LUCK_OF_THE_DRAW);
        int duration = SkillData.getSkillInfoById(LUCK_OF_THE_DRAW).getValue(dotInterval, slv);
        List<Char> partyChrList = new ArrayList<>();
        if (chr.getParty() != null) {
            partyChrList.addAll(chr.getParty().getPartyMembersInSameField(chr));
        }
        partyChrList.add(chr);
        for (Char partyChr : partyChrList) {
            TemporaryStatManager ptyTsm = partyChr.getTemporaryStatManager();
            switch (drawnCard) {
                case LUCK_OF_THE_DRAW_RED_CROSS:
                    o1.nOption = si.getValue(indieMhpR, slv);
                    o1.rOption = drawnCard;
                    o1.tOption = duration;
                    ptyTsm.putCharacterStatValue(IndieMHPR, o1);
                    if (healOTByLuckOfTheDrawTimer != null && !healOTByLuckOfTheDrawTimer.isDone()) {
                        healOTByLuckOfTheDrawTimer.cancel(false);
                    }
                    healOTByLuckOfTheDrawTimer = EventManager.addFixedRateEvent(() -> healOTByLuckOfTheDraw(ptyTsm, si, slv), 0, 2, TimeUnit.SECONDS);
                    break;
                case LUCK_OF_THE_DRAW_TREE_OF_LIFE:
                    o1.nOption = si.getValue(z, slv);
                    o1.rOption = drawnCard;
                    o1.tOption = duration;
                    ptyTsm.putCharacterStatValue(DamageReduce, o1);
                    o2.nOption = si.getValue(indieAsrR, slv);
                    o2.rOption = drawnCard;
                    o2.tOption = duration;
                    ptyTsm.putCharacterStatValue(IndieAsrR, o2);
                    break;
                case LUCK_OF_THE_DRAW_HOURGLASS:
                    for (var cdSkills : partyChr.getSkillCoolTimes().keySet()) {
                        SkillInfo cdsi = SkillData.getSkillInfoById(cdSkills);
                        if (cdsi != null && !cdsi.isNotCooltimeReset()) {
                            partyChr.reduceSkillCoolTime(cdSkills, (int) (chr.getRemainingCoolTime(cdSkills) * ((double) si.getValue(x, slv) / 100)));
                        }
                    }
                    break;
                case LUCK_OF_THE_DRAW_SHARP_SWORD:
                    o1.nOption = si.getValue(indiePMdR, slv);
                    o1.rOption = drawnCard;
                    o1.tOption = duration;
                    ptyTsm.putCharacterStatValue(IndiePMdR, o1);
                    break;
                case LUCK_OF_THE_DRAW_COMBINED:
                    o1.nOption = si.getValue(indieMhpR, slv);
                    o1.rOption = drawnCard;
                    o1.tOption = duration;
                    ptyTsm.putCharacterStatValue(IndieMHPR, o1);
                    o2.nOption = si.getValue(z, slv);
                    o2.rOption = drawnCard;
                    o2.tOption = duration;
                    ptyTsm.putCharacterStatValue(DamageReduce, o2);
                    o3.nOption = si.getValue(indieAsrR, slv);
                    o3.rOption = drawnCard;
                    o3.tOption = duration;
                    ptyTsm.putCharacterStatValue(IndieAsrR, o3);
                    o4.nOption = si.getValue(indiePMdR, slv);
                    o4.rOption = drawnCard;
                    o4.tOption = duration;
                    ptyTsm.putCharacterStatValue(IndiePMdR, o4);
                    for (var cdSkills : partyChr.getSkillCoolTimes().keySet()) {
                        SkillInfo cdsi = SkillData.getSkillInfoById(cdSkills);
                        if (cdsi != null && !cdsi.isNotCooltimeReset()) {
                            partyChr.reduceSkillCoolTime(cdSkills, (int) (chr.getRemainingCoolTime(cdSkills) * ((double) si.getValue(x, slv) / 100)));
                        }
                    }
                    break;
            }
            if (chr == partyChr) {
                o5.nOption = 1;
                o5.rOption = LUCK_OF_THE_DRAW;
                o5.tOption = 3;
                ptyTsm.putCharacterStatValue(IndieNotDamaged, o5, true);
            }
            ptyTsm.sendSetStatPacket();
        }
        for (int skill : Arrays.asList(LUCK_OF_THE_DRAW, drawnCard)) {
            chr.write(FieldPacket.fieldEffect(FieldEffect.getOffFieldEffectFromWz(String.format("Skill/40004.img/skill/%d/screen", skill), 0)));
            chr.getField().broadcastPacket(UserRemote.effect(chr.getId(), Effect.avatarOriented(String.format("Skill/40004.img/skill/%d/screen", skill))));
        }
    }

    private void healOTByLuckOfTheDraw(TemporaryStatManager tsm, SkillInfo si, int slv) {
        if (tsm.getOptByCTSAndSkill(IndieMHPR, LUCK_OF_THE_DRAW_RED_CROSS) != null) {
            int healR = (int) ((double) (chr.getMaxHP() * si.getValue(y, slv)) / 100F);
            tsm.getChr().heal(healR);
            tsm.getChr().healMP(healR);
        } else {
            healOTByLuckOfTheDrawTimer.cancel(true);
        }
    }

    @Override
    public void handleSkillPrepareStop(Char chr, int skillId, SkillUseInfo sui) {
        if (skillId == BladeMaster.FINAL_CUT) {
            return;
        }
        super.handleSkillPrepareStop(chr, skillId, sui);
    }


    // Hit related methods ---------------------------------------------------------------------------------------------

    @Override
    public void handleHit(Client c, InPacket inPacket, HitInfo hitInfo) {
        for (Job jobHandler : stealJobHandlers) {
            jobHandler.handleHit(c, inPacket, hitInfo);
        }
        TemporaryStatManager tsm = chr.getTemporaryStatManager();
        if (!chr.hasSkill(VOL_DAME)) {
            return;
        }
        if (tsm.getOptByCTSAndSkill(CharacterTemporaryStat.EVA, VOL_DAME) != null) {
            Skill skill = chr.getSkill(VOL_DAME);
            SkillInfo si = SkillData.getSkillInfoById(skill.getSkillId());
            int dmgPerc = si.getValue(x, skill.getCurrentLevel());
            int dmg = hitInfo.hpDamage;
            hitInfo.hpDamage = dmg - (dmg * (dmgPerc / 100));
        }

        super.handleHit(c, inPacket, hitInfo);
    }

    public void reviveByFinalFeint() {
        TemporaryStatManager tsm = chr.getTemporaryStatManager();
        Option o = new Option();
        Skill skill = chr.getSkill(FINAL_FEINT);
        if (skill == null) {
            return;
        }

        SkillInfo si = SkillData.getSkillInfoById(skill.getSkillId());
        int slv = skill.getCurrentLevel();

        chr.heal(chr.getMaxHP(), false, true);
        tsm.removeStatsBySkill(skill.getSkillId());
        tsm.sendResetStatPacket();
        chr.chatMessage("You have been revived by Final Feint.");
        chr.write(UserPacket.effect(Effect.skillSpecial(skill.getSkillId())));
        chr.getField().broadcastPacket(UserRemote.effect(chr.getId(), Effect.skillSpecial(skill.getSkillId())));

        o.nOption = 1;
        o.rOption = skill.getSkillId();
        o.tOption = si.getValue(y, slv);
        tsm.putCharacterStatValue(IndieNotDamaged, o, true);
        tsm.sendSetStatPacket();
    }

    @Override
    public void handleLevelUp() {
        super.handleLevelUp();
        if (chr.getLevel() == 10) {
            chr.addSkill(GHOSTWALK, 1, 1);
        }
    }

    @Override
    public void stopTimers() {
        if (healOTByLuckOfTheDrawTimer != null) {
            healOTByLuckOfTheDrawTimer.cancel(true);
        }
        super.stopTimers();
    }

    @Override
    public void onWarp(Field oldField, Field newField) {
        super.onWarp(oldField, newField);
        setCardAmount(getCardAmount());
    }
}