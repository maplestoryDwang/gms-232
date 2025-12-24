# Tutorial skipper snippet
MAPLE_ADMINISTARTOR = 2007

quests_to_complete = [
        24000,
        24001,
        24002,
        24003,
        24004,
        24005
    ]
skills_to_add = [
	    20020112,
	    20020111,
	    20020109,
	]
map_to_warp = 101050000 # Elluel
target_level = 10

sm.setSpeakerID(MAPLE_ADMINISTARTOR)
sm.removeEscapeButton()
sm.lockInGameUI(True)

if sm.sendAskYesNo("Would you like to skip the tutorial questline and instantly arrive at #m" + str(map_to_warp) + "#?"):
    if sm.getChr().getLevel() < target_level:
        sm.addLevel(target_level - sm.getChr().getLevel())

    for quest in quests_to_complete:
        sm.completeQuestNoRewards(quest)

    for skillID in skills_to_add:
        sm.giveSkill(skillID)
    sm.lockInGameUI(True)
    sm.playVideoByScript("phantom.avi")
    sm.levelUntil(10)

    sm.setJob(2300)
    sm.addSP(5)
    sm.setSTR(4)
    sm.setINT(4)
    sm.setDEX(4)
    sm.setLUK(4)
    sm.setAP(4 + chr.getLevel() * 5)
    sm.addMaxHP(150)
    sm.addMaxMP(50)
    sm.giveItem(2000019, 50)
    sm.lockInGameUI(False)
    sm.warp(map_to_warp)
else:
    sm.lockInGameUI(False)
