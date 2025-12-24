# Field script for leaving Ellinel Fairy Academy

NORTH_FOREST_GIANT_TREE = 101030000 # MAP ID
sm.lockInGameUI(True, True)
sm.hideUser(True)
sm.moveCamera(False, 100, -600, 0)
sm.sendDelay(1000)
sm.sendDelay(3800)
sm.hideUser(False)
sm.lockInGameUI(False, True)
sm.warp(NORTH_FOREST_GIANT_TREE, 5)
