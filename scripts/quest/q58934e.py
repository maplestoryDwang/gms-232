# id 58934 ([Hieizan Temple] Jars at Rest 1), field 811000018
sm.setSpeakerID(9130108) # Mysterious Boy
sm.setParam(4)
sm.setInnerOverrideSpeakerTemplateID(9130107) # Mysterious Boy
sm.sendNext("你来得真快啊。也是，因为你是空手来的嘛。")
sm.sendSay("咻，坛子实在太重了，我本来想叫你拿来的，我的手臂现在好痛。")
sm.sendSay("所以，请你赶紧拿着这坛子吧。")
sm.completeQuestNoCheck(parentID)
sm.sendPrev("Be careful with these. I don't know what we'd do if you broke them.")
sm.createQuestWithQRValue(18418, "B=35625")
