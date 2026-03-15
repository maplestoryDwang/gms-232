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
            cm.askAcceptDecline("我试图打开进入特雷格罗房间的门，可门却纹丝不动。这是怎么回事？和#b#p3001100##k联络一下吧。\r\n\r\n#r#e（接受时，将自动移至该区域。）", 16, 0)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("#b(发送信息吧。)喂，伊黛娜，你听见我说话吗？", 16, 0, false, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("嗯，听得很清楚。听动静你没有在战斗，还没进入特雷格罗的房间吧。", 4, 3001100, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("#b嗯，我试着想进去，可打不开门。", 16, 0, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("呵呵，难道我会一点准备都没有，就让你进入特雷格罗的房间跟他战斗吗？当然是早知道你进不去啦。那门打得开才怪呢。", 4, 3001100, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("额……你耍我，真过分。", 16, 0, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("在那里硬撑着也不是办法，你先返回#b市中心黑市#k，我们分析分析你进不去的原因吧。回来后马上来找我。", 4, 3001100, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.forceStartQuest(31507, "");
                                        cm.dispose();
                                        cm.warp(401040000, 0, false)
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/31507.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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