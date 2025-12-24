# Limbert's General Store (913070000)
def skip_tutorial():
    MAPLE_ADMINISTARTOR = 2007

    quests_to_complete = [
        20031,
        20032,
        20033,
        20034,
        20035,
        20036,
        29976,
    ]
    skills_to_add = [

    ]

    map_to_warp = 913070071 # Ereve
    target_level = 10

    sm.setSpeakerID(MAPLE_ADMINISTARTOR)
    sm.removeEscapeButton()
    sm.lockInGameUI(True)

    if sm.sendAskYesNo("Would you like to skip the tutorial questline and instantly arrive at Ereve?"):
        if sm.getChr().getLevel() < target_level:
            sm.addLevel(target_level - sm.getChr().getLevel())

        for quest in quests_to_complete:
            sm.completeQuestNoRewards(quest)

    sm.giveItem(1142399) # Newborn Light (Medal)
    sm.giveItem(1052444) # Apprentice Knight of Light Robe
    sm.giveItem(1302077) # Beginner Warrior's Sword
    sm.giveNewSecondary(1098000) # Soul Shield of Protection
    sm.setJob(5100)
    sm.addSP(5)
    sm.setSTR(4)
    sm.setINT(4)
    sm.setDEX(4)
    sm.setLUK(4)
    sm.setAP(4 + chr.getLevel() * 5)

    for skillID in skills_to_add:
        sm.giveSkill(skillID)
    if sm.getChr().getLevel() > 1:
        sm.warp(map_to_warp)
    sm.lockInGameUI(False)
    sm.dispose()

skip_tutorial()
sm.lockInGameUI(True)
sm.chatScript("Mr. Limbert's General Store")
sm.sendDelay(500)

sm.chatScript("Month 3, Day 4")
sm.sendDelay(1000)

sm.showBalloonMsg("Effect/Direction7.img/effect/tuto/step0/0", 2000)
sm.localEmotion(6, 10000, False)
sm.sendDelay(2000)

sm.showBalloonMsg("Effect/Direction7.img/effect/tuto/step0/1", 2000)
sm.sendDelay(2000)

sm.showBalloonMsg("Effect/Direction7.img/effect/tuto/step0/2", 3000)
sm.localEmotion(4, 8000, False)
sm.sendDelay(3000)

sm.forcedInput(1)
# continue in portal_000.py