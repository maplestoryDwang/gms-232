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
            cm.sendNormalTalk_Bottom("宣传册？那个……", 37, 1530050, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("等一下！你不用说了！反正又是被尘土拿走了吧！", 57, 0, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("……", 37, 1530050, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("……这不是我的错啊。加油吧。\r\n\r\n#b(狩猎尘土，搜集10个庆典宣传册。)#k ", 37, 1530050, true, true)
                    } else {
                        if (status === a++) {
                            cm.forceStartQuest(33520, "");
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
            cm.sendNormalTalk_Bottom("哎呦，看看这上面的灰。", 37, 1530050, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("啊，你要走了吗？演出加油啊，我也会去看的。", 37, 1530050, true, true)
            } else {
                if (status === a++) {
                    cm.gainItem(4034347, -10);
                    cm.dispose();
                    cm.warp(330002620, 1)
                }
            }
        }
    }
};