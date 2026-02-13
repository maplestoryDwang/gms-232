# id 34922 (Repair Completed?!), field 402000600
sm.setSpeakerType(3)
sm.setParam(36)
sm.setColor(1)
sm.setInnerOverrideSpeakerTemplateID(3001510) # Ferret
sm.sendNext("#face0#啊……重建工作有这么多好像足够了，叽勒。你也最好去休息一下……")
sm.setSpeakerType(4)
sm.setSpeakerID(3001402) # Ferret
res = sm.sendAskAccept("#face0#啊，在这之前……你去把剩下的材料送到仓库去，叽勒。材料的保存非常重要，叽勒……")
sm.setSpeakerType(3)
sm.sendNext("#face0#仓库就在那个下面。如果有时间，请再到这里来一下。叽，叽勒……我会告诉你一个只有商队成员知道的修习方法。")
sm.giveItem(4036352)
sm.startQuest(parentID)
