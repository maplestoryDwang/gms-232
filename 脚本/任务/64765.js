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
            cm.sendNormalTalk_Bottom("#b（执行调查任务，等待暗影出现并消灭它，不要忘记。）", 56, 0, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("队长！你看见了吧？我简直充满了力量！照这样下去，我应该马上就可以升级了。", 36, 9401029, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("升级之后，我们就可以前往更深处了~！", 36, 9401029, true, true)
                } else {
                    if (status === a++) {
                        cm.playerMessage(5, "[深渊远征队教程]远征队队员会随深渊探险时间成长。");
                        cm.playerMessage(5, "[深渊远征队教程]可通过左侧远征队UI查看远征队队员的经验值和等级。");
                        cm.updateInfoQuest(64753, "point=5;level=2;rank=0");
                        cm.forceStartQuest(64765, "");
                        cm.dispose()
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/64765.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.dispose();
            cm.warp(867147011, 0, false)
        }
    }
};