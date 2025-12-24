# id 39820 ([Daily Quest] Defeat 1000 Ebonstar Archers)
from net.swordie.ms.enums import DailyEntry
from net.swordie.ms.constants import QuestConstants
from net.swordie.ms.client.character.items import BodyPart
remainingTasks = sm.getRemainingDailyEntries(DailyEntry.Cernium)
sm.setSpeakerID(3004419) # Flame Priest
sm.setParam(2)
sm.sendNext("#b(You gave the Flame Priest the information you obtained from observing the monsters up close.)#k")
sm.setParam(0)
sm.sendSay("You have " + str(QuestConstants.CERNIUM_WEEKLY_AMOUNT - (remainingTasks - 1)) + " tasks completed this week. Thanks to you, we're one step closer to understanding this place.")
if remainingTasks == 1:
    sm.sendNext("You have completed all your tasks for the week. I will now level up your Sacred Symbol.")
    if sm.levelAuthSymbol(BodyPart.AUSCernium, 1):
        sm.completeQuestNoCheck(parentID)
        chr.getQuestManager().removeQuest(parentID)
        sm.completeQuestNoCheck(parentID)
        sm.reduceDailyEntry(DailyEntry.Cernium)
        sm.sendSayOkay("I've leveled up your symbol. Please come back next week!")
    else:
        sm.sendSayOkay("Something went wrong.")
else:
    sm.completeQuestNoCheck(parentID)
    chr.getQuestManager().removeQuest(parentID)
    sm.completeQuestNoCheck(parentID)
    if remainingTasks > 0:
        sm.reduceDailyEntry(DailyEntry.Cernium)