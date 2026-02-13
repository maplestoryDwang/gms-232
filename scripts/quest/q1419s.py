#   [Job Adv] (Lv.30)   Way of the Hunter

darkMarble = 4031013
job = "Hunter"
monster = "Stone Golem"
ATHENA_PIERCE = 10200
sm.setSpeakerID(ATHENA_PIERCE)

sm.setSpeakerID(1012100)
sm.sendNext("你想成为真正的猎人吗？猎人是使用弩和弓中的#b弓#k的职业，可以快速射箭，击退敌人。")


sm.sendNext("当然必须熟悉可以熟练使用弓的#b精准弓#k，可以快速使用弓的#b快速箭#k，以及#b终极弓#k。为了用好弓，还不能忘了学习#b物理训练#k。")

response = sm.sendAskYesNo("你不妨感受一下发射装备炸弹的箭矢来使敌人昏迷的#b爆炸箭#k, 就会明白远程攻击的最强者为何会是弓箭手了。")

if response:
    sm.warp(910070000, 0) # Archer Test Site
    sm.startQuestNoCheck(parentID)
else:
    sm.sendSayOkay("要想使用弓，当然必须带着箭矢。但是如果学习了#b无形箭#k，就算箭矢全部用光，也不用担心。因为可以借助灵魂的力量，不需要箭矢就能使用弓。")
