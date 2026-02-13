medal = 1142351

if sm.canHold(medal):
    sm.chatScript("虽然首先要进行见习，但还是祝贺你成为降魔十字旅团的成员。授予你#b<见习十字猎人>#k的称号。")
    sm.startQuest(parentID)
    sm.completeQuest(parentID)