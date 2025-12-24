package net.swordie.ms.world.field.fieldevents.timedfieldevents.elitechampions;

import net.swordie.ms.client.character.Char;
import net.swordie.ms.handlers.executors.EventManager;
import net.swordie.ms.life.mob.Mob;
import net.swordie.ms.util.Position;
import net.swordie.ms.util.Util;
import net.swordie.ms.world.field.Field;

import java.util.Arrays;
import java.util.List;
import java.util.concurrent.ScheduledFuture;
import java.util.concurrent.TimeUnit;

/**
 * Created on 08/02/2022.
 *
 * @author Asura
 */
public class DarkGeminiGargoyleEvent extends EliteChampionFieldEvent {

    public static final int DARK_GEMINI_GARGOYLE_1 = 8220113;
    public static final int DARK_GEMINI_GARGOYLE_2 = 8220114;

    public static final int DARK_GEMINI_GARGOYLE_HP = 13;

    public static final int DARK_GEMINI_GARGOYLE_REVIVE_DELAY = 5;

    private ScheduledFuture gargoyle1ReviveTimer;
    private ScheduledFuture gargoyle2ReviveTimer;

    public DarkGeminiGargoyleEvent(Field field, int timeS) {
        super(field, timeS);
    }

    @Override
    public boolean setup() {
        if (!super.setup()) return false;

        var hp = getMinHpPerMobOnField() * DARK_GEMINI_GARGOYLE_HP;
        for (var gargoyle : getTemplateList()) {
            Position position;
            var mob = Util.getRandomFromCollection(getField().getMobs());
            if (mob == null) {
                position = Util.getRandomFromCollection(getField().getNonWallFootholds()).getRandomPosition();
            } else {
                position = mob.getPosition();
            }

            getField().spawnMob(gargoyle, position.getX(), position.getY(), false, hp);
        }

        return true;
    }

    @Override
    public void onMobDamaged(Char attacker, Mob mob, long damage, long oldHp, long newHp) {
        super.onMobDamaged(attacker, mob, damage, oldHp, newHp);

        if (getTemplateList().contains(mob.getTemplateId()) && newHp <= 0) {

            if (getField().getMobs().stream().filter(m -> getTemplateList().contains(m.getTemplateId())).count() <= 1) {
                complete();
                return;
            }

            switch (mob.getTemplateId()) {
                case DARK_GEMINI_GARGOYLE_1:
                    EventManager.stopTimer(gargoyle1ReviveTimer);
                    gargoyle1ReviveTimer = EventManager.addEvent(() -> getField().spawnMob(mob.getTemplateId(), mob.getX(), mob.getY(), false, mob.getMaxHp()), DARK_GEMINI_GARGOYLE_REVIVE_DELAY, TimeUnit.SECONDS);
                    break;
                case DARK_GEMINI_GARGOYLE_2:
                    EventManager.stopTimer(gargoyle2ReviveTimer);
                    gargoyle2ReviveTimer = EventManager.addEvent(() -> getField().spawnMob(mob.getTemplateId(), mob.getX(), mob.getY(), false, mob.getMaxHp()), DARK_GEMINI_GARGOYLE_REVIVE_DELAY, TimeUnit.SECONDS);
                    break;
            }
        }
    }

    @Override
    public void destroy() {
        EventManager.stopTimer(gargoyle1ReviveTimer);
        EventManager.stopTimer(gargoyle2ReviveTimer);

        super.destroy();
    }

    @Override
    public List<Integer> getTemplateList() {
        return Arrays.asList(
                DARK_GEMINI_GARGOYLE_1,
                DARK_GEMINI_GARGOYLE_2
        );
    }
}
