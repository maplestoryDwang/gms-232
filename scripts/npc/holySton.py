# Shaman Rock
# 1063012 / 1063013
# Consumes a Shaman Charm for How to Shoo Away the Evil.

shooEvil = 2236
charm = 4032263
shamanDict = {
    105010100: (0, "100000"), # Humid Swamp
    105020000: (1, "010000"), # Sunless Area
    105020100: (2, "001000"), # Cave Cliff
    105020200: (3, "000100"), # Cold Wind
    105020300: (4, "000010"), # Chilly Cave
    105020400: (5, "000001") # Cave Exit
}

if sm.hasQuest(shooEvil):
    # Which map's rock is the user interacting with?
    shamanEntry = shamanDict[sm.getFieldID()]
    shamanIndex = shamanEntry[0]
    # Did the user just start the quest, or have they already placed a charm on a rock elsewhere?
    shamanStatus = sm.getQRValue(shooEvil)
    shamanParse = "000000"
    if shamanStatus:
        shamanParse = shamanStatus
    
    # Check if the user already placed a charm here
    if shamanParse[shamanIndex] != "1" and sm.hasItem(charm):
        sm.consumeItem(charm)

        # Check if this was the first rock visited
        if not shamanStatus:
            shamanStatus = shamanEntry[1]
        else:
            if shamanIndex == 0:
                shamanStatus = "1" + shamanParse[shamanIndex+1:]
            elif shamanIndex == 5:
                shamanStatus = shamanParse[:shamanIndex] + "1"
            else:
                shamanStatus = shamanParse[:shamanIndex] + "1" + shamanParse[shamanIndex+1:]
        
        sm.setQRValue(shooEvil, shamanStatus, False)
        sm.sendSayOkay("You placed the charm onto the Shaman Rock.")
    elif not sm.hasItem(charm) and shamanParse[shamanIndex] != "1" and shamanStatus != "111111":
        sm.sendSayOkay("You do not have any more charms. Forfeit the quest and talk to Chrishrama again.")
    else:
        sm.sendSayOkay("There's already a charm placed here.")