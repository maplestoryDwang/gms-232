# id 34808 (A Divine Festival 1), field 402000526
sm.setSpeakerID(3001335) # Professor Lutil
sm.setParam(36)
sm.setColor(1)
sm.setInnerOverrideSpeakerTemplateID(3001300) # Ex
res = sm.sendAskAccept("#face0#首先为制作造型物,请采集#b20个#k#i4036167# #b#t4036167##k！")
sm.startQuest(parentID)
sm.setSpeakerType(3)
sm.setParam(37)
sm.setInnerOverrideSpeakerTemplateID(3001305) # Professor Lutil
sm.sendNext("#face0##i4036167##b#t4036167##k可在#r#o2400402##k那获得,一定别搞错了。\r\n好,我这就用魔法送你过去。平安回来哦。")
sm.setInnerOverrideSpeakerTemplateID(3001300) # Ex
sm.sendSay("#face0##b回学院的时候,推荐使用冒险岛向导#k(快捷键：U)。")
sm.warp(402000514)
