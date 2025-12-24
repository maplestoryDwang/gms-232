
# 863010000 - Gollux lobby map
response = sm.sendAskYesNo("Would you like to leave the battle against gollux?")

if response:
    sm.warpInstanceOut(863010000)
    sm.clearGolluxClearedMaps()