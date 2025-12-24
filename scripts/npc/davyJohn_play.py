# Guon (2094002) | Inside the  Lord Pirate Party Quest

pqItems = [
4001117, # Old Metal Key
4001120, # Rookie Pirate Mark
4001121, # Rising Pirate Mark
4001122, # Veteran Pirate Mark
]

ROOKIE_PIRATE_MARK = 4001120 # Stage 0
RISING_PIRATE_MARK = 4001121 # Stage 1
VETERAN_PIRATE_MARK = 4001122 # Stage 2
count = 5

def checkItems(markId):
    if sm.hasItem(markId, count):
        field.setProperty("" + str((markId % ROOKIE_PIRATE_MARK) + 1), True)
        sm.consumeItem(markId, count)
        if not markId == VETERAN_PIRATE_MARK:
            sm.sendNext("Great job! Now I require " + str(count) + " #t" + str(markId + 1) + "#.")
        else:
            sm.sendSayOkay("Please proceed to the next stage.")
    else:
        sm.sendSayOkay("Please bring me " + str(count) + " #v" + str(markId) + "##t" + str(markId) + "#.")


if sm.getFieldID() == 925100100: # Hidden Street: Through the Head of the Ship!
    if not chr.getId() == chr.getParty().getPartyLeaderID():
        sm.sendSayOkay("Please, have your party leader speak with me.")
    else:
        if field.hasProperty("3"):
            sm.sendSayOkay("Please proceed to the next stage.")
        elif field.hasProperty("2"):
            checkItems(VETERAN_PIRATE_MARK)
        elif field.hasProperty("1"):
            checkItems(RISING_PIRATE_MARK)
        else:
            checkItems(ROOKIE_PIRATE_MARK)

elif sm.getFieldID() == 925100500:
    if sm.hasMobsInField():
        sm.sendSayOkay("Please eliminate all the monsters!")
    elif not chr.getId() == chr.getParty().getPartyLeaderID():
        sm.sendSayOkay("Please, have your party leader speak with me.")
    else:
        if sm.sendAskYesNo("You have done us a great favour! \r\nPlease allow me to help you on your way out."):
            # TODO  Add PQ Exp & Rewards
            sm.warpInstanceOut(251010404)

else:
    if sm.sendAskYesNo("Would you like to leave?"):
        if not sm.getParty() is None:
            sm.warpInstanceOut(251010404)
        else:
            sm.warp(251010404)