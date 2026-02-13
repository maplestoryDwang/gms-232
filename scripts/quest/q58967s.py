# id 58967 ([Hieizan Temple] The Demon King Returns), field 811000029
sm.lockInGameUI(True, True)
sm.setSpeakerID(9130116) # Princess No
sm.setParam(5)
sm.setInnerOverrideSpeakerTemplateID(9130122) # Dark Voice
sm.sendSay("……真是太蠢了，虽然我已经想到你们会跟来的。")
sm.sendSay("你难道认为至今你看到的都是真的？怎么可能。")
sm.sendSay("这里是我创造的空间，从你进来的那一刻开始，这一切都是假的。")
sm.sendSay("这只不过是为了魔王降临，需要祭品，把盟军骗进来而已，哈哈。")
sm.sendDelay(2900)
sm.reservedEffect(False, 0, 0, "Effect/DirectionJP3.img/sengoku/Scene0")
sm.completeQuestNoCheck(parentID)
sm.startQuest(58949)
sm.createQuestWithQRValue(58974, "m035=clear;dr1=clear;dr2=clear;m037=clear;m038=clear;m039=clear")
sm.lockInGameUI(False, True)
sm.createQuestWithQRValue(18418, "B=35643")
