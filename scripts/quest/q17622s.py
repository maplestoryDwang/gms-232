# [Commerci Republic] Gilberto's Reaction

sm.setPlayerAsSpeaker() # Has to be Player Avatar
sm.sendNext("你看起来心情好像不太好，是我做错什么了吗？")
sm.startQuest(parentID)

sm.setSpeakerID(9390256) # Leon Daniella
sm.sendNext("嗯？怎么可能~ 很高兴能重新见到你。你打算在桑凯梅尔兹待多久？")

sm.setPlayerAsSpeaker() # Has to be Player Avatar
sm.sendNext("这个么…一时半会好像走不了。我感觉事情不会那么顺利地解决。\r\n#b(拜你所赐……。)#k")

sm.setSpeakerID(9390256) # Leon Daniella
sm.sendNext("那你在桑凯梅尔兹期间，就住在我们商团吧！明天我带你参观下商团！那你先休息吧~！")
sm.completeQuest(parentID)
sm.warp(865000002, 2) # Warp player in the same map, but to a different portal
sm.scriptChat("Whilst sleeping, you overheard Leon and Gilberto talking about you, it seems that Gilberto does not trust you yet.")
sm.startQuest(17623) # [Commerci Republic] Another Outsider
sm.completeQuest(17623) # [Commerci Republic] Another Outsider
sm.dispose()
