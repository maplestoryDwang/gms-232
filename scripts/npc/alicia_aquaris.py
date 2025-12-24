# Alicia's Soul | Tower of Oz (992000000)
from net.swordie.ms.client.partyquests.towerofoz import OzTowerModule
from net.swordie.ms.constants import ItemConstants
from net.swordie.ms.constants import OzConstants


def get_enumerated_inventory():
    ret_str = ""
    inv = chr.getEquipInventory()
    inv.sortItemsByIndex()
    i = 0
    for item in inv.getItemsNotInBag():
        if ItemConstants.isOzRing(item.getItemId()):
            ret_str += "#b#L{0}##i{1}##t{1}l#\r\n".format(item.getBagIndex(), item.getItemId())
            i += 1

    return ret_str, i


answer = sm.sendNext("How may I help you, little one?\r\nYou have completed {} floors today\r\n\r\n#b"
                    "#L0#I want to expand my Stupid Pill slots.#l\r\n"
                    "#L1#I lost my Clever Lady Hotline.#l\r\n"
                    "#L2#I want to exchange a Ring for Box pieces.#l\r\n"
                    "#L3#I don't need any more guidance from you.#l".format(OzTowerModule.getCompletedFloors(chr)))

# I want to expand my Stupid Pill slots.
if answer == 0:
    next_unlock_slot = OzTowerModule.getNextUnlockPillSlot(chr)
    if next_unlock_slot == -1:
        sm.sendNext("You already have all 5 pill slots unlocked.")
        sm.dispose()

    cost = OzConstants.getUnlockCost(next_unlock_slot)
    if sm.sendAskYesNo("In order to expand your pill slots I require {} Oz Points\r\nAre you sure you want to unlock a new pill slot?".format(cost)):
        if OzTowerModule.getOzPoints(chr) < cost:
            sm.sendSayOkay("You don't have enough Oz Points.")
            sm.dispose()

        OzTowerModule.deductOzPoints(chr, cost)
        OzTowerModule.unlockPillSlot(chr, next_unlock_slot)


# I lost my Clever Lady Hotline.
elif answer == 1:
    if sm.hasItem(OzConstants.CLEVER_LADY_HOTLINE):
        sm.sendSayOkay("Sorry, you already have a #bClever Lady Hotline.")

    elif not sm.canHold(OzConstants.CLEVER_LADY_HOTLINE):
        sm.sendSayOkay("Please make sure you have enough inventory space.")

    else:
        sm.giveItem(OzConstants.CLEVER_LADY_HOTLINE)
        sm.sendSayOkay("I've given you a new #bClever Lady Hotline#k. Please try not to lose it again.")



elif answer == 2:
    msg, length = get_enumerated_inventory()
    if length <= 0:
        sm.sendSayOkay("You have no Oz Rings to exchange.")
        sm.dispose()

    sel = sm.sendNext("Select which Ring you would like to sell for 3 Hidden Box Pieces\r\n" + msg)
    i = chr.getEquipInventory().getItemBySlot(sel)
    if i is None or not ItemConstants.isOzRing(i.getItemId()):
        sm.sendSayOkay("An error occurred")
        sm.dispose()

    sm.consumeItem(i, 1)
    sm.giveItem(ItemConstants.BROKEN_BOX_PIECE, OzConstants.BROKEN_BOX_PIECES_FROM_RING)


# I don't need any more guidance from you.
elif answer == 3:
    sm.sendSayOkay("Do come to me again if you need any guidance.")
