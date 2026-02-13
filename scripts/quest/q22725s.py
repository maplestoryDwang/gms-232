# id 22725 (Jay's On The Case), field 331002000
sm.setSpeakerType(3)
sm.setParam(37)
sm.setColor(1)
sm.setInnerOverrideSpeakerTemplateID(1531001) # Jay
sm.sendNext("#face9#凯内西斯，如果你的事情结束了，希望能再回来一趟，我好像发现了一件更有趣的事情。")
sm.setInnerOverrideSpeakerTemplateID(1531000) # Kinesis
sm.sendSay("到底发现了什么？能让杰感兴趣的事，应该是大楼一楼有了著名面包房这种事情。")
sm.setInnerOverrideSpeakerTemplateID(1531001) # Jay
sm.sendSay("#face9#是有关之前怪物的事情。")
sm.setInnerOverrideSpeakerTemplateID(1531000) # Kinesis
sm.sendSay("#face4#……说说看，你找到什么线索了吗？")
sm.setInnerOverrideSpeakerTemplateID(1531001) # Jay
sm.sendSay("#face9#嗯，这个事你亲自过来听一听应该会更快。")
sm.sendSay("#face9#来的时候帮我带个甜瓜冰淇淋……开玩笑的，今天我已经摄取了足够多的糖了。")
sm.setInnerOverrideSpeakerTemplateID(1531000) # Kinesis
sm.sendSay("#b(回到据点，去找杰对话)#k")
sm.createQuestWithQRValue(22700, "V01=1;V02=1;q21end=0;kinetuto=1;kinetuto2=1;E1=1;E2=1;E3=1")
sm.startQuest(parentID)
