# 23164 - Blaster 3rd job advancement

sm.setSpeakerID(2151000) # Elex
if chr.getJob() == 3710 and chr.getLevel() >= 60:
    sm.setJob(3711)
    sm.addSP(5)
    sm.completeQuest(23164)
    sm.sendSayOkay("你消灭了#o9001032#啊！做得真棒！这样一来，我们村庄能量不足的现象应该能够得到一定的解决了！现在才总算能够喘口气呢！哈哈哈！真厉害，你算是为了村庄建了大功啊！")
else:
    sm.sendSayOkay("有这样的能力应该足够了，我原以为还为时尚早，可你总是能出乎我的预期啊，那我就将更强大的爆破手技能传授于你！相信你能够安全地操控这股力量！")