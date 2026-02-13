#   [Job Adv] (Lv.30)   Gunslinger of the Seven Seas

darkMarble = 4031013
job = "Gunslinger"
KYRIN = 10204
sm.setSpeakerID(KYRIN)

sm.setSpeakerID(1090000)
if sm.hasItem(darkMarble, 30):
    sm.sendNext("#t4031013#全部拿来啦。成绩不错。不，应该说是比较优秀。你一定会成为一个好火枪手。我马上让你成为火枪手。")
else:
    sm.sendSayOkay("冒险之书任务已完成。")
    sm.dispose()


sm.consumeItem(darkMarble, 30)
sm.jobAdvance(520) # Gunslinger
sm.completeQuestNoRewards(parentID)
sm.sendNext("很好。从现在起你已经是#b火枪手#k了。火枪手可以用枪给予敌人施加凌厉的攻击……你若想变得更强, 还需要不断地努力修炼才是。若在修炼的过程中遇到困难的话, 我也会帮你的。")
