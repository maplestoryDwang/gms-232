package net.swordie.ms.world.field.fieldevents.timedfieldevents.elitechampions;

import net.swordie.ms.client.character.Char;
import net.swordie.ms.life.mob.Mob;
import net.swordie.ms.util.Position;
import net.swordie.ms.util.Util;
import net.swordie.ms.world.field.Field;

import java.util.Arrays;
import java.util.List;

/**
 * Created on 08/02/2022.
 *
 * @author Asura
 */
public class BlackCrescendoSlimeEvent extends EliteChampionFieldEvent {

    /**
     * Black Crescendo Slime - Elite Champion
     *
     * Destroy it, and it will grow bigger 3 times.
     * The 2nd stage has 3x the HP and EXP of the 1st stage, and the 3rd stage has 2x the HP and EXP of the 2nd stage.
     * Based on level 200+ arcane/authentic force maps, compared to the monster in the map:
     *
     * Stage 1: 5.3x  HP, 1.855x EXP
     * Stage 2: 15.9x HP, 5.565x EXP
     * Stage 3: 31.8x HP, 11.13x EXP
     */

    public static final int BLACK_CRESCENDO_SLIME_1 = 8220100;
    public static final int BLACK_CRESCENDO_SLIME_2 = 8220102;
    public static final int BLACK_CRESCENDO_SLIME_3 = 8220104;

    public static final int SLIME_1_HP_MULTI = 5;
    public static final int SLIME_2_HP_MULTI = 16;
    public static final int SLIME_3_HP_MULTI = 32;

    public BlackCrescendoSlimeEvent(Field field, int timeS) {
        super(field, timeS);
    }

    @Override
    public boolean setup() {
        if (!super.setup()) return false;

        Position position;
        var mob = Util.getRandomFromCollection(getField().getMobs());
        if (mob == null) {
            position = Util.getRandomFromCollection(getField().getNonWallFootholds()).getRandomPosition();
        } else {
            position = mob.getPosition();
        }

        getField().spawnMob(BLACK_CRESCENDO_SLIME_1, position.getX(), position.getY(), false, getMinHpPerMobOnField() * SLIME_1_HP_MULTI);

        return true;
    }

    @Override
    public void onMobDamaged(Char attacker, Mob mob, long damage, long oldHp, long newHp) {
        super.onMobDamaged(attacker, mob, damage, oldHp, newHp);

        if (getTemplateList().contains(mob.getTemplateId()) && newHp <= 0) {
            switch (mob.getTemplateId()) {
                case BLACK_CRESCENDO_SLIME_1:
                    getField().spawnMob(BLACK_CRESCENDO_SLIME_2, mob.getPosition().getX(), mob.getPosition().getY(), false, getMinHpPerMobOnField() * SLIME_2_HP_MULTI);
                    break;
                case BLACK_CRESCENDO_SLIME_2:
                    getField().spawnMob(BLACK_CRESCENDO_SLIME_3, mob.getPosition().getX(), mob.getPosition().getY(), false, getMinHpPerMobOnField() * SLIME_3_HP_MULTI);
                    break;
                case BLACK_CRESCENDO_SLIME_3:
                    complete();
                    break;
            }
        }
    }

    @Override
    public List<Integer> getTemplateList() {
        return Arrays.asList(
                BLACK_CRESCENDO_SLIME_1,
                BLACK_CRESCENDO_SLIME_2,
                BLACK_CRESCENDO_SLIME_3
        );
    }
}
