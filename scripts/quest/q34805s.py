# id 34805 (Making a Crystal Gate 1), field 402000530
sm.setSpeakerType(3)
sm.setParam(37)
sm.setColor(1)
sm.setInnerOverrideSpeakerTemplateID(3001304) # Professor Citrine
sm.sendNext("请先和利奥对话。")
sm.setInnerOverrideSpeakerTemplateID(3001300) # Ex
sm.sendSay("#face0#好，现在大家都组队完成了吧？\r\n为了制作大门，请采集20个#i4036164# #t4036164#！")
sm.setInnerOverrideSpeakerTemplateID(3001350) # Illium
sm.sendSay("#face0##i4036164##b#t4036164##k可在#r#o2400401##k那获得，一定别搞错了。\r\n好，我这就用魔法送你过去。一路平安哦。")
sm.setSpeakerID(3001334) # Professor Citrine
sm.setParam(36)
sm.setColor(1)
sm.setInnerOverrideSpeakerTemplateID(3001304) # Professor Citrine
if sm.sendAskAccept("#face0##b重新返回水晶学院时，建议你使用向导#k。"):
    sm.startQuest(parentID)
    sm.setSpeakerType(3)
    sm.setParam(37)
    sm.sendNext("#face0#Don't forget what you've learned! You can only get #i4036164# #b#t4036164##k items from #r#o2400401##k.\r\nI'll transport you now. Good luck!")
    sm.setInnerOverrideSpeakerTemplateID(3001300) # Ex
    sm.sendSay("#face0#I recommend #busing the Maple Guide#k when you return.")
    sm.warp(402000519)