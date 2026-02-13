# id 35914 (Ancient Compass), field 100051030
sm.setSpeakerType(3)
sm.setParam(36)
sm.setColor(1)
sm.setInnerOverrideSpeakerTemplateID(1013351) # Gorgonz
sm.sendNext("#face0#哎呀,不久前废墟发出了很大的怪声,所以……\r\n罗盘碎掉了。")
sm.sendSay("#face0#那可是不管什么东西都能找到的家伙,真可惜。\r\n不过如果能找到所有碎片重新拼好,应该还能启动。")
sm.sendSay("#face0#我,我……很忙,所以一直没去找……\r\n如果你想启动罗盘,就必须找齐碎片,咳咳。")
sm.setParam(548)
sm.setInnerOverrideSpeakerTemplateID(1013358) # Pathfinder
sm.sendSay("#face0#碎片掉在哪里了呢？")
sm.setParam(36)
sm.setInnerOverrideSpeakerTemplateID(1013351) # Gorgonz
sm.sendSay("#face0#那,那个……")
sm.completeQuestNoCheck(parentID)
sm.createQuestWithQRValue(35948, "00=h0;10=h0;11=h1;02=h1;12=h0;22=h1;13=h0;23=h1;14=h0;15=h0;06=h0;07=h0;16=h0;26=h1;08=h0;17=h0;09=h0;19=h0")
