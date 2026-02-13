# id 1466 (A Greater Power), field 270000000
sm.setSpeakerType(3)
sm.setParam(4)
sm.setInnerOverrideSpeakerTemplateID(2140001) # Memory Keeper
sm.sendNext("怎么样，狩猎过那里的怪物后你有何感想？\r\n\r\n#b#L0#它们比我想象的强很多。面对它们的时候，我无法发挥全力。")
sm.sendNext("那也没办法…肉体的力量和灵魂的力量是不同的。#b神秘力量#k只有长时间强化艾尔达之力的人才能发挥出来…………。")
sm.sendNext("不过，我有个方法。我可以将你体内的艾尔达变为#b神秘徽章#k的形态。\r\n\r\n#b#L0#神秘徽章？")
sm.sendNext("所谓#b神秘徽章#k，就是与守护你灵魂的图腾类似的刻印。如果你想在艾尔达的激流中保持灵魂的强大，你必须要有这徽章。")
if sm.canHold(1712000):
    sm.giveItem(1712000)
    sm.completeQuest(parentID)
else:
    sm.sendNext("我会先给你一个最基本的徽章。\r\n\r\n它还没有完全成形。不过，你在那里累积足够的经验之后，#b它不仅能够完全成形，还能强化艾尔达之力。#k经验是慢慢累积的，你不必太着急。\r\n#b#i1712000:# #t1712000:# 1个#k")