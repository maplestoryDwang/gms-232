# 1403 - Bowmen of Henesys

sm.setSpeakerID(10200)
response = sm.sendAskYesNo("欢迎来到弓箭手培训中心。能直接见到你，我感到很高兴……好的，我来让你变成弓箭手。")

if response:
    if sm.canHold(1452051) and sm.canHold(2060000, 2000):
        sm.giveItem(1452051)
        sm.giveItem(2060000, 2000)
        sm.jobAdvance(300)
        sm.setSTR(4)
        sm.setINT(4)
        sm.setDEX(4)
        sm.setLUK(4)
        sm.setAP(4 + chr.getLevel() * 5)
        sm.completeQuest(parentID)
        sm.sendSayOkay("冒险之书任务已完成。")
    else:
        sm.sendSayOkay("现在你已经是弓箭手了。如果你想学习弓箭手的新技能，请打开技能窗。我给了你一些#bSP#k，你可以用它来提升技能。")