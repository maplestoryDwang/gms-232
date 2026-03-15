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
            cm.sendNormalTalk("难道……这个就能帮助恢复士兵吗？", 4, 9130107, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk(" 这是什么？", 16, 9130107, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("在我昏迷之前……有位一起被抓的士兵给我的纸条。", 4, 9130107, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("(打开纸条)“织田军阴阳师的三色坛子据说可以装进纯粹的灵魂。请拜托别人把我们的灵魂装进那个坛子里。’ ", 16, 9130107, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk(" ……看来终究是没办法恢复了。", 16, 9130107, true, true)
                        } else {
                            if (status === a++) {
                                cm.askYesNo("我看到了织田军的阴阳师从袖子里拿出了坛子，纸条上说的似乎就是那个。", 4, 9130107)
                            } else {
                                if (status === a++) {
                                    cm.forceStartQuest(58930, "");
                                    cm.sendNormalTalk("他们真的都很好……我却不能为他们做些什么，好难过。", 4, 9130107, false, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("我们先得找到坛子。", 4, 9130107, true, false)
                                    } else {
                                        if (status === a++) {
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/58930.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.forceCompleteQuest(58930);
            cm.sendNormalTalk("没错，我看到的坛子就是这个。", 4, 9130107, false, true);
            cm.gainItem(4034155, -1);
            cm.gainItem(4034156, -1);
            cm.gainItem(4034157, -1)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("现在找到了坛子……只要把他们的灵魂聚集起来就行了。", 4, 9130107, true, false)
            } else {
                if (status === a++) {
                    cm.dispose()
                }
            }
        }
    }
};