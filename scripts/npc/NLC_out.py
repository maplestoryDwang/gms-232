# Bell
# 9401002
# NLC Town Center (600000000)
# Returns player to their ReturnField after entering NLC via Dimensional Mirror.

response = sm.sendAskYesNo("Are you done with your buisness in NLC already? Do you want to head back to your previous location?")
if response:
    map = sm.getReturnField()
    portal = 0

    if map in (0, 910000000):
        sm.chat("(Portal) Cannot find your previous map ID, warping to Henesys.")
        map = 100000000
        portal = 0

    if "910001000" in sm.getQRValue(9999):
        sm.setQRValue(9999, "")
        map = 910001000
        portal = 2

    sm.warp(map, portal)