package net.swordie.ms.world.field.fieldevents.timedfieldevents.elitechampions;

import net.swordie.ms.client.character.Char;
import net.swordie.ms.handlers.executors.EventManager;
import net.swordie.ms.life.mob.Mob;
import net.swordie.ms.util.Util;
import net.swordie.ms.world.field.Field;

import java.util.Arrays;
import java.util.List;
import java.util.concurrent.TimeUnit;

/**
 * Created on 08/02/2022.
 *
 * @author Asura
 */
public class ShadowButterflyEvent extends EliteChampionFieldEvent {

    public static final int SHADOW_BUTTERFLY_1 = 8220106;
    public static final int SHADOW_BUTTERFLY_2 = 8220107;
    public static final int SHADOW_BUTTERFLY_3 = 8220108;

    public static final int SHADOW_BUTTERFLY_HP_MULTI = 4;
    public static final int SHADOW_BUTTERFLY_COUNT = 15;

    private int butterflyQueueSize = SHADOW_BUTTERFLY_COUNT;

    public ShadowButterflyEvent(Field field, int timeS) {
        super(field, timeS);
    }

    @Override
    public boolean setup() {
        if (!super.setup()) return false;

        var delayNS = 1000;
        for (var i = 0; i < SHADOW_BUTTERFLY_COUNT; i++) {
            EventManager.addEvent(this::spawnButterfly, delayNS, TimeUnit.MILLISECONDS);
            delayNS += 500;
        }

        return true;
    }

    private synchronized void spawnButterfly() {
        var fieldRect = getField().getInfo().getRect();
        var randomPos = fieldRect.getRandomPositionInside();
        getField().spawnMob(Util.getRandomFromCollection(getTemplateList()), randomPos.getX(), randomPos.getY(), false, getMinHpPerMobOnField() * SHADOW_BUTTERFLY_HP_MULTI);
        butterflyQueueSize -= 1;
    }

    @Override
    public void onMobDamaged(Char attacker, Mob mob, long damage, long oldHp, long newHp) {
        super.onMobDamaged(attacker, mob, damage, oldHp, newHp);

        if (getTemplateList().contains(mob.getTemplateId())) {
            if (getField().getMobs().stream().filter(m -> getTemplateList().contains(m.getTemplateId())).count() <= 1 && butterflyQueueSize <= 0) {
                complete();
            }
        }
    }

    @Override
    public List<Integer> getTemplateList() {
        return Arrays.asList(
                SHADOW_BUTTERFLY_1,
                SHADOW_BUTTERFLY_2,
                SHADOW_BUTTERFLY_3
        );
    }
}
