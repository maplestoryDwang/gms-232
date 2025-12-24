# id 34148 ([Daily Quest] Deliver 30 Oblivion Inhibitor), field 450001000
from net.swordie.ms.enums import DailyEntry
from net.swordie.ms.constants import QuestConstants
item = 4034934
sm.consumeItem(item, sm.getQuantityOfItem(item))
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
