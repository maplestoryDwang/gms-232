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
            cm.forceStartQuest(23034, "");
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/23034.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk("你把#o9001032#破坏掉啦！呵呵，果然不出我所料！我的眼光从来都没有错。我知道你一定可以做到。这样一来，我们村的能量不足现象暂时就可以缓解了。你真的为我们村立下了大功！", 0, 2151002, false, true)
        } else {
            if (status === a++) {
                cm.askYesNo("你的能力达到了这个程度，我就可以放心地让你进入下一阶段的课程了。虽然其他人劝我，说还很危险……但是我想你一定不会被技能难倒，一定可以成为更强的豹弩游侠！", 0, 2151002)
            } else {
                if (status === a++) {
                    cm.updateInfoQuest(1073, "3300=10;3310=201;3311=201");
                    cm.forceStartQuest(23034, "001");
                    cm.forceCompleteQuest(23034);
                    cm.changeJob(3311);
                    cm.sendNormalTalk("我已经让你转职了。现在你已经不是以前的你了。更强、更快、更华丽的技能世界将会展现在你面前。使用起来也很不容易，但是……你有什么好害怕的呢？你连那么危险的任务都完成了！", 0, 2151002, false, true)
                } else {
                    if (status === a++) {
                        cm.gainItem(1142244, 1);
                        cm.forceCompleteQuest(29943);
                        cm.sendNormalTalk("让我们下次课程再见吧。\n\n在那之前，希望你能以反抗者的身份，继续努力。", 0, 2151002, true, false);
                        cm.dispose()
                    }
                }
            }
        }
    }
};