# id 940200500 (Savage Terminal : Old Storage Room), field 940200500
def skip_tutorial():
    MAPLE_ADMINISTARTOR = 2007

    quests_to_complete = [
        34656,
        34624
    ]

    map_to_warp = 100000000
    target_level = 10

    sm.setSpeakerID(MAPLE_ADMINISTARTOR)
    sm.removeEscapeButton()

    if sm.sendAskYesNo("Would you like to skip the tutorial questline and instantly arrive at #m" + str(map_to_warp) + "#?"):
        if sm.getChr().getLevel() < target_level:
            sm.addLevel(target_level - sm.getChr().getLevel())

        for quest in quests_to_complete:
            sm.completeQuestNoRewards(quest)

        sm.lockInGameUI(False)
        sm.setSTR(4)
        sm.setINT(4)
        sm.setDEX(4)
        sm.setLUK(4)
        sm.setAP(4 + chr.getLevel() * 5)
        sm.jobAdvance(6400)
        sm.addSP(5)
        sm.warp(map_to_warp)

        sm.dispose()


skip_tutorial()
sm.removeAdditionalEffect()
sm.blind(True, 255, 0, 0, 0, 0)
sm.zoomCameraNoResponse(0, 2000, 0, 288, -57)
sm.sendDelay(300)
sm.forcedInput(4)
sm.blind(True, 255, 0, 0, 0, 0)
sm.sendDelay(1200)
sm.blind(False, 0, 0, 0, 0, 1000)
sm.sendDelay(1400)
sm.sendDelay(1000)
sm.forcedInput(0)
sm.forcedAction(4, 100)
sm.setSpeakerType(3)
sm.setParam(37)
sm.setColor(1)
sm.setInnerOverrideSpeakerTemplateID(3001271)
sm.sendNext("#face4#Noooo!!!!!")
sm.sendDelay(1000)
sm.zoomCameraNoResponse(1000, 1000, 1000, 0, 0)
sm.forcedInput(5)
sm.sendDelay(600)
sm.forcedInput(0)
sm.forcedMove(True, 100)
sm.sendDelay(1000)
sm.forcedInput(5)
sm.sendDelay(600)
sm.forcedInput(5)
sm.sendDelay(600)
sm.forcedInput(0)
sm.forcedMove(True, 200)
sm.sendDelay(2000)
sm.forcedMove(True, 50)
sm.sendDelay(500)
sm.forcedMove(True, 50)
sm.sendDelay(500)
sm.forcedAction(4, 1000)
sm.sendDelay(1000)
sm.progressMessageFont(3, 20, 20, 0, "Click the lightbulb to start the quest. Quest Status Hotkey (Q) / Secondary Key (J)")
sm.sendDelay(500)
sm.sendDelay(2000)
sm.avatarOriented("UI/tutorial.img/34")
sm.moveCamera(True, 0, 0, 0)
sm.lockInGameUI(False, True)