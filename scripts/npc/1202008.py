# Head Wolf
# 1202008.py

currentLevel = chr.getLevel()

mount_list = [
    ContentConstants.LEVEL_50_WEREWOLF_ITEM_ID,
    ContentConstants.LEVEL_100_WEREWOLF_ITEM_ID,
    ContentConstants.LEVEL_150_WEREWOLF_ITEM_ID,
    ContentConstants.LEVEL_200_WEREWOLF_ITEM_ID
]

mount_cost = [
    ContentConstants.LEVEL_50_WEREWOLF_MESO_COST,
    ContentConstants.LEVEL_100_WEREWOLF_MESO_COST,
    ContentConstants.LEVEL_150_WEREWOLF_MESO_COST,
    ContentConstants.LEVEL_200_WEREWOLF_MESO_COST,
]


selection = sm.sendNext(
    "What do you want?\r\n#b"
    "#L0#Go see some wolves#l\r\n"
    "#L1#Buy wolf mounts#l"
)

purchaseable_mount_list = []
purchaseable_mount_cost_list = []
if(currentLevel >= 50):
    for i in range(currentLevel/50):
        purchaseable_mount_list.append({"mount": mount_list[i]})
        purchaseable_mount_cost_list.append({"cost": mount_cost[i]})
        if i == 3:
            break


if selection == 0:
    if sm.sendSayYesNo("Are you ready to go?"):
        sm.warp(914030000)
elif selection == 1:
    purchase_string = ["Which wolf would you like to buy? #b\r\n"]
    for i in enumerate(purchaseable_mount_list):
        # This code is to add the mount icons and name in the selection then add the formatted cost afterwards.
        initial_string = sm.formatString(
            "#L{i}# #s{mount}# #q{mount}# - {cost} mesos #l", purchaseable_mount_list[i])
        indice_string = sm.formatString(initial_string, {"i": i})
        final_string = sm.formatString(
            initial_string, "{:,}".format(purchaseable_mount_cost_list[i]))
        purchase_string.append(final_string)

    # This line is to generate the indices for purchasing
    mount_selection = sm.sendNext(sm.join(purchase_string))
    cost = mount_cost[mount_selection]
    mount = mount_list[mount_selection]
    if(sm.hasSkill(mount_list[i])):
        sm.sendSayOkay("You already own this mount.")
    elif (sm.getMesos() >= cost):
        sm.deductMesos(cost)
        sm.giveSkill(mount)
    else:
        sm.sendSayOkay("Come back when you have the mesos.")
