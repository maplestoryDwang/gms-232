# 927030050
# Tutorial skipper snippet
def skip_tutorial():
    SWIFT_STRIKE = 25001000
    VULPES_LEAP = 25001204
    MAPLE_ADMINISTARTOR = 2007

    quests_to_complete = [
        38000,
        38001,
        38002,
        38907
    ]

    map_to_warp = 410000000 # Vulpes
    target_level = 10

    sm.setSpeakerID(MAPLE_ADMINISTARTOR)
    sm.removeEscapeButton()
    sm.lockInGameUI(True)
    agree = sm.sendAskYesNo("Would you like to skip the tutorial questline and instantly arrive at #m" + str(map_to_warp) + "#?")
    if agree:
        if sm.getChr().getLevel() < target_level:
            sm.addLevel(target_level - sm.getChr().getLevel())

        for quest in quests_to_complete:
            sm.completeQuestNoRewards(quest)

        sm.lockInGameUI(True)
        sm.levelUntil(10)

        sm.setJob(2500)
        sm.setSTR(4)
        sm.setINT(4)
        sm.setDEX(4)
        sm.setLUK(4)
        sm.setAP(4 + chr.getLevel() * 5)
        sm.addSP(5, True)
        sm.addMaxHP(150)
        sm.addMaxMP(50)
        sm.giveItem(3010766)
        sm.createQuestWithQRValue(parentID, "", True)
        sm.startQuest(parentID)
        sm.giveSkill(SWIFT_STRIKE)
        sm.giveSkill(VULPES_LEAP, 4)
        sm.giveSkill(20050285)
        sm.giveSkill(20051284)
        sm.warp(map_to_warp)
        sm.lockInGameUI(False)
        sm.dispose()
    return agree
# --------
sm.lockInGameUI(True, False)
sm.hideUser(True)
sm.forcedInput(0)
if "3" in sm.getQRValue(38907):
    sm.reservedEffect("Effect/Direction15.img/eunwolTutorial/Scene1")
    sm.sendDelay(16000)
    sm.warpInstanceIn(927030040, 0)
elif "2" in sm.getQRValue(38907):
    sm.reservedEffect("Effect/Direction15.img/eunwolTutorial/Scene0")
    sm.sendDelay(4000)
    sm.warpInstanceIn(927030030, 0)
elif "1" in sm.getQRValue(38900):
    sm.sendDelay(500)
    sm.showFieldEffect("Map/Effect2.img/eunwol/enter")
    sm.sendDelay(3500)
    sm.warpInstanceIn(927030020, 0)
elif not skip_tutorial():
    sm.sendDelay(500)
    sm.sayMonologue("\r\n\r\nA great darkness is covering Maple World.", False)
    sm.sayMonologue("\r\nThe Black Mage wishes to dominate Maple World with overwhelming darkness.", False)
    sm.sayMonologue("\r\nMany feared the Black Mage and his incredible strength, and few dared to oppose him.", True)

    sm.sayMonologue("\r\nDespair reigned in Maple World.", False)
    sm.sayMonologue("\r\n\r\n\r\nBut then...", False)
    sm.sayMonologue("\r\nThere came heroes who were bold enough to oppose the Black Mage.", True)
    sm.sendDelay(1000)

    sm.reservedEffect("Effect/Direction8.img/lightningTutorial/Scene0")
    sm.sendDelay(3300)

    sm.warpInstanceIn(927030000, 0)