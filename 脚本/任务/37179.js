var status = -1;
var selectionLog = [];

function start(d, c, b) {
    (d == 1) ? status++ : status--;
    var a = -1;
    if (!cm.isQuestActive(37169)) {
        cm.removeAll(4036503);
        cm.removeAll(4220196)
    }
    if (!cm.isQuestActive(37173)) {
        cm.removeAll(4036505);
        cm.removeAll(4220197)
    }
    if (!cm.isQuestActive(37174)) {
        cm.removeAll(4036504)
    }
    if (!cm.isQuestActive(37176)) {
        cm.removeAll(4036506);
        cm.removeAll(4036507);
        cm.removeAll(4220198);
        cm.removeAll(2630243)
    }
    cm.warp(101000000, 0);
    cm.forceStartQuest();
    cm.dispose()
}

function stage0(d, c, b) {
    if (status == 0 && d == 0) {
        cm.dispose();
        return
    }(d == 1) ? status++ : status--;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status === a++) {
            cm.sendNext("有什么事吗？", 1032100)
        } else {
            if (status === a++) {
                cm.sendNext("啊……鲁安让你向我问好？", 1032100)
            } else {
                if (status === a++) {
                    cm.sendNext("看来你已经去过艾洛丁。", 1032100)
                } else {
                    if (status === a++) {
                        cm.sendNext("鲁安……有点特别。在我们之中也很特别。", 1032100)
                    } else {
                        if (status === a++) {
                            cm.sendNext("要是她能到魔法密林来，晒晒这温暖的阳光该有多好。", 1032100)
                        } else {
                            if (status === a++) {
                                cm.sendNextS("（向艾温转达了鲁安的问候。去向罗雯转达鲁安的问候吧。）")
                            } else {
                                if (status === a++) {
                                    cm.updateInfoQuest(37179, "NpcSpeech=10321001");
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

function stage1(d, c, b) {
    if (status == 0 && d == 0) {
        cm.dispose();
        return
    }(d == 1) ? status++ : status--;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status === a++) {
            cm.sendNext("嗯？鲁安让你向我问好？", 1032101)
        } else {
            if (status === a++) {
                cm.sendNext("啊……看来你已经去过艾洛丁了。那里怎么样？", 1032101)
            } else {
                if (status === a++) {
                    cm.sendNext("那也是一片美丽的森林。充满静谧，可以让人内心变得平静。", 1032101)
                } else {
                    if (status === a++) {
                        cm.sendNext("不过看上去好像没什么大问题。以鲁安的性格……你一定受累了吧？", 1032101)
                    } else {
                        if (status === a++) {
                            cm.sendNext("看来我得抽空去趟鲁安家。不知道她最近过得怎么样。", 1032101)
                        } else {
                            if (status === a++) {
                                cm.sendNext("谢谢你特地过来转达她的问候。", 1032101)
                            } else {
                                if (status === a++) {
                                    cm.sendNextS("（向罗雯转达了鲁安的问候。现在去找桉，把艾洛丁的秘密告诉她吧。)")
                                } else {
                                    if (status === a++) {
                                        cm.updateInfoQuest(37179, "NpcSpeech=10321001/10321012");
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

function stage2(d, c, b) {
    if (status == 0 && d == 0) {
        cm.dispose();
        return
    }(d == 1) ? status++ : status--;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status === a++) {
            cm.sendNext("啊！终于回来了吗？我一直都在等你。", 1012110)
        } else {
            if (status === a++) {
                cm.sendNextS("（把在秘密森林艾洛丁中发生的事情告诉桉。)")
            } else {
                if (status === a++) {
                    cm.sendNext("原来是这样啊。看来是我在瞎担心……什么时候我才能鼓起勇气，不再害怕呢……", 1012110)
                } else {
                    if (status === a++) {
                        cm.sendNext("谢谢你……为了我大老远跑这一趟。\r\n作为报答，我要送你一份小礼物。", 1012110)
                    } else {
                        if (status === a++) {
                            cm.updateInfoQuest(37179, "NpcSpeech=10321001/10321012/10121103");
                            cm.forceCompleteQuest();
                            cm.forceCompleteQuest(37180);
                            cm.gainItem(1143157, 1);
                            cm.gainMeso(1000000);
                            cm.gainExp(13240);
                            cm.dispose()
                        }
                    }
                }
            }
        }
    }
};