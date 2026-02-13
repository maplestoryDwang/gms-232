# Sunburst  |  Part of the Golden Temple Quest Line  |  Anytime Quest

GATE_OF_TRIALS = 9000098
SUNBURST = 4033176

sm.setSpeakerID(GATE_OF_TRIALS)
sm.sendNext("#b(脑海中又一次听见了声音。)\r\n“这个祭品能守护你的灵魂。但是记住，只要你一踏入黄金祭坛，祭品就会被破坏。不要去黄金祭坛，沿原路出来，祭品会再次回到你的手中。”\r\n(随着笨重石门的开启，走进了#m252030000#。)")

sm.warp(252030000, 0) # Entrance to Ravana's Altar
sm.completeQuestNoRewards(parentID)
sm.consumeItem(SUNBURST)
