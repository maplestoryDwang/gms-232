package net.swordie.ms.world.field.instance.instancehelper.boss;

import net.swordie.ms.client.character.Char;
import net.swordie.ms.connection.packet.field.LucidFieldPacket;
import net.swordie.ms.constants.BossConstants;
import net.swordie.ms.handlers.executors.EventManager;
import net.swordie.ms.life.mob.Mob;
import net.swordie.ms.life.mob.skill.MobSkillID;
import net.swordie.ms.util.Position;
import net.swordie.ms.world.field.Field;
import net.swordie.ms.world.field.bosses.gollux.FallingCatcher;
import net.swordie.ms.world.field.instance.instancehelper.InstanceHelper;

import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.ScheduledFuture;

public class VellumInstanceHelper extends InstanceHelper {

    private static final String ROCK_CATCHER_ID = "DropStone";
    private static final int ROCK_DROP_AMOUNT = 10;
    private static final int ROCK_DROP_DELAY = 10000;

    private ScheduledFuture rockDropTimer = null;
    private Boolean teleportBlocked = true;


    @Override
    public void onMobSpawn(Field field, Mob mob) {
        super.onMobSpawn(field, mob);

        if (mob.getTemplateId() == BossConstants.VELLUM_CHAOS) {
            mob.addBlockedSkill(MobSkillID.Teleport, 13);

            addTimer(EventManager.addFixedRateEvent(() -> spawnRocks(), ROCK_DROP_DELAY, ROCK_DROP_DELAY));
        }
    }

    @Override
    public void onMobDamaged(Char attacker, Mob mob, long damage, long oldHp, long newHp) {
        super.onMobDamaged(attacker, mob, damage, oldHp, newHp);
        if (mob.getTemplateId() == BossConstants.VELLUM_CHAOS) {
            if (mob.getHpPerc() < 30 && teleportBlocked) {
                teleportBlocked = false;
                mob.removeBlockedSkill(MobSkillID.Teleport, 13);
            }
        }
    }

    @Override
    public void onMobDeath(Field field, Mob mob) {
        super.onMobDeath(field, mob);
        if (mob.getTemplateId() == BossConstants.VELLUM_CHAOS) {
            if (rockDropTimer != null) {
                EventManager.stopTimer(rockDropTimer);
            }
        }
    }

    private void spawnRocks() {
        List<Position> positions = new ArrayList<>();
        Field field = getInstance().getField(105200810);
        for (int i = 0; i < ROCK_DROP_AMOUNT; i++) {
            Position pos = field.getRandomPosOnWalkableFoothold(100, true);
            positions.add(pos);
        }
        FallingCatcher rocks = new FallingCatcher(ROCK_CATCHER_ID, 50, positions);
        field.broadcastPacket(LucidFieldPacket.createFallingCatcher(rocks));
    }
}
