package net.swordie.ms.world.field.instance.instancehelper.events;

import net.swordie.ms.client.character.Char;
import net.swordie.ms.life.mob.Mob;
import net.swordie.ms.world.field.instance.instancehelper.InstanceHelper;

/**
 * Created on 03/07/2021.
 *
 * @author Asura
 */
public class InfernoWolfInstanceHelper extends InstanceHelper {

    @Override
    public void onMobDamaged(Char attacker, Mob mob, long damage, long oldHp, long newHp) {
        attacker.addPolloFritto(damage);
    }

}
