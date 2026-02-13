# 1411 - [Job Adv] (Lv.30) Way of the Fighter

darkMarble = 4031013
job = "Fighter"
DANCES_WITH_BALROG = 10202
sm.setSpeakerID(DANCES_WITH_BALROG)

sm.setSpeakerID(1022000)
if sm.hasItem(darkMarble, 30):
    sm.sendNext("#t4031013#全部搜集到啦。非常好！我知道你一定可以做到。你展现出了一个好剑客的资质。现在你可以成为剑客了。好的，最后我再问你一次。你想成为剑客吗？")
else:
    sm.sendSayOkay("冒险之书任务已完成。")
    sm.dispose()


sm.consumeItem(darkMarble, 30)
sm.jobAdvance(110) # Fighter
sm.completeQuestNoRewards(parentID)
sm.sendNext("好的！从现在起你就是#b剑客#k了！剑客是为了追求力量而不断战斗的人……希望你不要失去斗志，勇敢前行。")
