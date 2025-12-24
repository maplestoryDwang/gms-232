# Torbil
# 3001931
# Fountain Square (410000300)
# Warp from Fountain Square to Brigand's Row.

response = sm.sendAskYesNo("Would you like to go to Savage Terminal?")
if response:
    sm.warp(402000000)