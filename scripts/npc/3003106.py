#  Dimo (Phantasma Coin Exchange) | Lachelein

bmt_cost = 10
bd_cost = 10
black_mage_token = 2432009
butterfly_droplet = 4001879

weapons = [
    1212120,  # Shining Rod
    1222113,  # Soul Shooter
    1232113,  # Desperado
    1242121,  # Energy Chain Sword (Pirate)
    1242122,  # Energy Chain Sword (Thief)
    1252098,  # Scepter
    1262039,  # Psy-limiter
    1272017,  # Cadena Chain
    1282017,  # Lucent Gauntlet
    1292018,  # Ritual Fan
    1302343,  # Saber
    1312203,  # Axe
    1322255,  # Hammer
    1332279,  # Dagger
    1342104,  # Katara
    1362140,  # Cane
    1372228,  # Wand
    1382265,  # Staff
    1402259,  # 2H Sword
    1412181,  # 2H Axe
    1422189,  # 2H Hammer
    1432218,  # Spear
    1442274,  # Polearm
    1452257,  # Bow
    1462243,  # XBow
    1472265,  # Claw
    1482221,  # Knuckle
    1492235,  # Pistol
    1522143,  # DBG
    1532150,  # Cannon
    1542117,  # Katana
    1552119,  # Fan
    1582023,  # Arm Cannon
    1592020,  # Ancient Bow
    1213018,  # Bladecaster
    1214018,  # Whispershot
    4310217,  # Arcane Umbra Essence
]

strn = "Would you like to exchange {} #z{}#s and {} #z{}#s for #dArcane Umbra Weapons#k?\r\n#b".format(bmt_cost, black_mage_token, bd_cost, butterfly_droplet)
for i in range(len(weapons)):
    weapon = weapons[i]
    strn += "#L{}##v{}##z{}##l\r\n".format(i, weapon, weapon)
sel = sm.sendNext(strn)

sel_weapon = weapons[sel]
if not sm.canHold(sel_weapon):
    sm.sendSayOkay("Please make sure you have enough inventory space.")
    sm.dispose()

if not sm.hasItem(black_mage_token, bmt_cost) or not sm.hasItem(butterfly_droplet, bd_cost):
    sm.sendSayOkay("You do not have enough materials.")
    sm.dispose()

sm.consumeItem(butterfly_droplet, bd_cost)
sm.consumeItem(black_mage_token, bmt_cost)
sm.giveItem(sel_weapon)
sm.sendSayOkay("Pleasure doing business.")
