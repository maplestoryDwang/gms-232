
response = sm.sendAskYesNo("Are you sure you want to leave?")

if response:
    if sm.getFieldID() == 401060300:
        sm.warpInstanceOut(401000001)
    else:
        sm.warpInstanceOut(401060000)
