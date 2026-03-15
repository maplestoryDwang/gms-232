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
            cm.forceStartQuest(23048, "");
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/23048.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk("给，这是#b新武器实验室门卡#k。", 0, 2154009, false, true)
        } else {
            if (status === a++) {
                cm.gainItem(4032743, 1);
                cm.sendNormalTalk("新武器实验室的入口在防御系统研究所3。虽然被隐藏了起来，但身为黑色之翼的一员，你应该知道在哪里吧？进去四处巡视一下，然后回来。虽然不会有什么问题，但是为了以防万一……看看有没有哪个#r鼠辈#k溜了进来，呵呵……", 0, 2154009, true, true)
            } else {
                if (status === a++) {
                    cm.OnStartNavigation(310060220, 0, "in00", 0);
                    cm.forceCompleteQuest(23048);
                    cm.dispose()
                }
            }
        }
    }
};