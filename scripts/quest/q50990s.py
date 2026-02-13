# id 50990 ([Theme Dungeon] Ellinel Fairy Academy ), field 993017200
sm.setSpeakerID(9130008) # Mouri Motonari
res = sm.sendAskAccept("看来你的力量已经恢复得差不多了啊。那么，你应该能帮忙抵挡一段时间了吧？#b我们接到了妖精学院艾利涅#k发来的紧急支援请求，希望你能去帮忙看看情况。")
sm.sendNext("毕竟出事的是#b妖精学院艾利涅#k这个地方。妖精学院艾利涅是人类无法踏足的。但是最近，却有一个魔法师出现在了艾利涅附近的妖精之地。")
sm.sendSay("虽然不清楚到底是怎么一回事，但趁着事情还没有被闹大，希望你能去打探一下实情，并助他们一臂之力。")
res = sm.sendAskYesNo("想前往妖精之地，就去找一只名为潘喜的猫问路吧。如果你愿意，我可以送你一程。")
sm.sendNext("没有问题。我这就直接送你去找潘喜。祝你好运。")
sm.startQuest(parentID)
sm.startQuest(32148)
sm.warp(101030000)
