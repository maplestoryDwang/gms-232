#   [Job Adv] (Lv.30)   Brawler of the High Seas

darkMarble = 4031013
job = "Brawler"
monster = "OctoPirate"
KYRIN = 10204
sm.setSpeakerID(KYRIN)

sm.setSpeakerID(1090000)
sm.sendNext("你想选择拳手之路吗？那是用拳头或指节拳甲和敌人战斗的勇敢的海盗。虽然动作华丽，但操作起来却很不容易……你对自己有自信吗？")
sm.sendNext("最具代表性的技能是#b龙卷风拳#k。用力向上猛击，创造出真正的龙卷风。#b贯骨击#k也是非常帅的技能，可以向前突进，攻击敌人。")
sm.sendNext("当然，基本技能也很重要。学会#b精准拳甲#k和#b急速拳#k后，可以让你的拳甲更快、更强。通过#b血量增加#k，可以提高血量。通过增强忍耐力的#b忍耐#k，可以持续恢复体力和魔量。")
sm.sendNext("通过让内心平静提高自己的攻击力和命中值的#b静心#k，也是拳手不可或缺的核心技能之一。")
sm.sendNext("说明好像太长了吗？好的，拳手的考试马上开始。你必须通过简单的考试才行。只要进入准备好的考场，消灭所有怪物，把#r它们掉落的物品#k交给我就行。但是怪物们的防御力很高，对付起来可能不太容易。这些一定要记住。")

response = sm.sendAskYesNo("考试的时候如果药水用光了，必须#b放弃任务重新开始#k。为了防止发生这种事情，一定要事先准备好充足的药水。考试马上开始。接受的话，我马上把你送到考试船舱去。")

if response:
    sm.warp(912040000, 0) # Pirate Test Site
    sm.startQuestNoCheck(parentID)
else:
    sm.sendSayOkay("准备好再和我对话吧")
