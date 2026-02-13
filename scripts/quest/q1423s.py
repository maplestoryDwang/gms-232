# Path of the Bandit
darkMarble = 4031013
job = "Bandit"
monster = "Swamp Monster"
DARK_LORD = 1052001
sm.setSpeakerID(DARK_LORD)

sm.setSpeakerID(1052001)
sm.sendNext("你想选择侠客之路吗？侠客是主要使用短剑的飞侠。是在近距离快速攻击敌人，抢走敌人身上的东西的职业……")


sm.sendNext("其特长是通过#b精准短刀#k和#b快速短刀#k提高短剑的熟练度和攻击速度后，用#b神通术#k攻击多个敌人，抢夺物品，或者使用#b回旋斩#k向敌人发动连续攻击。")

response = sm.sendAskYesNo("#b金钱护盾#k和#b盾防精通#k可以使近距离战斗的危险降到最低。通过#b命运#k，可以提高自己的攻击力。")

if response:
    sm.warp(910370000, 0) # Thief Test Site
    sm.startQuestNoCheck(parentID)
else:
    sm.sendSayOkay("嗯……好像说太多了。你想选择侠客之路吗？那就参加考试吧。不是什么复杂的考试。只要进入准备好的考场，消灭怪物，搜集#r30个含有黑暗力量的珠子#k就可以了。内容非常简单，但是……那里的怪物比普通怪物更强，会不会有问题呢？")
