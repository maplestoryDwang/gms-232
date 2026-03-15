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
            cm.askAcceptDeclineS("关于寻找秘宝的人的预言……我来取回秘宝，是很久以前就已经预知的事情吗？先回到飞鱼丸那里去吧。")
        } else {
            if (status == a++) {
                cm.forceStartQuest();
                cm.dispose()
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/25597.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk("没想到你这么快就找回秘宝啦。我对那个地方的人的性情早就有所耳闻 …………听说那里的人非常封闭，真是令人吃惊呢。", 0, 1032209, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("据说有什么启示。在我达到之前，我就已经感觉到，所有的事情已经被安排好。", 2, 1032209, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("说不定你在接过秘宝时，所有的事情都已经注定。", 1, 1032209, true, true)
                } else {
                    if (status === a++) {
                        cm.forceCompleteQuest(25597);
                        cm.gainExp(4792);
                        cm.forceStartQuest(25507, "3");
                        cm.gainItem(4033330, -1);
                        cm.updateInfoQuest(500833, "");
                        cm.forceCompleteQuest(62417);
                        cm.forceStartQuest(9571, "0");
                        cm.forceStartQuest(31190, "0");
                        cm.forceStartQuest(42102, "0");
                        cm.forceStartQuest(7621, "");
                        cm.dispose()
                    }
                }
            }
        }
    }
};