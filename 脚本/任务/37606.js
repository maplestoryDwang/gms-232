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
            cm.sendNormalTalk_Bottom("还要捕捉这些东西吗？", 56, 0, false, true, 1)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#贝尔大叔一定会喜欢的。", 36, 3004652, true, true, 1)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0#嗯……也许吧……", 36, 3004652, true, true, 1)
                } else {
                    if (status === a++) {
                        cm.askYesNo_Bottom("#face0#你能帮我收集20个#b紫色鼠肉#k吗？", 36, 3004652, 1)
                    } else {
                        if (status === a++) {
                            cm.forceStartQuest(37606, "");
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/37606.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk_Bottom("#face0#果然好快！", 36, 3004652, false, true, 1)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#往右边走。请跟我来。", 36, 3004652, true, true, 1)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("怎么看上去那么兴奋？", 56, 0, true, true, 1)
                } else {
                    if (status === a++) {
                        cm.dispose();
                        cm.warp(993176003, 0, true)
                    }
                }
            }
        }
    }
};