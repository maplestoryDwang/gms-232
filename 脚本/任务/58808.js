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
            cm.sendNormalTalk_Bottom("#face0#300只还不够。改为500只吧。", 37, 9111009, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("等我消灭了500只等级范围怪物，你就会做我同伴吧？", 57, 0, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0#到时候再说咯。", 37, 9111009, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("呃呃……我去了。", 57, 0, true, true)
                    } else {
                        if (status === a++) {
                            cm.forceStartQuest(58808, "");
                            cm.dispose()
                        }
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
    }
    status++;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            var e = cm.getQuest();
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/58808.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
        } else {
            if (status == a++) {
                cm.forceStartQuest();
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
            cm.sendNormalTalk_Bottom("#face0#你已经消灭500只怪物了？", 37, 9111009, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#哎呀，真烦人。", 37, 9111009, true, true)
            } else {
                if (status === a++) {
                    cm.forceCompleteQuest(58808);
                    cm.dispose()
                }
            }
        }
    }
};