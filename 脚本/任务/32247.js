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
            cm.sendNormalTalk("自言自语...", 0, 1520001, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("那个。", 2, 1520001, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("自言自语...", 0, 1520001, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("那个。", 2, 1520001, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("次元传送口前有个戴着帽子的可疑人物。无论怎么搭话，他都没反应。这样的话，就去不了次元传送口……	", 2, 1520001, true, true)
                        } else {
                            if (status === a++) {
                                cm.askYesNo("好像在他背上轻轻敲打也没反应。要不，试着敲得重一点？", 2, 1520001)
                            } else {
                                if (status === a++) {
                                    cm.gainExp(3500);
                                    cm.forceCompleteQuest(32247);
                                    cm.sendNormalTalk("!? 我的帽子！你到底在干什么！", 0, 1520001, false, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("哎？帽子里面居然还戴着帽子？", 2, 1520001, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk("呃……要是让别人看到了，可就不妙了。得赶快藏好！", 0, 1520001, true, true);
                                            cm.dispose()
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/32247.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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