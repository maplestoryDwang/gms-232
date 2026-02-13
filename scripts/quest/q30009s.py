# [Root Abyss] Defeat the First Seal Guardian

ALICIA = 1064002 # npc Id
sm.setSpeakerID(ALICIA)
sm.sendNext("回来啦。在你离开的这段时间，来了很多人！")

sm.setPlayerAsSpeaker()
sm.sendNext("都是来帮助我解开封印的人。冒险岛联盟答应把你从这里救出去，现在可以不用担心了。")

sm.sendNext("但是要想解开你的封印，必须消灭掉门外的封印守护者。你知道些什么吗？")

sm.setSpeakerID(ALICIA)
sm.sendNext("我没办法离开这里，所以什么都不知道。但是我可以感受到黑暗的力量。")

response = sm.sendAskYesNo("画着时钟的门外流出来的黑暗力量最弱。你先去消灭画着时钟的门外的封印守护者吧。")

if response:
    sm.sendNext("一个人可能会很困难。虽然说是最弱，但我还是感觉浑身直起鸡皮疙瘩。所以你一定要和#r志同道合的同伴#k一起去！")
    sm.startQuest(parentID)
sm.dispose()
