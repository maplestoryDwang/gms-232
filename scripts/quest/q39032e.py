# id 39032([Daily Quest] Defeat 200 Patriarch Birdsharks) field 450002000
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
sm.sendNext("#b(You gave Lyck the information you obtained from defeating the monsters.)#k")
sm.setParam(0)
sm.sendSay("You have " + str(QuestConstants.CHU_CHU_WEEKLY_AMOUNT -remainingTasks) + " tasks completed this week. Thanks to you, we're one step closer to understanding this place.")
