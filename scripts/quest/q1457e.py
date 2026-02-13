#   [Job Adv] (Lv.100)   Way of the NightLord / Shadower / Blade Master

heroicPentagon = 4031517
heroicStar = 4031518

sm.setSpeakerID(2081400) # Hellin
sm.sendNext("你证明了自己拥有成为英雄的素质。这样就足够了！没有必要继续证明了。你想成为真正的冒险家吗？")


sm.sendNext("[技能]获得黑暗猫头鹰！")

sm.consumeItem(heroicPentagon, 1)
sm.consumeItem(heroicStar, 1)
sm.completeQuestNoRewards(parentID)
chrJobID = sm.getChr().getJob()
sm.jobAdvance(chrJobID+1)