# id 64114 ([MONAD: The First Omen] Elva's Role), field 867202300
sm.setSpeakerType(3)
sm.setParam(37)
sm.setColor(1)
sm.setInnerOverrideSpeakerTemplateID(9400601) # Elva
sm.sendNext("#h0#，你回来了。材料呢… ")
sm.setParam(57)
sm.sendSay("#b在这里。")
sm.setParam(37)
sm.sendSay("独眼触须怪的触须…一个…两个…三…扁柏树叶…都对！")
res = sm.sendAskYesNo("非常感谢。我的笔记能给我话？或者你想要的话，也可以送给你。")
sm.completeQuestNoCheck(parentID)
