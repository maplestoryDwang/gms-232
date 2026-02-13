# Blaster Student of the Resistance
FERDI = 2151010
ELEX = 2151000
AGILITY_ENHANCEMENT_COURSE_UNLOCK = 23128

sm.setSpeakerID(FERDI)
sm.sendNext("没想到我们又在这里见面了，恭喜你成为反抗者，从一开始你的特殊能力就让人瞩目，我相信#p2151000#肯定也是在你身上感受到了什么，才会将你送来了这里。")
sm.sendSay("既然你已经成为了反抗者，就得认真修炼，好好升级了吧？别担心，我会慢慢将反抗者该具备的素质一点点教给你的。")
sm.createQuestWithQRValue(AGILITY_ENHANCEMENT_COURSE_UNLOCK, "1")
sm.completeQuest(parentID)