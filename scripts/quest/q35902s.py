# id 35902 (Find Altar Key 3), field 910090302
sm.setSpeakerID(1013305) # Ancient Crate
sm.setParam(548)
sm.setColor(1)
sm.setInnerOverrideSpeakerTemplateID(1013358) # Pathfinder
res = sm.sendAskAccept("#face6#也就是说，需要给守护遗迹的家伙带去祭品。\r\n然后放到刻着正确答案的柱子上就OK了。")
sm.setSpeakerType(3)
sm.sendNext("#face0#正确答案已经知道了。那就去寻找#r#o2300200##k，搜集#b5个#k#b#i4036523# #t4036523##k吧。\r\n在附近找找看，应该就能找到遗迹防御兵。")
sm.startQuest(parentID)
