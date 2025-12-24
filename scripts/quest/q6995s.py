# 6995 - Zakum Statue of the dread
sm.setSpeakerID(2020008)
sm.sendNext("I'd heard you were improving. You look well.")
if sm.sendAskYesNo("Are you ready to face Crumbling Zakum? \r\n #r<<Click Yes to teleport to the #bChief's Residence in El Nath>>"):
    sm.sendNext("I'll take you to the chief's residence.")
    sm.startQuest(parentID)
    sm.warp(211000001)
