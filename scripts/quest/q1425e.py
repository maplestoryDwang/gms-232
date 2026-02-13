#   [Job Adv] (Lv.30)   Brawler of the High Seas

darkMarble = 4031013
job = "Brawler"
KYRIN = 10204
sm.setSpeakerID(KYRIN)

sm.setSpeakerID(1090000)
if sm.hasItem(darkMarble, 30):
    sm.sendNext("#t4031013#全部拿来啦。成绩不错。不，应该说是比较优秀。你一定会成为一个好拳手。我马上让你成为拳手。")
else:
    sm.sendSayOkay("很好。从现在起你已经是#b拳手#k了。拳手可以赤手空拳地镇压敌人。因此, 它要比任何人更要努力修炼才是。若在修炼的过程中遇到困难的话, 我也会帮你的。")
    sm.dispose()


sm.consumeItem(darkMarble, 30)
sm.jobAdvance(510) # Brawler
sm.completeQuestNoRewards(parentID)
sm.sendNext("给你提升了收纳高手技能。这样就可以使用更多的背包空间了。")