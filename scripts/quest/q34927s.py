# id 34927 (Explosive Prep), field 402000600
sm.setSpeakerType(3)
sm.setParam(36)
sm.setColor(1)
sm.setInnerOverrideSpeakerTemplateID(3001509) # Salvo
sm.sendNext("#face0#噔，噔！热情的爆破音。那是我的音乐……灵感的源泉，也是我的灵魂！")
sm.sendSay("#face0#哦，最重要的是炸弹！哦，探测之类的只不过是雕虫小技！")
sm.sendSay("#face0#只，只要有炸弹，就能找到任何东西↗ 就，就算埋得再深↗")
sm.setSpeakerType(4)
sm.setSpeakerID(3001401) # Salvo
res = sm.sendAskAccept("#face0#所以我要把最重要的事！最开心的事！搜集炸弹材料的事交给你↗ 从#r#m402000618##k的#o2400355#身上搜集……大约#b20个#k#i4036349# #b#t4036349##k！")
sm.setSpeakerType(3)
sm.sendNext("#face0#炸，炸弹的材料非常危险！一定要小心！")
sm.startQuest(parentID)
