package net.swordie.ms.client.character.skills.debuff;

import net.swordie.ms.client.character.Char;
import net.swordie.ms.client.character.skills.Option;
import net.swordie.ms.life.mob.Mob;
import net.swordie.ms.life.mob.MobStat;
import net.swordie.ms.life.mob.MobTemporaryStat;
import net.swordie.ms.util.Util;
import net.swordie.ms.world.field.Field;

import java.util.Collection;
import java.util.Map;

/**
 * Created on 04/06/2021.
 *
 * @author Asura
 */
public class DebuffUtil {

    public static void applyDebuffOnMobs(Char chr, Map<MobStat, Option> msMap, Collection<Integer> mobs, DebuffInfo di) {
        Field field = chr.getField();

        var ignoreBoss = di.ignoreBoss; // true -> Do not apply Debuff on Boss
        var proc = di.proc; // chance of proccing

        for (var objId : mobs) {
            Mob mob = field.getLifeByObjectID(Mob.class, objId);

            if (mob == null                             // Cannot find mob -> Skip
                    || (ignoreBoss & mob.isBoss())      // Mob is boss and ignoreBoss is true -> Skip
                    || (!Util.succeedProp(proc)))       // Proc chance failed -> Skip
            {
                continue;
            }


            MobTemporaryStat mts = mob.getTemporaryStat();
            for (var entry : msMap.entrySet()) {
                var mobStat = entry.getKey();
                var option = entry.getValue();

                mts.addStatOptionsAndBroadcast(chr, mobStat, option);
            }
        }
    }

    public static void applyDebuffOnMobs(Char chr, Map<MobStat, Option> msMap, Collection<Integer> mobs) {
        applyDebuffOnMobs(chr, msMap, mobs, new DebuffInfo());
    }

    public static void applyDebuffOnMobs(Char chr, MobStat ms, Option o, Collection<Integer> mobs, DebuffInfo di) {
        applyDebuffOnMobs(chr, Map.of(ms, o), mobs, di);
    }

    public static void applyDebuffOnMobs(Char chr, MobStat ms, Option o, Collection<Integer> mobs) {
        applyDebuffOnMobs(chr, ms, o, mobs, new DebuffInfo());
    }
}
