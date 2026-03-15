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
            cm.forceStartQuest(23630, "");
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/23630.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk("你回来啦。我听其他转职官说了。所有人都决定接收你为同伴。\r\n欢迎你。从现在开始，你就是反抗者的同伴了。我再来自我介绍一下。", 0, 2151003, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("我叫#b#p2151003##k，表面上我是医生，但在反抗者内部，我负责对外工作。\r\n今后如果有什么不明白的地方，你可以去问其他转职官。", 0, 2151003, true, true)
            } else {
                if (status === a++) {
                    cm.forceStartQuest(23630, "");
                    cm.forceCompleteQuest(23630);
                    cm.forceStartQuest(23129, "1");
                    cm.gainExp(1000);
                    cm.sendNormalTalk("对了，以后有时间的话，你可以去见见埃德尔斯坦的村民们，帮他们解决困难。因为你必须了解现在的埃德尔斯坦是个什么样的地方。", 0, 2151003, true, false);
                    cm.dispose()
                }
            }
        }
    }
};