package net.swordie.ms.world.field.instance.instancehelper.boss;

import net.swordie.ms.client.character.Char;
import net.swordie.ms.connection.packet.field.FieldPacket;
import net.swordie.ms.constants.BossConstants;
import net.swordie.ms.enums.DebuffObjectType;
import net.swordie.ms.handlers.executors.EventManager;
import net.swordie.ms.life.mob.Mob;
import net.swordie.ms.util.Rect;
import net.swordie.ms.util.Util;
import net.swordie.ms.world.field.DebuffObject;
import net.swordie.ms.world.field.Field;
import net.swordie.ms.world.field.instance.Instance;
import net.swordie.ms.world.field.instance.instancehelper.InstanceHelper;

import java.util.ArrayList;
import java.util.List;

/**
 * Created on 06/08/2021.
 *
 * @author Asura
 */
public class MagnusInstanceHelper extends InstanceHelper {


    @Override
    public void setup(Instance instance) {
        super.setup(instance);
        if(getField().getId() == BossConstants.HARD_MAGNUS_MAPID){
            addTimer(EventManager.addFixedRateEvent(() -> hardMagPoisonEmitterTick(), 10000, 10000));
            addTimer(EventManager.addFixedRateEvent(() -> outOfZoneDMG(), 5000, 1000));
        }
        if(getField().getId() == BossConstants.NORMAL_MAGNUS_MAPID){
            addTimer(EventManager.addFixedRateEvent(() -> normalMagPoisonEmitterTick(), 10000, 15000));
            addTimer(EventManager.addFixedRateEvent(() -> outOfZoneDMG(), 10000, 3000));
        }
        if(getField().getId() == BossConstants.EASY_MAGNUS_MAPID){
            addTimer(EventManager.addFixedRateEvent(() -> outOfZoneDMG(), 10000, 5000));
        }
    }

    @Override
    public void onMobDeath(Field field, Mob mob) {
        super.onMobDeath(field, mob);
        if(mob.getTemplateId() == BossConstants.EASY_MAGNUS_TEMPLATE || mob.getTemplateId() == BossConstants.NORMAL_MAGNUS_TEMPLATE || mob.getTemplateId() == BossConstants.HARD_MAGNUS_TEMPLATE) {
            stopTimers();
        }
    }

    @Override
    public void onMobDamaged(Char attacker, Mob mob, long damage, long oldHp, long newHp) {
        switch (mob.getTemplateId()) {
            case 8880000: // Hard magnus
            case 8880002: // Normal magnus
            case 8880010: // Easy magnus
               var zoneId = 0;
                double perc = mob.getHp() / (double) mob.getMaxHp();
                if (perc <= 0.25) {
                    zoneId = 4;
                } else if (perc <= 0.5) {
                    zoneId = 3;
                } else if (perc <= 0.75) {
                    zoneId = 2;
                } else {
                    zoneId = 1;
                }

                if (mob.getCurZoneDataType() != zoneId) {
                    mob.changeZoneId(zoneId);
                    mob.changePhase(zoneId);
                }
                break;
        }
        super.onMobDamaged(attacker, mob, damage, oldHp, newHp);
    }

    private void hardMagPoisonEmitterTick(){
        List<DebuffObject> debuffObjects = new ArrayList<>();
        if (Util.getRandom(3) == 0) {
            debuffObjects.add(new DebuffObject(true, 1, DebuffObjectType.SleepGas, "sleepGas1", "sleepGas"));
        }
        if (Util.getRandom(3) == 0) {
            debuffObjects.add(new DebuffObject(true, 2, DebuffObjectType.SleepGas, "sllepGas2", "sleepGas"));
        }
        if (Util.getRandom(3) == 0) {
            debuffObjects.add(new DebuffObject(true, 3, DebuffObjectType.SleepGas, "sllepGas3", "sleepGas"));
        }
        if (Util.getRandom(3) == 0) {
            debuffObjects.add(new DebuffObject(true, 4, DebuffObjectType.SleepGas, "sleepGas4", "sleepGas"));
        }
        if (Util.getRandom(3) == 0) {
            debuffObjects.add(new DebuffObject(true, 5, DebuffObjectType.SleepGas, "sleepGas5", "sleepGas"));
        }
        getField().broadcastPacket(FieldPacket.enableDebuffObj(debuffObjects));
    }

    private void normalMagPoisonEmitterTick(){
        List<DebuffObject> debuffObjects = new ArrayList<>();
        if (Util.getRandom(3) == 0) {
            debuffObjects.add(new DebuffObject(true, 1, DebuffObjectType.SleepGas, "sleepGas10", "sleepGas"));
        }
        if (Util.getRandom(3) == 0) {
            debuffObjects.add(new DebuffObject(true, 2, DebuffObjectType.SleepGas, "sllepGas20", "sleepGas"));
        }
        if (Util.getRandom(3) == 0) {
            debuffObjects.add(new DebuffObject(true, 3, DebuffObjectType.SleepGas, "sllepGas30", "sleepGas"));
        }
        if (Util.getRandom(3) == 0) {
            debuffObjects.add(new DebuffObject(true, 4, DebuffObjectType.SleepGas, "sleepGas40", "sleepGas"));
        }
        if (Util.getRandom(3) == 0) {
            debuffObjects.add(new DebuffObject(true, 5, DebuffObjectType.SleepGas, "sleepGas50", "sleepGas"));
        }
        getField().broadcastPacket(FieldPacket.enableDebuffObj(debuffObjects));
    }

    private void outOfZoneDMG(){
        Mob mob = getMagnus();
        if(mob != null){
           Rect mobRect =  mob.getRectAround(mob.getMobInfo().getMobZones().get(mob.getCurZoneDataType()));
           for(Char chr : getField().getChars()){
               if(!chr.isDead()){
                   if(!mobRect.hasPositionInside(chr.getPosition())){
                       chr.damage(chr.getMaxHP() / 10);
                   }
               }
           }
        }
    }

    private Mob getMagnus() {
        return getField().getMobs().stream().filter(mob -> mob.getTemplateId() == BossConstants.EASY_MAGNUS_TEMPLATE ||
                mob.getTemplateId() == BossConstants.NORMAL_MAGNUS_TEMPLATE || mob.getTemplateId() == BossConstants.HARD_MAGNUS_TEMPLATE).findFirst().orElse(null);
    }
}
