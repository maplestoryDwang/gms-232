# 1415 - [Job Adv] (Lv.30)   Way of the Mage FP

darkMarble = 4031013
job = "Mage (Fire, Poison)"
monster = "Zombie Lupin"

sm.setSpeakerID(1032001)
sm.sendNext("火毒法师就像名字所说，是法师，更高等级的称为巫师。因为可以使用的魔法分为火属性和毒属性，所以才被称为火毒法师。")


sm.sendNext("还蛮有魔法师的样子的么, 还会使用较高等级的魔法。如会吸收敌人魔量的#b魔力吸收#k或者可提高队员魔力的#b精神力#k, 还有可使用更强大之魔法的基本技能#b咒语精通#k和#b智慧激发#k等等。")

response = sm.sendAskYesNo("但是火毒系法师的特点无疑当属射出强力火焰箭的#b火焰赞歌#k与射出剧毒水滴连同周围的敌人全部中毒的#b毒雾术#k了。两者都是非常强大的攻击技能。")

if response:
    sm.warp(910140000, 0) # Magician Test Site
    sm.startQuestNoCheck(parentID)
else:
    sm.sendSayOkay("受的伤害会提高至给予敌人持续伤害的数量的#b元素吸收#k与生成火焰墙的#b燎原之火#k等也是非常有用的技能哦。")
