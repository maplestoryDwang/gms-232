# Admin NPC

from net.swordie.ms.enums import BaseStat
from net.swordie.ms.enums import EquipBaseStat
from net.swordie.ms.enums import InvType
from net.swordie.ms.loaders import ItemData

EquipStats =  [[EquipBaseStat.iStr, BaseStat.str, "STR"], [EquipBaseStat.iDex, BaseStat.dex, "DEX"], [EquipBaseStat.iInt, BaseStat.inte, "INT"],[EquipBaseStat.iLuk, BaseStat.luk, "LUK"], [EquipBaseStat.iPAD, BaseStat.pad, "WATT"], [EquipBaseStat.iMAD, BaseStat.mad, "MATT"],
                [EquipBaseStat.iMaxHP, BaseStat.mhp, "MAXHP"],[EquipBaseStat.iMaxMP, BaseStat.mmp, "MAXMP"],[EquipBaseStat.iDEF, BaseStat.pdd, "DEF"]]

def showSelectionMenu():
    choiceString = "Inspected Character name #b{} #k \r\n \r\n".format(chr.getName())
    choiceString += "Meso: {} \r\n".format(chr.getMoney())
    choiceString += "NX: {} \r\n".format(acc.getNxPrepaid())
    choiceString += "#L0#Equipped items #l \r\n"
    choiceString += "#L1#Equip inventory #l\r\n"
    choiceString += "#L2#Use inventory #l\r\n"
    choiceString += "#L3#ETC inventory #l\r\n"
    choiceString += "#L4#Set-up inventory #l\r\n"
    choiceString += "#L5#Cash inventory #l\r\n"
    choiceString += "#L6#Storage#l\r\n"
    choice = sm.sendNext(choiceString)
    if choice == 0:
        showEquipInv(InvType.EQUIPPED)
    elif choice == 1:
        showEquipInv(InvType.EQUIP)
    elif choice == 2:
        showItemInv(InvType.CONSUME)
    elif choice == 3:
        showItemInv(InvType.ETC)
    elif choice == 4:
        showItemInv(InvType.INSTALL)
    elif choice == 5:
        showItemInv(InvType.CASH)
    elif choice == 6:
        showStorage()

def showStorage():
    trunkInv = acc.getTrunk().getItems()
    itemstring = "Inspected Character name #b{} #k \r\n".format(chr.getName())
    itemstring += "Meso: {} \r\n".format(acc.getTrunk().getMoney())
    for item in trunkInv:
        if item.getType().getVal() == 1:
            itemstring += "#b#L{}##i{}##t{}l#\r\n".format(item.getBagIndex(), item.getItemId(), item.getItemId())
        else:
            itemstring += "#b#i{}##t{}##k amount: #b{}#k \r\n".format(item.getItemId(), item.getItemId(), item.getQuantity())

    itemstring += "\r\n#L0#Back to list #l"
    choice = sm.sendNext(itemstring)
    if choice == 0:
        showSelectionMenu()
    else:
        showEquipDetails(choice, 6)

def showItemInv(itemInvType):
    itemInv = chr.getInventoryByType(itemInvType)
    itemstring = "Inspected Character name #b{} #k \r\n".format(chr.getName())
    for item in itemInv.getItems():
        itemstring += "#b#i{}##t{}##k amount: #b{}#k \r\n".format(item.getItemId(), item.getItemId(), item.getQuantity())

    itemstring += "\r\n#L0#Back to list #l"
    choice = sm.sendNext(itemstring)
    if choice == 0:
        showSelectionMenu()

def showEquipInv(equipInvType):
    equippedInv = chr.getInventoryByType(equipInvType)
    itemstring = "Inspected Character name #b{} #k \r\n".format(chr.getName())
    for item in equippedInv.getItems():
        itemstring += "#b#L{}##i{}##t{}l#\r\n".format(item.getBagIndex(), item.getItemId(), item.getItemId())

    itemstring += "\r\n#L0#Back to list #l"

    selection = sm.sendNext(itemstring)
    if selection == 0:
        showSelectionMenu()
    else:
        showEquipDetails(selection, equipInvType.getVal())

def showEquipDetails(bagIndex, equipInvTypeVal):
    #type 6 = storage, need to get items differently from storage
    if equipInvTypeVal == 6:
        trunkInv = acc.getTrunk()
        item = trunkInv.getItemByPos(bagIndex)
    else:
        equippedInv = chr.getInventoryByType(InvType.getInvTypeByVal(equipInvTypeVal))
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
        if equipInvTypeVal == 6:
            showStorage()
        else:
            showEquipInv(InvType.getInvTypeByVal(equipInvTypeVal))


#-----------------------------------------------------------------
showSelectionMenu()

