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
            cm.forceStartQuest();
            cm.dispose()
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/31505.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk("#b把敌人全部消灭了，用通讯设备进行联系吧。", 16, 0, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("嗯，看来你已经把敌人都消灭了。那么请执行接下来的任务。你继续往前走，会看到一个阶梯地区。或者你现在可能正在阶梯地区跟我通话。", 4, 3001100, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("请你进入阶梯地区。你先#r确认是否可以进入地下2层#k，再跟我通话。", 4, 3001100, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("#b(利用从#m401052003#进入#m401052100#的传送口进行移动，确认是否可以进入地下2层吧。)", 16, 0, true, true)
                    } else {
                        if (status === a++) {
                            cm.forceCompleteQuest(31505);
                            cm.gainExp(408000);
                            cm.dispose()
                        }
                    }
                }
            }
        }
    }
};