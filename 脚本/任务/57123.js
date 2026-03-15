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
            cm.sendNormalTalk_Bottom("首先要记住冒险岛、金银岛和神秘岛。这三个区域必须要牢牢记住才行。因为金银岛就是接下来要赶赴的区域。除此之外，还有名为圣地和埃德尔斯坦的区域。不过可以放到之后再继续调查。", 57, 0, false, true)
        } else {
            if (status === a++) {
                cm.askAcceptDecline_Bottom("先按照木野子的提议，前往射手村去见赫丽娜吧。通过西边的导游妮妮前往冒险岛后，再去射手村就可以找到她了。", 57, 0)
            } else {
                if (status === a++) {
                    cm.forceStartQuest(57123, "");
                    cm.OnStartNavigation(800000000, 1, "9111063", 0);
                    cm.npc_LeaveField("oid=101437");
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
    }(d == 1) ? status++ : status--;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            var e = cm.getQuest();
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/57123.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk_Bottom("#face0#我们是第一次见面吧。你来这里做什么？", 37, 1012100, false, true)
        } else {
            if (status === a++) {
                cm.forceCompleteQuest(57123);
                cm.dispose()
            }
        }
    }
};