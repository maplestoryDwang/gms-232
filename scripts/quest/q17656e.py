# id 17656 ([Commerci Republic] Dances with Wolves 1), field 865030000
sm.setSpeakerID(9390249) # Robed Lady
sm.setParam(2)
sm.sendNext("所幸好像已经全部击退了……")
sm.setParam(4)
sm.setInnerOverrideSpeakerTemplateID(9390202) # Leon Daniella
sm.sendSay("你没事吧？没受伤吧？")
sm.setParam(0)
sm.sendSay("啊……哦……我没事。受伤了……哎呀，手受伤了。")
sm.setParam(4)
sm.sendSay("没关系。没什么大不了的。刚才被咬了一下。哈哈……")
sm.setParam(0)
sm.sendSay("你还说没关系。即使是小伤口放任不管的话也会变严重的。")
sm.setParam(2)
sm.sendSay("哦？喔呵呵。所以呢，最终你的身份是……")
sm.setParam(4)
sm.sendSay("你们……干嘛呢。")
sm.completeQuestNoCheck(parentID)
sm.createQuestWithQRValue(18418, "B=33287")
