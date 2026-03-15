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
            cm.sendNormalTalk_Bottom("#face0#嗯？你问我知不知道他们为什么要来到这里？这个嘛，毕竟我连他们到底是什么人都不清楚。就更不知道他们对这些茁壮成长的桃树有什么仇，要来毁坏我们的果林了。", 37, 2091003, false, true)
        } else {
            if (status === a++) {
                cm.askAcceptDecline_Bottom("#face0#如果你对这个问题特别感兴趣，不妨前往武陵寺院拜访那里的道功大人。道功大人对武陵之内发生的一切事情都了若指掌。", 37, 2091003)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0#只要走出武陵右侧的大门，就能立刻看到武陵寺院了。道功大人可是仙人中的仙人，相信他一定能给出你想要的答案。", 37, 2091003, false, true)
                } else {
                    if (status === a++) {
                        cm.forceStartQuest(57147, "");
                        cm.dispose();
                        cm.warp(250000000, 6, false)
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
            var e = cm.getQuest();
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/57147.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk_Bottom("#face0#你什么也不用说。我知道，你是有事想要询问我道功吧。", 37, 2091001, false, true)
        } else {
            if (status === a++) {
                cm.forceCompleteQuest(57147);
                cm.gainExp(1536020);
                cm.dispose()
            }
        }
    }
};