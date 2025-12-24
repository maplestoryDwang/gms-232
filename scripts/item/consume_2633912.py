# AbsoLab Weapon Box
# 2633912
# Produces an AbsoLab weapon of the player's choice. The player's matching weapon(s) is/are recommended first.

def openBox(gear):
    if sm.canHold(gear):
        sm.consumeItem()
        sm.giveItem(gear)
    else:
        sm.sendSayOkay("Please make room in your Equip inventory.")

admin = 2007

masterList = [
    {"ItemID": 1212115}, # Shining Rod
    {"ItemID": 1213017}, # Bladecaster
    {"ItemID": 1214017}, # Whispershot
    {"ItemID": 1222109}, # Soul Shooter
    {"ItemID": 1232109}, # Desperado
    {"ItemID": 1242120}, # Whip Blade (Thief)
    {"ItemID": 1242116}, # Whip Blade (Pirate)
    {"ItemID": 1252093}, # Scepter
    {"ItemID": 1262017}, # Psy-limiter
    {"ItemID": 1272016}, # Chain
    {"ItemID": 1282016}, # Lucent Gauntlet
    {"ItemID": 1292017}, # Monster Ritual Fan
    {"ItemID": 1302333}, # Saber (1H Sword)
    {"ItemID": 1312199}, # Axe (1H Axe)
    {"ItemID": 1322250}, # Bit Hammer (1H Blunt)
    {"ItemID": 1332274}, # Blade Lord (Dagger)
    {"ItemID": 1342101}, # Katara
    {"ItemID": 1362135}, # Forked Cane
    {"ItemID": 1372222}, # Spellsong Wand
    {"ItemID": 1382259}, # Spellsong Staff
    {"ItemID": 1402251}, # Broad Saber (2H Sword)
    {"ItemID": 1412177}, # Broad Axe (2H Axe)
    {"ItemID": 1422184}, # Broad Hammer (2H Blunt)
    {"ItemID": 1432214}, # Piercing Spear
    {"ItemID": 1442268}, # Hellslayer (Polearm)
    {"ItemID": 1452252}, # Sureshot Bow
    {"ItemID": 1462239}, # Crossbow
    {"ItemID": 1472261}, # Revenge Guard (Claw)
    {"ItemID": 1482216}, # Blast Knuckle
    {"ItemID": 1492231}, # Point Gun
    {"ItemID": 1522138}, # Dual Bowguns
    {"ItemID": 1532144}, # Blast Cannon (Hand Cannon)
    {"ItemID": 1542108}, # Katana
    {"ItemID": 1552110}, # Summoner (Fan)
    {"ItemID": 1582017}, # Pile God (Arm Cannon)
    {"ItemID": 1592019}, # Ancient Bow
    {"ItemID": 4310216}, # Essence
]

# To simplify things, *only* 4th jobs of non-Beginner classes will be considered
recDict = {
    112: [1302333, 1312199, 1402251, 1412177], # Hero
    122: [1302333, 1322250, 1402251, 1422184], # Paladin
    132: [1432214, 1442268], # Dark Knight
    212: [1372222, 1382259], # F/P
    222: [1372222, 1382259], # I/L
    232: [1372222, 1382259], # Bishop
    312: [1452252], # Bowmaster
    322: [1462239], # Marksman
    332: [1592019], # Pathfinder
    412: [1472261], # Night Lord
    422: [1332274], # Shadower
    434: [1332274, 1342101], # Dual Blade
    512: [1482216], # Buccaneer
    522: [1492231], # Corsair
    532: [1532144], # Cannoneer
    572: [1492231], # Jett
    1112: [1302333, 1402251], # Dawn Warrior
    1212: [1372222, 1382259], # Blaze Wizard
    1312: [1452252], # Wind Archer
    1412: [1472261], # Night Walker
    1512: [1482216], # Thunder Breaker
    2112: [1442268], # Aran
    2217: [1372222, 1382259], # Evan
    2312: [1522138], # Mercedes
    2412: [1362135], # Phantom
    2512: [1482216], # Shade
    2712: [1212115], # Luminous
    3112: [1312199, 1322250], # Demon Slayer
    3122: [1232109], # Demon Avenger
    3212: [1382259], # Battle Mage
    3312: [1462239], # Wild Hunter
    3512: [1492231], # Mechanic
    3612: [1242120, 1242116], # Xenon
    3712: [1582017], # Blaster
    4112: [1542108], # Hayato
    4212: [1552110], # Kanna
    5112: [1302333], # Mihile
    6112: [1402251], # Kaiser
    6312: [1214017], # Kain
    6412: [1272016], # Cadena
    6512: [1222109], # Angelic Buster
    11212: [1252093], # Beast Tamer
    14212: [1262017], # Kinesis
    15112: [1213017], # Adele
    15212: [1282016], # Illium
    15512: [1482216], # Ark
    16212: [1372222], # Lara
    16412: [1292017], # Hoyoung
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
    openBox(selectedGear)
# Picked recommended gear
else:
    selectedGear = recList[recSelection]
    openBox(selectedGear)