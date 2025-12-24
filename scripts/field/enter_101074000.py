# Field script for entering Ellinel Fairy Academy
# id 101074000 (null), field 101074000
ACADEMIA = 32104 # QUEST ID
sm.lockInGameUI(True, True)
sm.hideUser(True)
sm.moveCamera(False, 100, -600, 0)
sm.sendDelay(1000)
sm.sendDelay(3800)
sm.showFieldEffect("temaD/enter/fairyAcademy", 0)
sm.sendDelay(2800)
sm.hideUser(False)
sm.lockInGameUI(False, True)
if sm.hasQuest(ACADEMIA) or sm.hasQuestCompleted(ACADEMIA):
    sm.warp(101070010)
else:
   sm.warp(101070000)