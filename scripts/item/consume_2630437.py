# Arcane Symbol Selector Coupon
# 2630437
# Produces an Arcane Symbol of the user's choice if they meet the region's level requirement and completed their 5th Job advancement.

from net.swordie.ms.enums import InvType

recordOfPower = 1465
mapleAdmin = 2007
symbols = [
    (1712001, 200), # Arcane Symbol: Vanishing Journey
    (1712002, 210), # Arcane Symbol: Chu Chu Island
    (1712003, 220), # Arcane Symbol: Lachelein
    (1712004, 225), # Arcane Symbol: Arcana
    (1712005, 230), # Arcane Symbol: Morass
    (1712006, 235), # Arcane Symbol: Esfera
]

currentLevel = chr.getLevel()
selectorCount = sm.getQuantityOfItem(parentID)
equipSlots = sm.getEmptyInventorySlots(InvType.EQUIP)

sm.setSpeakerID(mapleAdmin)
if currentLevel < 200 or not sm.hasQuestCompleted(recordOfPower):
    sm.sendSayOkay("This item can only be used by characters who have reached Level #r200#k "
    "and completed the #b5th Job Advancement#k.")
else:
    if equipSlots > 0:
        # Determine stopping point for symbols based on currentLevel
        symbolEnd = 0
        for requirement in symbols:
            if currentLevel < requirement[1]:
                break
            symbolEnd += 1

        # Create a filtered symbol slice and reverse it to show later areas' symbols first
        filteredSymbols = symbols[:symbolEnd]
        filteredSymbols.reverse()

        symbolString = "Please select the #bArcane Symbol#k you'd like! #b\r\n"
        for index, arcane in enumerate(filteredSymbols):
            symbolString += "#L"+ str(index) + "##i" + str(arcane[0]) + "# #z" + str(arcane[0]) +"##l \r\n"
        symbolSelection = sm.sendNext(symbolString)
        symbolToReceive = filteredSymbols[symbolSelection][0]

        # Determine limit of Arcane Symbols to receive
        symbolCap = min(selectorCount, equipSlots)
        quantity = sm.sendAskNumber("You can get up to #r" + str(symbolCap) + "#k #i" + str(symbolToReceive) + "# #b#z" + str(symbolToReceive) + "##k. "
        "How many would you like to trade in? \r\n"
        "(#i" + str(parentID) + "# #b#t" + str(parentID) + "##k in your possession: #r" + str(selectorCount) + "#k)\r\n", 1, 1, symbolCap)

        sm.consumeItem(parentID, quantity)
        for trade in range(quantity):
            sm.giveItem(symbolToReceive)
    else:
        sm.sendSayOkay("Please make some room in your Equip inventory.")