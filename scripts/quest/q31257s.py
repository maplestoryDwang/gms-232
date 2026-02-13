# id 31257 ([Crimsonheart] Soldiers of Crimsonwood), field 301000000
sm.setSpeakerID(2134012) # Ridley
res = sm.sendAskYesNo("你帮助那些不幸的魔族居民全部逃脱了吗？")
sm.sendNext("呼，谢谢你。我这个已变成石像的魔法师实在是帮不上他们的忙。好在你来了，他们才得以逃生。")
res = sm.sendNext("和你打斗的那帮家伙……我说的是城堡上层的那些士兵，你知道他们的身份吗？他们原本是从前克林逊森林的居民，是光荣的战士。可惜现在已经完全堕落了。\r\n\r\n#b#L0#他们为什么会堕落了？#l")
sm.setParam(1)
sm.sendNext("这个嘛，我也不清楚。一切事情都始于席卷绯红的那场大战，可大多数人却连那场战争的原因都不知道……")
sm.sendSay("我数百年间都守在城堡里的同个地方，没法知道外头到底发生了什么事。真郁闷。")
sm.startQuest(parentID)
sm.completeQuestNoCheck(parentID)
