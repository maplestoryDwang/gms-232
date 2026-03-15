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
            cm.forceStartQuest(41000, "");
            cm.updateInfoQuest(41000, "");
            cm.dispose()
        }
    }
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
        if (status == a++) {
            cm.askMenu("什么？是亚可派来的？看来亚可又想独占这个蛋了！不行，这蛋是我的，绝对不能给，绝对不能让步！\r\n#b#L0#好像亚可只是担心蛋啊？#l", 0, 2411002)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("亚可最贪心了！每次都想独占。不过这颗蛋是我已经看中的，所以让亚可去找别的蛋吧。", 0, 2411002, false, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("这小子……！", 4, 2400005, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("……真想揍他一顿。", 4, 2400006, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("算了吧。对这么一个小家伙动手，只能是我吃亏。", 4, 2400005, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("那怎么办……？两个人谁都不会放弃的……", 4, 2400006, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("去找找村里的贤者#r克鲁巴#k，怎么样？如果是个贤者，肯定会有个结论的。说不定，还会给这些不听话的小子一点颜色瞧瞧呢？", 4, 2400005, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.updateInfoQuest(41000, "NpcSpeech=24110021");
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
            cm.gainExp(340000);
            cm.forceCompleteQuest(41000);
            cm.gainItem(4310085, 3);
            cm.dispose()
        }
    }
};