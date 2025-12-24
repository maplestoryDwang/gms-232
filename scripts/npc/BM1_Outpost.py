# Cygnus Soldier
# 3003614
# Sky Ferry (130000210)
# Warp from Sky Ferry to Outpost if player is 245+.

if chr.getLevel() >= 245:
    response = sm.sendAskYesNo("Do you want to head to the #bAlliance Outpost#k at #bTenebris#k?")
    if response:
        sm.warp(450009050)
else:
    sm.sendSayOkay("You must be Level 245 or higher to enter Tenebris.")