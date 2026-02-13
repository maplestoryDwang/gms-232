# 23221 - 4th job Demon
sm.setSpeakerID(2151009) # Mastema
if sm.sendAskYesNo("#h0#，修行进展顺利吗？有什么需要我的地方吗？"):
    sm.startQuest(parentID)
    sm.warp(931050110, 0)