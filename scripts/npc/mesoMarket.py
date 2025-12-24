# Miss Richfield - Free Market - QoL stuff - @sell
from net.swordie.ms.constants import ItemConstants
from net.swordie.ms.enums import InvType
from net.swordie.ms.loaders import ItemData

equippedInv = chr.getInventoryByType(InvType.EQUIPPED)
equipInv = chr.getInventoryByType(InvType.EQUIP)

invTypes = [InvType.EQUIP, InvType.CONSUME, InvType.ETC, InvType.INSTALL, InvType.CASH, InvType.DEC]
invTypeStr = ["Equip", "Use", "Etc", "Setup", "Cash", "Dec"]

def showInv(invType):
    return sm.sendNext(sm.enumerateInventory(invType))

def unequip(bagIndex):
    equip = equippedInv.getItemBySlot(bagIndex)

    if equip is None:
        sm.sendSayOkay("Cannot find that equip.")
    elif ItemConstants.isLongOrBigSword(equip.getItemId()):
        sm.sendSayOkay("You cannot unequip Zero Weapons.")
    elif equipInv.isFull():
        sm.sendSayOkay("Your equip inventory is full.")
    elif ItemConstants.isPet(equip.getItemId()):
        sm.sendSayOkay("You cannot unequip pets this way.")
    else:
        sm.unequip(equip)
        sm.sendSayOkay("You have unequipped #v{}##t{}#.".format(equip.getItemId(), equip.getItemId()))

def usePsokOnItem(invType, bagIndex):
    item = chr.getInventoryByType(invType).getItemBySlot(bagIndex)
    if item is None:
        sm.sendNext("Could not find that item.")
    else:
        chr.deductNX(4000)
        item.applyPsok(chr)

def showUntradableItems(invType):
    inv = chr.getInventoryByType(invType)
    count = 0

    str = "#b"
    for item in inv.getItemsNotInBag():
        if not item.isTradable() and not (item.getType().getVal() == 2 and item.isAccountSharable()) and not item.isBagItemOwner():
            count += 1
            str += "#L{}##i{}##t{}l#\r\n".format(item.getBagIndex(), item.getItemId(), item.getItemId())
    str += "#k"

    if count == 0:
        sm.sendSayOkay("You don't have any untradable items in your inventory.")
        return -1

    return sm.sendNext(str)

def showCashItems(items, begin):
    if len(items) == 0:
        str = "You have no Cash Shop items to delete."
        sm.sendSayOkay(str)
        sm.dispose()

    str = "#b"
    i = begin
    ctr = 0
    for item in items:
        str += "#L{}##i{}##t{}l#\r\n".format(i, item.getItemId(), item.getItemId())
        i += 1
        ctr += 1
        if ctr > 150: # Max items to delete
            break
    str += "#k"

    return str

def showStorageItems():
    i = 0

    str = "Choose an item to take from your storage:#b\r\n"
    for item in chr.getAccount().getTrunk().getItems():
        str += "#L{}##i{}##t{}l#\r\n".format(i, item.getItemId(), item.getItemId())
        i += 1
    str += "#k"

    if i == 0:
        sm.sendSayOkay("You don't have any items in your storage.")
        return -1

    return sm.sendNext(str)

def getItemFromStorage(idx):
    trunk = chr.getAccount().getTrunk()
    item = trunk.getItemByPos(idx)

    if item is None:
        sm.sendSayOkay("Could not find that item.")
        return

    toInv = chr.getInventoryByType(item.getInvType())
    if toInv.isFull():
        sm.sendSayOkay("Please make some space in your inventory ({})".format(item.getInvType()))
    else:
        quant = item.getQuantity()
        trunk.removeItem(item, quant)

        if ItemConstants.isEquip(item.getItemId()):
            chr.addItemToInventory(item.deepCopy())
        else:
            newItem = item.deepCopy()
            newItem.setQuantity(quant)
            chr.addItemToInventory(newItem)

# -----------------------------------------------------------------------

option = sm.sendNext("What do you want to do?#b\r\n"
            "#L0#Unequip an item#l\r\n"
            "#L1#Use #t5520001# on an item (4,000 NX, will send untradable items to storage)#l\r\n"
            "#L2#Take an item from your storage#l\r\n"
            "#L3#Sell items#l\r\n"
            "#L4#Sell items in cash shop")
if option == 0:
    bagIndex = showInv(InvType.EQUIPPED)
    unequip(bagIndex)

elif option == 1:
    invTypeStr = "Which tab would you like to see? #b\r\n"

    i = 0
    for it in invTypes:
        invTypeStr += "#L{}#{}#l \r\n".format(i, it.toString())
        i += 1

    inventorySel = sm.sendNext(invTypeStr)

    while True:
        invType = invTypes[inventorySel]
        bagIndex = showUntradableItems(invType)
        if bagIndex != -1:
            usePsokOnItem(invType, bagIndex)
        else:
            break

elif option == 2:
    while True:
        toRemoveIdx = showStorageItems()
        if toRemoveIdx != -1:
            getItemFromStorage(toRemoveIdx)
        else:
            break

elif option == 3:
    invType = invTypes[sm.sendNext("Which inventory would you like to sell items from? \r\nAll sold items will be "
                                   "put into your buyback shop (max 60 items). Equips that have legendary potential or have scrolls applied "
                                   "will not be sold, but will be in the list.\r\n\r\n{}".format(sm.enumerateList(invTypeStr)))]

    inv = chr.getInventoryByType(invType)

    if inv.getItemsNotInBag().size() == 0:
        sm.sendNext("This inventory tab is empty.")

    inv.sortItemsByIndex()
    startPos = sm.sendNext("Select your start item.\r\n\r\n{}".format(sm.enumerateInventory(invType)))

    endStr = "Select your end item.\r\n\r\n"
    for item in inv.getItemsNotInBag():
        if item.getBagIndex() >= startPos:
            endStr += "#b#L{}##i{}##t{}l#\r\n".format(item.getBagIndex(), item.getItemId(), item.getItemId())

    endPos = sm.sendNext(endStr)





    cost = 0
    # Between pos and not an equip with legendary potential or scrolls applied
    itemList = filter(lambda eq: startPos <= eq.getBagIndex() <= endPos, inv.getItemsNotInBag())

    listCopy = list(itemList)
    for item in listCopy:
        if ItemConstants.isEquip(item.getItemId()) and (item.getCuc() > 0 or item.getGrade() >= 20):
            itemList.remove(item)

    for item in itemList:
        itemId = item.getItemId()
        isBundle = ItemConstants.isRechargable(itemId)
        quantity = item.getQuantity()

        if ItemConstants.isEquip(itemId):
            cost += ItemData.getEquipInfoById(itemId).getPrice()
        elif isBundle:
            cost += ItemData.getItemInfoByID(itemId).getPrice()
        else:
            cost += ItemData.getItemInfoByID(itemId).getPrice() * quantity

        # # Add to ItemOperations
        # itemOp = ItemOperation()
        # itemOp.type = InventoryOperation.Remove
        # itemOp.pos = item.getBagIndex()
        # itemOp.item = item
        # itemOps.append(itemOp)
        #
        # # Consume without sending Packet
        # chr.consumeItemFull(item, False)

        # Add to BuyBack List
        buyBackItem = item.deepCopy()
        buyBackItem.setQuantity(quantity)
        chr.addItemToBuyBack(buyBackItem)

    sm.batchRemoveItems(itemList)
    #chr.write(WvsContext.inventoryOperation(True, False, itemOps))
    chr.addMoney(cost)

elif option == 4:
    trunk = chr.getAccount().getTrunk()
    cashItems = trunk.getLocker()

    talk = "I can easily delete Cash Shop items for you. Simply select 2 items, and everything inbetween will be deleted.\r\n\r\n" \
           "Please select the starting item: \r\n"
    talk += showCashItems(cashItems, 0)

    firstIdx = sm.sendNext(talk)

    talk = "Please select the last item: \r\n"
    talk += showCashItems(cashItems, firstIdx)

    lastIdx = sm.sendNext(talk)

    deleteCount = lastIdx - firstIdx + 1
    itemStr = "item" if deleteCount == 1 else "items"

    if sm.sendAskYesNo("Are you sure you want to delete {} {}? They cannot be recovered afterwards.".format(deleteCount, itemStr)):
        deleteItems = []

        i = 0
        for item in cashItems:
            if firstIdx <= i <= lastIdx:
                deleteItems.append(item)
                i += 1

        for item in deleteItems:
            trunk.removeCashItem(item)

        sm.sendSayOkay("The items have been deleted.")
    else:
        sm.sendSayOkay("Alright, come back to me if you'd like my help.")