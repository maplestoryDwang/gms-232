package net.swordie.ms.world.field.instance.instancehelper.boss;

import net.swordie.ms.constants.BossConstants;
import net.swordie.ms.handlers.executors.EventManager;
import net.swordie.ms.life.mob.Mob;
import net.swordie.ms.world.field.instance.Instance;
import net.swordie.ms.world.field.instance.instancehelper.InstanceHelper;

public class CygnusInstanceHelper extends InstanceHelper {
    //FSM tick
    private int initializeTimer = 10000;
    private int tickTimer =  5000;

    //Heal
    private int healSkillID = 114;
    private int healSlv = 43;

    @Override
    public void setup(Instance instance) {
        super.setup(instance);
        addTimer(EventManager.addFixedRateEvent(() -> CygnusFSM(), initializeTimer, tickTimer));
    }

    private void CygnusFSM(){
        //if more than 1 mob in field, attempt heal
        if(getField().getMobs().size() > 1) {
            Mob mob = getCygnus();
            if(mob.hasSkillOffCooldown(healSkillID, healSlv)) {
                mob.setForcedSkill(healSkillID, healSlv);
            }
        }

    }

    private Mob getCygnus(){
        return getField().getMobs().stream().filter(mob -> mob.getTemplateId() == BossConstants.CYGNUS_EASY ||
                mob.getTemplateId() == BossConstants.CYGNUS_NORMAL).findFirst().orElse(null);

    }
}
