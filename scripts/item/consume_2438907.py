# 9th Anniversary Pearl Maple Weapon Box
# Select One Box / Select 1 Box
box = 2438907
QUANTITY_REQ = 1

items = [
    1222066, #Soul Shooter
    1232062, #Devil Sword / Desperado
    1242067, #Chain Sword / Whip Blade
    1252065, #Scepter
    1272035, #Chain
    1282034, #Lucent Gauntlet
    1302279, #Sword
    1312157, #Axe
    1332229, #Cutter / Dagger
    1362094, #Cane
    1372181, #Wand
    1382213, #Staff
    1402202, #2H Sword
    1412139, #2H Axe
    1422144, #Maul / 2H Mace
    1432171, #Spear
    1442227, #Polearm
    1452209, #Longbow
    1462197, #Crossbow
    1472218, #Steer / Claw
    1482172, #Grip / Knuckle
    1492183, #Shooter / Gun
    1522098, #Twin Angels / Dual Bowguns
    1532102, #Cannon
    1542069, #Katana
    1552069, #Fan
    1582038, #Arm Cannon
]

msg = "Use " + str(QUANTITY_REQ) + " #v" + str(box) + "# : Choose #b\r\n"
for i in range(len(items)):
    msg += "#L" + str(i) + "##v" + str(items[i]) + "# #z"  + str(items[i]) + "##l\r\n"
selection = sm.sendNext(msg)

if sm.getQuantityOfItem(box) == 1:
    piece_string = "Piece"
else:
    piece_string = "Pieces"

if not sm.hasItem(box, QUANTITY_REQ):
    sm.sendSayOkay("I see that you have #b" + str(sm.getQuantityOfItem(box)) + "#k " + piece_string + " of Time. " +
                "You need at least #b" + str(QUANTITY_REQ) + "#kto exchange for a piece of equipment.")
elif not sm.canHold(items[selection]):
    sm.sendSayOkay("Please make space in your inventory.")
else:
    sm.consumeItem(box, QUANTITY_REQ)
    sm.giveItem(items[selection])