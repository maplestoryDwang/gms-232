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
            cm.sendNext("材料全部搜集到啦。这么多应该足够了。\r\n\r\n#b#L0#你现在是光影状态，可以制作吗？#l", 1032209)
        } else {
            if (status == a++) {
                cm.askAcceptDecline("今后师兄你也可以变成光影试试。比想象的还要方便。请稍等一下。", 1032209)
            } else {
                if (status == a++) {
                    cm.forceStartQuest();
                    cm.dispose()
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/25625.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk("呼，比想象的麻烦多了。收集到的材料倒是够了，不过能量水晶的质量不太好。剩余的部分我想办法解决了，但是性能可不能比不上原来的那些。启动看看吧。", 0, 1032209, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("我叫R2-B2。哔哔。", 4, 1032211, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("好久没看到机器人启动的样子了。R2-B2，很高兴认识你。", 2, 1032209, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("我也是。哔哔。", 4, 1032211, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("你来告诉它要守护的地方吧。去那里好好完成你的任务吧。", 2, 1032209, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("R2-B2。从现在开始执行任务。哔哔。", 4, 1032211, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("这样就能保障起码的安全了。但是要想对付黑魔法师，还得准备其他方案。", 1, 1032209, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.forceCompleteQuest(25625);
                                        cm.gainExp(17730);
                                        cm.gainItem(4000196, -50);
                                        cm.gainItem(4000197, -50);
                                        cm.gainItem(4000204, -50);
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
};