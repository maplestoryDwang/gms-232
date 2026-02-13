# id 34814 (A Divine Festival 2), field 402000529
sm.setSpeakerType(3)
sm.setParam(36)
sm.setColor(1)
sm.setInnerOverrideSpeakerTemplateID(3001350) # Illium
sm.sendNext("#face0#呼,这样算是基本成型了。")
sm.sendSay("#face0#制作耗时对比平均速度已大幅缩短。")
sm.setSpeakerType(4)
sm.setSpeakerID(3001339) # Illium Statue
sm.setParam(37)
sm.setInnerOverrideSpeakerTemplateID(3001300) # Ex
res = sm.sendAskAccept("#face0#这次制作的物品对于发挥集中力极有帮助。")
sm.startQuest(parentID)
sm.warp(402000510)
