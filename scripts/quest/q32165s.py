# [Riena Strait] Wood That's Good 2
sm.setSpeakerID(1510006)

lumber = 4030022

if sm.canHold(lumber):
    sm.sendNext("航海士，你搜集的木材就是这种吧？\r\n\r\n#b#i4030022##z4030022#")
    sm.startQuestNoCheck(parentID)
    sm.giveItem(lumber)
else:
    sm.sendSayOkay("Navigator, let's make some space for all this lumber we're retrieving!")
sm.dispose()
