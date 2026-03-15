var status = -1;
var selectionLog = [];

function start(d, c, b) {
    if (status == 0 && d == 0) {
        cm.dispose();
        return
    }(d == 1) ? status++ : status--;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            cm.sendNormalTalk_Bottom("不过，#b#p9310578##k为什么总是戴着面具啊？不热么？", 57, 9310578, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("呃呃……呃呃……这可不是面具，而是我的脸！！呃呃……呃呃……我的脸又大又丑，真是难为情啊！！", 37, 9310578, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("人类看到我就吓得逃跑了。我可没想着要伤害他们啊……呃呃", 37, 9310578, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("我也想拥有和人类一样的柔软肌肤和黑色眼珠。那样的话，人们就会好好对待我吧！", 37, 9310578, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("我有个不错的主意。", 57, 9310578, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("是什么？", 37, 9310578, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("戴个面具吧，如何？虽然你现在的样子也挺可……可爱的！但如果戴上面具的话，你就不必在人类面前畏畏缩缩，也不用担心吓跑人类了。", 57, 9310578, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.askYesNo_Bottom("真的……可以吗？那你能不能帮我找来一个#b人类容貌的面具#k呢？", 37, 9310578)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("要想制作人脸面具，那就最好去找#p9310034#。他应该知道相关的方法。前往#m701220000#寻找#p9310034#吧。", 57, 9310578, false, true)
                                        } else {
                                            if (status === a++) {
                                                cm.forceStartQuest(62018, "");
                                                cm.dispose()
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}

function end(d, c, b) {
    if (status == 0 && d == 0) {
        cm.dispose();
        return
    }(d == 1) ? status++ : status--;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            cm.sendNormalTalk_Bottom("哇哦~你真的把面具弄来啦！只要戴上这个，我应该也能变得有自信了吧。\n你真是个不错的人类啊！谢谢你！", 37, 9310578, false, true);
            cm.gainItem(4034664, -1)
        } else {
            if (status === a++) {
                cm.fieldEffect_KinesisEXP(Math.pow(cm.getLevel(), 3) / 5);
                cm.gainExp(Math.pow(cm.getLevel(), 3) / 5);
                cm.forceCompleteQuest(62018);
                cm.effect_Voice("Field.img/masteryBook/EnchantSuccess", 100);
                cm.dispose()
            }
        }
    }
};