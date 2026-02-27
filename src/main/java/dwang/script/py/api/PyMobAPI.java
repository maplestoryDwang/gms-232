package dwang.script.py.api;

import dwang.script.DwangScriptBaseApi;
import net.swordie.ms.connection.packet.MobPool;
import net.swordie.ms.connection.packet.field.FieldPacket;
import net.swordie.ms.life.DeathType;
import net.swordie.ms.life.Life;
import net.swordie.ms.life.mob.Mob;
import net.swordie.ms.world.field.Field;
import net.swordie.ms.world.field.fieldeffect.FieldEffect;

/**
 * @author 橘子
 * @date 2026/2/27
 * @description
 */
public interface PyMobAPI extends DwangScriptBaseApi {
    
    default Mob spawnMob(int id) {
        return spawnMob(id, 0, 0, false);
    }

    
    default Mob spawnMob(int id, boolean respawnable) {
        return spawnMob(id, 0, 0, respawnable);
    }

    
    default Mob spawnMobOnChar(int id) {
        return spawnMob(id, getChr().getPosition().getX(), getChr().getPosition().getY(), false);
    }

    
    default Mob spawnMobOnChar(int id, boolean respawnable) {
        return spawnMob(id, getChr().getPosition().getX(), getChr().getPosition().getY(), respawnable);
    }

    
    default Mob spawnMob(int id, int x, int y, boolean respawnable) {
        return spawnMob(id, x, y, respawnable, 0);
    }

    default Mob spawnMob(int id, int x, int y) {
        return spawnMob(id, x, y, false, 0);
    }

    default Mob spawnMob(int id, int x, int y, long hp) {
        return spawnMob(id, x, y, false, hp);
    }

    default Mob spawnMob(int id, int x, int y, boolean respawnable, long hp) {
        return getField().spawnMob(id, x, y, respawnable, hp);
    }

    default Mob spawnMobWithAppearType(int id, int x, int y, int appearType, int option) {
        return getField().spawnMobWithAppearType(id, x, y, appearType, option);
    }

    
    default void removeMobByObjId(int id) {
        getField().removeLife(id);
        getField().broadcastPacket(MobPool.leaveField(id, DeathType.ANIMATION_DEATH));
    }

    
    default void removeMobByTemplateId(int id) {
        Field field = getField();
        Life life = field.getLifeByTemplateId(id);
        if (life == null) {
            log.error(String.format("Could not find Mob by template id %d.", id));
            return;
        }
        removeMobByObjId(life.getObjectId());
    }

    default boolean isFinishedEscort(int templateID) {
        Field field = getField();
        Life life = field.getLifeByTemplateId(templateID);
        if (!(life instanceof Mob)) {
            getChr().dispose();
            return false;
        }
        Mob mob = (Mob) life;
        boolean finished = mob.isFinishedEscort();
        if (!finished) {
            getChr().dispose();
        }
        return finished;
    }

    
    default void showHP(int templateID) {
        getField().getMobs().stream()
                .filter(m -> m.getTemplateId() == templateID)
                .findFirst()
                .ifPresent(mob -> getField().broadcastPacket(FieldPacket.fieldEffect(FieldEffect.mobHPTagFieldEffect(mob))));
    }

    
    default void showHP() {
        getField().getMobs().stream()
                .filter(m -> m.getHp() > 0)
                .findFirst()
                .ifPresent(mob -> getField().broadcastPacket(FieldPacket.fieldEffect(FieldEffect.mobHPTagFieldEffect(mob))));
    }

}
