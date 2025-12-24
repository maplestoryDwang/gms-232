from net.swordie.ms.constants import BossConstants
from net.swordie.ms.enums import ObstacleAtomEnum

sm.setInstanceTime(BossConstants.MAGNUS_TIME)  # 20min
sm.spawnMob(8880002, 1900, -1347, 6000000000)  # Normal Magnus, 6b

sm.invokeAtFixedRate(250, BossConstants.MAGNUS_GREEN_ATOM_EXECUTION_DELAY, 0,
                     "createObstacleAtom", ObstacleAtomEnum.GreenMeteor, 1, BossConstants.MAGNUS_GREEN_ATOM_DAMAGE,
                     BossConstants.MAGNUS_OBSTACLE_ATOM_VELOCITY, BossConstants.MAGNUS_GREEN_ATOM_AMOUNT,
                     BossConstants.MAGNUS_GREEN_ATOM_PROP)

sm.invokeAtFixedRate(500, BossConstants.MAGNUS_BLUE_ATOM_EXECUTION_DELAY, 0,
                     "createObstacleAtom", ObstacleAtomEnum.BlueMeteor, 1, BossConstants.MAGNUS_BLUE_ATOM_DAMAGE,
                     BossConstants.MAGNUS_OBSTACLE_ATOM_VELOCITY, BossConstants.MAGNUS_BLUE_ATOM_AMOUNT,
                     BossConstants.MAGNUS_BLUE_ATOM_PROP)

sm.invokeAtFixedRate(750, BossConstants.MAGNUS_PURPLE_ATOM_EXECUTION_DELAY, 0,
                     "createObstacleAtom", ObstacleAtomEnum.PurpleMeteor, 1, BossConstants.MAGNUS_PURPLE_ATOM_DAMAGE,
                     BossConstants.MAGNUS_OBSTACLE_ATOM_VELOCITY, BossConstants.MAGNUS_PURPLE_ATOM_AMOUNT,
                     BossConstants.MAGNUS_PURPLE_ATOM_PROP)
