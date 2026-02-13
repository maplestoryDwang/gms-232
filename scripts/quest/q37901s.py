# id 37901 ([Sellas] How to Fix a Radio), field 993017200
sm.playSound("Sound/SoundEff.img/radionoise", 100)
sm.setSpeakerType(3)
sm.setParam(36)
sm.setColor(1)
sm.setInnerOverrideSpeakerTemplateID(1540451) # Neinheart
sm.sendNext("#face2#啊啊，能听见吗？#h0#。")
sm.setParam(56)
sm.sendSay("#face2#这里是#b埃斯佩拉#k的大本营总部。\r\n在即将进攻#r黑太阳#k之前，紧急投入了特殊作战……（嗞嗞）……")
sm.setParam(36)
sm.sendSay("#face2#哎呀，通信出障碍（嗞嗞）……通讯兵？这里通……（嗞嗞）……吗？")
sm.setParam(56)
sm.sendSay("#face0#我（嗞嗞）……可……看看吗？")
sm.playSound("Sound/SoundEff.img/radionoise", 100)
sm.setParam(36)
sm.sendSay("#face2#沃莉？？我不知道你对机器……有研究……吗。")
sm.setInnerOverrideSpeakerTemplateID(3003500) # Ollie
sm.sendSay("#face0#你让让。\r\n……不听话的时候……像这样！#r（咚！）#k这样！#r（咚！）#k")
sm.setInnerOverrideSpeakerTemplateID(1540451) # Neinheart
sm.sendSay("#face2#不是，你在干什么？！\r\n这样完全……（嗞嗞……）坏……（嗞嗞嗞嗞）")
sm.setInnerOverrideSpeakerTemplateID(3003500) # Ollie
sm.sendSay("#face2##r（嗞嗞嗞嗞嗞……。嗞嗞嗞……)")
sm.setInnerOverrideSpeakerTemplateID(1540451) # Neinheart
sm.sendSay("亲自去看看比较好。\r\n\r\n#b（※ 接受时，将移动到任务地区。）")
sm.playSound("Sound/SoundEff.img/radionoise", 100)
sm.sendSay("什么事？")
sm.setParam(56)
sm.sendSay("...")
sm.setSpeakerType(4)
sm.setSpeakerID(3004801) # Neinheart
res = sm.sendAskYesNo("(Maybe I should just go talk to them.)\r\n\r\n#b(* If you accept, you will automatically move to the relevant field.)")
sm.startQuest(parentID)
sm.createQuestWithQRValue(37900, "00=h1")
sm.createQuestWithQRValue(37900, "00=h1;41=h0")
sm.warp(993185000)
