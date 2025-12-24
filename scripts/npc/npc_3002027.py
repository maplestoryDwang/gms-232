# Leaf Plane
# 3002027
# Pantheon (400000000)
# Warp from Pantheon to Fox Tree Top if player is 185+.

if chr.getLevel() >= 185:
    response = sm.sendAskYesNo("Would you like to go to Fox Valley?")
    if response:
        sm.warp(410000100)
else:
    sm.sendSayOkay("You must be Level 185 or higher to move to Fox Valley.")