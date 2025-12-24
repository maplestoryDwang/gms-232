# Captivating Fragment
# 2630594
# Exchanges 15 Captivating Fragments for a Level 140 Princess No Secondary Weapon of the player's choice. The player's matching secondary is recommended first.

from collections import OrderedDict

def exchangePieces(gear):
    if not sm.hasItem(parentID, 15):
        sm.sendSayOkay("You need #b15 #i" + str(parentID) + "# #z" + str(parentID) + "##k to exchange for #b#i" + str(gear) + "# #z" + str(gear) + "##k.")
    elif not sm.canHold(gear):
        sm.sendSayOkay("Please make room in your Equip inventory.")
    else:
        sm.consumeItem(parentID, 15)
        sm.giveItem(gear)

mapleAdmin = 2007

# To simplify things, *only* 4th jobs of non-Beginner, not-Kanna and Zero classes will be considered
pnoDict = OrderedDict([
    (112, 1352206), # Hero: Medal
    (122, 1352216), # Paladin: Rosary
    (132, 1352226), # Dark Knight: Flower Chain
    (212, 1352236), # F/P: Flaming Book
    (222, 1352246), # I/L: Damp Book
    (232, 1352256), # Bishop: Golden Book
    (312, 1352266), # Bowmaster: Feather
    (322, 1352276), # Marksman: Wreath
    (332, 1353707), # Pathfinder: Immortal Relic
    (412, 1352296), # Night Lord: Charm
    (422, 1352286), # Shadower: Purple Shadow
    (434, 1342095), # Dual Blade: Poisoned Sword
    (512, 1352906), # Buccaneer: Skull Armor
    (522, 1352916), # Corsair: Falcon Eye
    (532, 1352928), # Cannoneer: Fire Bomb
    (572, 1352824), # Jett: Orion Fist
    (1112, 1352975), # Dawn Warrior: Floral Jewel
    (1212, 1352975), # Blaze Wizard: Floral Jewel
    (1312, 1352975), # Wind Archer: Floral Jewel
    (1412, 1352975), # Night Walker: Floral Jewel
    (1512, 1352975), # Thunder Breaker: Floral Jewel
    (2112, 1352935), # Aran: Flower Ballast
    (2217, 1352945), # Evan: Dragon Legacy
    (2312, 1352009), # Mercedes: Accursed Arrow
    (2412, 1352109), # Phantom: Carte
    (2512, 1353105), # Shade: Fox Marble
    (2712, 1352406), # Luminous: Soul Orb
    (3112, 1099011), # Demon Slayer: Accursed Shield
    (3122, 1099012), # Demon Avenger: Accursed Shield [but with more HP and no DEX]
    (3212, 1352957), # Battle Mage: Accursed Marble
    (3312, 1352967), # Wild Hunter: Arrowhead
    (3512, 1352707), # Mechanic: Magnum
    (3612, 1353006), # Xenon: Controller
    (3712, 1353405), # Blaster: Megaton Charges
    (4112, 1352807), # Hayato: Wakizashi
    (5112, 1098006), # Mihile: Soul Shield
    (6112, 1352506), # Kaiser: Dragon Essence
    (6312, 1354017), # Kain: Immortal Weapon Belt
    (6412, 1353306), # Cadena: Transmitter
    (6512, 1352606), # Angelic Buster: Soul Ring
    (11212, 1352815), # Beast Tamer: Magical Whisper
    (14212, 1353205), # Kinesis: Oriental King Chess Piece
    (15112, 1354007), # Adele: Immortal Bladebinder
    (15212, 1353505), # Illium: Lucent Wings
    (15512, 1353606), # Ark: Path
    (16212, 1354027), # Lara: Ornament
    (16412, 1353807), # Hoyoung: Fan Tassel
])

recList = []

# Determine matching secondary from pnoDict using the player's class, if applicable
job = chr.getJob()
if job in pnoDict:
    recList.append(pnoDict[job])

# To use as last option during initial recommendation prompt
viewAll = len(recList)

sm.setSpeakerID(mapleAdmin)
recString = "Equipment for your class will be recommended first. #b\r\n"
# Construct initial recommendations
for index, gear in enumerate(recList):
    recString += "#L"+ str(index) + "##i" + str(gear) + "# #z" + str(gear) +"##l\r\n"
recString += "#L"+ str(viewAll) + "#View the entire item list.#l\r\n"
recSelection = sm.sendNext(recString)

# Look at everything
if recSelection == viewAll:
    # Map pnoDict's values to list and use that when determining the player's pick from all secondaries
    pnoSecondaries = list(OrderedDict.fromkeys(pnoDict.values()))

    allString = "Please select the secondary weapon you'd like to receive. #b\r\n"
    for index, gear in enumerate(pnoSecondaries):
        # Skip duplicate CK 
        allString += "#L"+ str(index) + "##i" + str(gear) + "# #z" + str(gear) +"##l\r\n"
    allSelection = sm.sendNext(allString)

    selectedGear = pnoSecondaries[allSelection]
    exchangePieces(selectedGear)
# Picked recommended gear
else:
    selectedGear = recList[recSelection]
    exchangePieces(selectedGear)