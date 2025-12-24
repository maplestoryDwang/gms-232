# Labyrinth of Suffering Deep Core Base
# 450011320
# Warp from Labyrinth of Suffering Deep Core Base to Altar of Desire Entrance.
# If the player is 255+, they will be prompted if they want to go to the Altar of Desire Entrance or World's Sorrow in Limina.

maps = [
    {"MapID": 450011990, "PortalID": 1}, # Altar of Desire Entrance
    {"MapID": 450012000, "PortalID": 0}, # World's Sorrow
]

destination = maps[0]

if chr.getLevel() >= 255:
    sm.setSpeakerType(3)
    sm.setColor(1)
    sm.setParam(57)
    
    destString = ["Where would you like to go? #b\r\n\r\n"]
    options = sm.selectionString("#L{i}##m{MapID}##l", maps)
    destString.append(options)
    newDest = sm.sendNext(sm.join(destString))
    destination = maps[newDest]
    sm.warp(destination["MapID"], destination["PortalID"])
else:
    sm.warp(destination["MapID"], destination["PortalID"])