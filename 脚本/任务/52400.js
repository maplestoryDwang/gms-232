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
            cm.forceStartQuest(52400, "");
            cm.dispose()
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/52400.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.curNodeEventEnd(true);
            cm.setInGameDirectionMode(true, true, false);
            cm.sendNormalTalk("天啊，已经结束了吗？", 9, 9330203, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("不，不要这样看我？不会花很...很久的时间。", 3, 9330203, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("我不是已经说过了吗？小姐", 9, 9330203, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("真...真的吗？", 3, 9330203, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("哼哼。", 9, 9330203, true, true)
                        } else {
                            if (status === a++) {
                                cm.emotion(6, 8000);
                                cm.sendNormalTalk("为，为什么这样笑？今天秀禾有点奇怪。突然生气，然后又这样笑咪咪的…？这样…？", 3, 9330203, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("小姐刚才对你凶的是...开玩笑的啦", 9, 9330203, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("实际上你父亲拜托我，如果今天认真的修炼，就会给你好东西。", 9, 9330203, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk("好，好了？那是什么？ (是类似生日礼物吗？)", 3, 9330203, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk("你猜猜看这是什么东西呢？", 9, 9330203, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk("秀禾。不要闹了。真的很想知道。", 3, 9330203, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk("好，这里，好了吗!", 9, 9330203, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.forceCompleteQuest(52400);
                                                            cm.dispose();
                                                            cm.warp(743020200, 0, false);
                                                            cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                                            cm.setInGameDirectionMode(false, true, false)
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
        }
    }
};