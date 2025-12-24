# Sosori
# 3001626
# Marketplace (410000200)
# Warp from Marketplace to Brigand's Row.

response = sm.sendAskYesNo("Would you like to go to Savage Terminal?")
if response:
    sm.warp(402000000)