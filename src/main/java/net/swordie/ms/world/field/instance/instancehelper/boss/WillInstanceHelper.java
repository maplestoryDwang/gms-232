package net.swordie.ms.world.field.instance.instancehelper.boss;

import net.swordie.ms.client.character.Char;
import net.swordie.ms.constants.BossConstants;
import net.swordie.ms.life.mob.Mob;
import net.swordie.ms.life.mob.boss.will.WillModule;
import net.swordie.ms.world.field.instance.instancehelper.InstanceHelper;

/**
 * Created on 03/07/2021.
 *
 * @author Asura
 */
public class WillInstanceHelper extends InstanceHelper {

    @Override
    public void onMobDamaged(Char attacker, Mob mob, long damage, long oldHp, long newHp) {
        WillModule.handleBeholderEyeHit(mob.getField(), mob);
    }

    @Override
    public void onChrDeath(Char chr) {
        if (chr.getField().hasProperty(BossConstants.WILL_FIELD_FAIL_KEY)) {
            chr.getField().setProperty(BossConstants.WILL_FIELD_FAIL_KEY, true);
        }
    }
}
