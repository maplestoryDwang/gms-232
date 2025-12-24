from net.swordie.ms.constants import BossConstants
from net.swordie.ms.enums import ObstacleAtomEnum

# 350060500 - Hard mode
LOTUS = 8950102
# sm.spawnMob(LOTUS, 370, -16, BossConstants.LOTUS_HARD_HP_3)  # 15T
sm.showHP(LOTUS)

sm.invokeAtFixedRate(0, BossConstants.LOTUS_BLUE_ATOM_EXECUTION_DELAY, 0,
                     "createObstacleAtom", ObstacleAtomEnum.LotusBlueDebris, 1, BossConstants.LOTUS_BLUE_ATOM_DAMAGE, BossConstants.LOTUS_OBSTACLE_ATOM_VELOCITY, BossConstants.LOTUS_BLUE_ATOM_AMOUNT, BossConstants.LOTUS_BLUE_ATOM_PROP)

sm.invokeAtFixedRate(250, BossConstants.LOTUS_YELLOW_ATOM_EXECUTION_DELAY, 0,
                     "createObstacleAtom", ObstacleAtomEnum.LotusYellowDebris, 2, BossConstants.LOTUS_YELLOW_ATOM_DAMAGE, BossConstants.LOTUS_OBSTACLE_ATOM_VELOCITY, BossConstants.LOTUS_YELLOW_ATOM_AMOUNT, BossConstants.LOTUS_YELLOW_ATOM_PROP)

sm.invokeAtFixedRate(500, BossConstants.LOTUS_PURPLE_ATOM_EXECUTION_DELAY, 0,
                     "createObstacleAtom", ObstacleAtomEnum.LotusPurpleDebris, 3, BossConstants.LOTUS_PURPLE_ATOM_DAMAGE, BossConstants.LOTUS_OBSTACLE_ATOM_VELOCITY, BossConstants.LOTUS_PURPLE_ATOM_AMOUNT, BossConstants.LOTUS_PURPLE_ATOM_PROP)

sm.invokeAtFixedRate(BossConstants.LOTUS_ROBOT_ATOM_EXECUTION_DELAY, BossConstants.LOTUS_ROBOT_ATOM_EXECUTION_DELAY, 0,
                     "createObstacleAtom",
                     ObstacleAtomEnum.LotusRobotDebris,
                     4,
                     BossConstants.LOTUS_ROBOT_ATOM_DAMAGE,
                     BossConstants.LOTUS_OBSTACLE_ATOM_VELOCITY,
                     BossConstants.LOTUS_ROBOT_ATOM_AMOUNT,
                     BossConstants.LOTUS_ROBOT_ATOM_PROP)

sm.invokeAtFixedRate(BossConstants.LOTUS_CRUSHER_ATOM_EXECUTION_DELAY, BossConstants.LOTUS_CRUSHER_ATOM_EXECUTION_DELAY, 0,
                     "createObstacleAtom",
                     ObstacleAtomEnum.LotusCrusherDebris,
                     5,
                     BossConstants.LOTUS_CRUSHER_ATOM_DAMAGE,
                     BossConstants.LOTUS_OBSTACLE_ATOM_VELOCITY,
                     BossConstants.LOTUS_CRUSHER_ATOM_AMOUNT,
                     BossConstants.LOTUS_CRUSHER_ATOM_PROP)