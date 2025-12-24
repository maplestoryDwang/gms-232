# Arcane Umbra Weapon Box
# 2633914
# Produces an Arcane Umbra weapon of the player's choice. The player's matching weapon(s) is/are recommended first.

def openBox(gear):
    if sm.canHold(gear):
        sm.consumeItem()
        sm.giveItem(gear)
    else:
        sm.sendSayOkay("Please make room in your Equip inventory.")

admin = 2007

masterList = [
    {"ItemID": 1212120}, # Shining Rod
    {"ItemID": 1213018}, # Bladecaster
    {"ItemID": 1214018}, # Whispershot
    {"ItemID": 1222113}, # Soul Shooter
    {"ItemID": 1232113}, # Desperado
    {"ItemID": 1242122}, # Energy Chain (Thief) (Whip Blade)
    {"ItemID": 1242121}, # Energy Chain (Pirate) (Whip Blade)
    {"ItemID": 1252098}, # Scepter
    {"ItemID": 1262039}, # Psy-limiter
    {"ItemID": 1272017}, # Chain
    {"ItemID": 1282017}, # Lucent Gauntlet
    {"ItemID": 1292018}, # Super Ritual Fan
    {"ItemID": 1302343}, # Saber (1H Sword)
    {"ItemID": 1312203}, # Axe (1H Axe)
    {"ItemID": 1322255}, # Hammer (1H Blunt)
    {"ItemID": 1332279}, # Dagger
    {"ItemID": 1342104}, # Katara
    {"ItemID": 1362140}, # Cane
    {"ItemID": 1372228}, # Wand
    {"ItemID": 1382265}, # Staff
    {"ItemID": 1402259}, # Two-handed Sword[ie]
    {"ItemID": 1412181}, # Two-handed Axe
    {"ItemID": 1422189}, # Two-handed Hammer (2H Blunt)
    {"ItemID": 1432218}, # Spear
    {"ItemID": 1442274}, # Polearm
    {"ItemID": 1452257}, # Bow
    {"ItemID": 1462243}, # Crossbow
    {"ItemID": 1472265}, # Guards (Claw)
    {"ItemID": 1482221}, # Knuckle
    {"ItemID": 1492235}, # Pistol (Gun)
    {"ItemID": 1522143}, # Dual Bowguns
    {"ItemID": 1532150}, # Siege Cannon (Hand Cannon)
    {"ItemID": 1542117}, # Katana
    {"ItemID": 1552119}, # Fan
    {"ItemID": 1582023}, # Ellaha (Arm Cannon)
    {"ItemID": 1592020}, # Ancient Bow
    {"ItemID": 4310217}, # Essence
]

# To simplify things, *only* 4th jobs of non-Beginner classes will be considered
recDict = {
    112: [1302343, 1312203, 1402259, 1412181], # Hero
    122: [1302343, 1322255, 1402259, 1422189], # Paladin
    132: [1432218, 1442274], # Dark Knight
    212: [1372228, 1382265], # F/P
    222: [1372228, 1382265], # I/L
    232: [1372228, 1382265], # Bishop
    312: [1452257], # Bowmaster
    322: [1462243], # Marksman
    332: [1592020], # Pathfinder
    412: [1472265], # Night Lord
    422: [1332279], # Shadower
    434: [1332279, 1342104], # Dual Blade
    512: [1482221], # Buccaneer
    522: [1492235], # Corsair
    532: [1532150], # Cannoneer
    572: [1492235], # Jett
    1112: [1302343, 1402259], # Dawn Warrior
    1212: [1372228, 1382265], # Blaze Wizard
    1312: [1452257], # Wind Archer
    1412: [1472265], # Night Walker
    1512: [1482221], # Thunder Breaker
    2112: [1442274], # Aran
    2217: [1372228, 1382265], # Evan
    2312: [1522143], # Mercedes
    2412: [1362140], # Phantom
    2512: [1482221], # Shade
    2712: [1212120], # Luminous
    3112: [1312203, 1322255], # Demon Slayer
    3122: [1232113], # Demon Avenger
    3212: [1382265], # Battle Mage
    3312: [1462243], # Wild Hunter
    3512: [1492235], # Mechanic
    3612: [1242122, 1242121], # Xenon
    3712: [1582023], # Blaster
    4112: [1542117], # Hayato
    4212: [1552119], # Kanna
    5112: [1302343], # Mihile
    6112: [1402259], # Kaiser
    6312: [1214018], # Kain
    6412: [1272017], # Cadena
    6512: [1222113], # Angelic Buster
    11212: [1252098], # Beast Tamer
    14212: [1262039], # Kinesis
    15112: [1213018], # Adele
    15212: [1282017], # Illium
    15512: [1482221], # Ark
    16212: [1372228], # Lara
    16412: [1292018], # Hoyoung
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