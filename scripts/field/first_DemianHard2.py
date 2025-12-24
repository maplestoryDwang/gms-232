from net.swordie.ms.constants import BossConstants
from net.swordie.ms.life.mob.boss.demian import Demian

sm.spawnMob(BossConstants.DEMIAN_HARD_TEMPLATE_ID_2, 1073, 16, False, BossConstants.DEMIAN_HP_HARD_2)
sm.addEvent(Demian.stigmaIncinerateObjectTimer(field))  # start Pillar
