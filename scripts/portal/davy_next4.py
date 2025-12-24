# 925100400 - Fifth Map of the Lord Pirate PQ

LORD_PIRATE_KEY = "davyjohn stage4"

if field.hasProperty(LORD_PIRATE_KEY) and field.getProperty(LORD_PIRATE_KEY) >= 4:
    sm.warp(sm.getFieldID() + 100) # Boss Map of Lord Pirate PQ
else:
    sm.chat("The portal is not opened.")