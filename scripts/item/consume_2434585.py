# Piece of Mockery
# 2434585
# Exchanges 5 Pieces of Mockery for a Level 150 Trixter Bottom of the player's choice. The player's matching armor is recommended first.

from net.swordie.ms.constants import JobConstants

def exchangePieces(gear):
    if not sm.hasItem(parentID, 5):
        sm.sendSayOkay(sm.join(["You need #b5 ", sm.formatInlineItem(parentID), "#k to exchange for #b", sm.formatInlineItem(gear), "#k."]))
    elif not sm.canHold(gear):
        sm.sendSayOkay("Please make room in your Equip inventory.")
    else:
        sm.consumeItem(parentID, 5)
        sm.giveItem(gear)

admin = 2007

masterList = [
    {"ItemID": 1062165}, # Trixter Warrior Pants
    {"ItemID": 1062166}, # Trixter Dunwitch Pants
    {"ItemID": 1062167}, # Trixter Ranger Pants
    {"ItemID": 1062168}, # Trixter Assassin Pants
    {"ItemID": 1062169}, # Trixter Wanderer Pants
]
job = chr.getJob()

recList = []

# Filter recList based on current character class (*not* mutually exclusive because Xenon)
if JobConstants.isWarriorEquipJob(job):
    recList.append(masterList[0])
if JobConstants.isMageEquipJob(job):
    recList.append(masterList[1])
if JobConstants.isArcherEquipJob(job):
    recList.append(masterList[2])
if JobConstants.isThiefEquipJob(job):
    recList.append(masterList[3])
if JobConstants.isPirateEquipJob(job):
    recList.append(masterList[4])

# To use as last option for initial recommendation
viewAll = len(recList)

sm.setSpeakerID(admin)
recString = ["Equipment for your class will be recommended first. #b\r\n"]
# Construct initial recommendations
recItems = sm.selectionString("#L{i}##i{ItemID}# #z{ItemID}##l", recList)
recString.append(recItems)
recString.append("#L{}#View the entire item list.#l\r\n".format(viewAll))
recSelection = sm.sendNext(sm.join(recString))

# Look at everything
if recSelection == viewAll:
    selString = ["Please select the armor you'd like to receive. #b\r\n"]
    allItems = sm.selectionString("#L{i}##i{ItemID}# #z{ItemID}##l", masterList)
    selString.append(allItems)
    selection = sm.sendNext(sm.join(selString))

    selectedGear = masterList[selection]["ItemID"]
    exchangePieces(selectedGear)
# Picked recommended gear
else:
    selectedGear = recList[recSelection]["ItemID"]
    exchangePieces(selectedGear)