# Fredrick, cubing NPC
from net.swordie.ms.constants import GameConstants
from net.swordie.ms.constants import ItemConstants
from net.swordie.ms.constants import JobConstants
from net.swordie.ms.enums import InvType
from net.swordie.ms.handlers.item import ItemHandlerModule
from net.swordie.ms.loaders import ItemData

costs = [
    [ItemConstants.RED_CUBE, 1200],
    [ItemConstants.BONUS_POT_CUBE, 2400]
]

option_list = ["#rProceed with current combination#k",

               "Flat STR",
               "Flat DEX",
               "Flat INT",
               "Flat LUK",
               "Flat All Stat",
               "Flat Max HP",
               "Flat Max MP",
               "Flat ATT",
               "Flat Magic ATT",

               "STR %",
               "DEX %",
               "INT %",
               "LUK %",
               "All Stat %",
               "HP %",
               "MP %",

               "ATT %",
               "Magic ATT %",
               "Total Damage %",
               "Boss Damage %",
               "Ignore Defense %",

               "STR Per 10 levels",
               "DEX Per 10 levels",
               "INT Per 10 levels",
               "LUK Per 10 levels",

               "Crit Damage %",
               "Crit Rate %",

               "Item Drop %",
               "Meso Drop %",

               "Cooldown Reduction"
               ]


is_from_equipped_inv = 1000  # added to BagIndex to indicate its from Equipped Inventory


def get_equip_by_item_selection(item_selection):
    if item_selection >= 1000:
        return chr.getEquippedInventory().getItemBySlot(item_selection % is_from_equipped_inv)
    else:
        return chr.getEquipInventory().getItemBySlot(item_selection)


def do_cubing():
    auto_cube_cost = 10000
    max_combinations = 4  # the max amount of different combinations allowed
    combination_list = []  # List<Map<String, Integer>>

    # init combination_list
    for i in range(max_combinations):
        combination_list.append({})  # Add Map




    # Dialogue 1
    stri = "I shall help you out with your cubing adventures. If you don't have the chosen cube, your NX will be used instead. Which cube would you like to use?\r\n#b"
    i = 0
    for tuple in costs:
        cubeId = tuple[0]
        cube_cost = tuple[1]
        stri += "#L{0}##v{1}##z{1}# ({2} NX)#l\r\n".format(i, cubeId, cube_cost)
        i += 1
    sel = sm.sendNext(stri)

    cubeTuple = costs[sel]
    cubeId = cubeTuple[0]
    cube_cost = cubeTuple[1]
    bonus = cubeId == ItemConstants.BONUS_POT_CUBE




    def get_enumerated_inventory():
        eqp_list = sm.enumerateInventory(InvType.EQUIP)
        if JobConstants.isZero(chr.getJob()):
            lazuli = chr.getEquippedInventory().getItemBySlot(-11)
            lapis = chr.getEquippedInventory().getItemBySlot(-10)
            eqp_list += "#b#L{0}##i{1}##z{1}l#\r\n".format(is_from_equipped_inv + lazuli.getBagIndex(), lazuli.getItemId())
            eqp_list += "#b#L{0}##i{1}##z{1}l#\r\n".format(is_from_equipped_inv + lapis.getBagIndex(), lapis.getItemId())

        return eqp_list


    def display_combination(combination):
        ret_str = ""
        if len(combination) == 0:
            return "Empty"
        for k, v in combination.items():
            ret_str += "{} {},   ".format(v, k)
        ret_str = ret_str[:-4]

        return ret_str


    def has_wanted_pot():
        for combination in combination_list:
            if sm.itemHasWantedStats(combination, item_sel, bonus):
                return True

        return False


    def using_auto():
        for combination in combination_list:
            if len(combination) > 0:
                return True

        return False


    def get_auto_cube_cost():
        nr = 0
        for combination in combination_list:
            if len(combination) > 0:
                nr += 1

        if nr == 0:
            return 0
        elif nr >= 1:
            return auto_cube_cost + ((nr - 1) * 4000)

        return auto_cube_cost



    item_sel = sm.sendNext("Please select the item you want to cube\r\n" + get_enumerated_inventory())

    #  Check if item is None or has no potential lines
    equip = get_equip_by_item_selection(item_sel)
    if equip is None or equip.getOption(0, bonus) <= 0:
        sm.sendSayOkay("This item currently has no potential to recube.")
        sm.dispose()


    # Ask if want to use Auto-Cuber
    uses_auto = sm.sendNext("Would you like to\r\n#b"
                            "#L0#Use the AutoCuber#fs8#TM#fs12##l\r\n"
                            "#L1#Cube yourself#l") == 0

    max_nx = -1

    # Auto Cubing Dialogues
    if uses_auto:
        combination_sel = 0  # grab end of List
        while combination_sel != max_combinations:
            dialogue = "I'll allow you to cube with {} different combinations." \
                       "\r\n#rExtra Cost: {} NX#k" \
                       "\r\nPlease specify what you would like:\r\n#b".format(max_combinations, sm.formatNumber(str(get_auto_cube_cost())))
            i = 0
            for combination in combination_list:
                is_empty = len(combination) == 0
                dialogue += "#L{}#{}#l\r\n".format(i, display_combination(combination))
                i += 1

            dialogue += "\r\n#L{}#{}#l\r\n".format(max_combinations, "Proceed")

            combination_sel = sm.sendNext(dialogue)



            if combination_sel == max_combinations:  # Escape
                continue



            # Select Options in Current Combination
            selected_combination = combination_list[combination_sel]

            option_sel = 1
            while option_sel != 0:
                combination_dialogue = "Current combination:\r\n" + display_combination(selected_combination) + "\r\n\r\n"
                i = 0
                for option in option_list:
                    combination_dialogue += "#b#L{}#{}#l\r\n".format(i, option)
                    i += 1

                option_sel = sm.sendNext(combination_dialogue)



                if option_sel == 0:
                    continue


                selected_option = option_list[option_sel]
                value = sm.sendAskNumber("How much {} do you wish to cube for?".format(selected_option), 0, 0, 10000)
                if value == 0 and selected_option in selected_combination:
                    del selected_combination[selected_option]
                elif value > 0:
                    selected_combination[selected_option] = value


            # Display Info in Chat
            i = 1
            for combination in combination_list:
                if len(combination) > 0:
                    chr.chatMessage("Combination {}:  {}".format(i, display_combination(combination)))
                    i += 1
            chr.chatMessage("Extra Cost: {} NX".format(sm.formatNumber(str(get_auto_cube_cost()))))



    server_side_cubing = True

    # Cubing
    while True:
        extra_cubing_cost = get_auto_cube_cost()
        using_auto_cuber = using_auto()
        total_nx = 0

        if server_side_cubing and using_auto_cuber:
            max_possible_nx = chr.getNX() - cube_cost * 100 + extra_cubing_cost

            if max_possible_nx < cube_cost + extra_cubing_cost:
                sm.sendSayOkay("You do not have enough NX for autocubing.")
                sm.dispose()

            max_nx = sm.sendAskNumber("\r\nHow much NX do you want to spend (max)? "
                                      "I will keep cubing until either the combination is hit, or the combination is met.\r\n"
                                      "Note that large amount of NX may take some time for me to spend.\r\n\r\n"
                                      "Min NX: {}, Max NX: {}".format(sm.formatNumber(cube_cost), sm.formatNumber(max_possible_nx)),
                                      0, cube_cost, max_possible_nx)

            if not sm.sendAskYesNo("Are you sure you want to start cubing? This will take up to {} NX.".format(sm.formatNumber(max_nx))):
                sm.dispose()

        while (max_nx == -1 or total_nx < max_nx) and (not has_wanted_pot() or total_nx == 0):
            if not using_auto_cuber or not server_side_cubing:
                sendStr = "Amount of #b#z{}#s#k left: #b#c{}##k\r\n\r\n".format(cubeId, cubeId)
                sendStr += "The current equip potential is as follows:\r\n"

                for i in range(3):
                    opt = equip.getOption(i, bonus)
                    sendStr += "#L0#"
                    if opt == 0:
                        sendStr += "<None>"
                    else:
                        tier = opt // 10000
                        if tier <= 1:
                            sendStr += "#b(Rare) #k"
                        elif tier == 2:
                            sendStr += "#d(Epic) #k"
                        elif tier == 3:
                            sendStr += "#r(Unique) #k"
                        else:
                            sendStr += "#g(Legendary) #k"
                        pOpt = ItemData.getItemOptionById(opt)
                        sendStr += pOpt.getString(equip.getReqLevel()).replace("#", "")
                    sendStr += "#l\r\n"
                sendStr += "#L0#Use another cube on #v{}##t{}?".format(equip.getItemId(), equip.getItemId())

                if has_wanted_pot():
                    sm.removeEscapeButton()
                    if not sm.sendAskYesNo("{}\r\n{}".format("Found a match! Should we recube?", sendStr.replace("#L0#", "").replace("#l", ""))):
                        sm.dispose()
                        break
                sm.addEscapeButton()
                sm.sendNext(sendStr)


            if sm.hasItem(cubeId):
                if using_auto_cuber and chr.getNX() < extra_cubing_cost:
                    sm.sendSayOkay("You don't have enough NX left to use this cube.")
                    sm.dispose()
                sm.consumeItem(cubeId)
                if using_auto_cuber and not server_side_cubing:
                    chr.deductNX(extra_cubing_cost)
            else:
                total_cost = cube_cost
                if using_auto_cuber:
                    total_cost += extra_cubing_cost
                if chr.getNX() < total_cost:
                    sm.sendSayOkay("You don't have enough NX left to use this cube.")
                    sm.dispose()

                if (not server_side_cubing) or (not using_auto_cuber):
                    chr.deductNX(total_cost)
                total_nx +=  + cube_cost


            total_nx += extra_cubing_cost

            equip.applyCube(chr, cubeId, bonus)

            if not using_auto_cuber or not server_side_cubing:
                equip.updateToChar(chr)

        # Conclusion
        if server_side_cubing:
            chr.deductNX(total_nx)
            equip.updateToChar(chr)
            if has_wanted_pot():
                sendStr = "Found a matching potential! Total nx used: {} NX\r\n".format(sm.formatNumber(total_nx))
            else:
                sendStr = "Could not find a matching potential within the given NX cost ({} NX)\r\n".format(sm.formatNumber(max_nx))

            sendStr += "Amount of #b#z{}#s#k left: #b#c{}##k\r\n\r\n".format(cubeId, cubeId)
            sendStr += "The current equip potential is as follows:\r\n"

            for i in range(3):
                opt = equip.getOption(i, bonus)
                sendStr += "#L0#"
                if opt == 0:
                    sendStr += "<None>"
                else:
                    tier = opt // 10000
                    if tier <= 1:
                        sendStr += "#b(Rare) #k"
                    elif tier == 2:
                        sendStr += "#d(Epic) #k"
                    elif tier == 3:
                        sendStr += "#r(Unique) #k"
                    else:
                        sendStr += "#g(Legendary) #k"
                    pOpt = ItemData.getItemOptionById(opt)
                    sendStr += pOpt.getString(equip.getReqLevel()).replace("#", "")
                sendStr += "#l\r\n"
            sm.sendSayOkay(sendStr)


def get_item_enchantment_info(item, advanced):
    stats = item.getHyperUpgradeStats()
    string = sm.formatInlineItem(item) + " - {}*\r\n\r\n".format(item.getChuc())

    successRate = GameConstants.getEnchantmentSuccessRate(item)
    if advanced:
        successRate += 100
        if successRate > 1000:
            successRate = 1000

    destroyRate = GameConstants.getEnchantmentDestroyRate(item)
    keepRate = 1000 - successRate - destroyRate

    string += "#bSuccess rate: {}%\r\n".format(successRate / 10)
    string += "#kKeep rate: {}%\r\n".format(keepRate / 10)
    string += "#rDestroy rate: {}%\r\n\r\n".format(destroyRate / 10)

    mesoCost = GameConstants.getEnchantmentMesoCost(item)
    nxCost = GameConstants.getEnchantmentNxCost(item, mesoCost)

    string += "#kMeso cost: #b{}\r\n#kNX cost: #b{}\r\n".format(sm.formatNumber(mesoCost), sm.formatNumber(nxCost))
    string += "#k\r\n"
    for tuple in stats.entrySet():
        stat = tuple.getKey()
        value = tuple.getValue()
        if value > 0:
            string += "#b{}#k: #r{}\r\n".format(stat.toUserString(), value)

    return string


def do_enhancement():
    prompt = "Alright, which item would you like to enhance?\r\n"
    inv = chr.getEquipInventory()
    any = False

    if JobConstants.isZero(chr.getJob()):
        lazuli = chr.getEquippedInventory().getItemBySlot(-11)
        lapis = chr.getEquippedInventory().getItemBySlot(-10)
        if not lazuli.cannotBeEnhanced(chr):
            prompt += "#b#L{}##i{}##z{}l#\r\n".format(is_from_equipped_inv + lazuli.getBagIndex(), lazuli.getItemId(), lazuli.getItemId())
            prompt += "#b#L{}##i{}##z{}l#\r\n".format(is_from_equipped_inv + lapis.getBagIndex(), lapis.getItemId(), lapis.getItemId())
            any = True

    for item in inv.getSortedItems():
        if not item.cannotBeEnhanced(chr):
            prompt += sm.formatItem(item)
            any = True

    if not any:
        sm.sendSayOkay("You have no items to enhance in your equip inventory.")
        sm.dispose()

    chosenItemIdx = sm.sendNext(prompt)
    item = get_equip_by_item_selection(chosenItemIdx)

    if item is None or item.cannotBeEnhanced(chr):
        sm.sendNext("u wot m8")

    sel = sm.sendNext("Which scroll do you want to enchant with? \r\n\r\n"
                      "#b#L0#Use #i2049300# #z2049300# (#c2049300# left)#l.\r\n"
                      "#b#L1#Use #i2049301# #z2049301# (#c2049301# left)#l")
    itemId = 2049300 if sel == 0 else 2049301
    if not sm.hasItem(itemId):
        sm.sendSayOkay("You don't have any {} left.".format(sm.formatInlineItem(itemId)))
        sm.dispose()

    advanced = itemId == 2049300

    sel = 0
    while sel == 0:
        sm.sendNext(get_item_enchantment_info(item, advanced) + "\r\n#b#L0#Enhance#l\r\n#L1#Stop#l")

        success = ItemHandlerModule.enhanceItem(chr, item, itemId == 2049300, False)
        if not success:
            sm.sendSayOkay("Something went wrong while trying to enhance the item. Make sure you have enough mesos, nx, and have at least 1 spot in your equip inventory.")
            sm.dispose()

        sm.consumeItem(itemId)

        if item.cannotBeEnhanced(chr):
            sm.sendSayOkay("Your item cannot be enhanced any longer.")
            sm.dispose()

        if not sm.hasItem(itemId):
            sm.sendSayOkay("You don't have any {} left.".format(sm.formatInlineItem(itemId)))
            sm.dispose()

def do_restore():
    prompt = "Which inventory is the traced item in?\r\n\r\n" \
             "#b#L0#Equip#l\r\n" \
             "#b#L1#Equipped#l\r\n"
    sel = sm.sendNext(prompt)
    if sel == 0:
        inv = chr.getEquipInventory()
    else:
        inv = chr.getEquippedInventory()

    prompt = "Which item would you like to restore?\r\n\r\n"
    any = False
    for item in inv.getSortedItems():
        if item.isVestige():
            nxCost = GameConstants.getVestigeRecoverCost(item)
            prompt += "#b#L{}# {} ({} NX)\r\n".format(item.getBagIndex(), sm.formatInlineItem(item), sm.formatNumber(nxCost))
            any = True

    if not any:
        sm.sendSayOkay("You have no traced equips to recover in this inventory.")
        sm.dispose()

    itemIdx = sm.sendNext(prompt)
    item = inv.getItemBySlot(itemIdx)

    if item is None or not item.isVestige():
        sm.sendSayOkay("u wot m8")
        sm.dispose()

    nxCost = GameConstants.getVestigeRecoverCost(item)

    if nxCost > chr.getNX():
        sm.sendSayOkay("You don't have enough NX for this.")
        sm.dispose()

    item.removeVestige()
    chr.deductNX(nxCost)
    item.updateToChar(chr)

sel = sm.sendNext("Hey there, I can help you out with upgrading your items! What would you like to do?\r\n\r\n#b"
                  "#L0#Cube an item#l\r\n"
                  "#L1#Enhance an item#l\r\n"
                  "#L2#Restore a traced item#l")

if sel == 0:
    do_cubing()
elif sel == 1:
    do_enhancement()
elif sel == 2:
    do_restore()