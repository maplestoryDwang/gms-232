response = sm.sendAskYesNo("Are you sure you want to leave?")

# sm.sendSay("Response was " + str(response) + "\r\rAnswer was " + str(answer))
if response:
    sm.warpInstanceOut(401060000)
