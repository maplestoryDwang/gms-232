# id 34390 ([Daily Quest] Defeat 200 Weakened Dreamkeepers)
from net.swordie.ms.enums import DailyEntry
from net.swordie.ms.constants import QuestConstants
sm.completeQuestNoCheck(parentID)
chr.getQuestManager().removeQuest(parentID)
remainingTasks = sm.getRemainingDailyEntries(DailyEntry.Lachelein)
sm.reduceDailyEntry(DailyEntry.Lachelein)
remainingTasks = sm.getRemainingDailyEntries(DailyEntry.Lachelein)
if remainingTasks <= 0:
    sm.createQuestWithQRValue(QuestConstants.LACHELEIN_COUNT_QUEST, "count=3")

sm.setSpeakerID(3003209) # Gray Mask
sm.setParam(2)
sm.sendNext("#b(You gave Gray Mask the information you obtained from observing the Weakened Dreamkeepers up close.)#k")
sm.setParam(0)
sm.sendSay("You have " + str(QuestConstants.LACHELEIN_WEEKLY_AMOUNT - remainingTasks) + " tasks completed this week. Thanks to you, we're one step closer to understanding this place.")
