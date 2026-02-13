# id 34807 (Dean's Lost Stuff), field 402000532
sm.setSpeakerType(3)
sm.setParam(36)
sm.setColor(1)
sm.setInnerOverrideSpeakerTemplateID(3001307) # Dean
sm.sendNext("#face2#希娜和其他那些家伙都逃跑了……上次我说话太难听了,希望你原谅我……")
sm.setParam(37)
sm.setInnerOverrideSpeakerTemplateID(3001350) # Illium
sm.sendSay("#face0#……嗯。总之没事就好。")
sm.setSpeakerType(4)
sm.setSpeakerID(3001337) # Dean
sm.setInnerOverrideSpeakerTemplateID(3001307) # Dean
res = sm.sendAskAccept("#face2#那个……你能消灭故障的机器人,帮我找回遗失的物品吗？")
sm.startQuest(parentID)
sm.setSpeakerType(3)
sm.sendNext("#face1#谢谢！进入#b左边传送口#k后,就能发现怪异的练习机器人！")
sm.sendSay("#face1#消灭#r#o2400409##k后,请把#i4036165##b我的背包#k和#i4036166##b10个我的笔记本#k带回来！非常感谢！")
