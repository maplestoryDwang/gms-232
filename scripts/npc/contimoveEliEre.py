# Kiriru
# 1100007
# Station to Ereve (104020120)
# Warp from Victoria Island to Ereve.

response = sm.sendAskYesNo("Would you like to go to Ereve?")

if response:
    sm.warp(200090030)
