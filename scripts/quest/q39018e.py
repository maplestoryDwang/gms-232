# id 39018([Daily Quest] Defeat 200 Bighorn Pinedeers), field 450002000
from net.swordie.ms.enums import DailyEntry
from net.swordie.ms.constants import QuestConstants
sm.completeQuestNoCheck(parentID)
chr.getQuestManager().removeQuest(parentID)
remainingTasks = sm.getRemainingDailyEntries(DailyEntry.ChuChu)
sm.reduceDailyEntry(DailyEntry.ChuChu)
remainingTasks = sm.getRemainingDailyEntries(DailyEntry.ChuChu)
if remainingTasks <= 0:
    sm.createQuestWithQRValue(QuestConstants.CHU_CHU_COUNT_QUEST, "count=3")

sm.setSpeakerID(3003152) # Rona
sm.setParam(2)
sm.sendNext("舔舔！食材都收集好了吗？这是奖励！1个#i1712002:# #t1712002:#和1个#i2614029:# #t2614029:#！舔！")
sm.setParam(0)
sm.sendSay("You have " + str(QuestConstants.CHU_CHU_WEEKLY_AMOUNT -remainingTasks) + " tasks completed this week. Thanks to you, we're one step closer to understanding this place.")
