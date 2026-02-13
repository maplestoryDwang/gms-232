#   [Job Adv] (Lv.100)   Way of the Hero / Paladin / Dark Knight

heroicPentagon = 4031343
heroicStar = 4031344
HARMONIA = 2081100
sm.setSpeakerID(HARMONIA)

if sm.getChr().getLevel() >= 100:
    sm.sendNext("这宽广无际的冒险岛世界上，存在着不计其数的战士，他们之中能够见到我的人，不过是凤毛麟角。你能拥有如此强大的力量，真是令人吃惊……但是强大并不意味着伟大。")
else:
    sm.sendSayOkay("你应该已经知道，伴随强大力量而来的是艰巨的责任。冒险家可以达到的终极境界，#b4次转职#k和完全与以往不同的巨大责任息息相关。不是单纯的强大，而是#b伴随着鲜明意志的强大#k... 不是单纯的冒险，而是#b将冒险岛世界引导向正确方向的冒险#k.")


sm.sendNext("不错，即使是你，一个单纯享受在冒险岛世界冒险生活的冒险家，也有不可推卸的责任。拥有强大力量的冒险家则要成为#b一名英雄#k，肩负帮助世界的责任。")

response = sm.sendAskYesNo("我要试试你是否拥有成为英雄的潜质。你知道能够判定英雄的两个怪物……#r天鹰#k和#r火焰龙#k吗？和它们对决，找到#b英雄军章#k和#b英雄之星#k。这便是你要面临的试炼……")

if response:
    sm.sendSayOkay("那么我们就进入试炼吧。你要挑战#r天鹰#k和#r火焰龙#k吗？")
    sm.startQuestNoCheck(parentID)
else:
    sm.sendSayOkay("我坚信，真正的英雄并非天生的，而是由后天培养的。曾经只是一名冒险家的你，能够为冒险岛世界做出多大的贡献呢……")
sm.dispose()
