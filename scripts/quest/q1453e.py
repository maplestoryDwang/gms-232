#   [Job Adv] (Lv.100)   Way of the Arch Mage FP / Arch Mage IL / Bishop

heroicPentagon = 4031511
heroicStar = 4031512

sm.setSpeakerID(2081200) # Gritto
sm.sendNext("你证明了自己拥有成为英雄的素质。现在没有必要继续证明了……你愿意成为真正的冒险家吗？")


sm.sendNext("你已经成长为一名真正的冒险家了啊, 现在的你强大, 善良且勇敢. ")

sm.consumeItem(heroicPentagon, 1)
sm.consumeItem(heroicStar, 1)
sm.completeQuestNoRewards(parentID)
chrJobID = sm.getChr().getJob()
sm.jobAdvance(chrJobID+1)