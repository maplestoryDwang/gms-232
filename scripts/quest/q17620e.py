# [Commerci Republic] Eye for an Eye

sm.setPlayerAsSpeaker() # Has to be Player Avatar
sm.sendNext("那个，你是吉尔伯特·达尼尔拉吗？")

sm.setSpeakerID(9390203) # Gilberto Daniella
sm.sendNext("是的。但我好像没见过你，你是谁？")

sm.setPlayerAsSpeaker() # Has to be Player Avatar
sm.sendNext("你好。吉尔伯特，我是……")

sm.setSpeakerID(9390203) # Gilberto Daniella
sm.sendNext("嗯。如果你没有提前预约的话，我没时间接待你。你还是回去吧。")
sm.completeQuest(parentID)
sm.warp(865090002, 1) # Hidden  Daniella Merchant Union Office
sm.dispose()
