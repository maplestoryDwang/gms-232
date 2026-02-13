#   [Job Adv] (Lv.100)   Way of the Hero / Paladin / Dark Knight

heroicPentagon = 4031343
heroicStar = 4031344
HARMONIA = 2081100
sm.setSpeakerID(HARMONIA)

sm.sendNext("你证明了自己拥有成为英雄的素质。现在没有必要继续证明了……你愿意成为真正的冒险家吗？")


sm.sendNext("冒险之书任务已完成。")

sm.consumeItem(heroicPentagon, 1)
sm.consumeItem(heroicStar, 1)
sm.completeQuestNoRewards(parentID)
chrJobID = sm.getChr().getJob()
sm.jobAdvance(chrJobID+1)