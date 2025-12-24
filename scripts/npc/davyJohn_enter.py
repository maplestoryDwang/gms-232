# Guon (2094000)  |  Spiegelmann's Guest House || Over the Pirate Ship <Entrance Map>

ENTRANCE_MAP = 251010404

pqItems = [
4001117, # Old Metal Key
4001120, # Rookie Pirate Mark
4001121, # Rising Pirate Mark
4001122, # Veteran Pirate Mark
]

def startLordPirate():
    sm.warpInstanceIn(925100000, 0, True)
    sm.setInstanceInfo(30 * 60, ENTRANCE_MAP)

if sm.getFieldID() == ENTRANCE_MAP:
    response = sm.sendAskYesNo("Do you want to help me fight Lord Pirate?")
    if sm.checkParty() and response:
        for item in pqItems:
            if sm.hasItem(item):
                sm.consumeItem(item, sm.getQuantityOfItem(item))
        startLordPirate()

else:
    response = sm.sendAskYesNo("Do you want to help me fight Lord Pirate?")
    if response:
        sm.warp(ENTRANCE_MAP)