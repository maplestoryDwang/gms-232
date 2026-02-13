# Only the Brave - 3rd job Xenon
MEDAL = 1142577

if chr.getJob() == 3610 and chr.getLevel() >= 60:
    if sm.canHold(MEDAL):
        sm.setJob(3611)
        sm.addAP(5)
        sm.addSP(5)
        sm.addMaxHP(150)
        sm.addMaxMP(150)
        sm.completeQuest(parentID)
    else:
        sm.sendSayOkay("你好？我找你来，是有重要的事情。不知你知不知道，我们接到了报告，说#p2154009#还在找你。")