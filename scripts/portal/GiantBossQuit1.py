sm.setSpeakerID(9390124) # Heart Tree Guardian
response = sm.sendAskYesNo("Are you sure you want to leave?")
if response:
    sm.warpInstanceOut(863010000)
sm.dispose()