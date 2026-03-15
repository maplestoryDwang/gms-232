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
            cm.sendNormalTalk_Bottom("看来那就是独眼所说的电脑芯片啊。", 57, 0, false, true)
        } else {
            if (status === a++) {
                cm.getTopMsgFont("获得了电脑芯片. 请回去找独眼吧. ", 3, 20, 20, 0);
                cm.forceStartQuest(33206, "");
                cm.gainItem(4034238, 1);
                cm.dispose()
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/33206.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.playSoundEffDirectly("Ambience.img/secretmissionbase");
            cm.sendNormalTalk_Bottom("哈哈哈！你拿过来啦。\r\n小软柿，我有话要对你说。", 37, 1540650, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("我想说说我们逃跑时的事情。\r\n我应该已经跟你说过我们是等待报废处理的机器人吧。", 37, 1540650, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("那时我们什么都不知道。\r\n只是遵从我们的顺序，按命令做事。", 37, 1540650, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("当时我们排队等待报废处理。", 37, 1540650, true, true)
                    } else {
                        if (status === a++) {
                            cm.dispose();
                            cm.warp(350040191, 0, false)
                        }
                    }
                }
            }
        }
    }
};