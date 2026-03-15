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
            cm.sendNormalTalk_Bottom("#face1##h0#，进行下个计划吧。我们用钱引诱他！", 37, 9111002, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("……嗯！", 57, 0, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face2##h0#，快把金币给我。", 37, 9111002, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("……啥？你说我的金币？", 57, 0, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face2#是啊，不然咧！妖怪身上哪有钱。", 37, 9111002, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("……你不是说你有上班……", 57, 0, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("#face2#现在我有没有上班不重要！我们得快点把暗救出来！", 37, 9111002, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("………………", 57, 0, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.askNumber("要拿出多少钱？", 999999, 0, 999999999)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("#face1#喔噢！好多钱……！！！！", 37, 9111002, false, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom("#face1#有这么多金币的话，暗肯定会出来的！！！！", 37, 9111002, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.forceCompleteQuest(58760);
                                                        cm.dispose();
                                                        cm.warp(800023008, 0, false)
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/58760.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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