# Mitra’s Rage Selection Box
# 2633927
# Produces a Mitra's Rage emblem of the player's choice. The player's matching emblem is recommended first.

from net.swordie.ms.constants import JobConstants

def openBox(gear):
    if sm.canHold(gear):
        sm.consumeItem()
        sm.giveItem(gear)
    else:
        sm.sendSayOkay("Please make room in your Equip inventory.")

admin = 2007

masterList = [
    {"ItemID": 1190555}, # Mitra's Rage: Warrior
    {"ItemID": 1190557}, # Mitra's Rage: Magician
    {"ItemID": 1190556}, # Mitra's Rage: Bowman
    {"ItemID": 1190558}, # Mitra's Rage: Thief
    {"ItemID": 1190559}, # Mitra's Rage: Pirate
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
    selString = ["Please select the emblem you'd like to receive. #b\r\n"]
    allItems = sm.selectionString("#L{i}##i{ItemID}# #z{ItemID}##l", masterList)
    selString.append(allItems)
    selection = sm.sendNext(sm.join(selString))

    selectedGear = masterList[selection]["ItemID"]
    openBox(selectedGear)
# Picked recommended gear
else:
    selectedGear = recList[recSelection]["ItemID"]
    openBox(selectedGear)