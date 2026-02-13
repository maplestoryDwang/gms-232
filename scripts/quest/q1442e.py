#   [Job Adv] (Lv.60)   Way of the Hermit

blackCharm = 4031059
job = "Hermit"
sm.setSpeakerID(2020011) # Arec

if sm.hasItem(blackCharm, 1):
    sm.sendNext("你顺利通过了考试……很不错嘛？虽然#b其他次元的达克鲁#k只是分身，但我没想到你能战胜他。达克鲁让我通过#b神圣的石头#k召唤分身，我还说干嘛兴师动众的，看来达克鲁的话没错。")
    sm.consumeItem(blackCharm, 1)
    sm.jobAdvance(411) # Hermit
    sm.completeQuestNoRewards(parentID)
    sm.sendSayOkay("和真正的飞侠达克鲁的战斗，让你变成了真正的飞侠……虽然你自己还没感觉到。现在剩下的事情就只有转职了。做好成为更强的飞侠——无影人的准备了吗？")
else:
    sm.sendSayOkay("冒险之书任务已完成。")


