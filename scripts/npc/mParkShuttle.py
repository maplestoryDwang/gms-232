# Monster Park Shuttle

if sm.getFieldID() != 951000000:
    if sm.sendAskYesNo("Would you like to go to the monster park?"):
        sm.warp(951000000)
else:
    if sm.sendAskYesNo("Would you like to return?"):
        if not sm.getReturnField() is None:
            sm.warp(sm.getReturnField())
        else:
            sm.warp(100000000, 19)
