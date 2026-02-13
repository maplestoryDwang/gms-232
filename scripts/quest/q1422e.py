#   [Job Adv] (Lv.30)   Way of the Assassin

darkMarble = 4031013
job = "Night Lord"
DARK_LORD = 1052001
sm.setSpeakerID(DARK_LORD)

sm.setSpeakerID(1052001)
if sm.hasItem(darkMarble, 30):
    sm.sendNext("#t4031013#全部拿来啦。很能干嘛？让你成为刺客，好像不错。那么……我马上让你变成刺客。准备好了吗？")
else:
    sm.sendSayOkay("冒险之书任务已完成。")
    sm.dispose()


sm.consumeItem(darkMarble, 30)
sm.jobAdvance(410) # Night Lord
sm.completeQuestNoRewards(parentID)
sm.sendNext("好的，从现在开始你就是#b刺客#k了。刺客是躲藏在阴影之中，刹那间将暗器插入敌人心脏的人。希望你能更加努力修炼。")
