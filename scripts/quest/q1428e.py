#   [Job Adv] (Lv.30)   Gunslinger of the Seven Seas

darkMarble = 4031013
job = "Cannonneer"
KYRIN = 10204
sm.setSpeakerID(KYRIN)
if sm.hasItem(darkMarble, 30):
    sm.sendNext("#t4031013#全部拿来啦。成绩不错。不，应该说是比较优秀。你一定会成为一个让司徒诺满意的好火炮手。我马上让你成为火炮手。")
else:
    sm.sendSayOkay("冒险之书任务已完成。")
    sm.dispose()


sm.consumeItem(darkMarble, 30)
sm.jobAdvance(530) # Gunslinger
sm.completeQuestNoRewards(parentID)
sm.sendNext("好的，从现在起你就是#b火炮手#k了。火炮手是使用手炮在远处向敌人发动猛烈攻击的人……为了变得更强，必须努力修炼。如果修炼中遇到什么困难，我可以帮你。")
