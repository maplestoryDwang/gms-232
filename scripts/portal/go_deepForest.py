# Portal towards Slurpy Tree Habitat. Used for ChuChu prequests
if sm.hasQuest(34215) or sm.hasQuestCompleted(34215):
    sm.warpInstanceIn(450002250, 0, False)
    sm.setInstanceTime(20 * 60)
    instance = chr.getInstance()
    instance.setForcedReturn(450002010)
else:
    sm.chat("I should progress through the chuchu questline more before entering here.")
