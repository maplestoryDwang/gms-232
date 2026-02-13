# [Silent Crusade] A Superior Hunter

BASTILLE = 9073003
CRUSADER_COIN = 4310029

sm.setSpeakerID(BASTILLE)
sm.sendNext("你来了，我等你很久了。听说你在这次任务中见到了“传奇”？他是怎样的人啊？")

sm.setPlayerAsSpeaker()
sm.sendSay("我也不太清楚，他故意掩去了自己的样子。")

sm.setSpeakerID(BASTILLE)
sm.sendSay("真可惜，虽然我是领导者，可是对于他的事情，却一点也不晓得。要是我能像都没人陪我玩一样，至少远远地见到他一次该有多好啊。不管怎么说，既然已经获得了他的认同，从现在开始，#h #就是#bS级猎人#k了。")

sm.sendSay("迄今为止能获得这个称号的人，只有我认识的一个三人的团队。希望你会为自己感到自豪。还有，这是我个人给你的奖励，请善加使用。")

if not sm.canHold(CRUSADER_COIN):
    sm.sendSayOkay("今后有重要的任务的话，我们还会见面的。请你多保重。")
    sm.dispose()

sm.completeQuest(parentID)
sm.giveItem(CRUSADER_COIN, 100)
sm.showFieldEffect("Map/Effect.img/crossHunter/chapter/end4")
sm.sendNext("I'll see you the next time something pops up. Until then, take care.")
