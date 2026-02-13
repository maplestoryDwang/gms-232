# [Root Abyss] World Tree In Danger

MYSTERIOUS_GIRL = 1064001 # npc Id
sm.setSpeakerID(MYSTERIOUS_GIRL)
sm.sendNext("怎么回事？你突然消失了，吓了我一跳。")

sm.setPlayerAsSpeaker()
sm.sendNext("他们召唤了我。")

sm.setSpeakerID(MYSTERIOUS_GIRL)
sm.sendNext("他们？是说把我封印起来的那帮坏家伙吗？")

sm.setPlayerAsSpeaker()
sm.sendNext("嗯，他们威胁我说如果继续留在这里，就绝不会放过我。差点就没命了。")

sm.setSpeakerID(MYSTERIOUS_GIRL)
sm.sendNext("你该不会……因为他们的威胁就害怕了吧？你答应过要帮我的，你不会说话不算数吧？")

sm.setPlayerAsSpeaker()
sm.sendNext("那当然。既然现在已经无法和他们协商，就只能战斗了。不过，我一个人的话，可能会有点困难。")

sm.setSpeakerID(MYSTERIOUS_GIRL)
sm.sendNext("那该怎么办？我被封印了起来，而且又受到黑暗力量的影响，一点力气也用不出来。")

sm.setPlayerAsSpeaker()
sm.sendNext("必须把这件事告诉冒险岛联盟。如果能得到冒险岛联盟的帮助，一定可以找到解开封印的办法。")

sm.sendNext("我现在马上到圣地去，向冒险岛联盟的谋士南哈特报告鲁塔比斯发生的事情，商量一下解除封印的方法。")

sm.setSpeakerID(MYSTERIOUS_GIRL)
sm.sendNext("好的。但是你一定要尽快回来哦。黑暗的力量让我越来越喘不过气来。现在剩下的时间不多了……")

sm.sendNext("别担心，我很快就回来。好了，我要到圣地去了。")
sm.startQuest(parentID)
sm.warp(130000000, 0) #Ereve
sm.dispose()
