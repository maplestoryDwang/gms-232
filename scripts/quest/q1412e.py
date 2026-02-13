# 1412 - [Job Adv] (Lv.30)   Way of the Page

darkMarble = 4031013
job = "Page"

sm.setSpeakerID(1022000)
if sm.hasItem(darkMarble, 30):
    sm.sendNext("30个#t4031013#全部搜集到啦……我果然没有看错人。我知道你一定可以做到。你展现出了沉着和勇敢……好的，我来把你引上准骑士之路。准备好了吗？")
else:
    sm.sendSayOkay("冒险之书任务已完成。")
    sm.dispose()


sm.consumeItem(darkMarble, 30)
sm.jobAdvance(120) # Page
sm.completeQuestNoRewards(parentID)
sm.sendNext("好的！从现在起你就是#b准骑士#k了！准骑士是对敌人冷静，对队友具有献身精神，具有骑士道的战士。希望你能凭借自己明亮的双眼，走上正确的道路。")
