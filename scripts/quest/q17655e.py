# id 17655 ([Commerci Republic] False Charges), field 865030000
sm.setSpeakerID(9390249) # Robed Lady
sm.setParam(2)
sm.sendNext("这是哪儿啊？啊，你是……！！。")
sm.setParam(0)
sm.sendSay("这是离桑凯梅尔兹很远的地方。")
sm.setParam(4)
sm.setInnerOverrideSpeakerTemplateID(9390202) # Leon Daniella
sm.sendSay("谢谢你帮助我。每次我遇到考验的时候你都给予了我帮助。")
sm.setParam(0)
sm.sendSay("我并不是想帮你才那样的。不过你会给我谢礼的吧？")
sm.setParam(4)
sm.sendSay("那当然啦。但是……你不能告诉我你到底是谁吗？")
sm.setParam(2)
sm.sendSay("你，且看你竟然会使用这么高难度的快速移动魔法应该不是平凡人。")
sm.setParam(0)
sm.sendSay("咳嗯…………")
sm.completeQuestNoCheck(parentID)
sm.createQuestWithQRValue(18418, "B=33286")
