# 240010102
if chr.getJob() == 2411 and chr.getLevel() >= 100:
    sm.completeQuest(25120)
    sm.warpInstanceIn(915020200, 1)
else:
    sm.chat("Only Phantoms looking to grow can enter.")
sm.dispose()
