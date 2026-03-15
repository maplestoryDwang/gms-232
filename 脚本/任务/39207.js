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
            cm.sendNormalTalk_Bottom("好久不见。你这段时间过得还好吗？\r\n我有了些变化！我的芯片终于修复到50%以上了。\r\n当然，这都要多亏了独眼爷爷。我真的很感谢它…", 36, 2155104, false, true)
        } else {
            if (status == a++) {
                cm.sendNormalTalk_Bottom("#face0#不过…我得尽快回去才行。\r\n不知为何，我总觉得时间越来越紧迫了。\r\n我不知道该怎么描述这种感觉…真的很奇怪吧？", 36, 2155121, false, true)
            } else {
                if (status == a++) {
                    cm.sendNormalTalk_Bottom("#face0#随着记忆逐渐被梳理，我就越觉得奇怪。\r\n我究竟是谁？我为什么会知道这种通道？\r\n还有，我仍然不知道这铁板是什么。", 36, 2155121, false, true)
                } else {
                    if (status == a++) {
                        cm.sendNormalTalk_Bottom("#face1#啊…等等。\r\n我的头…\r\n抱歉，你能等我一会儿吗？等等，我先休息一会儿。", 36, 2155121, false, true)
                    } else {
                        if (status == a++) {
                            cm.forceStartQuest();
                            cm.dispose()
                        }
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/39207.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk_Bottom("#face1#嗯……好像好点了。\r\n随着芯片逐渐被修复，我就越觉得我好像忘记了很重要的东西。\r\n我…得尽快回去。", 36, 2155121, false, true)
        } else {
            if (status == a++) {
                cm.sendNormalTalk_Bottom("呃，幸好有你在。\r\n小软柿，如果没有你，我肯定什么都做不到。", 36, 2155104, false, true)
            } else {
                if (status == a++) {
                    cm.sendNormalTalk_Bottom("啊！你能稍等一会儿吗？\r\n独眼爷爷让我有时间就帮他启动下。\r\n那个老头，如果没有我，它以后该怎么办啊。", 36, 2155104, false, true)
                } else {
                    if (status == a++) {
                        cm.sendNormalTalk_Bottom("请稍后再和我对话。\r\n今天我们再去那个地方，你先准备下。", 36, 2155104, false, true)
                    } else {
                        if (status == a++) {
                            cm.forceCompleteQuest();
                            cm.dispose()
                        }
                    }
                }
            }
        }
    }
};