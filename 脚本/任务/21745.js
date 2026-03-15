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
            cm.askMenu("你有什么事吗？这里是神圣的道场！禁止闲聊！\r\n#b#L0#我想见武公。有重要的事情。#l\n#k", 0, 2091011)
        } else {
            if (status === a++) {
                cm.askMenu("那你就得挑战武陵道场！武公师傅一直在最上层等待挑战者的到来！\r\n#b#L0#……有没有其他路子，可以见见武公吗……#l\n#k", 0, 2091011)
            } else {
                if (status === a++) {
                    cm.askMenu("哈！你在说什么啊！竟敢在神圣的道场打这种卑鄙的主意！\r\n#b#L0#……滋补身体的桔梗。#l\n#k", 0, 2091011)
                } else {
                    if (status === a++) {
                        cm.askMenu("……啊，不行。绝对不行。\r\n#b#L0#滋补身体的桔梗100个！#l\n#k", 0, 2091011)
                    } else {
                        if (status === a++) {
                            cm.askYesNo("……嗯……哼……咳咳咳。好的，你到这边来……", 0, 2091011)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("(小声说)你真的给我带来了滋补身体的东西？即使我想去，也没有时间去，道场的事情太多了……老师就应该有老师的样子，必须管理好道场才行。", 0, 2091011, false, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("(小声说)啊，你真的带来了？数量真的是100个！桔梗不满100个的话，可使唤不动我！", 0, 2091011, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.askYesNo("但……但是……我可以把你送到容易搜集到桔梗的地方去。你想现在就去吗？", 0, 2091011)
                                    } else {
                                        if (status === a++) {
                                            cm.forceStartQuest(21745, "");
                                            cm.dispose();
                                            cm.warp(925041001, 1, false)
                                        }
                                    }
                                }
                            }
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/21745.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            var e = cm.getQuest();
            cm.askYesNo("这个任务的结束脚本还没有修复哦。它的脚本位于： #b /脚本/任务/#e" + e + "#n.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻完成这个任务吗？")
        } else {
            if (status == a++) {
                cm.forceCompleteQuest();
                cm.dispose()
            }
        }
    }
};