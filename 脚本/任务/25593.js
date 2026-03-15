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
            cm.sendNextS("今后一定要避免收到光明和黑暗力量的摆布，发生这样的事情。以前一直以为光明的力量是守护所有人的力量……看来是我太无知了。")
        } else {
            if (status == a++) {
                cm.askAcceptDeclineS("现在差不多该回去了。完成附近的事情之后，启动极光三棱镜吧。")
            } else {
                if (status == a++) {
                    cm.forceStartQuest();
                    cm.dispose()
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/25593.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk("怎么样啦？", 0, 1032209, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("如预想的一样，秘宝中发出的光之力量发生了变质，污染了怪物。曾经和平的休养地如今陷入了突如其来的混乱之中。", 2, 1032209, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("可惜啊。如果是以前，欧罗拉一定会提前阻止这种现象发生的……也好，起码现在光之力量不会再被滥用了。辛苦你了。", 1, 1032209, true, true)
                } else {
                    if (status === a++) {
                        cm.forceCompleteQuest(25593);
                        cm.gainExp(7265);
                        cm.forceStartQuest(25507, "2");
                        cm.gainItem(4033329, -1);
                        cm.dispose()
                    }
                }
            }
        }
    }
};