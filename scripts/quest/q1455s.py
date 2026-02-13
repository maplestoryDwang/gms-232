#   [Job Adv] (Lv.100)   Way of the Bowmaster / Marksman

heroicPentagon = 4031514
heroicStar = 4031515

sm.setSpeakerID(2081300) # Legor
if sm.getChr().getLevel() >= 100:
    sm.sendNext("这宽广无际的冒险岛世界上，存在着不计其数的弓箭手……他们之中几乎没有知道，能够站在这里的人，不过是极少数。说的就是你。你知道你拥有的力量多么强大吗？")
else:
    sm.sendSayOkay("你应该已经从赫丽娜学到，伴随强大力量而来的是艰巨的责任。你考虑过了吧？#b4次转职#k的重要性。不是单纯的强大，而是#b伴随着鲜明意志的强大#k... 不是单纯的冒险，而是#b将冒险岛世界引导向正确方向的冒险#k.")


sm.sendNext("与以前追求享乐也不会遭人非难的时代不同。拥有强大力量的冒险家则要成为#b一名英雄#k，肩负帮助世界的责任。你也是一样。")

response = sm.sendAskYesNo("因此，4次转职的试炼是很有必要的。你知道#r天鹰#k和#r火焰龙#k吗？去和它们对决，找到#b英雄军章#k和#b英雄之星#k。它们会证明你是否具备英雄的资质。")

if response:
    sm.sendSayOkay("I will wait for your arrival.")
    sm.startQuestNoCheck(parentID)
else:
    sm.sendSayOkay("Talk to me once you feel you are ready.")
sm.dispose()
