#   [Job Adv] (Lv.30)   Way of the Page

darkMarble = 4031013
job = "Page"
DANCES_WITH_BALROG = 10202
sm.setSpeakerID(DANCES_WITH_BALROG)

sm.setSpeakerID(1022000)

sm.sendNext("你想选择准骑士之路吗？准骑士是拥有自制力，防备敌人，用强大的力量保护他人的人。主要使用的武器是#b剑#k和#b钝器#k。")


sm.sendNext("作为战士，准骑士的技能中有很多自我强化技能。让自己熟练使用武器的 #b精准武器#k，造成强力伤害的#b终极剑钝器#k，提高攻击速度的#b快速武器#k，使身体变得强壮的#b物理训练#k等等。")

response = sm.sendAskYesNo("不仅如此。对于准骑士而言, 还有#b威胁#k技能, 即可以在一定时间内震慑多数敌人。也算是向敌人真实地展现冷酷的准骑士之特点吧？")

if response:
    sm.warp(910230000, 0)
    sm.startQuestNoCheck(parentID)
else:
    sm.sendSayOkay("当然还有更强大的攻击技能。你知道#b火焰冲击和寒冰冲击#k技能吗？它是瞬间给武器赋予火属性或者冰属性, 并以此给予敌人属性伤害的技能, 若有了它, 狩猎也会比之前轻松很多的。")
sm.dispose()
