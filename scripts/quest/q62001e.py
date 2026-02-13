# [Shaoling Temple] Intercepted Messages

ELDER_JUNG = 9310049
WISE_CHIEF_PRIEST = 9310053

sm.setSpeakerID(WISE_CHIEF_PRIEST)
sm.setBoxChat()
sm.sendNext("你带来了#b#p9310049##k的书信啊。")

sm.sendNext("这……妖怪居然都已经到了嵩山镇。嗯……嗯……问题很严重啊……")
sm.completeQuest(parentID)
sm.consumeItem(4034635)
sm.giveExp(1515339)