# id 34277 ([Daily Quest] Defeat 200 Strong Gangsters)
from net.swordie.ms.enums import DailyEntry
from net.swordie.ms.constants import QuestConstants
sm.completeQuestNoCheck(parentID)
chr.getQuestManager().removeQuest(parentID)
remainingTasks = sm.getRemainingDailyEntries(DailyEntry.Morass)
sm.reduceDailyEntry(DailyEntry.Morass)
remainingTasks = sm.getRemainingDailyEntries(DailyEntry.Morass)
if remainingTasks <= 0:
    sm.createQuestWithQRValue(QuestConstants.MORASS_COUNT_QUEST, "count=3")

sm.setSpeakerID(3003432) # Jean
sm.setParam(2)
sm.sendNext("委托已经完成好了吗？真是厉害！我把2个#i1712005:# #t1712005:#和1个#i2614029:# #t2614029:#给你。")
sm.setParam(0)
sm.sendSay("You have " + str(QuestConstants.MORASS_WEEKLY_AMOUNT - remainingTasks) + " tasks completed this week. Thanks to you, we're one step closer to understanding this place.")
