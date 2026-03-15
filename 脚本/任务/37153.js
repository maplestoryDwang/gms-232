var status = -1;
var selectionLog = [];

function start(d, c, b) {
    (d == 1) ? status++ : status--;
    var a = -1;
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
            cm.sendNext("南部森林？嗯……没想过要去那里，所以不知道。\r\n怎么？有什么好玩的东西吗？", 1032106)
        } else {
            if (status === a++) {
                cm.sendNextS("（维英好像不怎么感兴趣。去问问艾温吧。）")
            } else {
                if (status === a++) {
                    cm.updateInfoQuest(37153, "NpcSpeech=10321061");
                    cm.OnStartNavigation(101000000, 1, "1032100", 37153);
                    cm.dispose()
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
            cm.sendNext("南部森林……你为什么会对那里感兴趣呢？\r\n好奇心太强有时也不是什么好事。", 1032100)
        } else {
            if (status === a++) {
                cm.sendNextS("但是……")
            } else {
                if (status === a++) {
                    cm.sendNext("我跟你没什么好说的了。", 1032100)
                } else {
                    if (status === a++) {
                        cm.sendNextS("（艾温好像不想再说了。去问问罗雯吧。）")
                    } else {
                        if (status === a++) {
                            cm.updateInfoQuest(37153, "NpcSpeech=10321061/10321002");
                            cm.OnStartNavigation(101000000, 1, "1032101", 37153);
                            cm.dispose()
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
            cm.sendNext("嗯？你是？", 1032101)
        } else {
            if (status === a++) {
                cm.sendNext("南部森林？嗯……你去那里有什么事吗？", 1032101)
            } else {
                if (status === a++) {
                    cm.updateInfoQuest(37153, "NpcSpeech=10321061/10321002/10321013");
                    cm.forceCompleteQuest();
                    cm.gainExp(3700);
                    cm.dispose()
                }
            }
        }
    }
};