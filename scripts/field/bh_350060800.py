# 350060800 - Normal Mode
from net.swordie.ms.constants import BossConstants
from net.swordie.ms.enums import ObstacleAtomEnum

LOTUS = 8950101
# mob = sm.spawnMob(LOTUS, 370, -16, BossConstants.LOTUS_NORMAL_HP_2)  # 750b
sm.showHP(LOTUS)

sm.invokeAtFixedRate(0, BossConstants.LOTUS_BLUE_ATOM_EXECUTION_DELAY, 0,
                     "createObstacleAtom", ObstacleAtomEnum.LotusBlueDebris, 1, BossConstants.LOTUS_BLUE_ATOM_DAMAGE, BossConstants.LOTUS_OBSTACLE_ATOM_VELOCITY, BossConstants.LOTUS_BLUE_ATOM_AMOUNT, BossConstants.LOTUS_BLUE_ATOM_PROP)

sm.invokeAtFixedRate(250, BossConstants.LOTUS_YELLOW_ATOM_EXECUTION_DELAY, 0,
                     "createObstacleAtom", ObstacleAtomEnum.LotusYellowDebris, 2, BossConstants.LOTUS_YELLOW_ATOM_DAMAGE, BossConstants.LOTUS_OBSTACLE_ATOM_VELOCITY, BossConstants.LOTUS_YELLOW_ATOM_AMOUNT, BossConstants.LOTUS_YELLOW_ATOM_PROP)

sm.invokeAtFixedRate(500, BossConstants.LOTUS_PURPLE_ATOM_EXECUTION_DELAY, 0,
                     "createObstacleAtom", ObstacleAtomEnum.LotusPurpleDebris, 3, BossConstants.LOTUS_PURPLE_ATOM_DAMAGE, BossConstants.LOTUS_OBSTACLE_ATOM_VELOCITY, BossConstants.LOTUS_PURPLE_ATOM_AMOUNT, BossConstants.LOTUS_PURPLE_ATOM_PROP)
