# Piece of Destruction
# 2434587
# Exchanges 15 Pieces of Destruction for a Level 150 Fafnir Weapon of the player's choice. The player's matching weapon(s) is/are recommended first.

def exchangePieces(gear):
    if not sm.hasItem(parentID, 15):
        sm.sendSayOkay(sm.join(["You need #b15 ", sm.formatInlineItem(parentID), "#k to exchange for #b", sm.formatInlineItem(gear), "#k."]))
    elif not sm.canHold(gear):
        sm.sendSayOkay("Please make room in your Equip inventory.")
    else:
        sm.consumeItem(parentID, 15)
        sm.giveItem(gear)

admin = 2007

masterList = [
    {"ItemID": 1212063}, # Mana Cradle (Shining Rod)
    {"ItemID": 1213016}, # Mercy (Bladecaster)
    {"ItemID": 1214016}, # Nightchaser (Whispershot)
    {"ItemID": 1222058}, # Angelic Shooter (Soul Shooter)
    {"ItemID": 1232057}, # Death Bringer (Desperado)
    {"ItemID": 1242060}, # Split Edge (Thief) (Whip Blade)
    {"ItemID": 1242061}, # Split Edge (Pirate) (Whip Blade)
    {"ItemID": 1252015}, # Scepter
    {"ItemID": 1262016}, # Psy-limiter
    {"ItemID": 1272015}, # Chain
    {"ItemID": 1282015}, # Lucent Gauntlet
    {"ItemID": 1292016}, # Dragon Ritual Fan
    {"ItemID": 1302275}, # Mistilteinn (1H Sword)
    {"ItemID": 1312153}, # Twin Cleaver (1H Axe)
    {"ItemID": 1322203}, # Guardian Hammer (1H Blunt)
    {"ItemID": 1332225}, # Damascus (Dagger)
    {"ItemID": 1342082}, # Rapid Edge (Katara)
    {"ItemID": 1362090}, # Claire Ciel (Cane)
    {"ItemID": 1372177}, # Mana Taker (Wand)
    {"ItemID": 1382208}, # Mana Crown (Staff)
    {"ItemID": 1402196}, # Penitent Tears (2H Sword)
    {"ItemID": 1412135}, # Battle Cleaver (2H Axe)
    {"ItemID": 1422140}, # Lightning Striker (2H Blunt)
    {"ItemID": 1432167}, # Brionak (Spear)
    {"ItemID": 1442223}, # Moon Glaive (Polearm)
    {"ItemID": 1452205}, # Wind Chaser (Bow)
    {"ItemID": 1462193}, # Windwing Shooter (Crossbow)
    {"ItemID": 1472214}, # Risk Holder (Claw)
    {"ItemID": 1482168}, # Perry Talon (Knuckle)
    {"ItemID": 1492179}, # Zeliska (Gun)
    {"ItemID": 1522094}, # Dual Windwing (Dual Bowguns)
    {"ItemID": 1532098}, # Lost Cannon (Hand Cannon)
    {"ItemID": 1542063}, # Raven Ring (Katana)
    {"ItemID": 1552063}, # Indigo Flash (Fan)
    {"ItemID": 1582016}, # Big Mountain (Arm Cannon)
    {"ItemID": 1592018}, # Ancient Bow
]

# To simplify things, *only* 4th jobs of non-Beginner, not-Zero classes will be considered
recDict = {
    112: [1302275, 1312153, 1402196, 1412135], # Hero
    122: [1302275, 1322203, 1402196, 1422140], # Paladin
    132: [1432167, 1442223], # Dark Knight
    212: [1372177, 1382208], # F/P
    222: [1372177, 1382208], # I/L
    232: [1372177, 1382208], # Bishop
    312: [1452205], # Bowmaster
    322: [1462193], # Marksman
    332: [1592018], # Pathfinder
    412: [1472214], # Night Lord
    422: [1332225], # Shadower
    434: [1332225, 1342082], # Dual Blade
    512: [1482168], # Buccaneer
    522: [1492179], # Corsair
    532: [1532098], # Cannoneer
    572: [1492179], # Jett
    1112: [1302275, 1402196], # Dawn Warrior
    1212: [1372177, 1382208], # Blaze Wizard
    1312: [1452205], # Wind Archer
    1412: [1472214], # Night Walker
    1512: [1482168], # Thunder Breaker
    2112: [1442223], # Aran
    2217: [1372177, 1382208], # Evan
    2312: [1522094], # Mercedes
    2412: [1362090], # Phantom
    2512: [1482168], # Shade
    2712: [1212063], # Luminous
    3112: [1312153, 1322203], # Demon Slayer
    3122: [1232057], # Demon Avenger
    3212: [1382208], # Battle Mage
    3312: [1462193], # Wild Hunter
    3512: [1492179], # Mechanic
    3612: [1242060, 1242061], # Xenon
    3712: [1582016], # Blaster
    4112: [1542063], # Hayato
    4212: [1552063], # Kanna
    5112: [1302275], # Mihile
    6112: [1402196], # Kaiser
    6312: [1214016], # Kain
    6412: [1272015], # Cadena
    6512: [1222058], # Angelic Buster
    11212: [1252015], # Beast Tamer
    14212: [1262016], # Kinesis
    15112: [1213016], # Adele
    15212: [1282015], # Illium
    15512: [1482168], # Ark
    16212: [1372177], # Lara
    16412: [1292016], # Hoyoung
}

recList = []

# Determine matching weapon(s) from recDict using the player's class, if applicable
job = chr.getJob()
if job in recDict:
    recList.extend(recDict[job])

# To use as last option for initial recommendation
viewAll = len(recList)

sm.setSpeakerID(admin)
recString = ["Equipment for your class will be recommended first. #b\r\n"]
# Construct initial recommendations
for index, gear in enumerate(recList):
    recString.append(sm.join(["#L", repr(index), "#", sm.formatInlineItem(gear), "#l\r\n"]))
recString.append("#L{}#View the entire item list.#l\r\n".format(viewAll))
recSelection = sm.sendNext(sm.join(recString))

# Look at everything
if recSelection == viewAll:
    selString = ["Please select the weapon you'd like to receive. #b\r\n"]
    allItems = sm.selectionString("#L{i}##i{ItemID}# #z{ItemID}##l", masterList)
    selString.append(allItems)
    selection = sm.sendNext(sm.join(selString))

    selectedGear = masterList[selection]["ItemID"]
    exchangePieces(selectedGear)
# Picked recommended gear
else:
    selectedGear = recList[recSelection]
    exchangePieces(selectedGear)