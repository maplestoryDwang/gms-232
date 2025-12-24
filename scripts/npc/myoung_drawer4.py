# Pharmacy Drawer 4
# 1052132
# Kerning City Pharmacy (103000002)
# Produces First-Aid Medicine for The Middleman.

middleman = 2852
firstAidMedicine = 4033036

if sm.hasQuest(middleman):
    if sm.canHold(firstAidMedicine) and not sm.hasItem(firstAidMedicine):
        sm.giveItem(firstAidMedicine)
        sm.sendSayOkay("(You searched the drawer and took out an emergency kit.)")
    elif sm.hasItem(firstAidMedicine):
        sm.sendSayOkay("(The drawer is now empty.)")
    else:
        sm.sendSayOkay("Please make room in your Etc. inventory.")
else:
    sm.sendSayOkay("Do not open without permission.")