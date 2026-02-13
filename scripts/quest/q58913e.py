# id 58913 ([Hieizan Temple] Investigating Hieizan), field 811000008
sm.setSpeakerID(9130103) # Ayame
sm.setParam(4)
sm.setInnerOverrideSpeakerTemplateID(9130103) # Ayame
sm.sendNext("谢谢你帮我找到松山家族的信物！")
sm.sendSay("幸好魔王没有降临……不过她竟然迷失了自我，变成了妖怪。她……真是可怜。")
sm.sendSay("请你代替我阻止她。")
sm.completeQuestNoCheck(parentID)
sm.sendSay("为了阻止浓姬，必须获得她所在的比睿山大殿的钥匙。")
sm.createQuestWithQRValue(18418, "B=35658")
sm.sendSay("她在逃跑时，把自己的分身留在了比睿山的小祠堂。从那个分身那里就能获得可以找到真正浓姬的钥匙。")
sm.sendSay("我在之前已经潜入到本阵，拿到了钥匙。和我对话的话，我会给你去往真浓姬的钥匙。")
sm.sendPrev("Be careful. Princess No will be a challenging foe to contend with. Talk to me if you'd like to practice first, and I can send you to a training area.")
sm.createQuestWithQRValue(18418, "B=35659")
