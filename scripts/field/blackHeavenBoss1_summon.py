# 350060400 - Hard mode
from net.swordie.ms.constants import BossConstants
from net.swordie.ms.enums import ObstacleAtomEnum

LOTUS = 8950000
sm.spawnMob(LOTUS, 0, -16, BossConstants.LOTUS_HARD_HP_1)  # 1.65T
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