# 23011 - Battle mage 1st job advancement quest

STAFF_ID = 1382000

sm.setSpeakerID(2151001) # Briston
if chr.getJob() == 3000 and chr.getLevel() >= 10:
    sm.setJob(3200)
    sm.addSP(5)
    sm.setSTR(4)
    sm.setINT(4)
    sm.setDEX(4)
    sm.setLUK(4)
    sm.setAP(4 + chr.getLevel() * 5)
    sm.completeQuest(parentID)
    sm.giveItem(STAFF_ID, 1)
    sm.sendSayOkay("你决心成为一名唤灵斗师吗？现在还可以重新选择。只要停止对话，放弃任务，然后和其他人对话就行。你要考虑清楚。你真的要选择唤灵斗师吗？你觉得这个职业适合你的反抗者之路吗？")
else:
    sm.sendSayOkay("很好！欢迎你正式成为反抗者。从现在开始你就是唤灵斗师了。作为一名战斗的魔法师，希望你能勇敢地冲在最前面和敌人战斗。")
