# id 34300 ([Lachelein] Festival of Dreams), field 450003000
sm.setSpeakerType(3)
sm.setParam(4)
sm.setInnerOverrideSpeakerTemplateID(3003201) # Protective Mask
sm.sendNext("你是从外面进来的吗？")
sm.setParam(2)
sm.sendSay("这里很危险…该死，已经晚了。")
sm.setParam(4)
sm.sendSay("You must be careful, this place is dangerous. Oh no, they're here!.")
sm.completeQuestNoCheck(parentID)
sm.warp(450003710)
