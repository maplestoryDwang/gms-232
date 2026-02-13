# id 39047([Daily Quest] Defeat 200 Mournful Spirits)
from net.swordie.ms.enums import DailyEntry
from net.swordie.ms.constants import QuestConstants
sm.completeQuestNoCheck(parentID)
chr.getQuestManager().removeQuest(parentID)
remainingTasks = sm.getRemainingDailyEntries(DailyEntry.Arcana)
sm.reduceDailyEntry(DailyEntry.Arcana)
remainingTasks = sm.getRemainingDailyEntries(DailyEntry.Arcana)
if remainingTasks <= 0:
    sm.createQuestWithQRValue(QuestConstants.ARCANA_COUNT_QUEST, "count=3")

sm.setSpeakerID(3003309) # Tree Spirits
sm.setParam(2)
sm.sendNext("     谢谢你对我们的帮助。请接受这2个#i1712004:# #t1712004:#和1个#i2614029:# #t2614029:#。")
sm.setParam(0)
sm.sendSay("You have " + str(QuestConstants.ARCANA_WEEKLY_AMOUNT -remainingTasks) + " tasks completed this week. Thanks to you, we're one step closer to understanding this place.")
