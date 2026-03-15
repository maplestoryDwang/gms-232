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
            cm.forceStartQuest(41003, "");
            cm.updateInfoQuest(41003, "");
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
            cm.sendNormalTalk("你问如何分辨纽曼和塔咪？这还不简单！塔咪比纽曼矮1mm呢！", 0, 2411007, false, true)
        } else {
            if (status === a++) {
                cm.updateInfoQuest(41003, "NpcSpeech=24110071");
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
            cm.sendNormalTalk("分辨纽曼和塔咪的方法？一看就知道了，纽曼的眼睛比塔咪大多了！", 0, 2411004, false, true)
        } else {
            if (status === a++) {
                cm.updateInfoQuest(41003, "NpcSpeech=24110071/24110042");
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
            cm.sendNormalTalk("看来这对双胞胎又开始淘气了。在哈夫林看来他们俩有很多不同点，但如果是你的话肯定无法分辨。最显眼的一点嘛，那就是#r塔咪#k总是#b面带微笑#k？", 0, 2411000, false, true)
        } else {
            if (status === a++) {
                cm.updateInfoQuest(41003, "NpcSpeech=24110071/24110042/24110003");
                cm.dispose()
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
            cm.askMenu("好了，那就猜猜看。我是谁～\r\n#b#L0#纽曼#l\r\n#b#L1#塔咪#l", 5, 2411020)
        } else {
            if (status === a++) {
                if (b == 0) {
                    cm.sendNormalTalk("啊，你怎么知道我是纽曼的？看来你火眼金睛啊？好！按照约定，这礼物就归你了。", 4, 2082000, false, true)
                } else {
                    cm.sendNormalTalk("叮！错了。我叫塔咪，塔咪。重新和我们对话，回答问题吧。", 4, 2082001, false, true);
                    cm.dispose()
                }
            } else {
                if (status === a++) {
                    cm.forceCompleteQuest(41003);
                    cm.gainExp(280000);
                    cm.gainItem(2040530, 1);
                    cm.gainItem(4310085, 3);
                    cm.gainItem(2001530, 20);
                    cm.dispose()
                }
            }
        }
    }
};