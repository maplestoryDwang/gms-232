# The Path of a Night Walker - Completion

sm.setSpeakerID(1101006) # Eckhart
if sm.canHold(1472000) and sm.canHold(2070000, 2000):
    sm.jobAdvance(1400) # Night Walker 1st Job
    sm.addSP(5)
    sm.setSTR(4)
    sm.setINT(4)
    sm.setDEX(4)
    sm.setLUK(4)
    sm.setAP(4 + chr.getLevel() * 5)
    sm.completeQuest(parentID)
    sm.giveItem(1472000) # Garnier
    sm.giveItem(2070000, 2000) # Subi Throwing Stars
    sm.sendSayOkay("你真的决定了吗？……世上是没有后悔药的。希望你慎重考虑。你要选择夜行者之路吗？")
else:
    sm.sendSayOkay("从现在开始，你就是夜行者了。为了纪念你成为我们的同伴，我会给你分配一些能力。")