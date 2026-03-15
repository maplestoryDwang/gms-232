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
            cm.sendNormalTalk_Bottom("#h0#，#b密室#k位置的相关记忆已恢复。", 36, 9401084, 0, 1)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("那么说……除此之外的记忆也……\r\n可能装作不知道会更好吧……", 36, 9401084, 1, 1)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("奥利弗，对不起……", 56, 9401084, 1, 1)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#h0#，没关系。\r\n因为这是我一定要做的事情，所以我不会后悔的。", 36, 9401084, 1, 1)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("那我来给你带路吧，一起去密室……", 36, 9401084, 1, 1)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("需要我直接送你过去吗？", 36, 9401085, 1, 1)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("你？你可以吗？", 56, 9401084, 1, 1)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("但需要奥利弗告诉我坐标。\r\n现在出去活动的话，早晚会被赛恩发现。", 36, 9401085, 1, 1)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("赛恩可以在这里自由行动，我也知道怎么使用那个功能。\r\n我会帮助你们的，奥利弗，你消消气嘛？", 36, 9401085, 1, 1)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("哼……没办法。都是为了#h0#的安全。", 36, 9401084, 1, 1)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom("可能暂时会感到头晕，快闭上眼睛。", 36, 9401085, 1, 1)
                                                } else {
                                                    if (status === a++) {
                                                        cm.curNodeEventEnd(true);
                                                        cm.eventSKill(0);
                                                        cm.setInGameDirectionMode(true, false, true);
                                                        cm.setStandAloneMode(true);
                                                        cm.fieldEffect_InsertCanvas(1, 255, 240, 240, 240, 1300, 0);
                                                        cm.inGameDirectionEvent_AskAnswerTime(1600)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                                            cm.warp(867142005, 0, false);
                                                            cm.eventSKill(0);
                                                            cm.setInGameDirectionMode(false, true, false);
                                                            cm.setStandAloneMode(false);
                                                            cm.forceStartQuest(64919, "");
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/64919.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk_Bottom("我们要快点了。停留太久会被赛恩发现的。", 56, 9401084, 0, 1)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("别担心。这个#b密室#k是赛恩的电波唯一无法触及的地方。", 36, 9401085, 1, 1)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("那你们要回#b藏身处#k了吗？\r\n这个密室有个紧急出口，可以直接通到外面。", 36, 9401085, 1, 1)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("你不一起走吗？", 56, 9401084, 1, 1)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("我和赛恩是一体的。所以我没办法完全去到阿特利埃外面。", 36, 9401085, 1, 1)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("即便出去，我的电源也会全部关闭。那时我就会变成一个铁罐头，太没意思了。", 36, 9401085, 1, 1)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("但你自己在这里……", 56, 9401084, 1, 1)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("#face0##h0#，好走，我们会再见面的。", 36, 9401085, 1, 1)
                                    } else {
                                        if (status === a++) {
                                            cm.forceCompleteQuest(64919);
                                            cm.gainExp(Math.pow(cm.getLevel(), 3) * 2);
                                            cm.gainItem(4036643, -1);
                                            cm.dispose();
                                            cm.warp(867142000, 0, false)
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