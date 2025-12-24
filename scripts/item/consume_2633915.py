# Arcane Umbra Armor Box
# 2633915
# Produces an Arcane Umbra Armor piece of the player's choice. The player's matching armor is recommended first.

from net.swordie.ms.constants import JobConstants

def openBox(gear):
    if sm.canHold(gear):
        sm.consumeItem()
        sm.giveItem(gear)
    else:
        sm.sendSayOkay("Please make room in your Equip inventory.")

admin = 2007

masterList = [
    # Arcane Umbra Knight set
    {"ItemID": 1004808}, # Arcane Umbra Knight Hat
    {"ItemID": 1053063}, # Arcane Umbra Knight Suit
    {"ItemID": 1073158}, # Arcane Umbra Knight Shoes
    {"ItemID": 1082695}, # Arcane Umbra Knight Gloves
    {"ItemID": 1102940}, # Arcane Umbra Knight Cape
    {"ItemID": 1152196}, # Arcane Umbra Knight Shoulder
    # Arcane Umbra Mage set
    {"ItemID": 1004809}, # Arcane Umbra Mage Hat
    {"ItemID": 1053064}, # Arcane Umbra Mage Suit
    {"ItemID": 1073159}, # Arcane Umbra Mage Shoes
    {"ItemID": 1082696}, # Arcane Umbra Mage Gloves
    {"ItemID": 1102941}, # Arcane Umbra Mage Cape
    {"ItemID": 1152197}, # Arcane Umbra Mage Shoulder
    # Arcane Umbra Archer set
    {"ItemID": 1004810}, # Arcane Umbra Archer Hat
    {"ItemID": 1053065}, # Arcane Umbra Archer Suit
    {"ItemID": 1073160}, # Arcane Umbra Archer Shoes
    {"ItemID": 1082697}, # Arcane Umbra Archer Gloves
    {"ItemID": 1102942}, # Arcane Umbra Archer Cape
    {"ItemID": 1152198}, # Arcane Umbra Archer Shoulder
    # Arcane Umbra Thief set
    {"ItemID": 1004811}, # Arcane Umbra Thief Hat
    {"ItemID": 1053066}, # Arcane Umbra Thief Suit
    {"ItemID": 1073161}, # Arcane Umbra Thief Shoes
    {"ItemID": 1082698}, # Arcane Umbra Thief Gloves
    {"ItemID": 1102943}, # Arcane Umbra Thief Cape
    {"ItemID": 1152199}, # Arcane Umbra Thief Shoulder
    # Arcane Umbra Pirate set
    {"ItemID": 1004812}, # Arcane Umbra Pirate Hat
    {"ItemID": 1053067}, # Arcane Umbra Pirate Suit
    {"ItemID": 1073162}, # Arcane Umbra Pirate Shoes
    {"ItemID": 1082699}, # Arcane Umbra Pirate Gloves
    {"ItemID": 1102944}, # Arcane Umbra Pirate Cape
    {"ItemID": 1152200}, # Arcane Umbra Pirate Shoulder
]
job = chr.getJob()

recList = []

# Filter recList based on current character class (*not* mutually exclusive because Xenon)
if JobConstants.isWarriorEquipJob(job):
    recList.extend(masterList[:6])
if JobConstants.isMageEquipJob(job):
    recList.extend(masterList[6:12])
if JobConstants.isArcherEquipJob(job):
    recList.extend(masterList[12:18])
if JobConstants.isThiefEquipJob(job):
    recList.extend(masterList[18:24])
if JobConstants.isPirateEquipJob(job):
    recList.extend(masterList[24:])

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
    openBox(selectedGear)
# Picked recommended gear
else:
    selectedGear = recList[recSelection]["ItemID"]
    openBox(selectedGear)