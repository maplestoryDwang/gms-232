# Tutorial skipper snippet
def skip_tutorial():
    MAPLE_ADMINISTARTOR = 2007

    quests_to_complete = [
        25000,
        25001,
        25003,

    ]

    map_to_warp = 130000000 # Ereve
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
        sm.playVideoByScript("phantom.avi")
        sm.levelUntil(10)

        sm.setJob(2400)
        sm.addSP(5)
        sm.setSTR(4)
        sm.setINT(4)
        sm.setDEX(4)
        sm.setLUK(4)
        sm.setAP(4 + chr.getLevel() * 5)
        sm.addMaxHP(150)
        sm.addMaxMP(50)
        sm.giveAndEquip(1362001)
        sm.giveNewSecondary(1352100)
        sm.giveItem(2000019, 50)
        sm.giveItem(1142375)
        sm.completeQuest(25000)
        sm.warp(map_to_warp)
        sm.lockInGameUI(False)
        sm.dispose()
# --------

sm.lockInGameUI(True)
skip_tutorial()

sm.giveNewSecondary(1352104)
sm.giveSkill(20031211, 0)
sm.giveSkill(20031211, 1)
sm.giveSkill(20031212, 0)
sm.giveSkill(20031212, 1)
sm.playVideoByScript("phantom_memory.avi")

sm.showFieldEffect("phantom/mapname1", 0)
sm.forcedInput(1)
sm.sendDelay(1000)

sm.forcedInput(0)
sm.sendDelay(1000)

sm.forcedInput(2)
sm.sendDelay(1000)

sm.forcedInput(0)
sm.sendDelay(1000)

sm.forcedInput(1)
sm.avatarOriented("Effect/OnUserEff.img/questEffect/phantom/tutorial")
sm.sendDelay(1000)

sm.forcedInput(0)
sm.sendDelay(1000)

sm.forcedInput(2)
sm.sendDelay(1000)

sm.forcedInput(0)
sm.sendDelay(1000)

sm.forcedInput(1)
sm.sendDelay(500)

sm.forcedInput(0)
sm.sendDelay(1000)

sm.removeEscapeButton()
sm.flipDialoguePlayerAsSpeaker()
sm.sendNext("I believe it's time to make an appearance.")
sm.sendSay("My heart is racing! It's been ages since I've felt so alive. Or anxious. I am terribly anxious.")
sm.sendSay("If I stand here any longer, I'll lose the nerve. It's now or never!")

sm.lockInGameUI(False)
sm.warpInstanceIn(915000100, 1)
sm.dispose()
