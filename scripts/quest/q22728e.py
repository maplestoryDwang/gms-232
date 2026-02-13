# id 22728 (Gathering Evidence ), field 331002100
sm.lockInGameUI(True, False)
sm.setSpeakerType(3)
sm.setParam(37)
sm.setColor(1)
sm.setInnerOverrideSpeakerTemplateID(1531000) # Kinesis
sm.sendNext("到底是什么状况？\r\n持续不断地有怪物冒出来。")
sm.sendSay("好像也没有学生身陷危险，继续留在这里只是浪费时间，\r\n还是先回去吧？")
sm.blind(True, 255, 0, 0, 0, 500)
sm.sendDelay(500)
sm.warp(331002500)
