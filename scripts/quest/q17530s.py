# id 17530 ([Gollux] The Rewarding Way), field 863010000
sm.setSpeakerID(9390120) # Heart Tree Guardian
sm.sendNext("好的，现在要提高一点难度吗？贝勒德拥有3个主要的核，破坏掉的数量越少，他就会越强。")
res = sm.sendAskYesNo("虽然可能会有点困难，不过希望你能试一下只破坏掉2个部位，就直接攻击头部的方法。那样可以获得更好的道具，我也会给你对应的奖励。")
sm.startQuest(parentID)
sm.createQuestWithQRValue(17533, "ing=1;1=1")
sm.createQuestWithQRValue(17533, "ing=1;1=0")
sm.sendNext("很好。请你去破坏贝勒德的2个核，打倒贝勒德之后，再回来找我。")
