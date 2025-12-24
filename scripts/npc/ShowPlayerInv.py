# Admin NPC

from net.swordie.ms.enums import BaseStat
from net.swordie.ms.enums import EquipBaseStat
from net.swordie.ms.enums import InvType
from net.swordie.ms.loaders import ItemData

EquipStats =  [[EquipBaseStat.iStr, BaseStat.str, "STR"], [EquipBaseStat.iDex, BaseStat.dex, "DEX"], [EquipBaseStat.iInt, BaseStat.inte, "INT"],[EquipBaseStat.iLuk, BaseStat.luk, "LUK"], [EquipBaseStat.iPAD, BaseStat.pad, "WATT"], [EquipBaseStat.iMAD, BaseStat.mad, "MATT"],
                [EquipBaseStat.iMaxHP, BaseStat.mhp, "MAXHP"],[EquipBaseStat.iMaxMP, BaseStat.mmp, "MAXMP"],[EquipBaseStat.iDEF, BaseStat.pdd, "DEF"]]

def showEquipInv():
    equippedInv = chr.getInventoryByType(InvType.EQUIPPED)
    itemstring = "Inspected Character name #b{} #k \r\n".format(chr.getName())
    for item in equippedInv.getItems():
        itemstring += "#b#L{}##i{}##t{}l#\r\n".format(item.getBagIndex(), item.getItemId(), item.getItemId())
    selection = sm.sendNext(itemstring)
    showEquipDetails(selection)

def showEquipDetails(bagIndex):
    equippedInv = chr.getInventoryByType(InvType.EQUIPPED)
    item = equippedInv.getItemBySlot(bagIndex)
    itemstring = "Inspected item #b#i{}##t{}##k\r\n \r\n".format(item.getItemId(), item.getItemId())
    #SF
    if item.getChuc()  != 0:
        itemstring += "SF Count : {} \r\n".format(item.getChuc())
    #Scrolled amount
    if item.getCuc()  != 0:
        itemstring += "Scrolls succeeded : {}\r\n ".format(item.getCuc())
        itemstring += "Scroll slots left  : {} / {}\r\n".format(item.getTuc(), item.getStatFromBaseEquip(EquipBaseStat.tuc))

    itemstring += "\r\n"

    #Basic Stats
    for EquipStat in EquipStats:
        if  item.getBaseStat(EquipStat[0]) != 0 or item.getBaseStatFlame(EquipStat[0]) != 0 or item.getEnchantmentStat(EquipStat[0]) != 0:
            itemstring += EquipStat[2] + ": + #b{}#k".format(int(item.getBaseStat(EquipStat[1])))
            if item.getBaseStatFlame(EquipStat[0]) > 0 or item.getBaseStat(EquipStat[0]) - item.getStatFromBaseEquip(EquipStat[0]) != 0:
                itemstring += "({}".format(item.getStatFromBaseEquip(EquipStat[0]))
                if item.getBaseStatFlame(EquipStat[0]) > 0:
                    itemstring += " + #g{}#k".format(item.getBaseStatFlame(EquipStat[0]))
                if (item.getBaseStat(EquipStat[0]) - item.getStatFromBaseEquip(EquipStat[0])) > 0:
                    itemstring += " + #b{}#k".format(item.getBaseStat(EquipStat[0]) - item.getStatFromBaseEquip(EquipStat[0]))
                elif (item.getBaseStat(EquipStat[0]) - item.getStatFromBaseEquip(EquipStat[0])) < 0:
                    itemstring += " #r{}#k".format(item.getBaseStat(EquipStat[0]) - item.getStatFromBaseEquip(EquipStat[0]))
                itemstring += ")"
            itemstring+="\r\n"
    if item.getStatFromBaseEquip(EquipBaseStat.bdr)  != 0:
        itemstring += "Boss Dmg : + {} % \r\n".format(item.getStatFromBaseEquip(EquipBaseStat.bdr))
    if item.getStatFromBaseEquip(EquipBaseStat.bdr)  != 0:
        itemstring += "IED : + {} % \r\n".format(item.getStatFromBaseEquip(EquipBaseStat.imdr))

    #Cube
    opt = item.getOption(0, False)
    if opt != 0:
        itemstring += "\r\n"
        tier = opt // 10000
        if tier <= 1:
            itemstring += "#b(Rare) Potential #k\r\n"
        elif tier == 2:
            itemstring += "#d(Epic) Potential #k\r\n"
        elif tier == 3:
            itemstring += "#r(Unique) Potential #k \r\n"
        else:
            itemstring += "#g(Legendary) Potential #k \r\n"
        for i in range(3):
            opt = item.getOption(i, False)
            if opt != 0:
                pOpt = ItemData.getItemOptionById(opt)
                itemstring += pOpt.getString(item.getReqLevel()).replace("#", "")
                itemstring += "\r\n"

    #bonus cube
    opt = item.getOption(0, True)
    if opt != 0:
        itemstring += "\r\n"
        tier = opt // 10000
        if tier <= 1:
            itemstring += "#b(Rare) Bonus Potential #k\r\n"
        elif tier == 2:
            itemstring += "#d(Epic) Bonus Potential #k\r\n"
        elif tier == 3:
            itemstring += "#r(Unique) Bonus Potential #k \r\n"
        else:
            itemstring += "#g(Legendary) Bonus Potential #k \r\n"
        for i in range(3):
            opt = item.getOption(i, True)
            if opt != 0:
                pOpt = ItemData.getItemOptionById(opt)
                itemstring += pOpt.getString(item.getReqLevel()).replace("#", "")
                itemstring += "\r\n"
    #end
    itemstring += "\r\n#L0#Back to list #l"
    selection = sm.sendSayOkay(itemstring)
    if selection == 0:
        showEquipInv()


#-----------------------------------------------------------------
showEquipInv()

