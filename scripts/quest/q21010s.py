# 140090100
PUKA = 1202001

sm.setSpeakerID(PUKA)
sm.sendNext("咦？什么人在岛上……？哎呦，这不是#p1201000#吗？#p1201000#来这里是为了……这人是#p1201000#的朋友吗？啊？你说这人是英雄？")
sm.sendSay("这位原来就是#p1201000#一族数百年间苦苦守候的英雄啊！啊，乍一看倒是和普通人没什么两样……")
sm.sendSay("但是可能是因为你被黑魔法师的诅咒困在冰里几百年时间，所以体力全都消耗完了。#b我给你一个体力恢复药水，请快点喝下去吧#k。")

if sm.sendAskAccept("请先喝掉药水，然后再慢慢谈！"):
    sm.giveItem(2000022)
    sm.startQuest(parentID)

    sm.removeEscapeButton()

    sm.flipSpeaker()
    sm.sendNext("#b（这药水怎么喝？……不记得了……）#k")

    sm.setPlayerAsSpeaker()
    sm.sendSay("#b(How do I drink the potion? I don't remember...)#k")
    sm.tutorAutomatedMsg(14)
else:
    sm.sendNext("Oh, no need to decline my offer. It's no big deal. It's just a potion. Well, let me know if you change your mind.")
    sm.dispose()