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
            cm.sendNormalTalk_Bottom("#face0#……。", 37, 2074100, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("…………", 37, 2074123, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("…………", 57, 0, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("一天……", 37, 2074123, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face0#是，已经过去了。", 37, 2074100, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face0#看样子……应该不是你了。", 37, 2074100, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("啊啊……啊。", 37, 2074123, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("哈……", 37, 2074123, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("我……我……", 37, 2074123, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("#face0#去弟弟那里看看吧。", 37, 2074100, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom("……我实在是没有信心看着他们两个人在一起的样子。", 37, 2074123, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk_Bottom("#face0#有时候该认可的事情就得认可。\r\n只有这样才能彻底放弃。", 37, 2074100, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk_Bottom("#face0#来，去七南那里看看吧。", 37, 2074100, true, true)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.forceStartQuest(30427, "");
                                                                cm.dispose();
                                                                cm.warp(224000000, 26)
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
            cm.dispose();
            cm.warp(224000033, 26)
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