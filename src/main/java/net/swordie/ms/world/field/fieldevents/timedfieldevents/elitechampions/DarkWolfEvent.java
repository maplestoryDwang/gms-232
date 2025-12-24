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
public class DarkWolfEvent extends EliteChampionFieldEvent {

    public static final int DARK_SPHERE = 8220122;
    public static final int DARK_WOLF = 8220123;

    public static final int DARK_SPHERE_HP_MULTI = 6;
    public static final int DARK_WOLF_HP_MULTI = 30;

    public static final int DARK_SPHERE_COUNT = 5;

    public DarkWolfEvent(Field field, int timeS) {
        super(field, timeS);
    }

    @Override
    public boolean setup() {
        if (!super.setup()) return false;

        var hp = getMinHpPerMobOnField() * DARK_SPHERE_HP_MULTI;
        for (var i = 0; i < DARK_SPHERE_COUNT; i++) {
            Position position;
            var mob = Util.getRandomFromCollection(getField().getMobs());
            if (mob == null) {
                position = Util.getRandomFromCollection(getField().getNonWallFootholds()).getRandomPosition();
            } else {
                position = mob.getPosition();
            }

            getField().spawnMob(DARK_SPHERE, position.getX(), position.getY(), false, hp);
        }

        return true;
    }

    @Override
    public void onMobDamaged(Char attacker, Mob mob, long damage, long oldHp, long newHp) {
        super.onMobDamaged(attacker, mob, damage, oldHp, newHp);

        if (getTemplateList().contains(mob.getTemplateId())) {
            switch (mob.getTemplateId()) {
                case DARK_SPHERE:
                    if (getField().getMobs().stream().filter(m -> m.getTemplateId() == DARK_SPHERE).count() <= 1) { // <= 1 as this is the last one that's being killed
                        getField().spawnMob(DARK_WOLF, mob.getX(), mob.getY(), false, getMinHpPerMobOnField() * DARK_WOLF_HP_MULTI);
                    }
                    break;
                case DARK_WOLF:
                    complete();
                    break;
            }
        }
    }

    @Override
    public List<Integer> getTemplateList() {
        return Arrays.asList(
                DARK_SPHERE,
                DARK_WOLF
        );
    }
}
