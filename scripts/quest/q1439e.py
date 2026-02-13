#   [Job Adv] (Lv.60)   Way of the Ranger

blackCharm = 4031059
job = "Ranger"
sm.setSpeakerID(2020010) # Rene

sm.setSpeakerID(2020010)
if sm.hasItem(blackCharm, 1):
    sm.sendNext("见到了#b其他次元的赫丽娜#k，感觉如何？是不是很吃惊？这就是#b神圣的石头#k所拥有的惊人力量。可以在其他次元召唤出分身战斗的力量。据说这是#b赫丽娜#k特地为你准备的。")
else:
    sm.sendSayOkay("和真正的弓箭手赫丽娜的战斗，会把你引上真正的弓箭手之路……你感觉到自己成长了吗？现在剩下的事情就是转职了。做好成为更强的弓箭手——射手的准备了吗？")
    sm.dispose()


sm.consumeItem(blackCharm, 1)
sm.jobAdvance(311) # Ranger
sm.completeQuestNoRewards(parentID)
sm.sendSayOkay("冒险之书任务已完成。")
