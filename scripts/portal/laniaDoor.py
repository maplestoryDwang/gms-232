# Lania's Front Yard
# 101000101
# Warps Luminous to either his Return Field or Close to the Birds.

map = sm.getReturnField()
birds = 101020100

vieren = 1032209

# Failsafes: don't prompt, just go straight to Close to the Birds
if map in (0, 101000101, birds, 910000000):
    sm.warp(birds, 9)
else:
    sm.setSpeakerID(vieren)
    response = sm.sendAskYesNo("Return to the previous map?")
    if response:
        portal = 0
        if "910001000" in sm.getQRValue(9999):
            sm.setQRValue(9999, "")
            map = 910001000
            portal = 2
        sm.warp(map, portal)
    else:
        sm.warp(birds, 9)