#   [Job Adv] (Lv.100)   Way of the Arch Mage FP / Arch Mage IL / Bishop

heroicPentagon = 4031511
heroicStar = 4031512

sm.setSpeakerID(2081200) # Gritto
if sm.getChr().getLevel() >= 100:
    sm.sendNext("你知道这宽广的冒险岛世界上，存在着多少魔法师吗？你又是否知道，他们之中能够像你这样站到我面前的人，不过是凤毛麟角。如果你认识到……自己究竟拥有的力量有多强大，我们的谈话就会容易得多。")
else:
    sm.sendSayOkay("伴随强大力量而来的是艰巨的责任……你应该已经知道。因此你应该明白，#b4次转职#k的重要意义。不是单纯的强大，而是#b伴随着鲜明意志的强大#k... 不是单纯的冒险，而是#b将冒险岛世界引导向正确方向的冒险#k.")


sm.sendNext("和以前以怡情为目的的冒险岛探险完全不同。拥有强大力量的冒险家则要成为#b一名英雄#k，肩负帮助世界的责任。这责任……你能担当起来吗？")

response = sm.sendAskYesNo("你知道#r天鹰#k和#r火焰龙#k吗？和它们对决，找到#b英雄军章#k和#b英雄之星#k。这便是你要面临的试炼……")

if response:
    sm.sendSayOkay("那么我们就进入试炼吧。你要挑战#r天鹰#k和#r火焰龙#k吗？")
    sm.startQuestNoCheck(parentID)
else:
    sm.sendSayOkay("我坚信，真正的英雄并非天生的，而是由后天培养的。我会拭目以待，看你是否能成为英雄。")
sm.dispose()
