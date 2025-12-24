# Flying Fish
# 3003422
# Cavernous Cavern (450005400)
# Warps to Path to the Coral Forest if the player has finished Arcana's questline and is 230+.

coralForest = 450006000

if not sm.hasQuestCompleted(34249):
    sm.sendSayOkay("Bloop! #b\r\n"
    "(Flying Fish refuses to take you further while the Vortex of Light is still present. You should probably finish your business in Arcana first...)")
    sm.dispose()
if chr.getLevel() < 230:
    sm.sendSayOkay("Bloop! #b\r\n"
    "(You must be Level 230 or higher to descend into Morass.)")
else:
    response = sm.sendAskYesNo("Bloop? #b\r\n"
    "(Do you want to go to #m" + repr(coralForest) + "#?)")
    if response:
        sm.warp(coralForest, 1)
