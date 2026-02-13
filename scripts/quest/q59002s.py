# 59002 - Brave Like a Hero

sm.setSpeakerID(9390306)
sm.sendNext("等等,你刚才说,你会成为英雄?")
sm.setPlayerAsSpeaker()
sm.sendNext("嗯!我一定会成为冒险岛5大英雄一样的大英雄!")
sm.setSpeakerID(9390306)
sm.sendNext("切!!我一定会成为英雄的!\r\n你怎么才会相信我呢?")
sm.setPlayerAsSpeaker()
sm.sendNext("若你敢进入村东#b野狼森林#k的话,我就相信你。\r\n知道吗?那里危险的连大人们都不敢轻易进去呢!")
sm.setSpeakerID(9390306)
if sm.sendAskYesNo("好,我去去就来!"):
    sm.setPlayerAsSpeaker()
    sm.sendNext("哇,真的?不要勉强啊。")
    sm.setSpeakerID(9390306)
    sm.sendNext("哼,要想当英雄,这点程度就应该不在话下才是!")
    sm.setPlayerAsSpeaker()
    sm.sendNext("可笑啊,你怎么可能?")
    sm.startQuest(parentID)