# Sensitive Squaroid
# 2155009
# Haven (310070000)
# Exchanges 300 Diffusion-Line Energy Cores (Grade A) and 2 Extraordinary Energy Cores (Grade S) for an AbsoLab Coin.
# Also exchanges 10 Damaged Black Hearts for a Black Heart.

import time

from net.swordie.ms.enums import EquipBaseStat
from net.swordie.ms.loaders import ItemData
from net.swordie.ms.util import FileTime


def generateBlackHeart():
    finalHeart = ItemData.getItemDeepCopy(blackHeart)

    # Base stats: Additional 40 all stats, 77 M/ATT
    finalHeart.setBaseStat(EquipBaseStat.iStr, finalHeart.getBaseStat(EquipBaseStat.iStr) + 40)
    finalHeart.setBaseStat(EquipBaseStat.iDex, finalHeart.getBaseStat(EquipBaseStat.iDex) + 40)
    finalHeart.setBaseStat(EquipBaseStat.iInt, finalHeart.getBaseStat(EquipBaseStat.iInt) + 40)
    finalHeart.setBaseStat(EquipBaseStat.iLuk, finalHeart.getBaseStat(EquipBaseStat.iLuk) + 40)
    finalHeart.setBaseStat(EquipBaseStat.iPAD, finalHeart.getBaseStat(EquipBaseStat.iPAD) + 77)
    finalHeart.setBaseStat(EquipBaseStat.iMAD, finalHeart.getBaseStat(EquipBaseStat.iMAD) + 77)
    # Normal Potential: 30% BD, 30% IED
    finalHeart.setOptionBase(0, 30602)
    finalHeart.setOptionBase(1, 30291)
    # Expires in 20 days from now
    finalHeart.setDateExpire(FileTime.fromEpochMillis(int(time.time()*1000) + 86400000*20))

    chr.addItemToInventory(finalHeart)

blackHeart = 1672076
diffusionLine = 4001842
lotusExtraordinary = 4001843
damagedBlackHeart = 4001877
absoCoin = 4310156

diffusionReq = 300
lotusReq = 2

diffusionQuantity = sm.getQuantityOfItem(diffusionLine)
lotusQuantity = sm.getQuantityOfItem(lotusExtraordinary)

init = sm.sendNext("Can I help you...? #b\r\n"
"#L0# Exchange Energy Cores for #i" + str(absoCoin) + "##z" + str(absoCoin) + "# #l\r\n"
"#L1# Repair #i" + str(damagedBlackHeart) + "##z" + str(damagedBlackHeart) + "# #l\r\n")

if init == 0:
    if diffusionQuantity >= diffusionReq and lotusQuantity >= lotusReq:
        #How many coins can the user exchange up to?
        diffusionQuotient = diffusionQuantity // diffusionReq
        lotusQuotient = lotusQuantity // lotusReq
        purchaseCap = min(diffusionQuotient, lotusQuotient, 100)
        
        sm.sendNext("I think you have what I need...")
        sm.sendNext("Give me " + str(diffusionReq) + " #i" + str(diffusionLine) + "##z" + str(diffusionLine)
        + "# items and " + str(lotusReq) + " #i" + str(lotusExtraordinary) + "##z" + str(lotusExtraordinary) + "#,\r\n"
        "and I'll give you 1 #i" + str(absoCoin) + "##z" + str(absoCoin) + "#..."
        "Do we have a deal?\r\n"
        "#L0# #i" + str(absoCoin) + "##z" + str(absoCoin) + "##l")

        quantity = sm.sendAskNumber("You can get up to " + str(purchaseCap) + " #b#z" + str(absoCoin) + "#(s)#k..."
        "How many do you want to trade?\r\n"
        "(#t" + str(diffusionLine) + "# in your possession: " + str(diffusionQuantity) + ")\r\n"
        "(#t" + str(lotusExtraordinary) + "# in your possession: " + str(lotusQuantity) + ")\r\n", 1, 1, purchaseCap)

        if not sm.canHold(absoCoin):
            sm.sendSayOkay("Please make room in your Etc. inventory.")
        else:
            sm.consumeItem(diffusionLine, quantity*diffusionReq)
            sm.consumeItem(lotusExtraordinary, quantity*lotusReq)
            sm.giveItem(absoCoin, quantity)
    else:
        sm.sendSayOkay("Come back when you have " + str(diffusionReq) + " #i" + str(diffusionLine) + "##z" + str(diffusionLine) +
        "# and " + str(lotusReq) + " #i" + str(lotusExtraordinary) + "##z" + str(lotusExtraordinary) + "#.")
else:
    if sm.getQuantityOfItem(damagedBlackHeart) >= 10:
        sm.sendNext("Are those #i" + str(damagedBlackHeart) + "##z" + str(damagedBlackHeart) + "#s? "
        "Wow, they're still emitting powerful force despite their damage...")

        response = sm.sendAskYesNo("I think I can fix them up to a heart in good shape for a few weeks before it breaks down... \r\n"
        "What do you say? \r\n"
        "(Do you want to exchange 10 #b#i" + str(damagedBlackHeart) + "##z" + str(damagedBlackHeart) + "##k "
        "for a #b#i" + str(blackHeart) + "##z" + str(blackHeart) + "##k?)")
        if response:
            if sm.canHold(blackHeart):
                sm.consumeItem(damagedBlackHeart, 10)
                generateBlackHeart()
            else:
                sm.sendSayOkay("Please make room in your Equip inventory.")
    else:
        sm.sendNext("Rumour has it that there's some interesting stuff (#i" + str(damagedBlackHeart) + "#) spotted inside Black Heaven... "
        "If you get your hands on something, bring them to me... \r\n"
        "(You need 10 #b#i" + str(damagedBlackHeart) + "##z" + str(damagedBlackHeart) + "##k "
        "to exchange for a #b#i" + str(blackHeart) + "##z" + str(blackHeart) + "##k.)")