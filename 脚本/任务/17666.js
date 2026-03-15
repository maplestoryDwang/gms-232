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
            cm.sendNormalTalk_Bottom("也没什么。喂，暗杀团团长", 32, 9390238, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("…………", 36, 9390218, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("该到显示你的实力的时候了。", 32, 9390238, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("…………好的。", 36, 9390218, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("什么？什么呀。", 56, 9390238, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("…………这是不可能活着逃出来的。", 36, 9390218, true, true)
                            } else {
                                if (status === a++) {
                                    cm.forceStartQuest(17666, "");
                                    cm.npc_LeaveField("oid=2386128");
                                    cm.npc_LeaveField("oid=2386488");
                                    cm.npc_LeaveField("oid=2386489");
                                    cm.npc_LeaveField("oid=2386490");
                                    cm.dispose();
                                    cm.warp(865030121, 0)
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/17666.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk("……我的黑影杀阵……居然被击破了。", 5, 9390218, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("非同一般的杀阵。击破它是得花些力气。", 3, 9390236, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("真可惜那家伙好像逃跑了。", 1, 9390236, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("好了，那么叫西温什么的那位。现在该听听你说的了吧。", 3, 9390236, true, true)
                    } else {
                        if (status === a++) {
                            cm.forceCompleteQuest(17666);
                            cm.dispose();
                            cm.warp(865030111, 0)
                        }
                    }
                }
            }
        }
    }
};