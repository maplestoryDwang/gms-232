# Manual Labor

# Constants
LIMBERT = 1106002
EGG = 4033196

sm.setSpeakerID(LIMBERT)
selection1 = sm.sendNext("鸡蛋拿来了吗？没打碎吧？等等，怎么成了这个样子？发生了什么事？\r\n#b\r\n#L0#嗯……“沃尔夫”突然攻击了我……然后……“沃尔夫”逃走了。#l")


if selection1 == 0:
    sm.sendNext("什么！“沃尔夫”逃走了？你这没用的东西！！今天不许吃饭！！如果找不到“沃尔夫”，你也别回来了！")
else:
    sm.dispose()

sm.completeQuestNoRewards(20033)
sm.consumeItem(EGG, 10)
sm.giveItem(2001500, 30)
sm.giveItem(2001503, 30)
sm.addLevel(2)
sm.warpInstanceIn(913070004, 0)
sm.dispose()      