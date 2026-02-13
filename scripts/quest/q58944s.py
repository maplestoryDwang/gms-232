# id 58944 ([Hieizan Temple] Fill the Red Jar), field 811000014
sm.setSpeakerID(9130107) # Mysterious Boy
sm.setParam(4)
sm.setInnerOverrideSpeakerTemplateID(9130107) # Mysterious Boy
sm.sendNext(" 这个坛子原来可以聚集灵魂啊……虽然很可怕……但也没办法了。")
res = sm.sendAskYesNo("你能帮我把可怜的盟军士兵的灵魂装到里面去吗？")
sm.startQuest(parentID)
sm.sendNext("谢谢你，多亏了你，我总算能轻松一点了。")
sm.sendSay("消灭100个#m811000015:#的#o9450031:#应该就能装满这个坛子了。")
sm.sendPrev("I'll leave it to you. ")
