# id 34917 (Medical Supplies), field 402000600
sm.createQuestWithQRValue(parentID, "exp=1")
sm.completeQuestNoCheck(parentID)
sm.setSpeakerType(3)
sm.setParam(36)
sm.setColor(1)
sm.setInnerOverrideSpeakerTemplateID(3001508) # Zippy
sm.sendNext("#face0#……哦，这么快就拿来啦。真是非常感谢，嘿嘿。有了这些，伤员们就能得到治疗了。")
sm.sendSay("#face0#嗯……如果回避难处太辛苦，也可以通过向导回来。")
sm.sendSay("#face0#……啊，哈哈，你已经知道了吗……那，那以后避难处的事情可能还得常麻烦你。")
