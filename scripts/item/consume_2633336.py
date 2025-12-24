# Sacred Symbol Selector x 1 Coupon
# 2633336
# Produces a Sacred Symbol of the user's choice if they meet the region's level requirement and completed A Divine Power.

from net.swordie.ms.enums import InvType

divinePower = 1484
mapleAdmin = 2007
symbols = [
    {"ItemID": 1713000, "Level": 260}, # Sacred Symbol: Cernium
    {"ItemID": 1713001, "Level": 270}, # Sacred Symbol: Arcus
]

currentLevel = chr.getLevel()
selectorCount = sm.getQuantityOfItem(parentID)
equipSlots = sm.getEmptyInventorySlots(InvType.EQUIP)

sm.setSpeakerID(mapleAdmin)
if currentLevel < 260 or not sm.hasQuestCompleted(divinePower):
    sm.sendSayOkay("This item can only be used by characters who have reached Level #r260#k "
    "and completed the #bA Divine Power#k quest.")
else:
    if equipSlots > 0:
        # Determine stopping point for symbols based on currentLevel
        symbolEnd = 0
        for requirement in symbols:
            if currentLevel < requirement["Level"]:
                break
            symbolEnd += 1

        # Create a filtered symbol slice and reverse it to show later areas' symbols first
        filteredSymbols = symbols[:symbolEnd]
        filteredSymbols.reverse()

        symbolString = ["Please select the #bSacred Symbol#k you'd like! #b\r\n"]
        options = sm.selectionString("#L{i}##i{ItemID}# #z{ItemID}##l", filteredSymbols)
        symbolString.append(options)
        symbolSelection = sm.sendNext(sm.join(symbolString))
        symbolToReceive = filteredSymbols[symbolSelection]["ItemID"]

        # Determine limit of Sacred Symbols to receive
        symbolCap = min(selectorCount, equipSlots)
        quantity = sm.sendAskNumber(sm.join(["You can get up to #r", repr(symbolCap), "#b ", sm.formatInlineItem(symbolToReceive), "#k. "
        "How many would you like to trade in? #b\r\n",
        sm.formatInlineItem(parentID), "#k in your possession: #r", repr(selectorCount), "#k)\r\n"]), 1, 1, symbolCap)

        sm.consumeItem(parentID, quantity)
        for trade in range(quantity):
            sm.giveItem(symbolToReceive)
    else:
        sm.sendSayOkay("Please make some room in your Equip inventory.")