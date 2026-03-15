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
            cm.sendNormalTalk("那#b毫无感情的语气#k。#b尴尬别扭的行动方式#k。", 4, 9062243, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("应该就是忧郁的假面……#b智能机器人#k了。", 4, 9062243, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("#b智能机器人#k？", 2, 0, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("你是说机器也有#b灵魂#k吗？", 2, 0, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("对……虽然这不是时常会发生的事，但偶尔这里会来一些人类以外的生物。像是#b小狗#k之类的……", 4, 9062243, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("虽然具体情况我也还需要再了解看看……\r\n但看样子，如果想开始对话的话，就需要接受它的请求。", 4, 9062243, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("#b滑溜溜的液体#k和#b滴溜溜打转的东西#k。\r\n指的就是#b#t4036617##k和#b#t4036618##k。\r\n#i4036617# #b#t4036617##k可以从#b邪术娃娃#k处获得，\r\n#i4036618# #b#t4036618##k可以从#b南瓜灯#k处获得。", 4, 9062243, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.askYesNo("各领取#r10个#k就够了。要去吗？", 4, 9062243)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk("到#b人偶房1#k去吧。", 4, 9062243, false, true)
                                        } else {
                                            if (status === a++) {
                                                cm.forceStartQuest(100448, "");
                                                cm.OnStartNavigation(993175430, 0, "pt_go993175400", 0);
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/100448.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.askYesNo("你找到#b#t4036617##k和#b#t4036618##k了！现在回去吗？", 4, 9062243)
        } else {
            if (status === a++) {
                cm.forceCompleteQuest(100448);
                cm.gainItem(4036618, -10);
                cm.gainItem(4036617, -10);
                cm.dispose();
                cm.warp(993175430, 0, false)
            }
        }
    }
};