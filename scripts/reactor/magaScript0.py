# Homun Controller
# 2619000
# Closed Lab (926120100)
# Consumes a Magic Device to produce a Lightless Magic Device.

magicDevice = 4031698
lightless = 4031709

drop = sm.getDropInRect(magicDevice, 50)
if drop is not None:
    sm.dropItem(lightless, -177, 231)
    field.removeDrop(drop.getObjectId(), 0, False, -1)
    # Wipe the map of Homuns after dropping the lightless device
    sm.killMobs()