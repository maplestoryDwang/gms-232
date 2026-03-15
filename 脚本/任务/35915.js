var status = -1;
var selectionLog = [];

function start() {
    action(1, 0, 0)
}

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
        if (status === a++) {
            cm.sendNext_Bottom("#face0#如果你愿意听我的命令……不，接受我的请求，我就告诉你。\r\n别皱眉头。其，其实也没那么难。", 1013351)
        } else {
            if (status === a++) {
                cm.sendNext_Bottom("#face0#我好像说过吧，收集古董是我的爱好。\r\n但是……自从罗盘坏掉之后，就没法找到新的古董了。", 1013351)
            } else {
                if (status === a++) {
                    cm.sendNext_Bottom("#face1#所以必须通过其他方法来收集古董，嗯哼。\r\n这一带的怪物也会掉落古董，呵呵……", 1013351)
                } else {
                    if (status === a++) {
                        cm.askAcceptDecline_Bottom("#face1#你只要帮我从#r#o2300203##k身上搜集#b15个#k#b#i4036527# #t4036527##k就行。\r\n陶瓷兔是#r#m100051022##k很常见的怪物。", 1013351)
                    } else {
                        if (status === a++) {
                            cm.sendNext_Bottom("#face1#如果你不肯答应，我也不能告诉你罗盘碎片掉在了什么地方。", 1013351)
                        } else {
                            if (status === a++) {
                                cm.sendNext_Bottom("#face0#如果你愿意听我的命令……不，接受我的请求，我就告诉你。\r\n别皱眉头。其，其实也没那么难。", 1013351)
                            } else {
                                if (status === a++) {
                                    cm.sendNext_Bottom("#face0#我好像说过吧，收集古董是我的爱好。\r\n但是……自从罗盘坏掉之后，就没法找到新的古董了。", 1013351)
                                } else {
                                    if (status === a++) {
                                        cm.sendNext_Bottom("#face1#所以必须通过其他方法来收集古董，嗯哼。\r\n这一带的怪物也会掉落古董，呵呵……", 1013351)
                                    } else {
                                        if (status === a++) {
                                            cm.askAcceptDecline_Bottom("#face1#你只要帮我从#r#o2300203##k身上搜集#b15个#k#b#i4036527# #t4036527##k就行。\r\n陶瓷兔是#r#m100051022##k很常见的怪物。", 1013351)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNext_Bottom("#face0#陶瓷兔拥有的碎片是我喜欢的收藏品。\r\n好的，那就拜托了，呵呵……", 1013351)
                                            } else {
                                                if (status == a++) {
                                                    cm.OnStartNavigation(100051022, 0, "", 35915);
                                                    cm.forceStartQuest();
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
            cm.sendNormalTalk_Bottom("#face0#哦,陶瓷碎片已经搜集到了吗？一,二……\r\n哦,数量刚刚好。这种东西……毋庸置疑是古代的东西。", 36, 1013351, false, true, 1)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face1#嗯,怎么回事？你是在想,“还不快告诉我碎片掉在什么地方了”吗？\r\n抱歉,我还有一个请求,嗯哼,嗯哼。", 36, 1013351, true, true, 1)
            } else {
                if (status === a++) {
                    cm.forceCompleteQuest(35915);
                    cm.gainExp(27);
                    cm.gainExp(1791);
                    cm.gainItem(4036527, -15);
                    cm.dispose()
                }
            }
        }
    }
};