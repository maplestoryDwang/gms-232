# Sosori
# 3001636
# Brigand's Row (402000000)
# Warp from Brigand's Row to Marketplace.

response = sm.sendAskYesNo("Would you like to go to Cheong-woon?")
if response:
    sm.warp(410000200)