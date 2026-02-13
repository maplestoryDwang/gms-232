#   [Job Adv] (Lv.60)   Way of the Crusader

blackCharm = 4031059
job = "Crusader"
sm.setSpeakerID(2020008) # Tylus

sm.setSpeakerID(2020008)
if sm.hasItem(blackCharm, 1):
    sm.sendNext("呵呵，和#b其他次元的武术教练#k战斗，感觉如何？那是#b神圣的石头#k拥有的惊人力量所展现的神秘幻象……武术教练同意将你引向更强的战士之路，所以才会现身。")
else:
    sm.sendSayOkay("和真正的战士#b武术教练#k战斗，你获得了成为真正战士的资格。剩下的事情，就是转职成#b勇士#k了……好了，做好接受新力量的准备了吗？")
    sm.dispose()


sm.consumeItem(blackCharm, 1)
sm.jobAdvance(111) # Crusader
sm.completeQuestNoRewards(parentID)
sm.sendSayOkay("现在你是#b勇士#k啦。#b剑和斧#k的大师，真正的战士，去尽情施展你的力量吧。")