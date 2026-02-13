# id 64064 ([MONAD: The First Omen] Soldier's Dilemma), field 867201100
sm.lockInGameUI(True, False)
sm.flipNpcByTemplateId(9400620, False)
sm.flipNpcByTemplateId(9400621, False)
sm.flipNpcByTemplateId(9400622, False)
sm.setSpeakerType(3)
sm.setParam(37)
sm.setColor(1)
sm.setInnerOverrideSpeakerTemplateID(9400620) # Simmons
sm.sendNext("#h0#！你来了啊，没受伤吧？")
sm.setParam(57)
sm.sendSay("多亏了你，我们才休息了下。来了阿布鲁之后，还是第一次这么放心地休息呢。")
sm.setParam(37)
sm.setInnerOverrideSpeakerTemplateID(9400622) # Williams
sm.sendSay("虽然我们也很辛苦，但骑士们……真是连觉都睡不了。特别是吉莉，考虑到我们的情况，连粗活都干了……她虽然还年轻，但真的很棒！")
sm.sendSay("没错，虽然我们现在只是士兵，但是总有一天也会变成披着帅气披风的亚皮纳斯骑士的！")
sm.setInnerOverrideSpeakerTemplateID(9400621) # Jenkins
sm.sendSay("#face0#你现在在这干嘛呢？")
sm.spawnNpc(9400623, 280, -10)
sm.showNpcSpecialActionByTemplateId(9400623, "summon", 0)
sm.spawnNpc(9400581, 220, -10)
sm.showNpcSpecialActionByTemplateId(9400581, "summon", 0)
sm.sendDelay(250)
sm.setInnerOverrideSpeakerTemplateID(9400581) # Butler
sm.sendNext("派……派遣团团长大人！")
sm.setInnerOverrideSpeakerTemplateID(9400620) # Simmons
sm.sendSay("#face0#什么？寻求帮助？")
sm.moveNpcByTemplateId(9400581, True, 300, 100)
sm.sendDelay(250)
sm.moveNpcByTemplateId(9400623, True, 300, 100)
sm.sendDelay(2000)
sm.setInnerOverrideSpeakerTemplateID(9400581) # Butler
sm.sendNext("#face0#这么涣散松懈，你还想保护谁？")
sm.sendSay("对不起。")
sm.setInnerOverrideSpeakerTemplateID(9400620) # Simmons
sm.sendSay("#b是我太想帮助他们了……")
sm.setParam(57)
sm.sendSay("#face0#你没必要帮他们说话，立正！")
sm.setParam(37)
sm.setInnerOverrideSpeakerTemplateID(9400581) # Butler
sm.sendSay("#b是的，请别担心。")
sm.setInnerOverrideSpeakerTemplateID(9400620) # Simmons
sm.sendSay("是，派遣团团长！")
sm.flipNpcByTemplateId(9400620, True)
sm.flipNpcByTemplateId(9400621, True)
sm.moveNpcByTemplateId(9400620, True, 500, 150)
sm.moveNpcByTemplateId(9400621, True, 500, 150)
sm.moveNpcByTemplateId(9400622, False, 300, 150)
sm.lockInGameUI(False, True)
sm.completeQuestNoCheck(parentID)
sm.showNpcSpecialActionByTemplateId(9400622, "summon", 0)
