# Hidden Street : Destroyed Temple of Time Entrance (927020000) | Used in Luminous' Intro
PHANTOM = 2159353
MAPLE_ADMINISTARTOR = 2007
MENU_TEXT = ["Light Path", "Dark Path"]

quests_to_complete = [
        25670,
        25671,
        25672,
        25673,
        25674,
        16880,

    ]

map_to_warp = 101000100 # Vulpes
target_level = 10

sm.setSpeakerID(MAPLE_ADMINISTARTOR)
sm.removeEscapeButton()
sm.lockInGameUI(True)
agree = sm.sendAskYesNo("Would you like to skip the tutorial questline and instantly arrive at #m" + str(map_to_warp) + "#?")
if agree:
    for quest in quests_to_complete:
        sm.completeQuestNoRewards(quest)

    sm.setPlayerAsSpeaker()
    answer = sm.sendAskSelectMenu(0, 0, MENU_TEXT)
    if answer == 0:
        # Light Side
        sm.playExclSoundWithDownBGM("Voice.img/Luminous_M/2", 100)
        sm.sendNext("I will not be swept away by this darkness. I will save Lania and this world... Even if it means my destruction.")
        sm.levelUntil(10)
        sm.giveSkill(20040218, 0, 0)
        sm.setJob(2700)
        sm.giveSkill(20040216, 1, 1)
        sm.giveSkill(20040217, 1, 1)
        sm.giveSkill(20040221, 1, 1)
        sm.giveSkill(20041222, 1, 1)
        sm.giveSkill(27001100, 1, 20)
        sm.giveSkill(27000106, 1, 5)
        sm.setSTR(4)
        sm.setINT(4)
        sm.setDEX(4)
        sm.setLUK(4)
        sm.setAP(4 + chr.getLevel() * 5)
        sm.addSP(3, True)
        sm.addMaxHP(350)
        sm.addMaxMP(200)
        sm.giveItem(1142478)
        sm.giveAndEquip(1052496)
        sm.giveAndEquip(1072701)
        sm.giveAndEquip(1102443)
        sm.giveNewSecondary(1352400)
        sm.lockInGameUI(False)
        sm.warp(101020100)
    else:
        # Dark Side
        sm.sendNext("Is this how the Black Mage understood the world? I see now that everyone else is beneath me!")
        sm.sendSay("My soul was almost lost to the power of darkness. I see its appeal, but I would not have it erode my entire being. I will learn to harness it, and make it my own. ")
        sm.sendSay("But first, I must master my new magic. My old weapons of Light will now be tools of the Dark.")
        sm.levelUntil(10)
        sm.giveSkill(20040218, 3, 3)
        sm.setJob(2700)
        sm.giveSkill(20040216, 1, 1)
        sm.giveSkill(20040217, 1, 1)
        sm.giveSkill(20040221, 1, 1)
        sm.giveSkill(20041222, 1, 1)
        sm.giveSkill(27001201, 1, 20)
        sm.giveSkill(27000207, 1, 5)
        sm.setSTR(4)
        sm.setINT(4)
        sm.setDEX(4)
        sm.setLUK(4)
        sm.setAP(4 + chr.getLevel() * 5)
        sm.addSP(3, True)
        sm.addMaxHP(350)
        sm.addMaxMP(200)
        sm.giveItem(1142479)
        sm.giveAndEquip(1052497)
        sm.giveAndEquip(1072702)
        sm.giveAndEquip(1102444)
        sm.giveNewSecondary(1352400)
        sm.sendSay("Yes, it feels good to have a weapon in my hands once more. Now, who shall I test my new powers on first...")
        sm.lockInGameUI(False)
        sm.warp(101020100)
else:
        sm.lockInGameUI(True)
        sm.curNodeEventEnd(True)
        sm.removeEscapeButton()

        sm.flipDialoguePlayerAsSpeaker()
        sm.sendNext("The heavens have set the perfect stage for our final confrontation.")
        sm.sendDelay(500)

        sm.forcedInput(1)
