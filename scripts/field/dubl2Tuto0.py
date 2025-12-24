def skip_tutorial():
    MAPLE_ADMINISTARTOR = 2007

    quests_to_complete = [
        2600,
        2601,
        2602,
        2603,
        2604,
        2605,
        2606,
        2607,
        2608,
        2609,
        17903,
    ]

    map_to_warp = 103000000 # Kerning City
    target_level = 10

    sm.setSpeakerID(MAPLE_ADMINISTARTOR)
    sm.removeEscapeButton()
    sm.lockInGameUI(True)

    if sm.sendAskYesNo("Would you like to skip the tutorial questline and instantly arrive at #m" + str(map_to_warp) + "#?"):
        if sm.getChr().getLevel() < target_level:
            sm.addLevel(target_level - sm.getChr().getLevel())

        for quest in quests_to_complete:
            sm.completeQuestNoRewards(quest)

        sm.lockInGameUI(True)
        sm.levelUntil(10)

        sm.giveItem(1332063)
        sm.startQuest(29900)
        sm.completeQuest(29900)
        chr.getAvatarData().getCharacterStat().setSubJob(1)
        sm.jobAdvance(400)
        sm.setSTR(4)
        sm.setINT(4)
        sm.setDEX(4)
        sm.setLUK(4)
        sm.setAP(4 + chr.getLevel() * 5)

        sm.warp(map_to_warp)
        sm.lockInGameUI(False)
        sm.dispose()

skip_tutorial()
sm.lockInGameUI(True)
sm.blindEffect(False)
sm.blindEffect(True)
sm.chatScript("The Secret Garden Depths")
sm.chatScript("On a rainy day...")
sm.forcedInput(0)
sm.sendDelay(3000)

sm.forcedInput(2)