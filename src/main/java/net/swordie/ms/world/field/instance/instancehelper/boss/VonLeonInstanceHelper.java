package net.swordie.ms.world.field.instance.instancehelper.boss;

import net.swordie.ms.constants.BossConstants;
import net.swordie.ms.handlers.executors.EventManager;
import net.swordie.ms.life.mob.Mob;
import net.swordie.ms.life.mob.skill.MobSkill;
import net.swordie.ms.loaders.SkillData;
import net.swordie.ms.loaders.containerclasses.MobSkillInfo;
import net.swordie.ms.util.Rect;
import net.swordie.ms.util.Util;
import net.swordie.ms.world.field.instance.Instance;
import net.swordie.ms.world.field.instance.instancehelper.InstanceHelper;

import java.util.List;
import java.util.concurrent.atomic.AtomicInteger;

public class VonLeonInstanceHelper extends InstanceHelper {

    //FSM tick
    private int initializeTimer = 10000;
    private int tickTimer = 2000;

    //Teleport
    private int minTeleportDistance = 1000;
    private int teleportSkillID = 170;
    private int teleport1Slv = 1;
    private int teleport2Slv = 3;

    //Mob Consume
    private int mobConsumeSkillID = 105;
    private int easyMobConsumeSlv = 12;
    private int normalMobConsumeSlv = 1;
    private int hardMobConsumeSlv = 13;
    private int minMobAmountToConsume = 5;

    @Override
    public void setup(Instance instance) {
        super.setup(instance);
        addTimer(EventManager.addFixedRateEvent(() -> VonLeonFSM(), initializeTimer, tickTimer));
    }

    private void VonLeonFSM() {
        //when player is too far from VL
        Mob mob = getVonLeon();
        if (mob != null) {
            if (mob.getMostDamageChar() != null) {
                int chrX = mob.getMostDamageChar().getPosition().getX();
                int mobX = mob.getPosition().getX();
                int distance = Math.abs(chrX - mobX);
                if (distance > minTeleportDistance) {
                    MobSkill teleport = mob.getSkillByMobSkillInfo(teleportSkillID, Util.getRandom(5) == 1 ? teleport2Slv : teleport1Slv); //20% chance to do a random tp, else tp to mostDamagePlayer
                    mob.setForcedSkill(teleport);
                }
                MobSkill skill = getVonLeon().getSkillByIdx(mobConsumeSkillID);

                //MobConsume
                int slv = 0;
                if (mob.getForcedSkill() == null) {
                    switch (mob.getTemplateId()) {
                        case BossConstants.VON_LEON_EASY:
                            slv = easyMobConsumeSlv;
                            break;
                        case BossConstants.VON_LEON_NORMAL:
                            slv = normalMobConsumeSlv;
                            break;
                        case BossConstants.VON_LEON_HARD:
                            slv = hardMobConsumeSlv;
                            break;
                    }
                    if (mob.hasSkillOffCooldown(mobConsumeSkillID, slv) && slv != 0) {
                        //check if we have enemies of proper type near
                        MobSkill consumeMob = mob.getSkillByMobSkillInfo(mobConsumeSkillID, slv);
                        MobSkillInfo consumeMobInfo = SkillData.getMobSkillInfoByIdAndLevel(mobConsumeSkillID, slv);
                        Rect rect = new Rect(consumeMobInfo.getLt(), consumeMobInfo.getRb());
                        rect.move(mob.getX(), mob.getY());
                        List<Mob> mobsInRect = getField().getMobsInRect(rect);
                        int amount = 0;
                        for (Mob rectMob : mobsInRect) {
                            if (rectMob.getTemplateId() == consumeMobInfo.getInts().get(0)) {
                                amount++;
                            }
                        }
                        if (amount >= minMobAmountToConsume) {
                            mob.setForcedSkill(consumeMob);
                        }
                    }
                }
            }
        }
    }

    private Mob getVonLeon() {
        return getField().getMobs().stream().filter(mob -> mob.getTemplateId() == BossConstants.VON_LEON_EASY ||
                mob.getTemplateId() == BossConstants.VON_LEON_NORMAL || mob.getTemplateId() == BossConstants.VON_LEON_HARD).findFirst().orElse(null);
    }
}
