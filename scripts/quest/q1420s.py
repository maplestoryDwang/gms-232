#   [Job Adv] (Lv.30)   Way of the Crossbowman

darkMarble = 4031013
job = "Crossbowman"
monster = "Stone Golem"
ATHENA_PIERCE = 10200
sm.setSpeakerID(ATHENA_PIERCE)

sm.setSpeakerID(1012100)
sm.sendNext("你想成为真正的射手(Crossbow Man)吗？射手是在弓和弩当中使用#b弩#k的弓箭手, 虽然它的攻击速度较慢, 但是却能射出比任何人都要强力精准的致命一击。")

sm.sendNext("当然必须熟悉可以熟练使用弩的#b精准弩#k，可以快速使用弩的#b快速弩#k，以及#b终极弩#k。为了用好弩，还不能忘了学习#b物理训练#k。")

response = sm.sendAskYesNo("你不妨感受一下发射可以穿透敌人的钢铁箭矢的#b穿透箭#k, 就会明白远程攻击的最强者为何会是弓箭手了。")

if response:
    sm.warp(910070000, 0)  # Archer Test Site
    sm.startQuestNoCheck(parentID)
else:
    sm.sendSayOkay("要想使用弩，当然必须带着箭矢。但是如果学习了#b无形箭#k，就算箭矢全部用光，也不用担心。因为可以借助灵魂的力量，不需要箭矢就能使用弩。")
