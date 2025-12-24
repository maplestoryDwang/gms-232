# Crystal of Roots(2083002) | Cave of Life, Entrance to Horntail's Cave
if sm.getFieldID() == 240050400:
    sm.warp(240040700, 0)
elif sm.sendAskYesNo("Would you like to leave?"):
    sm.warpInstanceOut(240050400, 0)