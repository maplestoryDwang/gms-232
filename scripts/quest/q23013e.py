# 23013 - Mechanic 1st job advancement quest

sm.setSpeakerID(2151002) # Belle
if chr.getJob() == 3000 and chr.getLevel() >= 10:
    sm.setJob(3500)
    sm.addSP(5)
    sm.completeQuest(parentID)
    sm.giveItem(1492000, 1) # Pistol
    sm.giveItem(2330000, 2000) # Bullets
    sm.setSTR(4)
    sm.setINT(4)
    sm.setDEX(4)
    sm.setLUK(4)
    sm.setAP(4 + chr.getLevel() * 5)
    sm.sendSayOkay("你决心成为机械师了吗？现在还有重新选择的机会。只要停止对话，放弃任务，然后和其他人对话就行。请你好好考虑一下。你真的要选择机械师吗？你认为这个职业适合你的反抗者之路吗？")
else:
    sm.sendSayOkay("欢迎你成为正式的反抗者。从现在开始，你就是机械师了。你身为可以操控机械的人，要利用所有知识和方法来对付眼前的敌人。")
