# Root abyss out
response = sm.sendAskYesNo("Would you like to leave?")

if response:
    sm.warpInstanceOut(105200000)