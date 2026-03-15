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
            cm.askYesNo("#h0#！！快来帮忙！！", 0, 9390244)
        } else {
            if (status === a++) {
                cm.spawnMobLimit(9390835, 1, 45, 405, 100);
                cm.sendNormalTalk("大家都镇定点儿！！", 5, 9390202, false, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("莱文！！没事吧？那些令人作呕的腿脚都是什么呀", 3, 9390244, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("深海巨妖是海洋的霸主！请小心，不要死了哦！", 1, 9390244, true, true)
                    } else {
                        if (status === a++) {
                            cm.forceStartQuest(17646, "");
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
    }(d == 1) ? status++ : status--;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            var e = cm.getQuest();
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/17646.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk("大家都活着吗。", 0, 9390244, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("嗯，船只好像受到很严重的破坏，但人员好像并没有伤亡。", 2, 9390244, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("呼，深海巨妖并没有全力扑来真是万幸。它连头都没有探出来。看来它不是要吃我们，只是跟我们开个玩笑而已。", 0, 9390244, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("原来是我们运气好。", 2, 9390244, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("不管怎样，#h0#多亏有你在啊。尽管是开玩笑，深海巨妖开的玩笑对人类来说可就是关乎生死的玩笑了。", 0, 9390244, true, true)
                        } else {
                            if (status === a++) {
                                cm.forceCompleteQuest(17646);
                                cm.dispose()
                            }
                        }
                    }
                }
            }
        }
    }
};