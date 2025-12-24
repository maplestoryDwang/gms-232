# Leave arcana bossfight
if not sm.hasMobsInField():
    sm.warp(940200214)
else:
    if sm.sendAskYesNo("Are you sure you want to leave the fight?"):
        sm.warpInstanceOut(450005000)
