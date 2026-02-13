# 1404 - Thieves of Kerning City
sm.setSpeakerID(10203)
response = sm.sendAskYesNo("欢迎来到废都酒吧。如果不是以这种方式，你可能连入口都找不到。呵呵，出去的时候，一定要记住门在哪里。好了，做好成为飞侠的准备了吗？")

if response:
    if sm.canHold(2070000, 2000) and sm.canHold(1472000) and sm.canHold(1332007):
        sm.jobAdvance(400) # Thief
        sm.setSTR(4)
        sm.setINT(4)
        sm.setDEX(4)
        sm.setLUK(4)
        sm.setAP(4 + chr.getLevel() * 5)
        sm.completeQuest(parentID)
        sm.giveItem(2070000, 2000)
        sm.giveItem(1472000, 1)
        sm.giveItem(1332007, 1)
        sm.sendSayOkay("冒险之书任务已完成。")
    else:
        sm.sendSayOkay("现在你就是飞侠了。你已经可以使用飞侠技能了，打开技能窗看看吧。等级升高之后，就能学习更多的技能。")