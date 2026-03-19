function start(a) {
    var d = a.getNumberFromQuestInfo(16215, "point");
    var c = a.getNumberFromQuestInfo(16215, "chase");
    if (c <= 0) {
        a.setNumberForQuestInfo(16215, "chase", 0);
        return
    }
    if (c > 0) {
        a.getMap().killMonster(8644301);
        a.fieldEffect_PlayFieldSound("Sound/MiniGame.img/Result_Yut", 100);
        if (c > 5) {
            a.fieldEffect_SaveEff("Map/Effect3.img/savingSpirit/5")
        } else {
            a.fieldEffect_SaveEff("Map/Effect3.img/savingSpirit/" + c)
        }
    }
    for (var b = 36991; b < 36998; b++) {
        a.setPartner(0, b, 80002269, 0)
    }
    a.setNumberForQuestInfo(16215, "chase", 0);
    if (c == 1) {
        a.addNumberForQuestInfo(16215, "point", 200)
    } else {
        if (c == 2) {
            a.addNumberForQuestInfo(16215, "point", 500)
        } else {
            if (c == 3) {
                a.addNumberForQuestInfo(16215, "point", 1000)
            } else {
                if (c == 4) {
                    a.addNumberForQuestInfo(16215, "point", 1500)
                } else {
                    if (c == 5) {
                        a.addNumberForQuestInfo(16215, "point", 2500)
                    } else {
                        if (c == 6) {
                            a.addNumberForQuestInfo(16215, "point", 3500)
                        } else {
                            if (c == 7) {
                                a.addNumberForQuestInfo(16215, "point", 4500)
                            } else {
                                if (c == 8) {
                                    a.addNumberForQuestInfo(16215, "point", 6000)
                                }
                            }
                        }
                    }
                }
            }
        }
    }
};