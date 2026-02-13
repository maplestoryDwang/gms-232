#   [Job Adv] (Lv.60)    Blade Lord

blackCharm = 4031059
job = "Blade Lord"
sm.setSpeakerID(2020011) # Alec

if sm.hasItem(blackCharm, 1):
    sm.sendNext("你顺利通过了考试……很不错嘛？虽然#b其他次元的达克鲁#k只是分身，但我没想到你能战胜他。达克鲁让我通过#b神圣的石头#k召唤分身，我还说干嘛兴师动众的，看来达克鲁的话没错。")
    sm.consumeItem(blackCharm, 1)
    sm.jobAdvance(433) # Blade Lord
    sm.completeQuestNoRewards(parentID)
    sm.sendSayOkay("同强大的飞侠达克鲁间的战斗会令你成为真正的飞侠……尽管你本人可能不希望这么早就遇上他。现在只剩下转职这一步了。你准备好成为更强大的飞侠-血刀了吗？")
else:
    sm.sendSayOkay("冒险之书任务已完成。")


