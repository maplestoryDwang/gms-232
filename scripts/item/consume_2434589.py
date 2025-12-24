# Piece of Darkness
# 2434589
# Exchanges 5 Pieces of Darkness for a Level 140 Armor piece of the player's choice. The player's matching armor is recommended first.

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
    # Lionheart Battle set
    {"ItemID": 1003172}, # Lionheart Battle Helm
    {"ItemID": 1052314}, # Lionheart Battle Mail
    {"ItemID": 1072485}, # Lionheart Battle Boots
    {"ItemID": 1082295}, # Lionheart Battle Bracers
    {"ItemID": 1102275}, # Lionheart Battle Cape
    {"ItemID": 1152108}, # Lionheart Battle Shoulder
    # Dragon Tail Mage set
    {"ItemID": 1003173}, # Dragon Tail Mage Sallet
    {"ItemID": 1052315}, # Dragon Tail Mage Robe
    {"ItemID": 1072486}, # Dragon Tail Mage Shoes
    {"ItemID": 1082296}, # Dragon Tail Mage Gloves
    {"ItemID": 1102276}, # Dragon Tail Mage Cape
    {"ItemID": 1152110}, # Dragon Tail Mage Shoulder
    # Falcon Wing Sentinel set
    {"ItemID": 1003174}, # Falcon Wing Sentinel Cap
    {"ItemID": 1052316}, # Falcon Wing Sentinel Suit
    {"ItemID": 1072487}, # Falcon Wing Sentinel Boots
    {"ItemID": 1082297}, # Falcon Wing Sentinel Gloves
    {"ItemID": 1102277}, # Falcon Wing Sentinel Cape
    {"ItemID": 1152111}, # Falcon Wing Sentinel Shoulder
    # Raven Horn Chaser set
    {"ItemID": 1003175}, # Raven Horn Chaser Hat
    {"ItemID": 1052317}, # Raven Horn Chaser Armor
    {"ItemID": 1072488}, # Raven Horn Chaser Boots
    {"ItemID": 1082298}, # Raven Horn Chaser Gloves
    {"ItemID": 1102278}, # Raven Horn Chaser Cape
    {"ItemID": 1152112}, # Raven Horn Chaser Shoulder
    # Shark Tooth Skipper set
    {"ItemID": 1003176}, # Shark Tooth Skipper Helm
    {"ItemID": 1052318}, # Shark Tooth Skipper Coat
    {"ItemID": 1072489}, # Shark Tooth Skipper Boots
    {"ItemID": 1082299}, # Shark Tooth Skipper Gloves
    {"ItemID": 1102279}, # Shark Tooth Skipper Cape
    {"ItemID": 1152113}, # Shark Tooth Skipper Shoulder
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
    exchangePieces(selectedGear)
# Picked recommended gear
else:
    selectedGear = recList[recSelection]["ItemID"]
    exchangePieces(selectedGear)