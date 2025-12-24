package net.swordie.ms.world.field.instance.instancehelper.events.monsterdefense;

import net.swordie.ms.client.character.Char;
import net.swordie.ms.connection.packet.GuardCastlePacket;
import net.swordie.ms.connection.packet.UserLocal;
import net.swordie.ms.connection.packet.field.FieldPacket;
import net.swordie.ms.handlers.executors.EventManager;
import net.swordie.ms.life.Reactor;
import net.swordie.ms.life.mob.Mob;
import net.swordie.ms.loaders.MobData;
import net.swordie.ms.util.Position;
import net.swordie.ms.util.Util;
import net.swordie.ms.world.field.fieldeffect.FieldEffect;

/**
 * Created on 08/02/2022.
 *
 * @author Asura
 */
public class GuardTheCastleGatesInstanceHelper extends MonsterDefenseInstanceHelper {

    private int lifes = 20;

    // Blow Weather

    // Popup Say
    private static final int popUpSayNpcTemplateId = 9001059; // pollo
    private static final int popUpSayDuration = 1500; // 1.5s
    private static final String decLifeResponsePopUp = "#h0#, were your hunting skills not up to the task?";
    private static final String decLifeResponsePopUp2 = "#h0#, why are you not eliminating the monsters?";

    // Effects
    private static final String killingStageFirstStartFieldEffect = "killing/first/start";
    private static final String killingClearFieldEffect = "killing/clear";
    private static final String defenseCountFieldEffect = "defense/count";

    public int getLifes() {
        return lifes;
    }

    public void setLifes(int lifes) {
        this.lifes = lifes;
    }

    public void decLife() {
        setLifes(getLifes() - 1);
        getInstance().broadcast(GuardCastlePacket.guardCastleSetLife(getLifes()));
        if (getLifes() <= 0) {
            clearInstance();
        }
    }

    @Override
    protected void startStagePreDelay() {
        getInstance().broadcast(GuardCastlePacket.guardCastleSetLife(getLifes()));
        getInstance().broadcast(GuardCastlePacket.guardCastleSetWave(getCurrentStage()));

        addTimer(EventManager.addEvent(() -> getInstance().broadcast(FieldPacket.fieldEffect(FieldEffect.getFieldEffectFromWz(defenseCountFieldEffect, 0))), 1000));
        addTimer(EventManager.addEvent(() -> getInstance().broadcast(FieldPacket.fieldEffect(FieldEffect.getFieldEffectFromWz(killingStageFirstStartFieldEffect, 0))), 2500));

        super.startStagePreDelay();
    }

    @Override
    protected void completeStage() {
        super.completeStage(); // increases currentStage count and either completes instance or invokes 'startWave()' with a delay
        if (!finishedInstance()) {
            getInstance().broadcast(GuardCastlePacket.guardCastleSetWave(getCurrentStage()));
            addTimer(EventManager.addEvent(() -> getInstance().broadcast(FieldPacket.fieldEffect(FieldEffect.getFieldEffectFromWz(defenseCountFieldEffect, 0))), 1000));
            addTimer(EventManager.addEvent(() -> getInstance().broadcast(FieldPacket.fieldEffect(FieldEffect.getFieldEffectFromWz(killingStageFirstStartFieldEffect, 0))), 2500));
        } else {
            getInstance().broadcast(FieldPacket.fieldEffect(FieldEffect.getFieldEffectFromWz(killingClearFieldEffect, 0)));
        }
    }

    @Override
    protected synchronized void spawnMob(int templateId, int x, int y, long hp, boolean left) {
        var mob = MobData.getMobDeepCopyById(templateId);
        mob.setPosition(new Position(x, y));
        mob.setCurFoodhold(getField().findFootHoldBelow(mob.getPosition()));
        mob.setHomeFoothold(mob.getCurFoodhold());
        if (!left) {
            mob.setMoveAction((byte) 2);
        }
        if (hp > 0) {
            mob.setHp(hp);
            mob.setMaxHp(hp);
        }
        mob.setField(getField());
        mob.setNotRespawnable(true);
        getField().spawnLife(mob, null);
        decreaseMobQueueSize();
    }

    @Override
    public synchronized void onReactorRectInMob(Char chr, Mob mob, Reactor reactor) {
        mob.die(false);
        decLife();

        if (Util.succeedProp(35)) {
            getInstance().broadcast(UserLocal.addPopupSay(popUpSayNpcTemplateId, popUpSayDuration,
                    Util.getRandomBool() ? decLifeResponsePopUp : decLifeResponsePopUp2, ""));
        }

        super.onReactorRectInMob(chr, mob, reactor);
    }
}
