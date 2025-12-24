if not sm.hasMobsInField() and sm.hasQuest(25101):
    sm.warp(915010001, 1)
else:
    sm.chat("Remove the lock first and make sure you have the 'That's so Raven' quest active.")