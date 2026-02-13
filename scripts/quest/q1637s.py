# [Silent Cruade] Progress Report

STARLING = 9120221

sm.setSpeakerID(STARLING)
sm.sendNext("时空门肯定和黑魔法师有关系。他通过操纵时空门吸取怪物们的气息！但是为什么要这样呢？难道是为了给冒险岛世界制造混乱吗？不管怎样，赶紧把这一情况报告给格莱特吧。我还要再调查几个地方，所以你先去报告吧。")

response = sm.sendAskYesNo("那么现在立刻把你送去埃德尔斯坦。准备好了吗？")

if response:
    sm.warp(310000000)
    sm.startQuest(parentID)

else:
    sm.sendSayOkay("Let me know when you're ready to be warped.")