package net.swordie.ms.world.field.modules;

import net.swordie.ms.connection.packet.WvsContext;
import net.swordie.ms.connection.packet.field.FieldPacket;
import net.swordie.ms.constants.GameConstants;
import net.swordie.ms.constants.MobConstants;
import net.swordie.ms.enums.EliteState;
import net.swordie.ms.enums.WeatherEffNoticeType;
import net.swordie.ms.life.mob.Mob;
import net.swordie.ms.loaders.MobData;
import net.swordie.ms.loaders.SkillData;
import net.swordie.ms.util.Util;
import net.swordie.ms.util.container.Triple;
import net.swordie.ms.util.container.Tuple;
import net.swordie.ms.world.field.Field;
import net.swordie.ms.world.field.fieldevents.timedfieldevents.elitechampions.*;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

/**
 * Created on 08/02/2022.
 *
 * @author Asura
 */
public class EliteFieldModule {
    private static final Logger log = LogManager.getLogger();

    private static void startRandomEliteChampion(Field field) {
        var rList = new ArrayList<EliteChampionFieldEvent>() {{
            add(new BlackCrescendoSlimeEvent(field, GameConstants.ELITE_CHAMPION_TIME_LIMIT));
            add(new DarkGeminiGargoyleEvent(field, GameConstants.ELITE_CHAMPION_TIME_LIMIT));
            add(new DarkWolfEvent(field, GameConstants.ELITE_CHAMPION_TIME_LIMIT));
            add(new IllusionFlowerEvent(field, GameConstants.ELITE_CHAMPION_TIME_LIMIT));
            add(new ShadowButterflyEvent(field, GameConstants.ELITE_CHAMPION_TIME_LIMIT));
        }};

        var fieldEvent = Util.getRandomFromCollection(rList);
        fieldEvent.setup();
    }

    public static void spawnEliteVersion(Field field, Mob mob) {
        Mob elite = MobData.getMobDeepCopyById(mob.getTemplateId());
        int prefix = field.getId() / 1000000;
        elite.buff(MobConstants.getBuffMultiplierFromRegion(prefix));
        elite.setHomePosition(mob.getPosition().deepCopy());
        elite.setPosition(mob.getPosition().deepCopy());
        elite.setCurFoodhold(mob.getCurFoodhold().deepCopy());
        elite.setHomeFoothold(mob.getCurFoodhold().deepCopy());
        elite.setNotRespawnable(true);
        List<Triple<Integer, Double, Double>> eliteInfos = GameConstants.getEliteInfoByMobLevel(elite.getForcedMobStat().getLevel());
        Triple<Integer, Double, Double> eliteInfo = Util.getRandomFromCollection(eliteInfos);
        int eliteGrade = eliteInfo.getLeft();
        long newHp = (long) (eliteInfo.getMiddle() * elite.getMaxHp());
        long newExp = (long) (eliteInfo.getRight() * elite.getForcedMobStat().getExp());
        elite.setEliteType(1);
        elite.setEliteGrade(eliteGrade);
        Map<Integer, Integer> possibleSkillsMap = SkillData.getEliteMobSkillsByGrade(eliteGrade);
        if (possibleSkillsMap == null) {
            log.error("Could not load elite skills!");
            return;
        }
        List<Tuple<Integer, Integer>> possibleSkills = new ArrayList<>();
        possibleSkillsMap.forEach((k, v) -> possibleSkills.add(new Tuple(k, v)));
        for (int i = 0; i < GameConstants.ELITE_MOB_SKILL_COUNT; i++) {
            Tuple<Integer, Integer> randomSkill = Util.getRandomFromCollection(possibleSkills);
            elite.addEliteSkill(randomSkill.getLeft(), randomSkill.getRight());
            possibleSkills.remove(randomSkill);
        }
        elite.setMaxHp(newHp);
        elite.setHp(newHp);
        elite.getForcedMobStat().setExp(newExp);
        field.setNextEliteSpawnTime(System.currentTimeMillis() + GameConstants.ELITE_MOB_RESPAWN_TIME * 1000);
        field.spawnLife(elite, null);
    }

    private static void spawnEliteBoss(Field field, Mob deathMob) {
        int bossTemplate = Util.getRandomFromCollection(GameConstants.ELITE_BOSS_TEMPLATES);
        Mob eliteMob = MobData.getMobDeepCopyById(bossTemplate);
        eliteMob.setEliteType(3);
        eliteMob.setNotRespawnable(true);
        eliteMob.setMaxHp(MobData.getMobDeepCopyById(eliteMob.getTemplateId()).getMaxHp() * GameConstants.ELITE_BOSS_HP_RATE);
        eliteMob.setHp(eliteMob.getMaxHp());
        eliteMob.setHomeFoothold(deathMob.getHomeFoothold().deepCopy());
        eliteMob.setCurFoodhold(deathMob.getCurFoodhold().deepCopy());
        eliteMob.setPosition(deathMob.getPosition().deepCopy());
        eliteMob.setHomePosition(deathMob.getPosition().deepCopy());
        field.spawnLife(eliteMob, null);
        field.setEliteState(EliteState.EliteBoss);
        field.broadcastPacket(FieldPacket.eliteState(EliteState.EliteBoss, false, GameConstants.ELITE_BOSS_BGM,
                null, null, true));
    }

    public static void checkSpawnElite(Field field, Mob mob) {
        if (field.canSpawnElite() && mob.getEliteType() == 0 && !mob.isNotRespawnable() &&
                Util.succeedProp(GameConstants.ELITE_MOB_SPAWN_CHANCE, 1000)) {
            var eliteKillCount = field.getKilledElites();
            if (eliteKillCount > 1 && eliteKillCount % GameConstants.ELITE_CHAMPION_CYCLIC_COUNT == 0) {
                field.incrementEliteKillCount();
                field.setNextEliteSpawnTime(System.currentTimeMillis() + GameConstants.ELITE_MOB_RESPAWN_TIME * 1000);
                startRandomEliteChampion(field);
            } else {
                spawnEliteVersion(field, mob);
            }

        } else if (mob.getEliteType() == 1) {
            field.incrementEliteKillCount();
            String msg = null;
            if (field.getKilledElites() >= GameConstants.ELITE_BOSS_REQUIRED_KILLS) {
                field.setKilledElites(field.getKilledElites() % GameConstants.ELITE_BOSS_REQUIRED_KILLS);
                spawnEliteBoss(field, mob);

            } else if (field.getKilledElites() >= GameConstants.ELITE_MOB_DARK_NOTIFICATION) {
                msg = "You feel something in the dark energy...";
            } else {
                msg = "The dark energy is still here. It's making the place quite grim.";
            }
            mob.getField().broadcastPacket(WvsContext.weatherEffectNotice(WeatherEffNoticeType.EliteBoss, msg, 8000)); // 8 seconds

        } else if (mob.getEliteType() == EliteState.BonusStage.getVal()) {
            field.broadcastPacket(FieldPacket.eliteState(EliteState.None, true, null, null, null, true));
            field.setEliteState(EliteState.None);
        }
    }
}
