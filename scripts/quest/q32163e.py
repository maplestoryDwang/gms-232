# [Riena Strait] Maybe I Shouldn't have gotten a boat
from net.swordie.ms.constants import WzConstants

lumber = 4030022
exp = 17739

sm.setSpeakerID(1510005) # Daichi

sm.sendNext("木材全部搜集到了吗？")
sm.completeQuestNoRewards(32164) # [Riena Strait] Wood That's Good 1
sm.completeQuestNoRewards(32165) # [Riena Strait] Wood That's Good 2
sm.completeQuestNoRewards(32166) # [Riena Strait] Wood That's Good 3
sm.completeQuest(parentID)
sm.consumeItem(lumber, 3)
sm.giveExp(exp)

sm.sendSayOkay("谢谢你，勇士。看样子你对乘船有点天赋，我这下放心了。\r\n\r\n#b(和弗坦对话，开始执行正式的任务。）#k")
sm.dispose()
