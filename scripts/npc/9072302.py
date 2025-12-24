# @qm @boat
from java.lang import Integer

from net.swordie.ms.client.rankings import RankingModule
from net.swordie.ms.client.rankings import RankingType
from net.swordie.ms.constants import CustomConstants
from net.swordie.ms.constants import GameConstants
from net.swordie.ms.constants import ItemConstants
from net.swordie.ms.constants import JobConstants

options = ["I want to go somewhere",
           "I want to buy something",
           "Trade Golden Maple Leaf/Maple Leaf Gold",
           "Rankings",
           "Vote for the server"]

options2 = ["Town Maps","Monster Maps","Boss Entrances","Free Market"]
options3 = ["Regular Shop", "Swordie Shop", "Legion Shop"]
options4 = ["Trade Golden Maple Leaf for mesos",
            "Trade mesos for Golden Maple Leaf",
            "Trade Maple Leaf Gold for NX cash",
            "Trade NX cash for Maple Leaf Gold"]

gml_id = ItemConstants.GOLDEN_MAPLE_LEAF
mlg_id = ItemConstants.MAPLE_LEAF_GOLD

maps = [
    [  # Town Maps
        300000000, 680000000, 230000000, 910001000, 260000000, 541000000, 610050000, 540000000, 211060010, 863100000,
        105300000, 310000000, 211000000, 101072000, 101000000, 101050000, 130000000, 820000000, 223000000, 410000000,
        141000000, 120040000, 209000000, 310070000, 401000000, 100000000, 271010000, 251000000, 744000000, 551000000,
        103000000, 224000000, 241000000, 240000000, 104000000, 220000000, 150000000, 261000000, 701220000, 807000000,
        701210000, 250000000, 800000000, 600000000, 120000000, 200000000, 800040000, 400000000, 102000000, 140000000,
        865000000, 801000000, 105000000, 866190000, 693000020, 270000000, 273000000, 701100000, 320000000
    ],

    [  # Monster Maps
        240070300, 800020110, 610040000, 270030000, 211060000, 240040500, 551030100, 271000300, 211061000,
        211041100, 240010501, 270020000, 910170100, 910160100, 610030010, 863000100, 910180100, 272000300, 541000300,
        241000200, 220050300, 102040200, 240010700, 241000210, 241000220, 272010000, 910028600, 706041000, 706041005,
        273050000, 231040400, 401050000, 541020000
    ],

    [  # Boss Maps
        [211042300, "Zakum", 50],
        [240050400, "Horntail", 130],
        [262030000, "Hilla", 120],
        [211070000, "Von Leon", 125],
        [272020110, "Arkarium", 140],
        [270050000, "Pink Bean", 160],
        [220080000, "Papulatus", 115],
        [401000001, "Easy Magnus", 115],
        [401060000, "Normal/Hard Magnus", 115],
        [271030600, "Cygnus", 140],
        [211041700, "Ranmaru", 120],
        [863010000, "Gollux", 180],
        [350060300, "Lotus", 190],
        [105300303, "Damien", 190],
        [450003000, "Lucid", 220]
    ]
]

list = "Hello #r#h0##k! How can I help you today?"
i = 0
while i < len(options):
    list += "\r\n#b#L" +str(i)+ "#" + str(options[i])
    i += 1
i = 0
option = sm.sendNext(list)


if option == 0:  # I want to go somewhere (maps)
    list = "These are your options: "
    while i < len(options2):
        list += "\r\n#b#L" +str(i)+ "#" + str(options2[i])
        i += 1
    i = 0
    ans1 = sm.sendNext(list)
    list = "These are your options: "
    if ans1 == 3: # Free market
        sm.warp(910000000, 7)
        sm.dispose()
    if ans1 == 2: # boss maps
        while i < len(maps[ans1]):
            list += "\r\n#L" + str(i) + "##b" + str(maps[ans1][i][1]) + "    Req Lv:" + str(maps[ans1][i][2])
            i += 1
    else: # town/monster maps
        while i < len(maps[ans1]):
            list += "\r\n#L" + str(i) + "##b#m" + str(maps[ans1][i]) + "#"
            i += 1
    ans2 = sm.sendNext(list)
    if ans1 == 2:  # boss maps
        if chr.getLevel() >= maps[ans1][ans2][2]:
            sm.warp(maps[ans1][ans2][0], 1)
        else:
            sm.chat("You haven't reached the required level for this boss yet.")
    else:
        sm.warp(maps[ans1][ans2], 1)


elif option == 1:
    txt = "From what store would you like to buy?#b\r\n"
    for i in range(len(options3)):
        txt += "#L{}#{}#l\r\n".format(i, options3[i])
    ans3 = sm.sendNext(txt)

    if ans3 == 0:
        sm.openShop(9001212)  # Regular Shop
    elif ans3 == 1:
        sm.openShop(9062231)  # Swordie Shop
    elif ans3 == 2:
        sm.openShop(9010111)  # Legion Shop

elif option == 2:
    txt = "What would you like to do?#b\r\n"
    for i in range(len(options4)):
        txt += "#L{}#{}#l\r\n".format(i, options4[i])
    ans3 = sm.sendNext(txt)

    is_buy = ans3 == 1 or ans3 == 3  # else is_sell
    is_meso = ans3 == 0 or ans3 == 1  # else is_cash
    itemId = gml_id if ans3 == 0 or ans3 == 1 else mlg_id
    money = CustomConstants.GML_WORTH if itemId == gml_id else CustomConstants.MLG_WORTH

    if is_buy:  # Buy -> Add Tax
        money += (money * (CustomConstants.GML_TAX if itemId == gml_id else CustomConstants.MLG_TAX)) / 100

    oldMesos = sm.getMesos()

    n = 0
    max = 0
    if ans3 == 0:  # GML -> Meso
        max = sm.getQuantityOfItem(itemId)
        if max > 99:
            max = 99  # max
        n = sm.sendAskNumber("I will exchange 1#v{}# for #r{}#k mesos\r\nHow many would you like to trade?".format(gml_id, sm.formatNumber(str(money))), 1, 1, max)

    elif ans3 == 1:  # Meso -> GML
        max = sm.getMesos() / money
        n = sm.sendAskNumber("I will exchange #r{}#k mesos for 1#v{}#\r\nHow many would you like to trade".format(sm.formatNumber(str(money)), gml_id), 1, 1, max)

    elif ans3 == 2:  # MLG -> Cash
        max = sm.getQuantityOfItem(itemId)
        if max > 2147:
            max = 2147  # max
        n = sm.sendAskNumber("I will exchange 1#v{}#k for #r{}#k Cash\r\nHow many would you like to trade?".format(mlg_id, sm.formatNumber(str(money))), 1, 1, max)

    elif ans3 == 3:  # Cash -> MLG
        max = chr.getNX() / money
        n = sm.sendAskNumber("I will exchange #r{}#k cash for 1#v{}#\r\nHow many would you like to trade?".format(sm.formatNumber(str(money)), mlg_id), 1, 1, max)

    if 0 < n <= max:
        total_money = money * n
        if is_buy:

            if not sm.canHold(itemId, n):
                sm.sendSayOkay("You need to clear some space in your inventory.")
                sm.dispose()

            if is_meso:
                sm.deductMesos(total_money)
            else:
                chr.deductNX(total_money)
            sm.giveItem(itemId, n)
            if is_meso:
                sm.log.info("[{}] Giving {} GML, old mesos = {}, new mesos = {}, cost = {}".format(
                    chr.getName(),
                    n,
                    sm.formatNumber(str(oldMesos)),
                    sm.formatNumber(str(sm.getMesos())),
                    sm.formatNumber(str(total_money))))

        else:
            if is_meso:
                if chr.getMoney() + total_money > GameConstants.MAX_MONEY:
                    sm.sendSayOkay("You have too much mesos")
                    sm.dispose()

                sm.giveMesos(total_money)
            else:
                if chr.getNX() + total_money > Integer.MAX_VALUE:
                    sm.sendSayOkay("You have too much cash")
                    sm.dispose()

                chr.addNx(total_money)
            sm.consumeItem(itemId, n)

elif option == 3:
    sel = sm.sendNext("Which rankings do you want to see?\r\n#b"
                      "#L0#Class Rankings#l\r\n"
                      "#L1#Boss Rankings#l\r\n"
                      "#L2#Fame Rankings#l\r\n")

    # Class Rankings
    if sel == 0:
        class_rankings = JobConstants.CLASS_RANKING_MAP
        msg = "Which Class would you like to see the ranking of?\r\n#b"
        for k in class_rankings:
            class_name = k.getLeft()
            jobId = k.getRight()
            msg += "#L{}#{}#l\r\n".format(jobId, class_name)

        job_id_selected = sm.sendNext(msg)

        RankingModule.displayClassRankingsToChar(chr, job_id_selected)

    # Boss Rankings
    elif sel == 1:
        msg = "Which Ranking would you like to see?\r\n"
        for type in RankingType.values():
            msg += "#L{}#{}#l\r\n".format(type.getVal(), str(type))

        type_selected = RankingType.getByVal(sm.sendNext(msg))

        if type_selected is None:
            sm.sendNext("An error occurred.")
            sm.dispose()

        RankingModule.displayRankingsToChar(chr, type_selected)

    # Fame Rankings
    elif sel == 2:
        RankingModule.displayFameRankingsToChar(chr)

    sm.dispose()

else:
    sm.sendSayOkay("This option currently is uncoded.")
