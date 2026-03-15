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
            var e = cm.getQuest();
            cm.askYesNo("这个任务的开始脚本还没有修复哦。它的脚本位于： #b 脚本/任务/64782.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
        } else {
            if (status == a++) {
                cm.forceStartQuest();
                cm.dispose()
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
            cm.sendNormalTalk_Bottom("#h0#，祝贺你，我听说了。", 36, 9401033, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#b梅里耶！好久不见，谢谢你。", 56, 0, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("嗯哼，那个。", 36, 9401033, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#b什么？", 56, 0, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("之前你所说的提议，现在还有效吗？", 36, 9401033, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#b什么……难道是？", 56, 0, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("嗯，没错，我想和你一起进入深渊。", 36, 9401033, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("#b梅里耶…… ", 56, 0, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("这一直是个秘密，我之所以抛弃大海和家族来到这里…… ", 36, 9401033, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("不，现在要说出这件事，我还是觉得有些伤自尊。", 36, 9401033, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom("我就是想在你身边，寻找为什么你能成功而我却不能的理由，我到底是哪里有所不足。", 36, 9401033, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk_Bottom("#b这当然是我的荣幸，梅里耶。你会给予我们很大的帮助。", 56, 0, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk_Bottom("……谢谢你没有继续问下去。", 36, 9401033, true, true)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.updateInfoQuest(64755, "mCount=15");
                                                                cm.forceCompleteQuest(64782);
                                                                cm.sendNormalTalk_Bottom("……加油吧。", 36, 9401033, true, true)
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
                    }
                }
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