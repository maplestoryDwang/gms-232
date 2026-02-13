# 1413 - [Job Adv] (Lv.30)   Way of the Spearman

darkMarble = 4031013
job = "Spearman"
DANCES_WITH_BALROG = 10202
sm.setSpeakerID(DANCES_WITH_BALROG)

sm.setSpeakerID(1022000)

sm.sendNext("你想选择枪骑士之路吗？枪骑士就如同名字一样，是使用枪或矛等长柄武器的职业。在战士中攻击范围最远，动作最华丽。")


sm.sendNext("作为战士，枪骑士的技能中有很多自我强化技能。让自己熟练使用武器的 #b精准武器#k，造成强力伤害的#b终极枪矛#k，提高攻击速度的#b快速武器#k，使身体变得强壮的#b物理训练#k等等。")

response = sm.sendAskYesNo("当然还有更强大的攻击技能。你知道#b贯穿刺透#k技能吗？它是攻击近距离敌人时会增加额外的暴击几率, 而攻击远距离敌人时会增加总体伤害的强大技能。")

if response:
    sm.warp(910230000, 0)
    sm.startQuestNoCheck(parentID)
else:
    sm.sendSayOkay("但是枪骑士的技能中最后名的应该是#b神圣之火#k。那是可以暂时提高包括自己在内的全体队员的最大血量和最大魔量的技能，在角色等级较高的时候仍然很有用。")
