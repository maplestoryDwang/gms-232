package net.swordie.ms.world.field.instance.instancehelper.boss;

import net.swordie.ms.client.character.Char;
import net.swordie.ms.client.character.items.Item;
import net.swordie.ms.connection.packet.MobPool;
import net.swordie.ms.constants.BossConstants;
import net.swordie.ms.constants.MobConstants;
import net.swordie.ms.handlers.executors.EventManager;
import net.swordie.ms.life.drop.Drop;
import net.swordie.ms.life.mob.Mob;
import net.swordie.ms.life.mob.skill.MobCastingBarSkill;
import net.swordie.ms.life.mob.skill.MobSkillID;
import net.swordie.ms.util.Position;
import net.swordie.ms.world.field.Field;
import net.swordie.ms.world.field.instance.instancehelper.InstanceHelper;

import java.util.HashSet;
import java.util.concurrent.TimeUnit;

public class ZakumInstanceHelper extends InstanceHelper {

    private static final int ZAKUM_EYE = 4001017;
    private static final int ZAKUM_BASE_REGEN_ID = 8800130;
    private static final String ZAKUM_SPAWNED_KEY = "ZakumSpawned";

    @Override
    public void onItemDropped(Char chr, Item item, int quantity, Position position, Drop drop) {
        var field = chr.getField();

        if (item == null || item.getItemId() != ZAKUM_EYE) {
            return;
        }

        if (field.hasProperty(ZAKUM_SPAWNED_KEY)) {
            chr.chatMessage("It seems Zakum has already been summoned here.");
            return;
        }

        field.setProperty(ZAKUM_SPAWNED_KEY, true);
        drop.setBlockFromPickup(true);

        addTimer(EventManager.addEvent(() -> {
            field.removeDrop(drop.getObjectId(), 0, false, 0);
            spawnZakum(chr, field);
        }, 3, TimeUnit.SECONDS));

        super.onItemDropped(chr, item, quantity, position, drop);
    }

    @Override
    public void onMobSpawn(Field field, Mob mob) {
        if (MobConstants.isZakumFlame(mob.getTemplateId())) {
            toggleFootholdsAndArmClaps(field, true);
        }
    }

    @Override
    public void onMobDeath(Field field, Mob mob) {
        var templateId = mob.getTemplateId();

        if (MobConstants.isZakumArm(templateId) && field.getMobs().stream().noneMatch(m -> MobConstants.isZakumArm(m.getTemplateId()))) {
            // Enable zakum body
            field.getMobs().stream()
                    .filter(m -> MobConstants.isZakumBody(m.getTemplateId()))
                    .findAny()
                    .ifPresent(body -> {
                        body.setBlockAttack(false);
                        for (var skill : body.getSkills()) {
                            body.removeBlockedSkill(skill);
                        }
                        body.addBlockedSkill(body.getSkillByMobSkillInfo(201, 162)); // Fire
                        body.addBlockedSkill(body.getSkillByMobSkillInfo(170, 1)); // Teleport, only done via attack
                    });
            // Stop cast bars
            new HashSet<>(field.getMobs()).stream()
                    .filter(m -> MobConstants.isZakumArmRegen(m.getTemplateId()))
                    .forEach(m -> {
                        field.broadcastPacket(MobPool.castingBarSkill(mob.getObjectId(), MobCastingBarSkill.end(false, 0, MobSkillID.CastingBar.getVal(), 13, 0)));
                        field.removeLife(m);
                    });
        } else if (MobConstants.isZakumFlame(templateId)) {
            toggleFootholdsAndArmClaps(field, false);
        }

        super.onMobDeath(field, mob);
    }

    private void spawnZakum(Char chr, Field field) {
        var fieldId = field.getId();
        Mob mainBody = null;

        if (fieldId == BossConstants.EASY_ZAKUM_FIELD) {
            // Arms
            for (int i = 0; i < 8; i++) {
                field.spawnMob(8800023 + i, -54, 86, false, 0);
            }
            // Main Body
            mainBody = field.spawnMob(8800022, -54, 86, false, 0);
        } else if (fieldId == BossConstants.NORMAL_ZAKUM_FIELD) {
            // Arms
            for (int i = 0; i < 8; i++) {
                field.spawnMob(8800003 + i, -54, 86, false, 0);
            }
            // Main Body
            mainBody = field.spawnMob(8800002, -54, 86, false, 0);
        } else if (fieldId == BossConstants.HARD_ZAKUM_FIELD) {
            // Arms
            for (int i = 0; i < 8; i++) {
                field.spawnMob(8800103 + i, -54, 86, false, 0);
            }
            // Main Body
            mainBody = field.spawnMob(8800102, -54, 86, false, 0);
        }

        if (mainBody != null) {
            mainBody.setBlockAttack(true);

            for (var skill : mainBody.getSkills()) {
                mainBody.addBlockedSkill(skill);
            }

            var templateId = mainBody.getTemplateId();
            if (templateId == BossConstants.HARD_ZAKUM_BODY) {
                mainBody.removeBlockedSkill(mainBody.getSkillByMobSkillInfo(201, 162)); // Fire
            }
        }

        toggleFootholdsAndArmClaps(field, false);

        var sm = chr.getScriptManager();
        sm.setInstanceTime(1800);
        sm.setDeathCount(20);
    }

    private void toggleFootholdsAndArmClaps(Field field, boolean enable) {
        field.changeFoothold("zdc7", enable, -512, -7);
        field.changeFoothold("zdc8", enable, -436, -5);
        field.changeFoothold("zdc9", enable, -358, -8);

        field.changeFoothold("zdc16", enable, 363, -7);
        field.changeFoothold("zdc17", enable, 439, -5);
        field.changeFoothold("zdc18", enable, 517, -8);

        field.changeFoothold("zdc4", enable, -514, -102);
        field.changeFoothold("zdc5", enable, -439, -101);
        field.changeFoothold("zdc6", enable, -362, -99);

        field.changeFoothold("zdc13", enable, 384, -99);
        field.changeFoothold("zdc14", enable, 464, -102);
        field.changeFoothold("zdc15", enable, 546, -101);

        field.changeFoothold("zdc10", enable, 350, -189);
        field.changeFoothold("zdc11", enable, 426, -190);
        field.changeFoothold("zdc12", enable, 504, -187);

        field.changeFoothold("zdc1", enable, -464, -186);
        field.changeFoothold("zdc2", enable, -388, -187);
        field.changeFoothold("zdc3", enable, -310, -184);

        if (enable) {
            field.getMobs().stream()
                    .filter(m -> MobConstants.isZakumArm(m.getTemplateId()))
                    .forEach(m -> m.removeBlockedSkill(MobSkillID.Damage, 27));
        } else {
            field.getMobs().stream()
                    .filter(m -> MobConstants.isZakumArm(m.getTemplateId()))
                    .forEach(m -> m.addBlockedSkill(MobSkillID.Damage, 27));
        }
    }
}
