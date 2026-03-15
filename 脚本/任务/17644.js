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
            cm.sendNormalTalk("是因为是海盗，所以航海技术果然更胜一筹吗？", 2, 9390244, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("就是那样。比起商船移动起来迅猛地多了。", 0, 9390244, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("看见普赛依的船了！！", 2, 9390244, true, true)
                } else {
                    if (status === a++) {
                        cm.askYesNo("普赛依果然出现了。准备好了吗？", 0, 9390244)
                    } else {
                        if (status === a++) {
                            cm.forceStartQuest(17644, "");
                            cm.sendNormalTalk("海盗们从普赛依的船涌来了！！", 5, 9390217, false, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("好的，痛快地干一场吧！！", 1, 9390244, true, true)
                            } else {
                                if (status === a++) {
                                    cm.spawnMobLimit(9390815, 1, 850, -75, 100);
                                    cm.spawnMobLimit(9390815, 1, 850, -75, 100);
                                    cm.spawnMobLimit(9390815, 1, 850, -75, 100);
                                    cm.spawnMobLimit(9390815, 1, 850, -75, 100);
                                    cm.spawnMobLimit(9390815, 1, 850, -75, 100);
                                    cm.spawnMobLimit(9390815, 1, 850, -75, 100);
                                    cm.spawnMobLimit(9390815, 1, 850, -75, 100);
                                    cm.spawnMobLimit(9390815, 1, 850, -75, 100);
                                    cm.spawnMobLimit(9390815, 1, 850, -75, 100);
                                    cm.spawnMobLimit(9390815, 1, 850, -75, 100);
                                    cm.spawnMobLimit(9390815, 1, 850, -75, 100);
                                    cm.spawnMobLimit(9390815, 1, 850, -75, 100);
                                    cm.spawnMobLimit(9390815, 1, 850, -75, 100);
                                    cm.spawnMobLimit(9390815, 1, 850, -75, 100);
                                    cm.spawnMobLimit(9390815, 1, 850, -75, 100);
                                    cm.spawnMobLimit(9390815, 1, 765, -35, 100);
                                    cm.spawnMobLimit(9390815, 1, 765, -35, 100);
                                    cm.spawnMobLimit(9390815, 1, 765, -35, 100);
                                    cm.spawnMobLimit(9390815, 1, 765, -35, 100);
                                    cm.spawnMobLimit(9390815, 1, 765, -35, 100);
                                    cm.spawnMobLimit(9390815, 1, 765, -35, 100);
                                    cm.spawnMobLimit(9390815, 1, 765, -35, 100);
                                    cm.spawnMobLimit(9390815, 1, 765, -35, 100);
                                    cm.spawnMobLimit(9390815, 1, 765, -35, 100);
                                    cm.spawnMobLimit(9390815, 1, 765, -35, 100);
                                    cm.spawnMobLimit(9390815, 1, 765, -35, 100);
                                    cm.spawnMobLimit(9390815, 1, 765, -35, 100);
                                    cm.spawnMobLimit(9390815, 1, 765, -35, 100);
                                    cm.spawnMobLimit(9390815, 1, 765, -35, 100);
                                    cm.spawnMobLimit(9390815, 1, 765, -35, 100);
                                    cm.spawnMobLimit(9390815, 1, 700, -5, 100);
                                    cm.spawnMobLimit(9390815, 1, 700, -5, 100);
                                    cm.spawnMobLimit(9390815, 1, 700, -5, 100);
                                    cm.spawnMobLimit(9390815, 1, 700, -5, 100);
                                    cm.spawnMobLimit(9390815, 1, 700, -5, 100);
                                    cm.spawnMobLimit(9390815, 1, 700, -5, 100);
                                    cm.spawnMobLimit(9390815, 1, 700, -5, 100);
                                    cm.spawnMobLimit(9390815, 1, 700, -5, 100);
                                    cm.spawnMobLimit(9390815, 1, 700, -5, 100);
                                    cm.spawnMobLimit(9390815, 1, 700, -5, 100);
                                    cm.spawnMobLimit(9390815, 1, 700, -5, 100);
                                    cm.spawnMobLimit(9390815, 1, 700, -5, 100);
                                    cm.spawnMobLimit(9390815, 1, 700, -5, 100);
                                    cm.spawnMobLimit(9390815, 1, 700, -5, 100);
                                    cm.spawnMobLimit(9390815, 1, 700, -5, 100);
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/17644.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk("大家都没事吧？", 0, 9390244, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("嗯，到目前为止损伤好像并不大。", 2, 9390244, true, true)
            } else {
                if (status === a++) {
                    cm.forceCompleteQuest(17644);
                    cm.dispose()
                }
            }
        }
    }
};