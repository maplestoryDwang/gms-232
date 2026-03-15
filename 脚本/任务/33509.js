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
            cm.sendNormalTalk_Bottom("那么……怎么办呢？", 37, 1530110, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("嗯……我们得做练习，就用简单的曲子开始吧。\r\n#b音乐室里应该有练习用的乐谱。#k", 37, 1530120, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#h0#，你能去把乐谱拿来吗？我们在这里设置乐器。", 37, 1530120, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom(" #b(去4楼音乐室吧。)#k", 57, 0, true, true)
                    } else {
                        if (status === a++) {
                            cm.forceStartQuest(33509, "");
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
            cm.sendNormalTalk_Bottom("哇呜，刚才那是什么？他们太可怕了！", 37, 1530030, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("嗯？但是，你怎么会来这里？\r\n我？我是来凑热闹的。", 37, 1530030, true, true)
            } else {
                if (status === a++) {
                    cm.gainExp(Math.pow(cm.getLevel(), 3));
                    cm.forceCompleteQuest(33509);
                    cm.dispose()
                }
            }
        }
    }
};