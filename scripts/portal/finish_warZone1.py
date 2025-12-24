# Used in Magnus questline - Occupied Reclamation HQ
if sm.hasMobsInField():
    sm.chat("Please eliminate all mobs.")
else:
    if sm.getFieldID() == 401070100:
        sm.warp(401070200)
    elif sm.getFieldID() == 401070200:
        sm.setQRValue(31807, "1", False)
        sm.warpInstanceOut(401000000, 1) # To Heliseum Reclamation HQ
    elif sm.getFieldID() == 401070000:
        sm.warpInstanceOut(401000000, 1) # To Heliseum Reclamation HQ
        sm.createQuestWithQRValue(31803, "1")
sm.dispose()
