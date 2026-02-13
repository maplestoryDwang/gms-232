# id 39160 ([Weekly Quest] Request Reward), field 993017200
sm.setSpeakerID(2155000) # One-Eye
sm.setParam(1)
sm.sendNext("小软柿，每当你完成来自各处的委托，\r\n我们机器人就能侦察更长时间。\r\n那样的话，我们就行搜集到#b珍贵物品#k了。")
sm.sendSay("所以我们决定了，\r\n你#b每周完成4次委托时，领取#k\r\n#i4001842# #b#t4001842##k作为奖励。")
sm.sendSay("#b在开始执行委托时，我送你一个作为纪念。#k\r\n每周#b完成4次委托#k时，就告诉我，哈哈哈。")
sm.startQuest(parentID)
sm.createQuestWithQRValue(39100, "FC=0")
