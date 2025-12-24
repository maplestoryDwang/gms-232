# Jett tutorial intro
def skip_tutorial():
    MAPLE_ADMINISTARTOR = 2007

    quests_to_complete = [
    ]

    map_to_warp = 552000050 # Nautilus bunkroom
    target_level = 10

    sm.setSpeakerID(MAPLE_ADMINISTARTOR)
    sm.removeEscapeButton()

    if sm.sendAskYesNo("Would you like to skip the tutorial questline and instantly arrive at #m" + str(map_to_warp) + "#?"):
        if sm.getChr().getLevel() < target_level:
            sm.addLevel(target_level - sm.getChr().getLevel())

        for quest in quests_to_complete:
            sm.completeQuestNoRewards(quest)
        sm.levelUntil(10)

        sm.jobAdvance(508)
        sm.addSP(5)
        sm.setSTR(4)
        sm.setINT(4)
        sm.setDEX(4)
        sm.setLUK(4)
        sm.setAP(4 + chr.getLevel() * 5)
        sm.warp(map_to_warp)
        sm.dispose()
# --------
skip_tutorial()
