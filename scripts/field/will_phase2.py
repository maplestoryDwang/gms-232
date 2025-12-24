# will_phase2, fieldId 450008250 (The Deep Mirror)
from net.swordie.ms.connection.packet.field import WillFieldPacket
from net.swordie.ms.constants import BossConstants
from net.swordie.ms.constants import FieldConstants
from net.swordie.ms.life.mob.skill import MobSkillID

hard = FieldConstants.isHardWillField(sm.getFieldID())
fieldId = field.getId()
WILL = BossConstants.HARD_WILL_P2 if hard else BossConstants.WILL_P2

# Etc.wz/BossWill.img/Will
SECRET_WILL = BossConstants.HARD_WILL_P2_DUMMY_1 if hard else BossConstants.WILL_P2_DUMMY_1   # For the attacks from the sky
BULLETS_WILL = BossConstants.HARD_WILL_P2_DUMMY_2 if hard else BossConstants.WILL_P2_DUMMY_2
TRIGGER_BLOCK_PERCS = [51, 1]

sm.spawnMob(WILL, 249, 215, BossConstants.HARD_WILL_P2_HP if hard else BossConstants.WILL_P2_HP)
sm.spawnMob(SECRET_WILL, 0, 0, 1)
sm.spawnMob(BULLETS_WILL, 0, 0, 1)

sm.startWillTriggerTimer()

mob = field.getLifeByTemplateId(WILL)
mob.addBlockedSkill(MobSkillID.BossWillAttack, 8)

for blockPerc in TRIGGER_BLOCK_PERCS:
    mob.addHpTriggerBlockPerc(blockPerc)

field.broadcastPacket(WillFieldPacket.willTriggerBlockP2(TRIGGER_BLOCK_PERCS))