# 1413 - [Job Adv] (Lv.30) Way of the Spearman

darkMarble = 4031013
job = "Spearman"
DANCES_WITH_BALROG = 10202
sm.setSpeakerID(DANCES_WITH_BALROG)

sm.setSpeakerID(1022000)
if sm.hasItem(darkMarble, 30):
    sm.sendNext("#t4031013#全部搜集到啦。在你身上可以看到成为枪骑士的素质。你一定可以把枪用得比剑更好。好的，你想成为枪骑士吗？")
else:
    sm.sendSayOkay("冒险之书任务已完成。")
    sm.dispose()


sm.consumeItem(darkMarble, 30)
sm.jobAdvance(130) # Spearman
sm.completeQuestNoRewards(parentID)
sm.sendNext("好的！从现在起你就是#b枪骑士#k了！用长柄武器不断地骚扰敌人的执着的战士——枪骑士。希望你能相信自己的力量，继续前进。")