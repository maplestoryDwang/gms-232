# Staff Sergeant Charlie
# 2010000
# Orbis Park (200000200)
# Orbis Exchange Quest NPC; also provides reward list view in-game. Rewards copied as-is from GMS without rare reward weighting.

import random

from net.swordie.ms.enums import InvType

# Need to list rewardsDict's keys in this exact order (invoking .keys() will *not* reproduce the ordering)
exchangeList = [4000073, 4000070, 4000071, 4000072, 4000059, 4000060, 4000061, 4000058, 4000062, # Orbis drops
4000081, 4000048, 4000055, 4000050, 4000057, 4000051, 4000052, # El Nath drops
4000049, 4000056, 4000053, 4000076, 4000054, 4000069, 4000078, 4000079, 4000080] # Dead Mine drops
rewardsDict = {
    4000073: [(2000001, 20), (2000003, 15), (2020001, 15), (2010004, 10), (2030000, 15), (4003001, 15)], # Solid Horns
    4000070: [(2000002, 30), (2000006, 15), (2020000, 20), (4003000, 5), (2041005, 1)], # Cellion Tails
    4000071: [(2000002, 30), (2000006, 15), (2020000, 20), (4003000, 5), (2041005, 1)], # Lioner Tails
    4000072: [(2000002, 30), (2000006, 15), (2020000, 20), (4003000, 5), (2041005, 1)], # Grupin Tails
    4000059: [(2000003, 20), (2000001, 30), (2010001, 40), (4003001, 20), (2020001, 15), (2040002, 1)], # Star Pixie's Starpieces
    4000060: [(2000002, 25), (2000006, 10), (2022000, 5), (4000030, 15), (2040902, 1)], # Lunar Pixie's Moonpieces
    4000061: [(2000002, 30), (2000006, 15), (2020000, 20), (4003000, 5), (2041016, 1)], # Luster Pixie's Sunpieces
    4000058: [(2000002, 15), (2010004, 15), (2000003, 25), (4003001, 30), (2040302, 1)], # Nependeath Seeds
    4000062: [(2000002, 30), (2000006, 15), (2020000, 20), (4003000, 5), (2040514, 1)], # Dark Nependeath Seeds
    4000081: [(2000006, 25), (2020006, 25), (4010004, 8), (4010005, 8), (4010006, 3), (4020007, 2), (4020008, 2), (2040705, 1)], # Firebomb Flames
    4000048: [(2000002, 30), (2000006, 15), (2020000, 20), (4003000, 5), (2040402, 1)], # Jr. Yeti Skins
    4000055: [(2020005, 30), (2020006, 15), (2022001, 30), (4003003, 1), (2040505, 1)], # Dark Jr. Yeti Skins
    4000050: [(2000006, 20), (4010002, 7), (4010001, 7), (4010000, 7), (4010006, 2), (4003000, 5), (2040708, 1)], # Pepe Beaks
    4000057: [(2000006, 20), (4010004, 7), (4010005, 7), (4010006, 3), (4020007, 2), (4020008, 2), (2040705, 1)], # Dark Pepe Beaks
    4000051: [(2002004, 15), (2002005, 15), (2002003, 10), (4001005, 1), (2040502, 1)], # Hector Tails
    4000052: [(2000006, 20), (4010004, 7), (4010003, 7), (4010005, 7), (4003002, 1), (2040602, 1)], # White Fang Tails
    4000049: [(2000006, 25), (2020000, 20), (4020000, 7), (4020001, 7), (4020002, 3), (4020007, 2), (2040708, 1)], # Yeti Horns
    4000056: [(2000006, 25), (4020005, 7), (4020003, 7), (4020004, 7), (4020008, 2), (2040802, 1)], # Dark Yeti Horns
    4000053: [(2000006, 30), (4020006, 7), (4020008, 2), (4020007, 2), (2070010, 1), (2040805, 1)], # Werewolf Toenails
    4000076: [(2000001, 30), (2000003, 20), (2010001, 40), (4003001, 20), (2040002, 1)], # Fly-Eye Wings
    4000054: [(2000006, 30), (4020006, 7), (4020008, 2), (4020007, 2), (2041020, 1)], # Lycanthrope Toenails
    4000069: [(2000006, 20), (2020005, 30), (2020006, 15), (2050004, 30), (4003003, 1), (2041005, 1)], # Zombie's Lost Teeth
    4000078: [(2000002, 15), (2010004, 15), (2000003, 25), (2050004, 30), (4003001, 30), (2040302, 1)], # Jr. Cerebes Teeth
    4000079: [(2000006, 25), (2050004, 30), (2022001, 35), (4020000, 8), (4020001, 8), (4020002, 8), (4020007, 2), (2041023, 1)], # Cerebes Teeth
    4000080: [(2000006, 35), (4020006, 9), (4020008, 4), (4020007, 4), (2041008, 1), (2070011, 1)] # Bain Collars
}

sm.sendNext("Hey, got a little bit of time? Well, my job is to collect items here and sell them elsewhere, "
"but these days the monsters have become much more hostile so it's been difficult getting good items... "
"What do you think? Do you want to do some business with me?")
viewmode = sm.sendNext("The deal is simple. You get me something I need, I get you something you need. "
"The problem is, I deal with a whole bunch of people, so the items I have to offer may change every time you see me. "
"What do you think? Still want to do it? #b\r\n"
"#L0# Exchange items #l\r\n"
"#L1# Check exchange list #l\r\n")
if viewmode == 0:
    selString = ["Ok! First you need to choose the item that you'll trade with. #b\r\n"]
    # Construct selectable items to exchange
    for index, fodder in enumerate(exchangeList):
        selString.append(sm.join(["#L", repr(index), "##i", repr(fodder), "# 100 #z", repr(fodder), "##l\r\n"]))
    selection = sm.sendNext(sm.join(selString))

    # Pull out the matching id from exchangeList
    selectedFodder = exchangeList[selection]

    response = sm.sendAskYesNo("Let's see, you want to trade your #b100 #z" + repr(selectedFodder) + "##k with my stuff right? "
    "Before trading make sure you have an empty slot available on your use or etc. inventory. "
    "Now, do you want to trade with me?")
    if response:
        if not sm.hasItem(selectedFodder, 100):
            sm.sendSayOkay("Hmmm... are you sure you have #b100 #z" + repr(selectedFodder) + "##k?")
        elif sm.getEmptyInventorySlots(InvType.CONSUME) == 0 or sm.getEmptyInventorySlots(InvType.ETC) == 0:
            sm.sendSayOkay("Please check and see if your Use and Etc. inventories are full or not.")
        else:
            # Grab a random item tuple from rewardsDict using selectedFodder as the dictionary key
            reward = random.choice(rewardsDict[selectedFodder])
            rewardItem = reward[0]
            rewardQuant = reward[1]

            sm.consumeItem(selectedFodder, 100)
            sm.giveItem(rewardItem, rewardQuant)
            sm.giveExp(500)
            sm.sendNext(sm.join(["For your #b100 #z", repr(selectedFodder), "##k, here's my #b", repr(rewardQuant), " #z", repr(rewardItem), "#(s)#k. "
            "What do you think? Do you like the items I gave you in return? "
            "I plan on being here for a while, so if you gather up more items, I'm always open for a trade..."]))
    else:
        sm.sendSayOkay("I'll be here if you change your mind later.")
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