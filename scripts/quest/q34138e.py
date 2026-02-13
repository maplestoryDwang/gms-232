# id 34137([Daily Quest] Defeat 200 Tranquil Erdas), field 450001000
from net.swordie.ms.enums import DailyEntry
from net.swordie.ms.constants import QuestConstants
sm.completeQuestNoCheck(parentID)
chr.getQuestManager().removeQuest(parentID)
remainingTasks = sm.getRemainingDailyEntries(DailyEntry.VanishingJourney)
sm.chat(str(remainingTasks))
sm.reduceDailyEntry(DailyEntry.VanishingJourney)
remainingTasks = sm.getRemainingDailyEntries(DailyEntry.VanishingJourney)
if remainingTasks <= 0:
    sm.createQuestWithQRValue(QuestConstants.VANISHING_JOURNEY_COUNT_QUEST, "count=5")

sm.setSpeakerID(3003104) # Rona
sm.setParam(2)
sm.sendNext("来，我送你1个#i1712001:# #t1712001:#和1个#i2614029:# #t2614029:#。在你的帮助下，我们一定能早日查明异空间的真相。")
sm.setParam(0)
sm.sendSay("You have " + str(QuestConstants.VANISHING_JOURNEY_WEEKLY_AMOUNT -remainingTasks) + " tasks completed this week. Thanks to you, we're one step closer to understanding this place.")
