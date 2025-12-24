# Ariant Private House2
# 2103004
# Residential Area 2 (260000203)
# Consumes Wrapped Food for Sejan's Test.

sejan = 3929
food = 4031580

if sm.hasQuest(sejan):
    # Has the player dropped off some food elsewhere already?
    sejanStatus = sm.getQRValue(sejan)
    sejanParse = "0000"
    houseIndex = 1
    if sejanStatus:
        sejanParse = sejanStatus
    
    # Did the player already visit this house?
    if sejanParse[houseIndex] != "3" and sm.hasItem(food):
        sm.consumeItem(food)

        # QRValue init if first house visited; otherwise update from pre-existing value
        if not sejanStatus:
            sejanStatus = "0300"
        else:
            sejanStatus = sejanParse[:houseIndex] + "3" + sejanParse[houseIndex+1:]
        
        sm.setQRValue(sejan, sejanStatus, False)
        sm.sendSayOkay("You slowly placed the food on the floor.")
    elif not sm.hasItem(food) and sejanParse[houseIndex] != "3" and sejanStatus != "3333":
        sm.sendSayOkay("You do not have any more food. Forfeit the quest and talk to Sejan again.")
    else:
        sm.sendSayOkay("There's already food placed here.")
elif not sm.hasQuestCompleted(sejan):
    sm.sendSayOkay("This looks like a good spot to place some food.")