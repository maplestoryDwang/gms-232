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
public class IllusionFlowerEvent extends EliteChampionFieldEvent {

    /**
     * A flower will spawn randomly.
     * 10 Killer bees will spawn and chase after the flower.
     *
     * Based on level 200+ arcane/authentic force maps, compared to the monster in the map, each killer bee has 5.3x HP and gives 1.855x EXP.
     */

    public static final int ILLUSION_FLOWER = 8220110;
    public static final int KILLER_BEE = 8220111;

    public static final int KILLER_BEES_COUNT = 10;
    public static final int KILLER_BEES_HP_MULTI = 6;

    public IllusionFlowerEvent(Field field, int timeS) {
        super(field, timeS);
    }

    @Override
    public boolean setup() {
        if (!super.setup()) return false;

        var fieldRect = getField().getInfo().getRect();
        var hp = getMinHpPerMobOnField() * KILLER_BEES_HP_MULTI;

        Position position;
        var mob = Util.getRandomFromCollection(getField().getMobs());
        if (mob == null) {
            position = Util.getRandomFromCollection(getField().getNonWallFootholds()).getRandomPosition();
        } else {
            position = mob.getPosition();
        }
        getField().spawnMob(ILLUSION_FLOWER, position.getX(), position.getY(), false, -1);

        for (var i = 0; i < KILLER_BEES_COUNT; i++) {
            var randomPos = fieldRect.getRandomPositionInside();
            getField().spawnMob(KILLER_BEE, randomPos.getX(), randomPos.getY(), false, hp);
        }

        return true;
    }

    @Override
    public void onMobDamaged(Char attacker, Mob mob, long damage, long oldHp, long newHp) {
        super.onMobDamaged(attacker, mob, damage, oldHp, newHp);

        if (getTemplateList().contains(mob.getTemplateId()) && newHp <= 0) {
            switch (mob.getTemplateId()) {
                case ILLUSION_FLOWER:
                    destroy();
                    break;
                case KILLER_BEE:
                    if (getField().getMobs().stream().filter(m -> m.getTemplateId() == KILLER_BEE).count() <= 1) { // <= 1 as this is the last one that's being killed
                        complete();
                    }
                    break;
            }
        }
    }

    @Override
    public List<Integer> getTemplateList() {
        return Arrays.asList(
                ILLUSION_FLOWER,
                KILLER_BEE
        );
    }
}
