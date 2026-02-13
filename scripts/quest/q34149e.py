# id 34149 ([Daily Quest] Deliver 30 Extinction Inhibitor), field 450001000
from net.swordie.ms.enums import DailyEntry
from net.swordie.ms.constants import QuestConstants

item = 4034935
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
sm.sendNext("你搜集到了50个#t4034935:#。来，我把1个#i1712001:# #t1712001:#和1个#i2614029:# #t2614029:#送给你。搜集到的样本一定会对研究起到很大的帮助。")
sm.setParam(0)
sm.sendSay("You have " + str(QuestConstants.VANISHING_JOURNEY_WEEKLY_AMOUNT -remainingTasks) + " tasks completed this week. Thanks to you, we're one step closer to understanding this place.")
