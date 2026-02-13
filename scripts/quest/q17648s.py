# id 17648 ([Commerci Republic] Back to San Commerci), field 865010001
sm.setSpeakerID(9390244) # Leon Daniella
res = sm.sendAskYesNo("好了，海盗王也剿灭了，现在可以回程了吧。得赶紧跟爸……首领大人报告这好消息才行。")
sm.setParam(1)
sm.sendNext("调转船头！目的地桑凯梅尔兹！！")
sm.setParam(5)
sm.setInnerOverrideSpeakerTemplateID(9390217) # Tepes
sm.sendSay("是，遵命！！")
sm.startQuest(parentID)
sm.warp(865000000)
