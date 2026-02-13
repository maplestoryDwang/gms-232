#   [Job Adv] (Lv.30)   Way of the Mage IL

darkMarble = 4031013
job = "Mage (Ice, Lightning)"

sm.setSpeakerID(1032001) # Grendel the Really Old
if sm.hasItem(darkMarble, 30):
    sm.sendNext("#t4031013#全部搜集到啦……我知道你一定很轻松就能通过。好的，终于……我来让你变成冰雷法师。准备好了吗……？")
else:
    sm.sendSayOkay("冒险之书任务已完成。")
    sm.dispose()


sm.consumeItem(darkMarble, 30)
sm.jobAdvance(220) # Mage IL
sm.completeQuestNoRewards(parentID)
sm.sendNext("好的……从现在开始，你就是#b冰雷法师#k了……法师是以较高的智力为基础，使用自然力量压制敌人的人……希望你一定要努力增加学识…… ")
