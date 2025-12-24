# will_phase3, fieldId 450008350 (The Deep Mirror)
from net.swordie.ms.constants import BossConstants
from net.swordie.ms.constants import FieldConstants
from net.swordie.ms.life.mob.boss.will import WillModule

hard = FieldConstants.isHardWillField(sm.getFieldID())
WILL = BossConstants.HARD_WILL_P3 if hard else BossConstants.WILL_P3

SECRET_WILL = BossConstants.HARD_WILL_P3_DUMMY_1 if hard else BossConstants.WILL_P3_DUMMY_1
BULLETS_WILL = BossConstants.HARD_WILL_P3_DUMMY_2 if hard else BossConstants.WILL_P3_DUMMY_2

sm.spawnMob(WILL, 282, 159, BossConstants.HARD_WILL_P3_HP if hard else BossConstants.WILL_P3_HP)
sm.spawnMob(SECRET_WILL, 0, 0, 1)
sm.spawnMob(BULLETS_WILL, 0, 0, 1)

sm.startWillWebTimer()

for i in range(0, 36):
    WillModule.spawnNarrowWeb(field)