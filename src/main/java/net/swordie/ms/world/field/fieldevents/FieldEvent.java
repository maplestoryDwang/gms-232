package net.swordie.ms.world.field.fieldevents;

import net.swordie.ms.client.character.Char;
import net.swordie.ms.life.mob.Mob;
import net.swordie.ms.world.field.Field;

/**
 * Created on 08/02/2022.
 *
 * @author Asura
 */
public abstract class FieldEvent {
    private Field field;

    public FieldEvent(Field field) {
        this.field = field;
    }

    protected Field getField() {
        return field;
    }

    public boolean setup() {
        if (field == null || field.getInfo() == null) {
            return false;
        }

        field.setFieldEvent(this);

        return true;
    }

    public void complete() {
        destroy();
    }

    public void destroy() {
        getField().setFieldEvent(null);
    }

    // Events
    public void onMobDamaged(Char attacker, Mob mob, long damage, long oldHp, long newHp) {

    }
}
