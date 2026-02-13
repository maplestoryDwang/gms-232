#   [Job Adv] (Lv.60)   Way of the Outlaw

blackCharm = 4031059
job = "Cannon Trooper"
sm.setSpeakerID(2020013) # Pedro

if sm.hasItem(blackCharm, 1):
    sm.sendNext("你顺利通过了考试……很不错嘛？在那个地方见到#b凯琳#k，是不是很吃惊？虽然#b其他次元的凯琳#k只是分身，但是应该也很强……凯琳把你托付给我，看来她没有看错人。")
    sm.consumeItem(blackCharm, 1)
    sm.jobAdvance(531) # Cannon Trooper
    sm.completeQuestNoRewards(parentID)
    sm.sendSayOkay("和真正的海盗凯琳的战斗，使你成为了真正的海盗。感觉到了吗？现在剩下的就是转职了。做好成为更强的海盗——毁灭炮手的准备了吗？")
else:
    sm.sendSayOkay("冒险之书任务已完成。")



