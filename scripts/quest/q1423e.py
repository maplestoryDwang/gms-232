#   [Job Adv] (Lv.30)   Way of the Bandit
DARK_LORD = 1052001
darkMarble = 4031013
job = "Bandit"

sm.setSpeakerID(DARK_LORD)
if sm.hasItem(darkMarble, 30):
    sm.sendNext("#t4031013#全部拿来啦。很能干嘛？让你成为侠客，好像不错。那么……我马上让你变成侠客。准备好了吗？")
else:
    sm.sendSayOkay("冒险之书任务已完成。")
    sm.dispose()


sm.consumeItem(darkMarble, 30)
sm.jobAdvance(420) # Bandit
sm.completeQuestNoRewards(parentID)
sm.sendNext("好的，从现在开始你就是#b侠客#k。侠客是以快速行动和技巧压制敌人的人。希望你能更加努力修炼。")