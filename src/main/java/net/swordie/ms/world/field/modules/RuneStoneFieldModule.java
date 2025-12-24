package net.swordie.ms.world.field.modules;

import net.swordie.ms.client.character.Char;
import net.swordie.ms.client.character.runestones.RuneStone;
import net.swordie.ms.connection.packet.field.FieldPacket;
import net.swordie.ms.constants.GameConstants;
import net.swordie.ms.util.Util;
import net.swordie.ms.world.field.Field;

/**
 * Created on 08/02/2022.
 *
 * @author Asura
 */
public class RuneStoneFieldModule {

    public static double getRuneCurseMultiplier(Char chr, Field field) {
        if (chr == null || field == null || field.getInstance() != null || chr.getInstance() != null) {
            return 100D;
        }

        if (chr.hasSkillOnCooldown(RuneStone.SEALED_RUNE_POWER)) {
            return 100D; // Not affected by curse if chr has sealed rune power
        }

        if (field.getRuneStone() == null) {
            return 100D;
        }

        var runeStone = field.getRuneStone();
        return 100D - (GameConstants.RUNE_CURSE_MULTIPLIER_PER_LEVEL * runeStone.getCurseLevel());
    }

    public static boolean canSpawnRune(Char chr, Field field) {
        if (field.getRuneStone() != null) {
            return false;
        }
        if (field.getNextRuneStoneSpawn() > Util.getCurrentTimeLong()) {
            return false;
        }
        if (!field.isChannelField()) {
            return false;
        }
        if (field.getInfo().isTown()) {
            return false;
        }
        if (field.getInfo().getAverageMobLevel() < GameConstants.MIN_LEVEL_FOR_RANDOM_FIELD_OCCURRENCES) {
            return false;
        }
        if (field.getInfo().getAverageMobLevel() - chr.getLevel() > GameConstants.LEVEL_RANGE_TO_SPAWN_RUNE) {
            return false;
        }

        return true;
    }

    public static void trySpawnRune(Char chr, Field field) {
        if (canSpawnRune(chr, field) && Util.succeedProp(GameConstants.RUNE_SPAWN_CHANCE, 10_000)) {
            var runeStone = RuneStone.getRandomRuneStone(field);
            field.setRuneStone(runeStone);
            field.broadcastPacket(FieldPacket.runeStoneAppear(runeStone));
        }
    }

    public static void useRuneStone(Char chr, Field field, RuneStone runeStone) {
        field.broadcastPacket(FieldPacket.completeRune(chr));
        field.broadcastPacket(FieldPacket.runeStoneDisappear(chr.getId()));
        chr.write(FieldPacket.runeStoneSkillAck(runeStone.getRuneType()));

        field.setRuneStone(null);

        field.setNextRuneStoneSpawn(System.currentTimeMillis() + (GameConstants.RUNE_RESPAWN_TIME * 60 * 1000));
    }
}
