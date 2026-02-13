# id 34390 ([Daily Quest] Collect 50 Ahtuin shells)
from net.swordie.ms.enums import DailyEntry
from net.swordie.ms.constants import QuestConstants
sm.completeQuestNoCheck(parentID)
chr.getQuestManager().removeQuest(parentID)
remainingTasks = sm.getRemainingDailyEntries(DailyEntry.Esfera)
sm.reduceDailyEntry(DailyEntry.Esfera)
remainingTasks = sm.getRemainingDailyEntries(DailyEntry.Esfera)
sm.consumeItem(4036398, 50)
if remainingTasks <= 0:
    sm.createQuestWithQRValue(QuestConstants.ESFERA_COUNT_QUEST, "count=3")

sm.setSpeakerID(3003500) # Ollie
sm.setParam(2)
sm.sendNext("感谢你的努力工作。给，这是你的报酬，2个#i1712006:# #t1712006:#和1个#i2614029:# #t2614029:#。")
sm.setParam(0)
sm.sendSay("You have " + str(QuestConstants.ESFERA_WEEKLY_AMOUNT - remainingTasks) + " tasks completed this week. Thanks to you, we're one step closer to understanding this place.")
