# 3138 - Desolate Moor | Lionheart questline
sm.setPlayerAsSpeaker()
sm.sendNext("如果没有像你这么优秀的人帮我的话，我就不可能对这里进行调查。你能再考虑一下吗？")
sm.setSpeakerID(2161012)
sm.sendNext("是谁给我写的信呢？没有发件人……要看一看吗？")
sm.sendNext("致阅读这封信的冒险家：\r\n\r\n我是十字猎人的工作员，名叫#b#p2161012##k。我就长话短说了。我们十字猎人的工作员们在冒险岛世界各地走动，执行消灭邪恶怪物的任务。")
if sm.sendAskYesNo("但是我现在所在的地方——#r狮子王之城#k，正散发出之前我从没见到的强烈黑暗气息。我感觉到了比冰峰雪域的寒风更摄人心肺的恐怖。"):
    sm.sendNext("为了完成我的任务，需要像你这样优秀的冒险家的帮助。愿意帮助我的话，请继续往下看。")
    sm.startQuest(parentID)
    sm.warp(211060000)