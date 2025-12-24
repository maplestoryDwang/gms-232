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
        sm.sendSayOkay("Please make some space in your EQUIP tab for your medal.")