# id 17654 ([Commerci Republic] Screaming in the Night), field 865020071
sm.setSpeakerID(9390216) # Zion
sm.setParam(57)
sm.setColor(1)
sm.sendNext("这家伙是受过训练的暗杀者！")
sm.setParam(37)
sm.setInnerOverrideSpeakerTemplateID(9390206) # Vaughn Tremier
sm.sendSay("这里发生了什么事啊！！")
sm.setInnerOverrideSpeakerTemplateID(9390202) # Leon Daniella
sm.sendSay("好像是那边！")
sm.setInnerOverrideSpeakerTemplateID(9390227) # Guild Assassin
sm.sendSay("麻烦了。先撤退。")
sm.hideNpcByTemplateIdhi(9390227, True, True)
sm.hideNpcByTemplateIdhi(9390228, True, True)
sm.showNpcSpecialActionByTemplateId(9390203, "summon", 0)
sm.showNpcSpecialActionByTemplateId(9390236, "summon", 0)
sm.showNpcSpecialActionByTemplateId(9390206, "summon", 0)
sm.completeQuestNoCheck(parentID)
sm.createQuestWithQRValue(18418, "B=33285")
