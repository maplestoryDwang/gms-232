# [Riena Strait] Get it Strait

mapid = 140000000

sm.setSpeakerID(1105012)
response = sm.sendAskYesNo("你太忙了吗？")

if response:
    sm.startQuest(parentID)
    sm.completeQuest(parentID)
    sm.warp(mapid, 0)
sm.dispose()
