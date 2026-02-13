# [Commerci Republic] Stolem Items

sm.setSpeakerID(9390220) # Maestra Fiametta
sm.sendNext("欢迎光临。我能帮你什么吗？")

sm.setPlayerAsSpeaker() # Has to be Player Avatar
sm.sendNext("听说达尼尔拉商团的交易品丢了，我能了解下详细情况吗？")

sm.setSpeakerID(9390220) # Maestra Fiametta
sm.sendNext("你是说达尼尔拉商团的交易品啊。几天前，达尼尔拉商团的人在这寄放了大量的交易品，不久前，他又来拿走了。")

sm.setPlayerAsSpeaker() # Has to be Player Avatar
sm.sendNext("你知道是谁来拿走的吗？")

sm.setSpeakerID(9390220) # Maestra Fiametta
sm.sendNext("嗯，和把东西寄放过来的是同一个人。")

sm.setPlayerAsSpeaker() # Has to be Player Avatar
sm.sendNext("嗯…… 真是奇怪。是怎么回事呢。")
sm.completeQuest(parentID)
sm.dispose()