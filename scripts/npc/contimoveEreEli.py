# Kiriru
# 1100003
# Sky Ferry (130000210)
# Warp from Ereve to Victoria Island.

response = sm.sendAskYesNo("Would you like to go to Victoria Island?")

if response:
    sm.warp(200090031)
