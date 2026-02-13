#   [Job Adv] (Lv.30)   Way of the Fighter

darkMarble = 4031013
job = "Fighter"
DANCES_WITH_BALROG = 10202
sm.setSpeakerID(DANCES_WITH_BALROG)

sm.setSpeakerID(1022000)

sm.sendNext("你想走剑客之路吗？我来为你简单地说明一下剑客。剑客是最一般意义上的战士。主要使用的武器是#b剑#k和#b斧#k。")


sm.sendNext("作为战士，剑客的技能中有很多自我强化技能。让自己熟练使用武器的 #b精准武器#k，造成强力伤害的#b终极剑斧#k，提高攻击速度的#b快速武器#k，使身体变得强壮的#b物理训练#k等等。")

response = sm.sendAskYesNo("当然还有更强大的攻击技能。你知道#b轻舞飞扬#k技能吗？它是挥舞刀剑或者斧头给予眼前的敌人施加二连击的技能, 要是有了它, 狩猎也会比之前容易很多。")

if response:
    sm.warp(910230000, 0)
    sm.startQuestNoCheck(parentID)
else:
    sm.sendSayOkay("攻击时若能激活#b斗气集中#k的话, 就可以累积斗气点数, 并通过它使用更强大的斗气消耗技能。")
