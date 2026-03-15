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
            cm.curNodeEventEnd(true);
            cm.setInGameDirectionMode(true, true, false);
            cm.inGameDirectionEvent_MoveAction(0);
            cm.sendNormalTalk("现在不逃了吗？反倒好像在等我。看来已经习惯了被我追赶。", 1, 2159417, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("维丽尔，有件事我想问你。", 3, 2159417, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("想问我？可笑……反正我们见面总免不了恶战一场。你以为我会满足你的好奇心吗？", 1, 2159417, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("我知道不会轻易就得到回答。但我还是必须问你。", 3, 2159417, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("哼……只要你乖乖地束手就擒，问题之类的可以尽管问。当然，我是绝对不会回答的……！", 1, 2159417, true, true)
                        } else {
                            if (status === a++) {
                                cm.inGameDirectionEvent_头顶图片(["Effect/Direction12.img/effect/story/BalloonMsg0/1"], [1200, 0, -120, 0, 0, 0, 0, 0, 0]);
                                cm.inGameDirectionEvent_AskAnswerTime(1140)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("我绝不会被你抓住。", 3, 2159417, false, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("交涉结束。接下去的事情你应该很清楚吧？那就是战斗。", 1, 2159417, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.forceStartQuest(23708, "");
                                            cm.fieldEffect_PlayBGM("Bgm30.img/pulseResonance", 0, 0);
                                            cm.playerMessage(-1, "请打倒维丽尔。");
                                            cm.spawnMobLimit(9300638, 1, -256, 27, 100);
                                            cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                            cm.setInGameDirectionMode(false, true, false);
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/23708.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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