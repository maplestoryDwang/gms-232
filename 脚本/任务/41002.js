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
            cm.forceStartQuest(41002, "");
            cm.updateInfoQuest(41002, "");
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
            cm.sendNormalTalk("什么？是亚可说把蛋交给我的？哪有这回事！亚可明明是放弃了这颗蛋，凭什么说是亚可的？我早就知道，你们谁都不愿意把蛋交给我。", 0, 2411002, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("听说你之前打碎过？那样的话，肯定不会交给你这个有前科的人了。谁知道你还能做什么坏事情出来？", 2, 2411002, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("不是坏事！我只是……想把蛋孵得温暖一点。作为一个哈夫林，我也想好好照看这些蛋。仅仅是因为我曾经打碎过蛋的话，谁都不会愿意把蛋交给我的……", 0, 2411002, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("不过我觉得这次是我错了。我只是想把蛋要回来，根本都没想到过蛋会不会受伤。我还是得把这颗蛋还给亚可。从今往后我绝对不会再动手了……", 0, 2411002, true, true)
                    } else {
                        if (status === a++) {
                            cm.updateInfoQuest(41002, "NpcSpeech=24110021");
                            cm.dispose()
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
            cm.askMenu("克鲁巴真的让我去负责吗？真是太好了！我还一直为这事担心呢。那么依托以后再也不会接近蛋了吧？\r\n#b#L0#(说出了依托的初衷。)#l", 1, 2411003)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("是嘛……原来依托这么想要一颗蛋啊。不过他竟然想撬开蛋壳，那还真不能交给他了。不过，让他在我旁边一起照看倒是可以。", 0, 2411003, false, true)
            } else {
                if (status === a++) {
                    cm.updateInfoQuest(41002, "");
                    cm.forceCompleteQuest(41002);
                    cm.gainExp(340000);
                    cm.gainItem(4310085, 3);
                    cm.dispose()
                }
            }
        }
    }
};