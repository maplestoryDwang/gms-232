#   [Job Adv] (Lv.30)   Way of the Cleric

darkMarble = 4031013
job = "Cleric"
monster = "Zombie Lupin"

sm.setSpeakerID(1032001) # Grendel the Really Old
sm.sendNext("你想选择牧师之路吗？牧师和其他系列的魔法师相比稍微有点特别。拥有很多#b恢复#k和#b辅助#k系列的技能。")


sm.sendNext("当然, 最根本的还是魔法师。可以吸收敌人魔量的#b魔力吸收#k, 可发挥更强大魔法的基本技能 #b咒语精通#k, #b智慧激发#k等, 它都可以使用。而且还可以通过#b神之保护#k技能来减少自己所受的伤害。")

response = sm.sendAskYesNo("牧师最具代表性的技能是恢复魔法#b群体治愈#k。那是可以使包括自己在内周围所有队员的血量恢复的惊人魔法。不仅如此，还可以通过#b祝福#k提高队员的能力值，在组队的时候会很受欢迎。")

if response:
    sm.warp(910140000, 0) # Magician Test Site
    sm.startQuestNoCheck(parentID)
else:
    sm.sendSayOkay("另外还有攻击魔法呢。如可以用#b圣箭术#k攻击多数的敌人。这个魔法最大的特点就是可以给恶魔系或者不死系的怪物施加极大伤害, 并且还可以恢复队员的体力。")
