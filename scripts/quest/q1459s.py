#   [Job Adv] (Lv.100)   Way of the Buccaneer / Corsair

heroicPentagon = 4031860
heroicStar = 4031861

sm.setSpeakerID(2081500) # Samuel
if sm.getChr().getLevel() >= 100:
    sm.sendNext("你知道有多少海盗在这片宽广的冒险岛世界上游荡吗？那些不计其数的海盗中，能够站在这里的人少之又少。比你想的还要少的所。你就是这样强大的人。")
else:
    sm.sendSayOkay("拥有了如此强大的力量，自然要担负起相应的责任。因为强大的力量与责任如影随形。你不明白？我是说#b4次转职#k会伴随着责任通行。不是单纯的强大，而是#b伴随着鲜明意志的强大#k... 不是单纯的冒险，而是#b将冒险岛世界引导向正确方向的冒险#k。")


sm.sendNext("拥有强大力量的冒险家则要成为#b一名英雄#k，肩负帮助世界的责任。你也是一样。当然我并不是让其放弃冒险家的自由。但是你作为在这个世界上冒险的冒险家，难道不应该为这世界负起一份责任吗？")

response = sm.sendAskYesNo("责任的到来决定必须进行4次转职的试炼。这个试炼就是要考验你，看你是否能够超越一名冒险家的局限，成为位英雄。去击败传说中能够识别英雄的生物#r天鹰#k和#r火焰龙#k，找到#b英雄军章#k和#b英雄之星#k。")

if response:
    sm.sendSayOkay("那么我们就按照你的选择，进入试炼。你要挑战#r天鹰#k和#r火焰龙#k吗？")
    sm.startQuestNoCheck(parentID)
else:
    sm.sendSayOkay("真正的英雄并非天生的，而是由后天培养的……我相信你可以成为一名英雄。")
sm.dispose()
