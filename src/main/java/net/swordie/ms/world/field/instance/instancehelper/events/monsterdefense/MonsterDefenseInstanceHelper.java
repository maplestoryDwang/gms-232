package net.swordie.ms.world.field.instance.instancehelper.events.monsterdefense;

import net.swordie.ms.handlers.executors.EventManager;
import net.swordie.ms.life.mob.Mob;
import net.swordie.ms.loaders.containerclasses.monsterdefense.MonsterDefenseInfo;
import net.swordie.ms.world.field.Field;
import net.swordie.ms.world.field.instance.instancehelper.InstanceHelper;

import java.util.ArrayList;

/**
 * Created on 02/02/2022.
 *
 * @author Asura
 */
public class MonsterDefenseInstanceHelper extends InstanceHelper {

    private int mobQueueSize;

    protected int getMobQueueSize() {
        return mobQueueSize;
    }

    private void setMobQueueSize(int mobQueueSize) {
        this.mobQueueSize = mobQueueSize;
    }

    protected void decreaseMobQueueSize() {
        decreaseMobQueueSize(1);
    }

    protected void decreaseMobQueueSize(int dec) {
        setMobQueueSize(Math.max(0, getMobQueueSize() - dec));
    }

    protected MonsterDefenseInfo getInfo() {
        var field = getField();
        var fi = field.getInfo();

        if (fi != null) {
            return fi.getMonsterDefenseInfo();
        }

        return null;
    }

    @Override
    protected boolean finishedInstance() {
        return getCurrentStage() > getInfo().getWaves().size();
    }

    @Override
    protected void startStage(int stageNumber) {
        var wave = getInfo().getWaves().getOrDefault(stageNumber, new ArrayList<>());

        setMobQueueSize(wave.size()); // amount of mobs that will be spawned
        for (var waveMobInfo : wave) {
            var mobGen = getInfo().getMobGens().getOrDefault(waveMobInfo.getMobGenId(), null);
            if (mobGen == null) {
                continue;
            }
            var left = mobGen.isLeft();

            if (waveMobInfo.getWaveAfter() > 0) {
                addTimer(EventManager.addEvent(() -> spawnMob(waveMobInfo.getMobId(), mobGen.getX(), mobGen.getY(), 0L, left), waveMobInfo.getWaveAfter()));
            } else {
                spawnMob(waveMobInfo.getMobId(), mobGen.getX(), mobGen.getY(), 0L, left);
            }
        }

        super.startStage(stageNumber);
    }

    protected synchronized void spawnMob(int templateId, int x, int y, long hp, boolean left) {
        getField().spawnMob(templateId, x, y, false, hp);
        decreaseMobQueueSize();
    }

    public synchronized void onMobDeath(Field field, Mob mob) {
        // only complete wave if mob queue is 0 and there are no mobs in field
        if (getMobQueueSize() <= 0 && field.getMobs().stream().allMatch(m -> getIgnoredMobs().contains(m.getTemplateId()))) {
            completeStage();
        }
    }
}
