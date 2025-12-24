# Ariant Private House6 Cupboard
# 2103012
# Residential Area 6 (260000207)
# Consumes a Small Sack of Jewelery for Screwing the Red Scorpions.

redScorpions = 3926
jewelry = 4031579

if sm.hasQuest(redScorpions):
    # Has the player dropped off some treasure elsewhere already?
    jewelryStatus = sm.getQRValue(redScorpions)
    jewelryParse = "0000"
    houseIndex = 3
    if jewelryStatus:
        jewelryParse = jewelryStatus
    
    # Did the player already visit this house?
    if jewelryParse[houseIndex] != "3" and sm.hasItem(jewelry):
        sm.consumeItem(jewelry)

        # QRValue init if first house visited; otherwise update from pre-existing value
        if not jewelryStatus:
            jewelryStatus = "0003"
        else:
            jewelryStatus = jewelryParse[:houseIndex] + "3"
        
        sm.setQRValue(redScorpions, jewelryStatus, False)
        sm.sendSayOkay("You carefully placed the treasure on the ground.")
    elif not sm.hasItem(jewelry) and jewelryParse[houseIndex] != "3" and jewelryStatus != "3333":
        sm.sendSayOkay("You do not have any more treasure. Forfeit the quest and return to the Red Scorpion's Lair.")
    else:
        sm.sendSayOkay("There's already treasure placed here.")
elif not sm.hasQuestCompleted(redScorpions):
    sm.sendSayOkay("This looks like a good place to drop the treasure.")