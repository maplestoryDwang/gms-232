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
            cm.sendNormalTalk_Bottom("总之，这里也出现了怪物。虽然学生们不会到这里来，但还是提前处理掉那些怪物为好", 37, 1530030, false, true)
        } else {
            if (status === a++) {
                cm.askYesNo_Bottom("说不定在消灭怪物的过程中，还会发现什么可疑之处呢，对吧？", 37, 1530030)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("我在这里等你。#b（潜入尘土地带，消灭怪物，获得证物吧。）#k", 37, 1530030, false, true)
                } else {
                    if (status === a++) {
                        cm.forceStartQuest(32860, "");
                        cm.dispose()
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
            cm.sendNormalTalk_Bottom("你搜集到证物了吗？那是什么啊？难道是……", 37, 1530030, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("番茄酱？健康又好吃的番茄酱？有人将番茄酱洒在地上？", 37, 1530030, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("哈哈哈，笑死我了。真厉害！究竟是谁在恶作剧呢？", 37, 1530030, true, true)
                } else {
                    if (status === a++) {
                        cm.forceStartQuest(32860, "");
                        cm.gainExp(Math.pow(cm.getLevel(), 3));
                        cm.forceCompleteQuest(32860);
                        cm.gainItem(4034174, -15);
                        cm.dispose()
                    }
                }
            }
        }
    }
};