# id 34932 (Sandy Depths), field 402000631
sm.setSpeakerType(3)
sm.setParam(36)
sm.setColor(1)
sm.setInnerOverrideSpeakerTemplateID(3001510) # Ferret
sm.sendNext("#face2#哎呀，什，什么东西……有奇怪的东西从沙子里爬出来了，好恶心……")
sm.sendSay("#face2#呃，这样就没办法继续往前走了。哎呀，哎呀呀……")
sm.setInnerOverrideSpeakerTemplateID(3001500) # Ark
sm.sendSay("#face6#（呃……又是那种既视感……会不会和这些东西有什么关系呢……）")
sm.completeQuestNoCheck(parentID)
sm.createQuestWithQRValue(parentID, "exp=1")
