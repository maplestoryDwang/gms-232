#   [Job Adv] (Lv.60)   Way of the Berserker

blackCharm = 4031059
job = "Berserker"
sm.setSpeakerID(2020008) # Tylus

if sm.hasItem(blackCharm, 1):
    sm.sendNext("呵呵，和#b其他次元的武术教练#k战斗，感觉如何？那是#b神圣的石头#k拥有的惊人力量所展现的神秘幻象……武术教练同意将你引向更强的战士之路，所以才会现身。")
else:
    sm.sendSayOkay("通过肉搏战的考验, 你已经获得了成为真正战士的资格。现在剩下的就是转职成为真正的战士#b狂战士#k……嗯, 你已经准备好接受全新的力量了吗？")
    sm.dispose()


sm.consumeItem(blackCharm, 1)
sm.jobAdvance(131) # Crusader
sm.completeQuestNoRewards(parentID)
sm.sendSayOkay("冒险之书任务已完成。")
