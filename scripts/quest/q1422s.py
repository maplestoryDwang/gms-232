# Path of the Assassin

darkMarble = 4031013
job = "Night Lord"
monster = "Swamp Monster"
DARK_LORD = 1052001
sm.setSpeakerID(DARK_LORD)

sm.setSpeakerID(1052001)
sm.sendNext("你想选择刺客之路吗？呼……这可不是一条容易走的路。刺客是主要使用飞镖的飞侠，擅长远距离快速攻击敌人。移动速度非常快，攻击力很强，被称为1:1的最强者。")


sm.sendNext("为了熟练使用投掷武器，需要学习#b精准暗器#k和#b快速暗器#k。通过#b强力投掷#k，看准敌人的弱点发动致命一击，这也是刺客的特点之一。")

response = sm.sendAskYesNo("有没有新的攻击技能？当然有。有召唤强大的风之护符，击退敌人的#b风之护符#k，还有飞出会爆炸的飞镖，给目标及其周围的敌人造成伤害的#b爆裂飞镖#k技能。")

if response:
    sm.warp(910370000, 0) # Thief Test Site
    sm.startQuestNoCheck(parentID)
else:
    sm.sendSayOkay("好像说得太多了……你想成为刺客吗？那样的话，必须通过一个简单的考试……不是什么复杂的考试。只要进入准备好的考场，消灭怪物，搜集#r30个黑暗之珠#k就行。但问题是……那些怪物比普通怪物更强。")
