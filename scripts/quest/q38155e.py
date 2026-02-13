# id 38155 ([Daily Quest] Defeat 700 Conductorbots)
from net.swordie.ms.enums import DailyEntry
from net.swordie.ms.constants import QuestConstants
from net.swordie.ms.client.character.items import BodyPart
remainingTasks = sm.getRemainingDailyEntries(DailyEntry.HotelArcus)
sm.setSpeakerID(3005016) # Archelon
sm.setParam(2)
sm.sendNext("你回来啦，#b#y")
sm.setParam(0)
sm.sendSay("##k任务完成了是吗。")
if remainingTasks == 1:
    sm.sendNext("已发放#e#b5个#i1713001##z1713001##k#n，请查看装备栏。")
    if sm.levelAuthSymbol(BodyPart.AUSArcs, 1):
        sm.completeQuestNoCheck(parentID)
        chr.getQuestManager().removeQuest(parentID)
        sm.completeQuestNoCheck(parentID)
        sm.reduceDailyEntry(DailyEntry.HotelArcus)
        sm.sendSayOkay("I've leveled up your symbol. Please come back next week!")
    else:
        sm.sendSayOkay("Something went wrong.")
else:
    sm.completeQuestNoCheck(parentID)
    chr.getQuestManager().removeQuest(parentID)
    sm.completeQuestNoCheck(parentID)
    if remainingTasks > 0:
        sm.reduceDailyEntry(DailyEntry.HotelArcus)