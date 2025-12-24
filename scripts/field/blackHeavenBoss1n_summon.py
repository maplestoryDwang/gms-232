from net.swordie.ms.constants import BossConstants
from net.swordie.ms.enums import ObstacleAtomEnum

# 350060700 - Normal mode
LOTUS = 8950100
mob = sm.spawnMob(LOTUS, 0, -16, BossConstants.LOTUS_NORMAL_HP_1)  # 400b
sm.showHP(LOTUS)


sm.invokeAtFixedRate(BossConstants.LOTUS_BLUE_ATOM_EXECUTION_DELAY, BossConstants.LOTUS_BLUE_ATOM_EXECUTION_DELAY, 0,
                     "createObstacleAtom",
                     ObstacleAtomEnum.LotusBlueDebris,
                     1,
                     BossConstants.LOTUS_BLUE_ATOM_DAMAGE,
                     BossConstants.LOTUS_OBSTACLE_ATOM_VELOCITY,
                     BossConstants.LOTUS_BLUE_ATOM_AMOUNT,
                     BossConstants.LOTUS_BLUE_ATOM_PROP)

sm.invokeAtFixedRate(BossConstants.LOTUS_YELLOW_ATOM_EXECUTION_DELAY, BossConstants.LOTUS_YELLOW_ATOM_EXECUTION_DELAY, 0,
                     "createObstacleAtom",
                     ObstacleAtomEnum.LotusYellowDebris,
                     2,
                     BossConstants.LOTUS_YELLOW_ATOM_DAMAGE,
                     BossConstants.LOTUS_OBSTACLE_ATOM_VELOCITY,
                     BossConstants.LOTUS_YELLOW_ATOM_AMOUNT,
                     BossConstants.LOTUS_YELLOW_ATOM_PROP)

sm.invokeAtFixedRate(BossConstants.LOTUS_PURPLE_ATOM_EXECUTION_DELAY, BossConstants.LOTUS_PURPLE_ATOM_EXECUTION_DELAY, 0,
                     "createObstacleAtom",
                     ObstacleAtomEnum.LotusPurpleDebris,
                     3,
                     BossConstants.LOTUS_PURPLE_ATOM_DAMAGE,
                     BossConstants.LOTUS_OBSTACLE_ATOM_VELOCITY,
                     BossConstants.LOTUS_PURPLE_ATOM_AMOUNT,
                     BossConstants.LOTUS_PURPLE_ATOM_PROP)
