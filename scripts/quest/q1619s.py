# [Silent Crusade] Nihal Desert Dispatch

STARLING = 9120221

sm.setSpeakerID(STARLING)
sm.sendNext("你的任务就是发现在冒险岛世界各处的时空门的真相。现在就正式开始降魔十字旅团的任务吗？")

response = sm.sendAskYesNo("首先，请你去调查尼哈沙漠地区出现的时空门吧。我之前派去的#b罗拉#k正在等你。他说他调查过#r#m260010201##k，所以应该就在那里。")

if response:
    sm.sendNext("现在就出发吧。")
    sm.startQuest(parentID)