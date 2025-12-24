# 925100000 - First Map  of the Lord Pirate PQ

LORD_PIRATE_KEY = "davyjohn stage1"

if field.hasProperty(LORD_PIRATE_KEY) and field.getProperty(LORD_PIRATE_KEY) >= 7 and not sm.hasMobsInField():
    sm.warp(sm.getFieldID() + 100)
else:
    sm.chat("The portal is not opened.")