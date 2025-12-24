# Temple of Time Corridor 1 (927000000)

# Constants
MASTEMA = 2159307
SKILLS = [30011109, 30010110, 30010185]

sm.curNodeEventEnd(True)
for i in range(3):
    if not sm.hasSkill(SKILLS[i]):
        sm.giveSkill(SKILLS[i])

sm.setSpeakerID(2007)
sm.setBoxChat()
if sm.sendAskAccept("Would you like to skip the introduction?"):
    sm.levelUntil(10)
    if sm.sendAskSelectMenu(1, 0) == 1:
        # Demon Slayer
        sm.giveSkill(30010112, -1)
        sm.jobAdvance(3100)
        sm.addSP(5)
        sm.setSTR(4)
        sm.setINT(4)
        sm.setDEX(4)
        sm.setLUK(4)
        sm.setAP(4 + chr.getLevel() * 5)
        sm.setMaxMP(10)
        sm.createQuestWithQRValue(23977, "1", False)
        sm.giveSkill(30010111, 1)  # Curse of Fury
        sm.giveSkill(30010110, 1)  # Dark Winds
        sm.giveSkill(30010185, 1)  # Demonic Blood
        sm.giveAndEquip(1322122)
        sm.giveNewSecondary(1099000)
        sm.giveItem(1142341)
        sm.giveItem(2001527, 30)
    else:
        # Demon Avanger
        # sm.giveSkill(30010112, -1)
        sm.jobAdvance(3101)
        sm.addSP(5)
        sm.setSTR(4)
        sm.setINT(4)
        sm.setDEX(4)
        sm.setLUK(4)
        sm.setAP(4 + chr.getLevel() * 5)
        sm.createQuestWithQRValue(23977, "1", False)
        sm.giveSkill(30010241, 0)  # Wild Rage
        sm.giveSkill(30010242, 1)  # Blood Pact
        sm.giveSkill(30010230, 1)  # Exceed
        sm.giveSkill(30010231, 1)  # Hyper Potion Mastery
        sm.giveSkill(30010232, 1)  # Star Force Conversion
        sm.giveAndEquip(1232001)
        sm.giveNewSecondary(1099006)
        sm.giveItem(1142553)
        sm.giveItem(2001527, 30)

    sm.lockInGameUI(False)
    sm.warp(310010000)
    sm.dispose()
else:
    sm.lockInGameUI(True)

    sm.forcedInput(0)
    sm.spawnNpc(MASTEMA, 1430, 50)
    sm.showNpcSpecialActionByTemplateId(MASTEMA, "summon", 0)
    sm.showFieldEffect("demonSlayer/back", 0)
    sm.showFieldEffect("demonSlayer/text0", 0)
    sm.sendDelay(500)

    sm.showFieldEffect("demonSlayer/text1", 0)
    sm.sendDelay(1000)

    sm.forcedInput(2)
    sm.sendDelay(3000)

    sm.showFieldEffect("demonSlayer/text2", 0)
    sm.sendDelay(500)

    sm.showFieldEffect("demonSlayer/text3", 0)
    sm.sendDelay(4000)

    sm.showFieldEffect("demonSlayer/text4", 0)
    sm.sendDelay(500)

    sm.showFieldEffect("demonSlayer/text5", 0)
    sm.sendDelay(4000)

    sm.showFieldEffect("demonSlayer/text6", 0)
    sm.sendDelay(500)

    sm.showFieldEffect("demonSlayer/text7", 0)