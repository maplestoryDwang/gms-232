# id 22741 (Enjoying the Wait 1), field 101020400
sm.setSpeakerType(3)
sm.setParam(37)
sm.setColor(1)
sm.setInnerOverrideSpeakerTemplateID(1531004) # Three Moon
sm.sendNext("这里有你刚刚拿来的鸟蛋，这个你是怎么拿来的？")
sm.setInnerOverrideSpeakerTemplateID(1531000) # Kinesis
sm.sendSay("内罗，我好像需要翻译呢？\r\n这个狼大叔说的话我实在是听不懂是什么意思……")
sm.setInnerOverrideSpeakerTemplateID(1531004) # Three Moon
sm.sendSay("谁都可以轻松打破鸟蛋的蛋壳。\r\n这个蛋壳这么脆，只要很小的力量就能打破了。")
sm.sendSay("可你明明有非常强大的力量却并没有展露，而是带回了没有打破的蛋。")
sm.sendSay("你的其他力量现在还办不到，\r\n不过如果继续这么充满了力量，会让这个脆弱的世界产生裂缝的。")
sm.setInnerOverrideSpeakerTemplateID(1531000) # Kinesis
sm.sendSay("等下，让世界产生裂缝，那是什么意思？")
sm.setInnerOverrideSpeakerTemplateID(1531004) # Three Moon
sm.sendSay("这个你日后自会明白的。")
sm.completeQuestNoCheck(parentID)
sm.completeQuestNoCheck(parentID)
sm.startQuest(11620)
sm.createQuestWithQRValue(15710, "lasttime=19/07/16/05/51")
