# id 58916 ([Hieizan Temple] The Lost Alliance 1), field 811000014
sm.setSpeakerID(9130107) # Mysterious Boy
sm.setParam(4)
sm.setInnerOverrideSpeakerTemplateID(9130107) # Mysterious Boy
sm.sendNext("盟军士兵？我最后看见的是阴阳师让他们吃了什么药，然后念了咒术，他们就变得很奇怪。")
sm.sendSay("请你找到那些士兵吧。他们对于失去了父亲的我，十分照顾……")
res = sm.sendAskYesNo("我看见了附近有织田军的阴阳师。从他们那里应该能得到什么情报吧。")
sm.startQuest(parentID)
sm.sendSayOkay("谢谢你能帮我！消灭100个织田军的阴阳师，应该就能找到线索了吧？")
