# 925100200 - Third Map of the Lord Pirate PQ

LORD_PIRATE_KEY = "davyjohn stage3"

if field.hasProperty(LORD_PIRATE_KEY) and field.getProperty(LORD_PIRATE_KEY) >= 8 and not sm.hasMobsInField():
    sm.warp(sm.getFieldID() + 100)
else:
    sm.chat("The portal is not opened.")