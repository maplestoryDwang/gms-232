
sm.removeEscapeButton()

sm.setSpeakerID(1102113)
sm.sendNext("(嘀哩哩哩……嘀嘀……)")

sm.setPlayerAsSpeaker()
sm.sendSay("嗯？哪里突然出现了一只小鸟？")

sm.setSpeakerID(1102113)
sm.sendSay("(嘀哩哩，嘀嘀，嘀哩哩哩……)")

sm.setPlayerAsSpeaker()
sm.sendSay("我难道有听懂鸟语的能力吗？！我好像听到它在说跟我走……反正在这里等着也挺无聊的，在奇赞回来之前，先跟过去看看吧？")

sm.createQuestWithQRValue(parentID, "gardenIn")# must be sent this qr value
sm.warp(130030104, 0)