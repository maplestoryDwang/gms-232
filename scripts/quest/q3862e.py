# Sunburst  |  Part of the Golden Temple Quest Line

GATE_OF_TRIALS = 9000098

sm.setSpeakerID(GATE_OF_TRIALS)
sm.sendNext("#b（脑海中的声音再次响起。）\r\n“这个祭品会守护你的灵魂。但是记住，踏入黄金祭坛的瞬间，祭品就会损坏。如果你不去黄金祭坛，重新回来的话，祭品就会重新回到你的手中。”\r\n（沉重的石门打开，走进了#m252030000#。）")

sm.warp(252030000, 0) # Entrance to Ravana's Altar
sm.completeQuestNoRewards(parentID)
