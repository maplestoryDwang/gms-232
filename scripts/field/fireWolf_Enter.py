from net.swordie.ms.client.surprisemission import SurpriseMissionCompleter
from net.swordie.ms.constants import GameConstants

if not sm.hasMobsInField():
    sm.spawnMob(9101078, 0, 353, False, GameConstants.INFERNO_WOLF_HP)
sm.createStopWatchForChrOnly(30)  # 30 sec
sm.invokeAfterDelay(30000, "warp", 993000600)

if chr is not None:
    SurpriseMissionCompleter.completeVisitInfernoWolfDen(chr)
