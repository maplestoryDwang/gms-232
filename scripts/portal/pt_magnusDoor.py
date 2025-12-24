#Magnus' soul will always stay alive for some reason
response = sm.sendAskYesNo("Are you sure you want to leave?")
if response:
    if sm.getFieldID() == 401060300:
        sm.warpInstanceOut(401000001)
    elif sm.getFieldID() == 940100200: #V Job
        sm.warpInstanceOut(450000010)
    else:
        sm.warpInstanceOut(401060000)