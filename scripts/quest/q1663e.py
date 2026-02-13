# [Silent Crusade] A Veteran Hunter

BASTILLE = 9073003
KRAG = 9073005

sm.setSpeakerID(BASTILLE)
sm.sendNext("我相信你已经从#p9073005#那里得知了一定的信息。这次在新的#p9073008#出现的状况下，你迅速完成了任务，#h0#我将送你一份小礼物作为回报。")

sm.sendSay("你已经通过UI获得A级猎人的称号了吧？如果还没收到，结束与我的对话后，打开十字猎人的UI，就能接受奖励了。另外，虽然非常微薄，作为我对你完成任务的鼓励吧。")

sm.sendSay("下一次任务也期待你的表现。希望你好好努力。")

sm.completeQuest(parentID)
sm.showFieldEffect("Map/Effect.img/crossHunter/chapter/end3")