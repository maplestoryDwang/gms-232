# id 34133 ([Daily Quest] Defeat 200 Joyful Erdas), field 450001000
from net.swordie.ms.enums import DailyEntry
from net.swordie.ms.constants import QuestConstants
sm.completeQuestNoCheck(parentID)
chr.getQuestManager().removeQuest(parentID)
remainingTasks = sm.getRemainingDailyEntries(DailyEntry.VanishingJourney)
sm.reduceDailyEntry(DailyEntry.VanishingJourney)
remainingTasks = sm.getRemainingDailyEntries(DailyEntry.VanishingJourney)
if remainingTasks <= 0:
    sm.createQuestWithQRValue(QuestConstants.VANISHING_JOURNEY_COUNT_QUEST, "count=5")

sm.setSpeakerID(3003104) # Rona
sm.setParam(2)
sm.sendNext("#b(You gave Rona the information you obtained from observing the Blazing Erdas up close.)#k")
sm.setParam(0)
sm.sendSay("You have " + str(QuestConstants.VANISHING_JOURNEY_WEEKLY_AMOUNT -remainingTasks) + " tasks completed this week. Thanks to you, we're one step closer to understanding this place.")
