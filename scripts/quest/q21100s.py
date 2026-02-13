# 140000000
LILIN = 1201000

sm.setSpeakerID(LILIN)
sm.flipSpeaker()
sm.sendNext("与黑魔法师战斗的英雄们……有关他们的信息几乎什么都没留下。即使在预言书中也只记载了5位英雄，也没有任何有关他们外貌的描述。你还能记起来些什么吗？")

sm.setPlayerAsSpeaker()
sm.sendSay("一点都想不起来了……")

sm.setSpeakerID(LILIN)
sm.flipSpeaker()
sm.sendSay("果然，黑魔法师的诅咒果然很厉害。不过，作为英雄的你肯定和过去应该还会存在某个联系点的。会是什么呢？武器和衣服是不是在战斗中都遗失了呢……啊，对了，应该是#b武器#k！")

sm.setPlayerAsSpeaker()
sm.sendSay("以前，我们在冰窟中挖掘英雄的时候，发现过一个巨大的武器。我们猜测可能是英雄使用的武器，所以就放在了村子中央。你来来去去的时候没看到吗？#b#p1201001##k……#i4032372#大概是这个样子……")

sm.setSpeakerID(LILIN)
sm.flipSpeaker()
sm.sendSay("确实，那个#p1201001#在村子里，看起来是有些奇怪。")

sm.setPlayerAsSpeaker()
sm.sendSay("没错，就是那个东西。据说英雄的武器是会挑选主人。如果你就是使用#p1201001#的英雄，那么在抓住#p1201001#的刹那，武器应该会有反应的。快去点击#b#p1201001#试试。#k")

sm.setSpeakerID(LILIN)
if sm.sendAskAccept("如果#p1201001#有反应，就说明你是使用过#p1201001#的英雄，是#b战神#k。"):
    sm.startQuest(parentID)
    sm.completeQuest(parentID)

    sm.flipSpeaker()
    sm.sendSayOkay("武器？")
else:
    sm.flipSpeaker()
    sm.sendNext("What's stopping you? I promise, I won't be disappointed even if the #p1201001# shows no reaction to you. Please, rush over there and grab the #p1201001#. Just #bclick#k on it.")
    sm.dispose()