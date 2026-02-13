# id 34929 (Divide and Locate), field 402000600
sm.setSpeakerType(3)
sm.setParam(36)
sm.setColor(1)
sm.setInnerOverrideSpeakerTemplateID(3001500) # Ark
sm.sendNext("#face0#（把在避难处外面找到的破碎的动力源给她看。说必须找到其余两个碎片。）")
sm.setInnerOverrideSpeakerTemplateID(3001508) # Zippy
sm.sendSay("#face3#嗯，这么说真的要到很远的地方去才行了……我们必须找到另外两个碎片……")
sm.setSpeakerType(4)
sm.setSpeakerID(3001400) # Zippy
res = sm.sendAskAccept("#face3#做好出发的准备之后，你能到#r#m402000620##k来一趟吗？\r\n唉……对你们来说，或许将是非常艰苦的旅程。")
sm.setSpeakerType(3)
sm.sendNext("#face0#我去把避难处的居民们召集起来。我们必须给你们动力源探索队送行。\r\n好的，一会儿见。")
sm.startQuest(parentID)
