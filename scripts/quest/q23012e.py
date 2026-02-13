# 23012 - Wild Hunter 1st job advancement quest

XBOW_ID = 1462092

sm.setSpeakerID(2151002) # Belle
if chr.getJob() == 3000 and chr.getLevel() >= 10:
    sm.setJob(3300)
    sm.addSP(5)
    sm.completeQuest(parentID)
    sm.giveItem(XBOW_ID, 1)
    sm.giveSkill(30001061) # Capture
    sm.giveSkill(30001062) # Call of the Hunter
    sm.giveItem(2061000, 2000)
    sm.setSTR(4)
    sm.setINT(4)
    sm.setDEX(4)
    sm.setLUK(4)
    sm.setAP(4 + chr.getLevel() * 5)
    sm.sendSayOkay("谢谢你这么爽快地接受……你真的经过深思熟虑了吗？豹弩游侠虽然很强，但也很难操作。在操作骑宠的同时，还必须进行攻击，因此在操控方面要求很高。你能做到吗？希望你仔细考虑清楚之后再回答我。")
else:
    sm.sendSayOkay("哈哈哈！很好！欢迎你正式成为反抗者。从现在开始，你就是豹弩游侠了。希望你能骑着骑宠，灵活机动地消灭敌人。")
