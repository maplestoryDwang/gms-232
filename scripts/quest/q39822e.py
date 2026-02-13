# id 39822 ([Daily Quest] Defeat 1000 Monster Gulls)
from net.swordie.ms.enums import DailyEntry
from net.swordie.ms.constants import QuestConstants
from net.swordie.ms.client.character.items import BodyPart
remainingTasks = sm.getRemainingDailyEntries(DailyEntry.Cernium)
sm.setSpeakerID(3004419) # Flame Priest
sm.setParam(2)
sm.sendNext("##k任务完成了是吗。")
sm.setParam(0)
sm.sendSay("已发放#e#b5个#i1713000##z1713000##k#n，请查看装备栏。")
if remainingTasks == 1:
    sm.sendNext("你回来啦，#b#y")
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