#   [Job Adv] (Lv.30)   Way of the Cleric

darkMarble = 4031013
job = "Cleric"

sm.setSpeakerID(1032001) # Grendel the Really Old
if sm.hasItem(darkMarble, 30):
    sm.sendNext("#t4031013#全部搜集到啦……我知道你一定很轻松就能通过。好的，终于……我来让你变成牧师。准备好了吗……？")
else:
    sm.sendSayOkay("冒险之书任务已完成。")
    sm.dispose()


sm.consumeItem(darkMarble, 30)
sm.jobAdvance(230) # Cleric
sm.completeQuestNoRewards(parentID)
sm.sendNext("好的……从现在开始，你就是#b牧师#k了……牧师是用一颗虔诚的心，为万物注入生命力量的人……希望你能坚定自己的信仰……")