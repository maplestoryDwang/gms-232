#   [Job Adv] (Lv.100)   Way of the Bowmaster / Marksman

heroicPentagon = 4031514
heroicStar = 4031515

sm.setSpeakerID(2081300) # Legor
sm.sendNext("你证明了自己拥有成为英雄的素质。这样就足够了！现在你没有必要继续证明了。你想成为真正的冒险家吗？")


sm.sendNext("冒险之书任务已完成。")

sm.consumeItem(heroicPentagon, 1)
sm.consumeItem(heroicStar, 1)
sm.completeQuestNoRewards(parentID)
chrJobID = sm.getChr().getJob()
sm.jobAdvance(chrJobID+1)