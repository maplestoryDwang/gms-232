# id 58946 ([Hieizan Temple] Fill the Yellow Jar), field 811000014
sm.setSpeakerID(9130107) # Mysterious Boy
sm.setParam(4)
sm.setInnerOverrideSpeakerTemplateID(9130107) # Mysterious Boy
sm.sendNext("最后就剩下黄色坛子了。")
sm.sendSay("之前已经很辛苦了……不过你能最后帮我一次吗？")
res = sm.sendAskYesNo("真的……绝对是……最后一次。只要这次做完，盟军士兵们就都能得到安息了。")
sm.startQuest(parentID)
sm.sendNext("第3个坛子，消灭200个#m811000017:#的 #o9450033:#就行了。")
sm.sendSay("咻，真不知道盟军士兵怎么就变成这样了。")
sm.sendPrev("This is the last round, so cheer up! I know you can do it.")
