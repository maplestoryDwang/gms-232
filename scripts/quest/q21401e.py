# 21401 - [Job Adv] (Lv.100)   Aran
sm.setSpeakerID(1201002)
sm.sendNext("谢谢你，战神。多亏了你，才阻止了我的暴走。真是万幸……！以主人的实力，这点小事当然不在话下了！")
if sm.sendAskYesNo("现在来看，你的等级已经很高了。既然能够打倒暴走状态下的我……那么唤醒你过去全部的力量也应该是可以的了。"):
    if not sm.canHold(1142132):
        sm.sendSayOkay("沉睡的技能全都唤醒了……毕竟好久没用了，还需要熟悉熟悉。不过，应该进步会很快的。")
        sm.dispose()
    sm.giveItem(1142132)
    sm.jobAdvance(2112)
    sm.completeQuest(parentID)
    sm.sendNext("喂，你在哪呢？大事不好了！你快来趟#b#m104000004##k吧！\r\n#b#L0# (喂…………！#p1002104#可是一直喊我英雄的…………)#l")
    sm.sendNext("#b只要你接受，我就喊你#m104000000##k，你要以最快的速度赶过来！知道吗？")
