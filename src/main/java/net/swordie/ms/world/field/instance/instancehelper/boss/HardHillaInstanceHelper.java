package net.swordie.ms.world.field.instance.instancehelper.boss;

import net.swordie.ms.client.character.Char;
import net.swordie.ms.connection.OutPacket;
import net.swordie.ms.constants.BossConstants;
import net.swordie.ms.handlers.executors.EventManager;
import net.swordie.ms.handlers.header.OutHeader;
import net.swordie.ms.life.mob.Mob;
import net.swordie.ms.life.mob.skill.MobSkillID;
import net.swordie.ms.util.Util;
import net.swordie.ms.world.field.Field;
import net.swordie.ms.world.field.instance.instancehelper.InstanceHelper;

import java.util.Arrays;
import java.util.List;
import java.util.concurrent.ScheduledFuture;
import java.util.stream.Collectors;

public class HardHillaInstanceHelper extends InstanceHelper {
    private boolean isVampActive = false;
    private ScheduledFuture vampCheckTimer;
    private ScheduledFuture vampEndTimer;
    private static final int VAMP_DURATION = 25000; //ms,can be found in skill info
    private static final int VAMP_TICK_TIME = 1000; //ms
    private List<Integer> possibleSpawnSlvs = Arrays.asList(new Integer[]{249, 251, 252, 253, 256});

    public void activateVamp() {
        Mob hilla = getHardHilla();

        if (hilla == null) return;

        hilla.addBlockedSkill(MobSkillID.PMCounter, 12);

        isVampActive = true;

        if (vampCheckTimer != null) {
            EventManager.stopTimer(vampCheckTimer);
        }
        vampCheckTimer = addTimer(EventManager.addFixedRateEvent(() -> onVampTick(), VAMP_TICK_TIME, VAMP_TICK_TIME));

        if (vampEndTimer != null) {
            EventManager.stopTimer(vampEndTimer);
        }
        vampEndTimer = addTimer(EventManager.addEvent(() -> onVampFinished(), VAMP_DURATION));

        OutPacket vampStartEffectPacket = new OutPacket(OutHeader.HILLA_VAMP_EFFECT_START);
        vampStartEffectPacket.encodeInt(hilla.getObjectId());
        getInstance().getField(262031300).broadcastPacket(vampStartEffectPacket);


        //Use a random summon skill
        hilla.setForcedSkill(MobSkillID.Summon.getVal(), Util.getRandomFromCollection(possibleSpawnSlvs));
    }

    private void onVampTick() {
        Mob hilla = getHardHilla();
        if (hilla == null) return;

        Field field = getInstance().getField(262031300);
        List<Mob> fieldMobs = field.getMobs().stream().filter(m -> m.getTemplateId() != BossConstants.HILLA_HARD).collect(Collectors.toList());

        if (fieldMobs.size() == 0) return;

        OutPacket mobAbsorbPacket = new OutPacket(OutHeader.HILLA_VAMP_EFFECT_MOB_ABSORB);
        mobAbsorbPacket.encodeInt(hilla.getObjectId());
        mobAbsorbPacket.encodeInt(fieldMobs.size());

        for (Mob mob : fieldMobs) {
            mobAbsorbPacket.encodeInt(mob.getObjectId());
        }
        field.broadcastPacket(mobAbsorbPacket);


        hilla.heal((int) (hilla.getMaxHp() * 0.01D * fieldMobs.size()));
        OutPacket hillaAbsorbPacket = new OutPacket(OutHeader.HILLA_VAMP_EFFECT_HILLA_ABSORB);
        hillaAbsorbPacket.encodeInt(hilla.getObjectId());
        field.broadcastPacket(hillaAbsorbPacket);
    }

    public void onVampFinished() {
        if (vampCheckTimer != null) {
            EventManager.stopTimer(vampCheckTimer);
        }
        isVampActive = false;

        Mob hilla = getHardHilla();
        if (hilla == null) return;
        hilla.removeBlockedSkill(MobSkillID.PMCounter, 12);

    }

    private Mob getHardHilla() {
        return (Mob) getInstance().getField(262031300).getLifeByTemplateId(BossConstants.HILLA_HARD);
    }

    @Override
    public void onChrHit(Char chr, int dmgAmount) {
        super.onChrHit(chr, dmgAmount);
        if (isVampActive) {
            Mob hilla = getHardHilla();
            if (hilla != null) {
                hilla.heal((int) (hilla.getMaxHp() * 0.05D));
                OutPacket hillaAbsorbPacket = new OutPacket(OutHeader.HILLA_VAMP_EFFECT_HILLA_ABSORB);
                hillaAbsorbPacket.encodeInt(hilla.getObjectId());
                getInstance().getField(262031300).broadcastPacket(hillaAbsorbPacket);
            }
        }
    }
}
