#   [Job Adv] (Lv.60)   Way of the Mage IL

blackCharm = 4031059
job = "Mage (Ice, Lightning)"
sm.setSpeakerID(2020009) # Robeira

if sm.hasItem(blackCharm, 1):
    sm.sendNext("#b其他次元的汉斯#k怎么样……呵呵，这就是#b神圣的石头#k所拥有的力量。可以在其他次元召唤出分身战斗的力量。你得谢谢#b汉斯#k，他为你做了这么细致的准备……")
else:
    sm.sendSayOkay("通过和真正的魔法师汉斯的战斗，你也获得了成为真正魔法师的资格……剩下的事情就是转职了。你想成为更强的魔法师——巫师吗？")
    sm.dispose()


sm.consumeItem(blackCharm, 1)
sm.jobAdvance(221) # Mage IL
sm.completeQuestNoRewards(parentID)
sm.sendSayOkay("冒险之书任务已完成。")