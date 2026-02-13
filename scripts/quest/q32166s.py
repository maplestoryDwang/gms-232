# [Riena Strait] Wood That's Good 3
sm.setSpeakerID(1510006)

lumber = 4030022

if sm.canHold(lumber):
    sm.sendNext("航海士，这样的木材应该挺有用的。\r\n\r\n#b#i4030022##z4030022#")
    sm.startQuestNoCheck(parentID)
    sm.giveItem(lumber)
else:
    sm.sendSayOkay("Navigator, let's make some space for all this lumber we're retrieving!")
sm.dispose()
