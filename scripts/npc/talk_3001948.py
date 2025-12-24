# Torbil
# 3001948
# Brigand's Row (402000000)
# Warp from Brigand's Row to Fountain Square.

response = sm.sendAskYesNo("Would you like to go to Ristonia?")
if response:
    sm.warp(410000300)