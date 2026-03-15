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
            cm.sendNormalTalk("（使用#i2630359#海螺之后，隐约听到了脚步声。）", 2, 1013406, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("哇，那是什么？魔法海螺？", 4, 1013442, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("嗯……好像是吧。", 2, 1013406, true, true)
                } else {
                    if (status === a++) {
                        cm.askYesNo("必须移动到#b危险的森林虫之地3#k。", 2, 1013406)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("出发！！", 4, 1013442, false, true)
                        } else {
                            if (status === a++) {
                                cm.forceStartQuest(35964, "");
                                cm.updateInfoQuest(35950, "00=h1;01=h0;02=h0;03=h0;04=h0;05=h0;06=h0");
                                cm.updateInfoQuest(35950, "00=h1;01=h0;02=h0;03=h0;04=h0;05=h0;06=h0;07=h1");
                                cm.updateInfoQuest(35950, "00=h1;01=h0;02=h0;03=h0;04=h0;05=h0;06=h0;07=h1;08=h1");
                                cm.OnStartNavigation(100051037, 0, "west00", 35964);
                                cm.dispose()
                            }
                        }
                    }
                }
            }
        }
    }
}

function end(e, d, c) {
    if (status == 0 && e == 0) {
        cm.dispose();
        return
    }(e == 1) ? status++ : status--;
    selectionLog[status] = c;
    var b = -1;
    if (status <= b++) {
        cm.dispose()
    } else {
        if (status == b++) {
            cm.sendNormalTalk("哇！！你怎么把低贱的人类带来了！凯斯帕，你不会是背叛我们了吧！", 4, 1013441, false, true)
        } else {
            if (status === b++) {
                var a = cm.getPlayer().getGender() == 0 ? "哥哥" : "姐姐";
                cm.sendNormalTalk("不，巴尔特哥哥。这个" + a + "其实是个好人。她帮我找到了遗物。", 4, 1013442, true, true)
            } else {
                if (status === b++) {
                    cm.sendNormalTalk("哼，大人们都一样。最后都会背叛我们！", 4, 1013441, true, true)
                } else {
                    if (status === b++) {
                        cm.sendNormalTalk("（背叛？）", 2, 1013408, true, true)
                    } else {
                        if (status === b++) {
                            cm.forceCompleteQuest(35964);
                            cm.gainExp(713849);
                            cm.dispose()
                        }
                    }
                }
            }
        }
    }
};