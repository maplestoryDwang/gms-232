#   [Job Adv] (Lv.100)   Way of the NightLord / Shadower

heroicPentagon = 4031517
heroicStar = 4031518

sm.setSpeakerID(2081400) # Hellin
if sm.getChr().getLevel() >= 100:
    sm.sendNext("你知道这宽广的冒险岛世界上，有多少飞侠吗？他们都在争分夺秒地打猎，期待变得强大。但能够来到这里的人，不过是极少数。比你想的还要少。")
else:
    sm.sendSayOkay("你虽然拥有了强大的力量，可你了解这力量所带来的责任吗？如果了解，才能理解#b4次转职#k的重要性。不是单纯的强大，而是#b伴随着鲜明意志的强大#k... 不是单纯的冒险，而是#b将冒险岛世界引导向正确方向的冒险#k.")


sm.sendNext("拥有强大力量的冒险家则要成为#b一名英雄#k，肩负帮助世界的责任。你也是一样。这不是让你放弃冒险的乐趣。只不过是说要时刻关注自己的责任罢了。")

response = sm.sendAskYesNo("因此……4次转职的试炼就登场了。这个试炼是要考验你，看你是否能够超越一名冒险家的界限，成为一名英雄。你知道#r天鹰#k和#r火焰龙#k吗？去和它们对决，找到#b英雄军章#k和#b英雄之星#k。它们会证明你是否具备英雄的资质。")

if response:
    sm.sendSayOkay("那么我们就进入试炼吧。你要挑战#r天鹰#k和#r火焰龙#k吗？")
    sm.startQuestNoCheck(parentID)
else:
    sm.sendSayOkay("真正的英雄并非注定。而是由一个人如何使用自己所具有的强大力量决定的。那就是英雄……")
sm.dispose()
