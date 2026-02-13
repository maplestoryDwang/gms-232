# [Commerci Republic] Back to Town
sm.setSpeakerID(9390256) # Leon Daniella
response = sm.sendAskYesNo("现在要立刻回去吗？")

if response:
    sm.warp(865000000, 0) # San Commerci
    sm.startQuest(parentID)
sm.dispose()
