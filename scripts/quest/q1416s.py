#   [Job Adv] (Lv.30)   Way of the Mage IL

darkMarble = 4031013
job = "Mage (Ice, Lightning)"
monster = "Zombie Lupin"

sm.setSpeakerID(1032001) # Grendel the Really Old
sm.sendNext("你想选择冰雷法师吗？因为主要使用冰属性和电属性的攻击魔法，因此被称为冰雷法师。")


sm.sendNext("还蛮有魔法师的样子的么, 还会使用较高等级的魔法。如会吸收敌人魔量的#b魔力吸收#k或者可提高队员魔力的#b精神力#k, 还有可使用更强大之魔法的基本技能#b咒语精通#k和#b智慧激发#k等等。")

response = sm.sendAskYesNo("不过冰雷系法师的特点当属向敌人射出强大冰块的#b冰冻术#k和生成电场并向6个敌人施放强力闪电的#b雷电术#k。两者都是非常强大的攻击技能。")

if response:
    sm.warp(910140000, 0) # Magician Test Site
    sm.startQuestNoCheck(parentID)
else:
    sm.sendSayOkay("说明这样就够了吧……？魔法要直接使用才会体会到其中的乐趣。你想选择冰雷法师之路吗？选择的话，我就来考考你有没有成为法师的资格。")
