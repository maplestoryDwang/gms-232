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
            cm.sendNormalTalk_Bottom("#face0#现在必须把铁、铁路改过来。", 36, 3004651, false, true, 1)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#用刚才收集到的零件就够了。\r\n但、但是无人机们一定不会让我们轻易得逞。", 36, 3004651, true, true, 1)
            } else {
                if (status === a++) {
                    cm.askYesNo_Bottom("#face0#你能在周围消灭掉100架#bB型战斗型T无人机#k吗？", 36, 3004651, 1)
                } else {
                    if (status === a++) {
                        cm.forceStartQuest(37614, "");
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
    }
    status++;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            var e = cm.getQuest();
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/37614.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk_Bottom("#face0#铁路的方向改好了。", 36, 3004651, false, true, 1)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#现在快移动到下一格吧。\r\n只要关上门，无人机就追不上来了。", 36, 3004651, true, true, 1)
            } else {
                if (status === a++) {
                    cm.dispose();
                    cm.warp(993176010, 0, true)
                }
            }
        }
    }
};