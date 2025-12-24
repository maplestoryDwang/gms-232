# id 9100019 (Ari), in the FM
from net.swordie.ms.constants import CustomConstants
from net.swordie.ms.constants import ItemConstants

nxAmount = sm.getChr().getNX()
cost = 0
number = 0
itemId = 0

scrolls = [
    [2049700, 10000],   # Epic Potential Scroll 100%
    [2048305, 150000],  # Bonus Potential Scroll 70%
    [2531000, 20000],   # Protection Scroll
    [2530000, 15000],   # Lucky Day Scroll
    [2532000, 30000],   # Safety Scroll
    [2049100, 2500],    # Chaos Scroll 60%
    [2049600, 50000],   # Innocence Scroll 70%
    [2049301, 10000],   # Equip Enhancement Scroll
    [2049300, 250000],  # Advanced Equip Enhancement Scroll
    [5133000, 200],  # Advanced Equip Enhancement Scroll
]


def random_chair():
    rngChairCost = 150000
    randomChairBox = ItemConstants.RANDOM_CHAIR_BOX
    num = sm.sendAskNumber("How many #v{0}##z{0}#es would you like to buy?\r\nThe price is {1} NX per box".format(randomChairBox, sm.formatNumber(str(rngChairCost))),
                           1, 1, nxAmount / rngChairCost)

    if not sm.canHold(randomChairBox, num):
        sm.sendSayOkay("Please make sure you have enough inventory space.")
        sm.dispose()
    elif nxAmount < (rngChairCost * num):
        sm.sendSayOkay("Please make sure you have enough NX.")
        sm.dispose()
    else:
        chr.deductNX(rngChairCost * num)
        sm.giveItem(randomChairBox, num)
        sm.dispose()


def random_damage_skin():
    rngDScost = 200000
    randomDSBox = ItemConstants.RANDOM_DAMAGE_SKIN_BOX
    num = sm.sendAskNumber("How many #v{0}##z{0}#es would you like to buy?\r\nThe price is {1} NX per box".format(randomDSBox, sm.formatNumber(str(rngDScost))),
                           1, 1, nxAmount / rngDScost)

    if not sm.canHold(randomDSBox, num):
        sm.sendSayOkay("Please make sure you have enough inventory space.")
        sm.dispose()
    elif nxAmount < (rngDScost * num):
        sm.sendSayOkay("Please make sure you have enough NX.")
        sm.dispose()
    else:
        chr.deductNX(rngDScost * num)
        sm.giveItem(randomDSBox, num)
        sm.dispose()


def show_items(msg, item_list):
    finalStr = msg
    idx = 0
    for item in item_list:
        itemId = item[0]
        itemCost = sm.formatNumber(str(item[1]))
        finalStr += "#b#L{}##i{}# #z{}# - {} NX#l\r\n".format(idx, itemId, itemId, itemCost)
        idx += 1
    return finalStr

option1 = sm.sendNext("Welcome to the NX shop.\r\n"
                      "you currently have #b{}#k NX cash.\r\n"
                      "What would you like to buy?\r\n#b"
                      "#L0#Cubes#l\r\n"
                      "#L1#Scrolls and Buff Freezers#l\r\n"
                      "#L2#Stamps#l\r\n"
                      "#L3#Hammer#l\r\n"
                      "#L4#Flames#l\r\n"
                      "#L6#Random Chair#l\r\n"
                      "#L7#Random Damage Skin#l\r\n"
                      "#L8#Pet item vac".format(sm.formatNumber(str(nxAmount))))

if option1 == 0:  # Cubes
    cubeOption = sm.sendNext("What kind of cube would you like to buy? \r\n "
                             "#b#L0##v5062009#Red Cube - 1,200NX#l \r\n "
                             "#L1##v5062010#Black cube - 2,200NX #l \r\n "
                             "#L2##v5062500#Bonus Potential Cube - 2,400NX #l \r\n "
                             "#L3##v5743005#Red Familiar Card - 1,200NX #l")
    if cubeOption == 0:
        cost = 1200
        itemId = 5062009
    elif cubeOption == 1:
        cost = 2200
        itemId = 5062010
    elif cubeOption == 2:
        cost = 2400
        itemId = 5062500
    elif cubeOption == 3:
        cost = 1200
        itemId = 5743005

if option1 == 1:  # Scrolls
    str = show_items("What kind of scroll would you like to buy? \r\n", scrolls)
    sel = sm.sendNext(str)
    info = scrolls[sel]
    itemId = info[0]
    cost = info[1]

if option1 == 2:  # Stamps
    stampOption = sm.sendNext("What kind of Stamp would you like to buy? \r\n "
                              "#b#L0##v2049500#Gold Potential Stamp - 10,000NX#l \r\n "
                              "#L1##v2048301#Bonus Potential Stamp - 30,000NX #l")
    if stampOption == 0:
        cost = 10000
        itemId = 2049500
    elif stampOption == 1:
        cost = 30000
        itemId = 2048301

if option1 == 3:  # Hammer
    hammerOption = sm.sendNext("What kind of Hammer would you like to buy? \r\n "
                               "#b#L0##v2470012#Golden Hammer - 4,900NX#l")
    if hammerOption == 0:
        cost = 4900
        itemId = 2470007

if option1 == 4:  # Flames
    flameOption = sm.sendNext("What kind of Flame would you like to buy? \r\n "
                              "#b#L0##v2048716#Powerful Rebirth Flame - 20,000NX#l")
    if flameOption == 0:
        cost = 20000
        itemId = 2048716

if option1 == 6:  # Chairs
    random_chair()

if option1 == 7:  # Damage Skin
    random_damage_skin()

if not option1 == 6 and not option1 == 7 and not option1 == 8:
    number = sm.sendAskNumber("How many #b#i{}##k would you like to purchase?".format(itemId),
                              1, 1, nxAmount / cost)
    if number > 0:
        if not sm.canHold(itemId, number):
            sm.sendNext("Please make some space in your inventory.")
        elif nxAmount < number * cost:
                sm.sendSayOkay("You need more NX.")
        else:
            sm.getChr().deductNX(number * cost)
            sm.giveItem(itemId, number)

if option1 == 8:
    petVac = CustomConstants.PET_VAC

    petVacDurationCostDict = {  # Hrs: NxCost
        6: 30000000,
        24: 100000000,
        24 * 3: 250000000,
        24 * 7: 500000000,
    }
    pvacStr = "Select the duration of the #i{}# pet vac\r\n#b".format(petVac)
    for k, v in sorted(petVacDurationCostDict.items()):
        pvacStr += "#L{0}#{0} hours - {1} NX#l\r\n".format(k, sm.formatNumber(str(v)))
    ans = sm.sendNext(pvacStr)

    selectedHrs = ans
    selectedCost = petVacDurationCostDict[ans]
    if selectedCost is None:
        sm.dispose()
    if sm.sendAskYesNo("Are you sure want to buy a #i{}# pet vac?\r\n"
                       "This will cost you {} NX and will last for {} hours".format(petVac, sm.formatNumber(str(selectedCost)),
                                                                         selectedHrs)):
        if not sm.canHold(petVac):
            sm.sendSayOkay("Please make some space in your inventory")
        elif nxAmount < selectedCost:
            sm.sendSayOkay("You need more NX.")
        else:
            sm.getChr().deductNX(selectedCost)
            sm.giveItemWithExpiry(petVac, selectedHrs)
