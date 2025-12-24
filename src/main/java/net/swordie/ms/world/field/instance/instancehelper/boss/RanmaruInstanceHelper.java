package net.swordie.ms.world.field.instance.instancehelper.boss;

import net.swordie.ms.constants.BossConstants;
import net.swordie.ms.handlers.executors.EventManager;
import net.swordie.ms.life.mob.Mob;
import net.swordie.ms.world.field.Field;
import net.swordie.ms.world.field.instance.Instance;
import net.swordie.ms.world.field.instance.instancehelper.InstanceHelper;

import java.util.concurrent.ScheduledFuture;

public class RanmaruInstanceHelper extends InstanceHelper {

    private static final int FIRE_WALL_CREATE_TIMER = 3000;
    private int fireWallCount = 0;
    private ScheduledFuture fireWallCreateTimer = null;
    @Override
    public void setup(Instance instance) {
        super.setup(instance);
        if(getField().getId() == BossConstants.RANMARU_NORMAL_MAP) {
            addTimer(EventManager.addFixedRateEvent(() -> attemptSpawnWalkerNormal(), 25000, 15000));
        }
        if(getField().getId() == BossConstants.RANMARU_HARD_MAP) {
            addTimer(EventManager.addFixedRateEvent(() -> attemptSpawnWalkerHard(), 25000, 10000));
        }
    }

    @Override
    public void onMobSpawn(Field field, Mob mob) {
        super.onMobSpawn(field, mob);

        //Make sure fire walls get removed
        if(mob.getTemplateId() == BossConstants.RANMARU_WALL){
            if(getField().getLifeByTemplateId(BossConstants.RANMARU_INFERNO_SPIRIT_WALKER_HARD) == null){
                mob.die(false);
            }
        }
    }

    @Override
    public void onMobDeath(Field field, Mob mob) {
        super.onMobDeath(field, mob);
        if(mob.getTemplateId() == BossConstants.RANMARU_NORMAL_BODY || mob.getTemplateId() == BossConstants.RANMARU_HARD_BODY_5){
            stopTimers();
            resetWalls();
        }
        if(mob.getTemplateId() == BossConstants.RANMARU_INFERNO_SPIRIT_WALKER_HARD){
            resetWalls();
        }
    }

    private void resetWalls(){
        if(fireWallCreateTimer != null) {
            fireWallCount = 0;
            EventManager.stopTimer(fireWallCreateTimer);
            fireWallCreateTimer = null;
            for(Mob m : getField().getMobs()){
                if(m.getTemplateId() == BossConstants.RANMARU_WALL){
                    m.die(false);
                }
            }
        }
    }

    private void attemptSpawnWalkerNormal(){
        if(getField().getLifeByTemplateId(BossConstants.RANMARU_RESTRAINED_SPIRIT_WALKER_NORMAL) == null){
            getField().spawnMob(BossConstants.RANMARU_RESTRAINED_SPIRIT_WALKER_NORMAL, BossConstants.RANMARU_LEFT_WALKER_NORMAL_POSITION);
            return;
        }
        if(getField().getLifeByTemplateId(BossConstants.RANMARU_HEALING_SPIRIT_WALKER_NORMAL) == null){
            getField().spawnMob(BossConstants.RANMARU_HEALING_SPIRIT_WALKER_NORMAL, BossConstants.RANMARU_RIGHT_WALKER_NORMAL_POSITION);
        }
    }
    private void attemptSpawnWalkerHard(){

        boolean hasRestrainedAndHealer = true;

        if(getField().getLifeByTemplateId(BossConstants.RANMARU_RESTRAINED_SPIRIT_WALKER_HARD) == null){
            getField().spawnMob(BossConstants.RANMARU_RESTRAINED_SPIRIT_WALKER_HARD, BossConstants.RANMARU_LEFT_WALKER_NORMAL_POSITION);
            hasRestrainedAndHealer = false;
        }

        if(getField().getLifeByTemplateId(BossConstants.RANMARU_HEALING_SPIRIT_WALKER_HARD) == null){
            getField().spawnMob(BossConstants.RANMARU_HEALING_SPIRIT_WALKER_HARD, BossConstants.RANMARU_RIGHT_WALKER_NORMAL_POSITION);
            hasRestrainedAndHealer = false;
        }

        if(getField().getLifeByTemplateId(BossConstants.RANMARU_INFERNO_SPIRIT_WALKER_HARD) == null && hasRestrainedAndHealer){
            getField().spawnMob(BossConstants.RANMARU_INFERNO_SPIRIT_WALKER_HARD, BossConstants.RANMARU_TOP_WALKER_NORMAL_POSITION);
            fireWallCreateTimer = addTimer(EventManager.addFixedRateEvent(() -> CreateFireWall(), FIRE_WALL_CREATE_TIMER, FIRE_WALL_CREATE_TIMER));
        }
    }

    private void CreateFireWall(){
        if(fireWallCount <= BossConstants.RANMARU_WALL_MAX_COUNT) {
            getField().spawnMob(BossConstants.RANMARU_WALL, BossConstants.RANMARU_LEFT_WALL_START_POSITION.getX() + BossConstants.RANMARU_DISTANCE_BETWEEN_WALLS * fireWallCount, BossConstants.RANMARU_LEFT_WALL_START_POSITION.getY(), false, 0);
            getField().spawnMob(BossConstants.RANMARU_WALL, BossConstants.RANMARU_RIGHT_WALL_START_POSITION.getX() - BossConstants.RANMARU_DISTANCE_BETWEEN_WALLS * fireWallCount, BossConstants.RANMARU_RIGHT_WALL_START_POSITION.getY(), false, 0);
            fireWallCount++;
        }
    }
}
