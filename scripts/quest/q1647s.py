medal = 1142354

if sm.canHold(medal):
    sm.chatScript("十分感谢你至今为止出色的完成了降魔十字旅团的任务。包括我在内的降魔十字旅团成员都看到了#h0#你的活跃。您才是真正的#b<十字猎人大师>#k啊。")
    sm.startQuest(parentID)
    sm.completeQuest(parentID)