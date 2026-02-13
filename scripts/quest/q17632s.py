# [Commerci Republic] The Blocked Canal


sm.setPlayerAsSpeaker() # Has to be Player Avatar
sm.sendNext("莱文，我们回去吧。")

sm.setSpeakerID(9390256) # Leon Daniella
sm.sendNext("等下。")

sm.setPlayerAsSpeaker() # Has to be Player Avatar
sm.sendNext("嗯？为什么？什么事？")

sm.setSpeakerID(9390256) # Leon Daniella
sm.sendNext("不是什么事啦…… 我想再四处转转。")

sm.setPlayerAsSpeaker() # Has to be Player Avatar
sm.sendNext("四处转转。刚刚的事情还没让你清醒吗？")

sm.setSpeakerID(9390256) # Leon Daniella
response = sm.sendAskYesNo("不是，不是追阿库旁多。我只是…… 想再四处转转。如果你累的话，你就先回去吧。")

if response:
    sm.setPlayerAsSpeaker() # Has to be Player Avatar
    sm.sendNext("哎呀。我知道了。现在还很危险，我陪你一起吧。")
    sm.startQuest(parentID)
sm.dispose()
