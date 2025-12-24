package net.swordie.ms.world.field.instance.instancehelper.events.monsterdefense;

import net.swordie.ms.client.character.Char;
import net.swordie.ms.connection.packet.NewPyramidPool;
import net.swordie.ms.handlers.executors.EventManager;
import net.swordie.ms.life.mob.Mob;
import net.swordie.ms.world.field.instance.Instance;

import java.util.concurrent.TimeUnit;

/**
 * Created on 02/02/2022.
 *
 * @author Asura
 */
public class NewPyramidInstanceHelper extends MonsterDefenseInstanceHelper {

    private static final int MAX_STAGE = 20;
    private static final int DEFAULT_LIFES = 20;

    private NewPyramidMode mode = NewPyramidMode.NORMAL;
    private long totalDamageDone;
    private int lifes;
    private boolean hasResultUI = false;

    protected int getLifes() {
        return lifes;
    }

    protected void setLifes(int lifes) {
        this.lifes = lifes;
    }

    protected void decreaseLifes() {
        setLifes(Math.max(0, getLifes() - 1));
    }

    protected NewPyramidMode getMode() {
        return mode;
    }

    public void setMode(NewPyramidMode mode) {
        this.mode = mode;
    }

    protected long getTotalDamageDone() {
        return totalDamageDone;
    }

    protected void setTotalDamageDone(long totalDamageDone) {
        this.totalDamageDone = totalDamageDone;
    }

    protected void addTotalDamageDone(long totalDamageDone) {
        setTotalDamageDone(getTotalDamageDone() + totalDamageDone);
    }

    protected int getPoint() {
        return (int) getTotalDamageDone() / getMode().getPointPerDmg();
    }

    protected int getExp() {
        return 1337;
    }

    @Override
    public void setup(Instance instance) {
        super.setup(instance);
        setLifes(DEFAULT_LIFES);

        instance.broadcast(NewPyramidPool.newPyramidSetWave(getCurrentStage()));
        instance.broadcast(NewPyramidPool.newPyramidSetLife(getLifes()));
    }

    @Override
    protected void startStage() {
        getInstance().broadcast(NewPyramidPool.newPyramidSetWave(Math.min(MAX_STAGE, getCurrentStage())));
        super.startStage();
    }

    @Override
    protected void completeInstance() {
        if (!hasResultUI) {
            getInstance().broadcast(NewPyramidPool.newPyramidResult(true, Math.min(MAX_STAGE, getCurrentStage()), getLifes(), getPoint(), getExp()));
            hasResultUI = true;
        }
        for (var chr : getInstance().getChars()) {
            chr.addExp(getExp());
        }
        super.completeInstance();
    }

    @Override
    public void onMobDamaged(Char attacker, Mob mob, long damage, long oldHp, long newHp) {
        addTotalDamageDone(damage);
        getInstance().broadcast(NewPyramidPool.newPyramidSetPoint(getPoint()));
        super.onMobDamaged(attacker, mob, damage, oldHp, newHp);
    }

    public synchronized void onMobMove(Mob mob) {
        // Nett's Pyramid. Mobs that get to the end of their platform are killed and a life is lost.
        if (mob != null && mob.getPosition().getX() <= -640) {
            mob.die(false);
            decreaseLifes();
            getInstance().broadcast(NewPyramidPool.newPyramidSetLife(getLifes()));
            if (getLifes() <= 0) {
                if (!hasResultUI) {
                    getInstance().broadcast(NewPyramidPool.newPyramidResult(false, Math.min(MAX_STAGE, getCurrentStage()), getLifes(), getPoint(), getExp()));
                    addTimer(EventManager.addEvent(() -> clearInstance(), getNextStageDelay(), TimeUnit.MILLISECONDS));
                    hasResultUI = true;
                }
            }
        }
    }

    @Override
    protected int getNextStageDelay() {
        return 6000;
    }

    public enum NewPyramidMode {
        NORMAL(3_000),
        HARD(10_000),
        ;
        private int pointPerDmg;

        NewPyramidMode(int pointPerDmg) {
            this.pointPerDmg = pointPerDmg;
        }

        public int getPointPerDmg() {
            return pointPerDmg;
        }
    }
}
