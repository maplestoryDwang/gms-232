# AbsoLab Armor Box
# 2633913
# Produces an AbsoLab Armor piece of the player's choice. The player's matching armor is recommended first.

from net.swordie.ms.constants import JobConstants

def openBox(gear):
    if sm.canHold(gear):
        sm.consumeItem()
        sm.giveItem(gear)
    else:
        sm.sendSayOkay("Please make room in your Equip inventory.")

admin = 2007

masterList = [
    # AbsoLab Knight set
    {"ItemID": 1004422}, # AbsoLab Knight Helm
    {"ItemID": 1052882}, # AbsoLab Knight Suit
    {"ItemID": 1073030}, # AbsoLab Knight Shoes
    {"ItemID": 1082636}, # AbsoLab Knight Gloves
    {"ItemID": 1102775}, # AbsoLab Knight Cape
    {"ItemID": 1152174}, # AbsoLab Knight Shoulder
    # AbsoLab Mage set
    {"ItemID": 1004423}, # AbsoLab Mage Crown
    {"ItemID": 1052887}, # AbsoLab Mage Suit
    {"ItemID": 1073032}, # AbsoLab Mage Shoes
    {"ItemID": 1082637}, # AbsoLab Mage Gloves
    {"ItemID": 1102794}, # AbsoLab Mage Cape
    {"ItemID": 1152176}, # AbsoLab Mage Shoulder
    # AbsoLab Archer set
    {"ItemID": 1004424}, # AbsoLab Archer Hood
    {"ItemID": 1052888}, # AbsoLab Archer Suit
    {"ItemID": 1073033}, # AbsoLab Archer Shoes
    {"ItemID": 1082638}, # AbsoLab Archer Gloves
    {"ItemID": 1102795}, # AbsoLab Archer Cape
    {"ItemID": 1152177}, # AbsoLab Archer Shoulder
    # AbsoLab Bandit set
    {"ItemID": 1004425}, # AbsoLab Bandit Cap
    {"ItemID": 1052889}, # AbsoLab Bandit Suit
    {"ItemID": 1073034}, # AbsoLab Bandit Shoes
    {"ItemID": 1082639}, # AbsoLab Bandit Gloves
    {"ItemID": 1102796}, # AbsoLab Bandit Cape
    {"ItemID": 1152178}, # AbsoLab Thief Shoulder
    # AbsoLab Pirate set
    {"ItemID": 1004426}, # AbsoLab Pirate Fedora
    {"ItemID": 1052890}, # AbsoLab Pirate Suit
    {"ItemID": 1073035}, # AbsoLab Pirate Shoes
    {"ItemID": 1082640}, # AbsoLab Pirate Gloves
    {"ItemID": 1102797}, # AbsoLab Pirate Cape
    {"ItemID": 1152179}, # AbsoLab Pirate Shoulder
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