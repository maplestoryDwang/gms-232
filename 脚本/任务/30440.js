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
            cm.sendNormalTalk_Bottom("#face0#小荳啊~起来了，小荳。\r\n小荳？哎哟，她去哪儿了？小荳不见了！", 37, 2074100, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face2#得去工作了，她难不成是逃跑了吗？\r\n哎哟喂！我总觉得有点不安啊，终究还是！", 37, 2074100, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face2#要是这次的工作再被开了，也许问题就更加严重了。\r\n我得去找找小荳可能会去的地方了！", 37, 2074100, true, true)
                } else {
                    if (status === a++) {
                        cm.forceStartQuest(30440, "");
                        cm.dispose()
                    }
                }
            }
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
            cm.sendNormalTalk_Bottom("哞哞哞？小荳又不见了吗哞哞哞？\r\n哞……哞，没办法了。\r\n这也不是一两回了，我也不知道她去哪儿了哞哞。", 37, 2074144, false, true)
        } else {
            if (status === a++) {
                cm.updateInfoQuest(30440, "NpcSpeech=20740281");
                cm.dispose()
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
        if (status == a++) {
            cm.sendNormalTalk_Bottom("呱呱，她又不见了？\r\n这次一天就不见了？呱呱。\r\n哎哟……看来现在是真的得放弃了呱呱。\r\n我……哎哟……我也不知道了。", 37, 2074145, false, true)
        } else {
            if (status === a++) {
                cm.updateInfoQuest(30440, "NpcSpeech=20740281/20740292");
                cm.dispose()
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
        if (status == a++) {
            cm.sendNormalTalk_Bottom("嗯……她消失不见了？\r\n她不会是早早就去工作了吧？\r\n为什么你没去找乐夫大哥呢？", 37, 2074001, false, true)
        } else {
            if (status === a++) {
                cm.updateInfoQuest(30440, "NpcSpeech=20740281/20740292/20740013");
                cm.dispose()
            }
        }
    }
}

function stage3(d, c, b) {
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
            cm.dispose();
            cm.warp(224000049, 20, true)
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
            cm.dispose();
            cm.warp(224000049, 20, true)
        }
    }
};