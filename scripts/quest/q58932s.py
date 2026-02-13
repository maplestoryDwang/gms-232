# id 58932 ([Hieizan Temple] Fill the Blue Jar), field 811000014
sm.setSpeakerID(9130107) # Mysterious Boy
sm.setParam(4)
sm.setInnerOverrideSpeakerTemplateID(9130107) # Mysterious Boy
sm.sendNext("红色坛子已经装满了，蓝色坛子也应该很快就能装满的。")
res = sm.sendAskYesNo("你会继续帮我的吧？这都是为了盟军士兵们……")
sm.startQuest(parentID)
sm.sendNext("第二个的坛子，只要消灭150个#m811000016:#的#o9450032:#应该就能装满了。")
sm.sendSay(" 请快点处理吧。")
sm.setParam(16)
sm.sendPrev("Get this job done...?")
