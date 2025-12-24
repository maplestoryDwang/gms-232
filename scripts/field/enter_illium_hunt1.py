# id 940202013 (null), field 940202013
# Tutorial skipper snippet
def skip_tutorial():
    MAPLE_ADMINISTARTOR = 2007

    quests_to_complete = [
        34900
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
        sm.jobAdvance(15200)
        sm.addSP(5)
        sm.warp(map_to_warp)

        sm.dispose()


skip_tutorial()
sm.lockInGameUI(False, True)
sm.setSpeakerType(3)
sm.setParam(37)
sm.setColor(1)
sm.giveNewSecondary(1353500)
sm.setInnerOverrideSpeakerTemplateID(3001350) # Illium
sm.sendNext("#face4#Yikes! What are those!?")
sm.createQuestWithQRValue(16119, "")
sm.createQuestWithQRValue(27039, "")
sm.completeQuestNoCheck(28515)
sm.createQuestWithQRValue(26015, "")
sm.createQuestWithQRValue(26011, "")
sm.setInnerOverrideSpeakerTemplateID(3001300) # Ex
sm.sendSay("#face0#Those hedgehogs are close enough to hunt, and they may have the parts you need.")
sm.setInnerOverrideSpeakerTemplateID(3001350) # Illium
sm.sendSay("#face3#Those are hedgehogs?! But they're so... pokey... and weird. I thought they were supposed to be cute!")
sm.setInnerOverrideSpeakerTemplateID(3001300) # Ex
sm.sendSay("#face0#Try to get a little closer and use your basic attack on them with the #rCtrl#k key.")
sm.setInnerOverrideSpeakerTemplateID(3001350) # Illium
sm.sendSay("#face0#That'll work on these things?")
sm.sendSay("#face0#Okay... Ctrl key, Ctrl key... Here goes nothing!")
sm.moveCamera(True, 0, 0, 0)
sm.lockInGameUI(False, True)
sm.progressMessageFont(3, 20, 20, 0, "You can attack by pressing the Ctrl key.")
sm.avatarOriented("UI/tutorial.img/illium/attack")
sm.createQuestWithQRValue(64110, "chk=1")
sm.createQuestWithQRValue(64110, "chk=0")
sm.startQuest(9571)
sm.startQuest(28861)
sm.startQuest(28862)
sm.startQuest(28830)
sm.startQuest(28831)
sm.startQuest(42102)
sm.startQuest(7621)
sm.startQuest(11620)
sm.createQuestWithQRValue(15710, "lasttime=19/02/21/15/53")
sm.createQuestWithQRValue(25980, "normal=#")
sm.createQuestWithQRValue(25980, "normal=#;hard=#")
sm.createQuestWithQRValue(16700, "date=20190221")
sm.createQuestWithQRValue(16700, "count=1;date=20190221")
sm.createQuestWithQRValue(34801, "hunt1=1")
sm.createQuestWithQRValue(51236, "StageKey=0")
sm.createQuestWithQRValue(16700, "count=2;date=20190221")
sm.createQuestWithQRValue(16027, "ComboK=2")
sm.startQuest(11620)
sm.createQuestWithQRValue(16700, "count=3;date=20190221")
sm.createQuestWithQRValue(16027, "ComboK=3")
