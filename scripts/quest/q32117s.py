# id 32117 ([Ellinel Fairy Academy] Graduate Search), field 101072000
sm.setSpeakerID(1500001) # Headmistress Ivana
res = sm.sendAskAccept("你知道魔法密林的妖精艾温和妖精罗雯吗？其实，他们是艾利涅的毕业生。要不要向他们寻求帮助？说不定他们更了解孩子们的心理。\r\n\r\n#e（接受的话，自动移动到魔法密林。）")
sm.sendNext("拜托了。请返回魔法密林，去找妖精艾温。")
sm.startQuest(parentID)
sm.warp(101000000)
