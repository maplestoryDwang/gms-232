# Appearance Reset Coupon
# 2432805
# Reverts anviled items back to their original appearance.

from net.swordie.ms.enums import InvType

mapleAdmin = 2007

anviledItems = []

equipInv = chr.getInventoryByType(InvType.EQUIP)
invItems = equipInv.getItems()
# Sort by physical inventory slot indices, not item ID
invItems.sort(key=lambda item: item.getBagIndex())
# Filter the player's Equip inventory to just anviled Equips
# Anviled Equips are defined by having a non-zero Anvil ID within its Equip options
invItems = filter(lambda item: item.getAnvilId() != 0, invItems)

# Make sure to add the item's ID to anviledItems, *not* the item entity itself
for equip in invItems:
    equipId = equip.getItemId()
    equipDict = {"ItemID": equipId}
    anviledItems.append(equipDict)

sm.setSpeakerID(mapleAdmin)
# No anviled Equips found
if len(anviledItems) == 0:
    sm.sendSayOkay("You don't have any anviled equips in your inventory.")
else:
    resetString = ["Select the anviled equip you want to reset. #b\r\n"]
    # Construct anviled gear list
    options = sm.selectionString("#L{i}##i{ItemID}# #z{ItemID}##l", anviledItems)
    resetString.append(options)
    selection = sm.sendNext(sm.join(resetString))

    # Pull out the selected item dict from anviledItems
    resetID = anviledItems[selection]["ItemID"]

    response = sm.sendAskYesNo(sm.join(["Are you sure you want to reset the appearance of #b", sm.formatInlineItem(resetID), "#k?"]))
    if response:
        # Retrieve the original item entity by index inside invItems (invItems and anviledItems already follow the same physical sort order)
        # This allows for targeting a *specific* entity, not the first copy within inventory if the player has two of the same item with different anvils
        toReset = invItems[selection]
        
        toReset.getOptions().set(6, 0)
        toReset.updateToChar(chr)
        sm.consumeItem()