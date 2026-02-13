# 22001 |   Feeding Bull Dog (Evan intro)
sm.setSpeakerID(1013101)
sm.sendNext("一大早就来开玩笑，哈哈哈。别乱说了，快去给#p1013102#喂饭吧。")
sm.setPlayerAsSpeaker()
sm.sendNext("#b嗯？那不是#p1013101#的事情吗？")
sm.setSpeakerID(1013101)
if sm.sendAskYesNo("你这家伙！快去喂呀！！#p1013102#有多讨厌我，你也知道。哥哥我去的话，它一定会咬我的。猎犬喜欢你，你去给它送饭。"):
    if sm.canHold(4032447):
        sm.startQuest(parentID)
        sm.giveItem(4032447)
        sm.sendNext("你快到#b左边#k去，给#b#p1013102##k喂饲料。那个家伙好像肚子饿了，从刚才开始就一直在叫。")
        sm.sendSay("给#p1013102#喂完食之后，赶快回来。")
        sm.dispose()
    else:
        sm.sendSay("Please make space in your Etc Inventory.")
        sm.dispose()
else:
    sm.dispose()


