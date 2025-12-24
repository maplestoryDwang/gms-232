# will_phase1, fieldId 450008150 (Diffraction Hall)
from net.swordie.ms.connection.packet.field import WillFieldPacket
from net.swordie.ms.constants import BossConstants
from net.swordie.ms.constants import FieldConstants
from net.swordie.ms.life.mob.skill import MobSkillID

hard = FieldConstants.isHardWillField(sm.getFieldID())

REAL_WILL = BossConstants.HARD_REAL_WILL_P1 if hard else BossConstants.REAL_WILL_P1
BLUE_WILL = BossConstants.HARD_BLUE_WILL_P1 if hard else BossConstants.BLUE_WILL_P1
PURPLE_WILL = BossConstants.HARD_PURPLE_WILL_P1 if hard else BossConstants.PURPLE_WILL_P1

WILL_IDS = [REAL_WILL, BLUE_WILL, PURPLE_WILL]
TRIGGER_BLOCK_PERCS = [67, 34, 1]

SECRET_WILL = BossConstants.HARD_WILL_P1_DUMMY_1 if hard else BossConstants.WILL_P1_DUMMY_1 # For the attacks from the sky
BULLETS_WILL = BossConstants.HARD_WILL_P1_DUMMY_2 if hard else BossConstants.WILL_P1_DUMMY_2

sm.spawnMob(REAL_WILL, 0, 0, BossConstants.HARD_WILL_P1_HP if hard else BossConstants.WILL_P1_HP) # Red (main) bar
sm.spawnMob(BLUE_WILL, 282, 159, BossConstants.HARD_WILL_P1_HP if hard else BossConstants.WILL_P1_HP) # Blue bar
sm.spawnMob(SECRET_WILL, 282, 159, 1)
sm.spawnMob(BULLETS_WILL, -253, 159, 1)
sm.spawnMob(BULLETS_WILL, 282, 159, 1)
sm.spawnMob(BULLETS_WILL, -253, -259, 1)
sm.spawnMob(BULLETS_WILL, 282, -259, 1)

sm.spawnMob(PURPLE_WILL, 282, -2020, BossConstants.HARD_WILL_P1_HP if hard else BossConstants.WILL_P1_HP) # Purple bar
sm.spawnMob(SECRET_WILL + 1, 282, -2020, 1)
sm.spawnMob(BULLETS_WILL + 1, -253, -2020, 1)
sm.spawnMob(BULLETS_WILL + 1, 282, -2020, 1)
sm.spawnMob(BULLETS_WILL + 1, -253, -2320, 1)
sm.spawnMob(BULLETS_WILL + 1, 282, -2320, 1)

for will in WILL_IDS:
    mob = field.getLifeByTemplateId(will)
    mob.addBlockedSkill(MobSkillID.BossWillAttack, 8)
    mob.addBlockedSkill(MobSkillID.BossWillAttack, 15)
    for blockPerc in TRIGGER_BLOCK_PERCS:
        mob.addHpTriggerBlockPerc(blockPerc)

sm.showHP(REAL_WILL)
sm.showHP(BLUE_WILL)
sm.showHP(PURPLE_WILL)

field.broadcastPacket(WillFieldPacket.willTriggerBlockP1(TRIGGER_BLOCK_PERCS, WILL_IDS))

sm.startWillTriggerTimer()