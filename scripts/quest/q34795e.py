# id 34395 ([Daily Quest] Collect 50 Aranea Claws)
from net.swordie.ms.enums import DailyEntry
from net.swordie.ms.constants import QuestConstants
sm.completeQuestNoCheck(parentID)
chr.getQuestManager().removeQuest(parentID)
remainingTasks = sm.getRemainingDailyEntries(DailyEntry.Esfera)
sm.reduceDailyEntry(DailyEntry.Esfera)
remainingTasks = sm.getRemainingDailyEntries(DailyEntry.Esfera)
sm.consumeItem(4036403, 50)
if remainingTasks <= 0:
    sm.createQuestWithQRValue(QuestConstants.ESFERA_COUNT_QUEST, "count=3")

sm.setSpeakerID(3003500) # Ollie
sm.setParam(2)
sm.sendNext("#b(You gave Ollie the information you obtained from observing the monsters up close.)#k")
sm.setParam(0)
sm.sendSay("You have " + str(QuestConstants.ESFERA_WEEKLY_AMOUNT - remainingTasks) + " tasks completed this week. Thanks to you, we're one step closer to understanding this place.")
