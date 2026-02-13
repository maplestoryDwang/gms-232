SKIPPER = 1096000

sm.setSpeakerID(SKIPPER)
sm.sendNext("你好？你不觉得今天是旅游的好天气吗？我看你很陌生，是新开始冒险的冒险家吧。我是开往冒险岛的这条船的船长，我叫斯奇普。见到你很高兴。")

if sm.sendAskAccept("还不是出航时间。现在正在做出航准备，你可以在船上看看四处看看，顺便等一下。"):
    sm.sendNext("哦～！已经做好出发准备了吗？速度真快。感觉会是个好的开始～这次航行一定会很愉快。好了，我们出发吧。")
    sm.startQuest(parentID)
    sm.warp(3000000, 0)
else:
    sm.sendNext("Hey, take it easy! Sometimes you just gotta wait.")
    sm.dispose()