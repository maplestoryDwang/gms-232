# 23160 - Blaster 1st job advancement quest

ARM_CANNON_ID = 1582000

sm.setSpeakerID(2151000) # Elex
if chr.getJob() == 3000 and chr.getLevel() >= 10:
    sm.setJob(3700)
    sm.addSP(5)
    sm.completeQuest(parentID)
    sm.giveItem(ARM_CANNON_ID, 1)
    sm.giveItem(1353400, 1) # Secondary (Rudimentary Charges)
    sm.setSTR(4)
    sm.setINT(4)
    sm.setDEX(4)
    sm.setLUK(4)
    sm.setAP(4 + chr.getLevel() * 5)
    sm.sendSayOkay("你已经决心成为爆破手了吗？你还有可以推翻这个选择的机会，结束对话，放弃任务后，只要对其他家伙说话就好。好好考虑，你真的打算当爆破手吗？你真的觉得这个职业适合你吗？")
else:
    sm.sendSayOkay("好吧！欢迎你正式成为反抗者，那么为了纪念你当上了爆破手，我来简单说明一下爆破手的技能。")