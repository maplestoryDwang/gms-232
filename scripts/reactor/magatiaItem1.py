# Zenumist Magic Pillar
# 2612004
# Zenumist Society (261000010)
# Consumes a Strange Bottle of Water to produce a Regular Tree Branch.

bottle = 4031705
treeBranch = 4031703

drop = sm.getDropInRect(bottle, 200)
if drop is not None:
    field.removeDrop(drop.getObjectId(), 0, False, -1)
    sm.dropItem(treeBranch, -119, -111)
    