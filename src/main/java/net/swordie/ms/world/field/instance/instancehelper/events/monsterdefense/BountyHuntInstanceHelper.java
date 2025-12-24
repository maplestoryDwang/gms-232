package net.swordie.ms.world.field.instance.instancehelper.events.monsterdefense;

import net.swordie.ms.connection.packet.BountyHuntPacket;
import net.swordie.ms.connection.packet.field.FieldPacket;
import net.swordie.ms.handlers.executors.EventManager;
import net.swordie.ms.world.field.fieldeffect.FieldEffect;
import net.swordie.ms.world.field.instance.Instance;

import java.util.Arrays;
import java.util.List;

/**
 * Created on 02/02/2022.
 *
 * @author Asura
 */
public class BountyHuntInstanceHelper extends MonsterDefenseInstanceHelper {
    // Blow Weather
    private static final int blowWeatherTemplate = 5120159;
    private static final String blowWeatherTextStart = "They're coming from all directions! Defeat them for enormous amounts of experience!";
    private static final String blowWeatherTextComplete = "Incredible job! We have defeated all the monsters.";
    private static final int blowWeatherDurationStart = 10;
    private static final int blowWeatherDurationEnd = 3;

    // Effects
    private static final String killingStageFirstStartFieldEffect = "killing/first/start";
    private static final String defenseCountFieldEffect = "defense/count";

    // Mob Escort
    private static final int mobEscortTemplateId = 9833004; // pollo
    private static final long mobEscortHp = 4054800;


    @Override
    public void setup(Instance instance) {
        super.setup(instance);

        getField().spawnMob(mobEscortTemplateId, 0, 153, false, mobEscortHp); // escort mob
    }

    @Override
    public void startStagePreDelay() {
        getInstance().broadcast(FieldPacket.blowWeather(blowWeatherTemplate, blowWeatherTextStart, blowWeatherDurationStart));
        addTimer(EventManager.addEvent(() -> getInstance().broadcast(FieldPacket.fieldEffect(FieldEffect.getFieldEffectFromWz(defenseCountFieldEffect, 0))), 1000));
        addTimer(EventManager.addEvent(() -> getInstance().broadcast(FieldPacket.fieldEffect(FieldEffect.getFieldEffectFromWz(killingStageFirstStartFieldEffect, 0))), 3000));
        getInstance().broadcast(BountyHuntPacket.setCurrentWave(getCurrentStage()));
        super.startStagePreDelay(); // calls 'startWave()' with a delay
    }

    @Override
    protected void completeStage() {
        super.completeStage(); // increases currentStage count and either completes instance or invokes 'startWave()' with a delay
        if (!finishedInstance()) {
            getInstance().broadcast(BountyHuntPacket.setCurrentWave(getCurrentStage()));
            addTimer(EventManager.addEvent(() -> getInstance().broadcast(FieldPacket.fieldEffect(FieldEffect.getFieldEffectFromWz(defenseCountFieldEffect, 0))), 1000));
            addTimer(EventManager.addEvent(() -> getInstance().broadcast(FieldPacket.fieldEffect(FieldEffect.getFieldEffectFromWz(killingStageFirstStartFieldEffect, 0))), 3000));
        }
    }

    @Override
    protected void completeInstance() {
        getInstance().broadcast(FieldPacket.blowWeather(blowWeatherTemplate, blowWeatherTextComplete, blowWeatherDurationEnd));
        super.completeInstance();
    }

    @Override
    protected List<Integer> getIgnoredMobs() {
        return Arrays.asList(mobEscortTemplateId);
    }
}
