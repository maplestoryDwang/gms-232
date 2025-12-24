# Faito
# 9120010
# Showa Street Market (801000300)
# Showa Exchange Quest NPC; also provides reward list view in-game. Rewards copied as-is from Hidden Street lists without any weighting.

import random

from net.swordie.ms.enums import InvType

exchangeList = [4000064, 4000065, 4000066, 4000075, 4000077,
4000089, 4000090, 4000091, 4000092, 4000093, 4000094]
rewardsDict = {
    4000064: [
        (2000000, 1), (2000006, 1), (2000003, 5), (2000002, 5), (4020006, 2), (4020000, 2), (4020004, 2),
        (2000003, 10), (2000003, 20), (2000002, 10), (2000002, 20), (2022026, 15), (2022024, 15), (1002395, 1)
    ], # Crow Feathers
    4000065: [
        (2000006, 1), (2000002, 5), (4020006, 2), (2000002, 10), (2000003, 10), (2000002, 20),
        (2022024, 15), (2022026, 15),
    ], # Raccoon Firewood
    4000066: [
        (2000006, 1), (2000003, 5), (2000002, 5), (4020000, 2), (2000003, 10), (2000002, 10), (2000003, 20),
        (2000002, 20), (2022026, 15), (2022024, 15), (1002395, 1)
    ], # Cloud Foxtails
    4000075: [
        (2060003, 1000), (4010004, 2), (4010006, 2), (2022022, 5), (2022022, 10), (2022022, 15),
        (2022019, 5), (2022019, 10), (2022019, 15), (2001002, 15), (2001001, 15), (1102040, 1), (1102043, 1)
    ], # Dark Specter Bandanas
    4000077: [
        (2000003, 1), (2022019, 5), (2000006, 5), (4010002, 2), (4010003, 2), (2000006, 10), (2000006, 15),
        (2022019, 10), (2022019, 20), (2060003, 1000), (2061003, 1000), (1082150, 1), (1082149, 1)
    ], # Big Cloud Foxtails
    4000089: [
        (2000006, 1), (2000003, 5), (2000002, 5), (2000003, 10), (2000003, 20), (2000002, 10), (2000002, 20),
        (2061003, 1000), (2060003, 1000), (2022026, 15), (1002395, 1)
    ], # Yakuza Soldier's Pins
    4000090: [
        (2022019, 5), (2000006, 5), (4010003, 2), (2022019, 10), (2022019, 15), (2000006, 10), (2000006, 15),
        (2061003, 1000), (2060003, 1000)
    ], # Yakuza Grunt's Name Badges
    4000091: [
        (2000003, 1), (2000006, 1), (2022019, 5), (2000006, 5), (4010002, 2), (4010003, 2),
        (2022019, 10), (2022019, 15), (2000006, 10), (2000006, 15), (2061003, 1000), (2060003, 1000)
    ], # Yakuza Bruiser's Necklaces
    4000092: [
        (2022019, 5), (2022022, 5), (4010006, 2),  (2022019, 10), (2022019, 15), (2022022, 10), (2022022, 15),
        (2001001, 15), (2001002, 15), (1102043, 1)
    ], # Yakuza Lieutenant's Shades
    4000093: [(4010004, 5), (2022019, 5), (2022022, 15), (2022019, 15), (2001001, 15), (2001002, 15), (1102043, 1)], # Yakuza Shotcaller's Charms
    4000094: [(2000006, 1), (4020008, 2), (2022018, 5), (2022018, 10), (2022018, 20), (2022000, 10), (2022000, 20), (2022025, 15)], # Bigshot Pomades
}

viewmode = sm.sendNext("If you're looking for someone that can pinpoint the characteristics of various items, "
"you're looking at one right now. I'm currently looking for something. "
"Would you like to hear my story? #b\r\n"
"#L0# Exchange items #l\r\n"
"#L1# Check exchange list #l\r\n")
if viewmode == 0:
    selString = ["Now, shall we trade? #b\r\n"]
    # Construct selectable items to exchange
    for index, fodder in enumerate(exchangeList):
        selString.append(sm.join(["#L", repr(index), "##i", repr(fodder), "# 100 #z", repr(fodder), "##l\r\n"])) 
    selection = sm.sendNext(sm.join(selString))

    # Pull out the matching id from exchangeList
    selectedFodder = exchangeList[selection]

    if not sm.hasItem(selectedFodder, 100):
        sm.sendSayOkay("You don't have #b100 #z" + repr(selectedFodder) + "##k, do you? Don't waste my time.")
    elif sm.getEmptyInventorySlots(InvType.EQUIP) == 0 or sm.getEmptyInventorySlots(InvType.CONSUME) == 0 or sm.getEmptyInventorySlots(InvType.ETC) == 0:
        sm.sendSayOkay("Come back when you have room in your Equip, Use, and Etc. inventories.")
    else:
        # Grab a random item tuple from rewardsDict using selectedFodder as the dictionary key
        reward = random.choice(rewardsDict[selectedFodder])
        rewardItem = reward[0]
        rewardQuant = reward[1]

        sm.consumeItem(selectedFodder, 100)
        sm.giveItem(rewardItem, rewardQuant)
        sm.sendNext(sm.join(["Here, I'll give you ", repr(rewardQuant), " #z", repr(rewardItem), "#(s) for your #b100 #z", repr(selectedFodder), "##k."]))
else:
    selString = ["Choose the trade item that you want to check. #b\r\n"]
    # Construct selectable items to exchange
    for index, fodder in enumerate(exchangeList):
        selString.append(sm.join(["#L", repr(index), "#", sm.formatInlineItem(fodder), "#l\r\n"]))
    selection = sm.sendNext(sm.join(selString))

    # Pull out the matching id from exchangeList
    selectedFodder = exchangeList[selection]
    rewardList = rewardsDict[selectedFodder]
    rewardString = ["I can give you one of the following items for #b100 #z", repr(selectedFodder), "##k: #b\r\n"]
    for index, (reward, quantity) in enumerate(rewardList):
        rewardString.append(sm.join(["#L", repr(index), "##i", repr(reward), "# ", repr(quantity), " #z", repr(reward), "#(s)#l\r\n"]))
    sm.sendNext(sm.join(rewardString))