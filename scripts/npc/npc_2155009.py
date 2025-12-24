# Sensitive Squaroid
# 2155009
# Haven (310070000)
# Exchanges 20 Diffusion-Line Energy Cores (Grade A) and 1 Extraordinary Energy Core (Grade S) for an AbsoLab Coin.
# Also exchanges a Damaged Black Heart for a Black Heart.

import time

from net.swordie.ms.enums import EquipBaseStat
from net.swordie.ms.loaders import ItemData
from net.swordie.ms.util import FileTime


def generateBlackHeart():
    finalHeart = ItemData.getItemDeepCopy(blackHeart)

    # Base stats: 10 + 40 all stats from 15*, 100 Max HP (extra 255 from 15* is subtracted out), 77 M/ATT
    finalHeart.setChuc(15)
    finalHeart.setBaseStat(EquipBaseStat.iMaxHP, finalHeart.getBaseStat(EquipBaseStat.iMaxHP) - 255)
    # Normal Potential: 30% BD, 30% IED
    finalHeart.setOptionBase(0, 60011)
    finalHeart.setOptionBase(1, 60010)
    # Expires in 20 days from now
    finalHeart.setDateExpire(FileTime.fromEpochMillis(int(time.time()*1000) + 86400000*20))

    chr.addItemToInventory(finalHeart)

blackHeart = 1672082
diffusionLine = 4001842
lotusExtraordinary = 4001843
damagedBlackHeart = 4001877
absoCoin = 4310156

diffusionReq = 20
lotusReq = 1
blackHeartStr = sm.formatInlineItem(blackHeart)
diffusionStr = sm.formatInlineItem(diffusionLine)
lotusStr = sm.formatInlineItem(lotusExtraordinary)
damagedHeartStr = sm.formatInlineItem(damagedBlackHeart)
absoCoinStr = sm.formatInlineItem(absoCoin)

diffusionQuantity = sm.getQuantityOfItem(diffusionLine)
lotusQuantity = sm.getQuantityOfItem(lotusExtraordinary)

exchangeMode = sm.sendNext("Can I help you...? #b \r\n"
"#L0# Exchange Energy Cores for " + absoCoinStr + " #l \r\n"
"#L1# Repair " + damagedHeartStr + " #l \r\n")

if exchangeMode == 0:
    if diffusionQuantity >= diffusionReq and lotusQuantity >= lotusReq:
        #How many coins can the user exchange up to?
        diffusionQuotient = diffusionQuantity // diffusionReq
        lotusQuotient = lotusQuantity // lotusReq
        purchaseCap = min(diffusionQuotient, lotusQuotient, 100)
        
        sm.sendNext("I think you have what I need...")
        sm.sendNext(sm.join(["Give me ", repr(diffusionReq), " ", diffusionStr, " and ", repr(lotusReq), " ", lotusStr, ", \r\n"
        "and I'll give you 1 ", absoCoinStr, "...Do we have a deal? \r\n"
        "#L0# ", absoCoinStr, "#l"]))
        quantity = sm.sendAskNumber(sm.join(["You can get up to ", repr(purchaseCap), " #b#z", repr(absoCoin), "#(s)#k..."
        "How many do you want to trade? \r\n"
        "(#t", repr(diffusionLine), "# in your possession: ", repr(diffusionQuantity), ") \r\n"
        "(#t", repr(lotusExtraordinary), "# in your possession: ", repr(lotusQuantity), ") \r\n"]), 1, 1, purchaseCap)

        if not sm.canHold(absoCoin, quantity):
            sm.sendSayOkay("Please make room in your Etc. inventory.")
        else:
            sm.consumeItem(diffusionLine, quantity*diffusionReq)
            sm.consumeItem(lotusExtraordinary, quantity*lotusReq)
            sm.giveItem(absoCoin, quantity)
    else:
        sm.sendSayOkay(sm.join(["Come back when you have ", repr(diffusionReq), " ", diffusionStr, " and ", repr(lotusReq), " ", lotusStr, "."]))
else:
    if sm.hasItem(damagedBlackHeart):
        sm.sendNext("Is that a " + damagedHeartStr + "? Wow, it's still emitting powerful force despite the damage...")
        response = sm.sendAskYesNo("I think I can fix it up to good shape for a few weeks before it breaks down... \r\n"
        "What do you say? \r\n"
        "(Do you want to exchange the #b" + damagedHeartStr + "#k for a #b" + blackHeartStr + "#k?)")
        if response:
            if sm.canHold(blackHeart):
                sm.consumeItem(damagedBlackHeart)
                generateBlackHeart()
            else:
                sm.sendSayOkay("Please make room in your Equip inventory.")
    else:
        sm.sendNext(sm.join(["Rumour has it that there's some interesting stuff (#i", repr(damagedBlackHeart), "#) spotted inside Black Heaven... "
        "If you get your hands on something, please bring them to me... \r\n"
        "(You need a #b", damagedHeartStr, "#k to exchange for a #b", blackHeartStr, "#k.)"]))