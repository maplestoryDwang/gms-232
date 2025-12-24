# Piece of Ruin 
# 2434588
# Exchanges 15 Pieces of Ruin for a Level 140 Empress Weapon of the player's choice. The player's matching weapon(s) is/are recommended first.

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
    {"ItemID": 1212014}, # Thanatos (Shining Rod)
    {"ItemID": 1213015}, # Restraint (Bladecaster)
    {"ItemID": 1214015}, # Splendid Nero (Whispershot)
    {"ItemID": 1222014}, # Soul Drinker (Soul Shooter)
    {"ItemID": 1232014}, # Painful Destiny (Desperado)
    {"ItemID": 1242042}, # Fallen Queen (Thief) (Whip Blade)
    {"ItemID": 1242014}, # Fallen Queen (Pirate) (Whip Blade)
    {"ItemID": 1252014}, # Scepter
    {"ItemID": 1262015}, # Psy-limiter
    {"ItemID": 1272014}, # Chain
    {"ItemID": 1282014}, # Lucent Gauntlet
    {"ItemID": 1292015}, # Ritual Fan
    {"ItemID": 1302152}, # Cutlass (1H Sword)
    {"ItemID": 1312065}, # Champion Axe (1H Axe)
    {"ItemID": 1322096}, # Battle Hammer (1H Blunt)
    {"ItemID": 1332130}, # Baselard (Dagger)
    {"ItemID": 1342036}, # Shadow Katara
    {"ItemID": 1362019}, # Crimson Cane
    {"ItemID": 1372084}, # Arc Wand
    {"ItemID": 1382104}, # War Staff
    {"ItemID": 1402095}, # Battle Scimitar (2H Sword)
    {"ItemID": 1412065}, # Battle Axe (2H Axe)
    {"ItemID": 1422066}, # Blast Maul (2H Blunt)
    {"ItemID": 1432086}, # Fuscina (Spear)
    {"ItemID": 1442116}, # Partisan (Polearm)
    {"ItemID": 1452111}, # Composite Bow
    {"ItemID": 1462099}, # Heavy Crossbow
    {"ItemID": 1472122}, # Metal Fist (Claw)
    {"ItemID": 1482084}, # Wild Talon (Knuckle)
    {"ItemID": 1492085}, # Sharpshooter (Gun)
    {"ItemID": 1522018}, # Dual Bowguns
    {"ItemID": 1532018}, # Supernova (Hand Cannon)
    {"ItemID": 1542015}, # Red King (Katana)
    {"ItemID": 1552015}, # Fan
    {"ItemID": 1582015}, # Valore (Arm Cannon)
    {"ItemID": 1592015}, # Ancient Bow
]

# To simplify things, *only* 4th jobs of non-Beginner, not-Zero classes will be considered
recDict = {
    112: [1302152, 1312065, 1402095, 1412065], # Hero
    122: [1302152, 1322096, 1402095, 1422066], # Paladin
    132: [1432086, 1442116], # Dark Knight
    212: [1372084, 1382104], # F/P
    222: [1372084, 1382104], # I/L
    232: [1372084, 1382104], # Bishop
    312: [1452111], # Bowmaster
    322: [1462099], # Marksman
    332: [1592015], # Pathfinder
    412: [1472122], # Night Lord
    422: [1332130], # Shadower
    434: [1332130, 1342036], # Dual Blade
    512: [1482084], # Buccaneer
    522: [1492085], # Corsair
    532: [1532018], # Cannoneer
    572: [1492085], # Jett
    1112: [1302152, 1402095], # Dawn Warrior
    1212: [1372084, 1382104], # Blaze Wizard
    1312: [1452111], # Wind Archer
    1412: [1472122], # Night Walker
    1512: [1482084], # Thunder Breaker
    2112: [1442116], # Aran
    2217: [1372084, 1382104], # Evan
    2312: [1522018], # Mercedes
    2412: [1362019], # Phantom
    2512: [1482084], # Shade
    2712: [1212014], # Luminous
    3112: [1312065, 1322096], # Demon Slayer
    3122: [1232014], # Demon Avenger
    3212: [1382104], # Battle Mage
    3312: [1462099], # Wild Hunter
    3512: [1492085], # Mechanic
    3612: [1242042, 1242014], # Xenon
    3712: [1582015], # Blaster
    4112: [1542015], # Hayato
    4212: [1552015], # Kanna
    5112: [1302152], # Mihile
    6112: [1402095], # Kaiser
    6312: [1214015], # Kain
    6412: [1272014], # Cadena
    6512: [1222014], # Angelic Buster
    11212: [1252014], # Beast Tamer
    14212: [1262015], # Kinesis
    15112: [1213015], # Adele
    15212: [1282014], # Illium
    15512: [1482084], # Ark
    16212: [1372084], # Lara
    16412: [1292015], # Hoyoung
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