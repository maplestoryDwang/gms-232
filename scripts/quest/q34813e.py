# id 34813 (For the Verdant Flora), field 402000501
sm.lockInGameUI(True, False)
sm.setSpeakerType(3)
sm.setParam(37)
sm.setColor(1)
sm.setInnerOverrideSpeakerTemplateID(3001306) # Soldier
sm.sendNext("#face0#哦，这就可以了。")
sm.setInnerOverrideSpeakerTemplateID(3001301) # Agate
sm.sendSay("#face2#水晶魔力全部提取完了吗？")
sm.spawnNpc(3001301, -1470, 50)
sm.showNpcSpecialActionByTemplateId(3001301, "summon", 0)
sm.sendDelay(600)
sm.setInnerOverrideSpeakerTemplateID(3001350) # Illium
sm.sendNext("#face0#阿加特大人！")
sm.setInnerOverrideSpeakerTemplateID(3001306) # Soldier
sm.sendSay("#face0#啊，你好！阿加特大人！")
sm.setInnerOverrideSpeakerTemplateID(3001301) # Agate
sm.sendSay("#face1#你好。")
sm.sendSay("#face0#我们平民翼人的士兵……也很可靠吧？")
sm.setInnerOverrideSpeakerTemplateID(3001306) # Soldier
sm.sendSay("#face0#哈哈，哪的话！")
sm.setInnerOverrideSpeakerTemplateID(3001350) # Illium
sm.sendSay("#face0#没想到你们竟然这么卖力……")
sm.setInnerOverrideSpeakerTemplateID(3001301) # Agate
sm.sendSay("#face0#眼前阿叙隆的和平都是牺牲大家换来的……无论是过去还是现在……")
sm.setInnerOverrideSpeakerTemplateID(3001350) # Illium
sm.sendSay("#face0#我从士兵那听说了……现在不断有外敌入侵……")
sm.sendSay("#face0#如果真有那一天……我会保护……阿加特大人的……")
sm.setInnerOverrideSpeakerTemplateID(3001301) # Agate
sm.sendSay("#face0#谢谢你，伊利温。放心吧，绝不会有那一天的。")
sm.sendSay("#face1#先收下药水吧。说不定今后用得到。")
sm.createQuestWithQRValue(parentID, "m=0;item2=1;d2=1")
sm.sendSay("#face2#好，那开始练习吧？")
sm.setInnerOverrideSpeakerTemplateID(3001350) # Illium
sm.sendSay("#face0#嗯，好吧！")
sm.sendSay("#face0#(嗯，我会保护阿加特大人的。你只管认真修炼吧！)")
sm.blind(True, 255, 0, 0, 0, 500)
sm.sendDelay(500)
sm.sendDelay(100)
sm.completeQuestNoCheck(parentID)
sm.sendDelay(100)
sm.createQuestWithQRValue(parentID, "m=0;item2=1;exp=1;d2=1")
sm.startQuest(11620)
sm.createQuestWithQRValue(15710, "lasttime=19/02/21/16/43")
sm.lockInGameUI(False, True)
sm.warp(402000521)
