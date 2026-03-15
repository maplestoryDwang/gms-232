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
            cm.sendNormalTalk("看到了，我看到了！这～么大的光束，“咚”地一声落到时间塔最下层去了。", 4, 2041021, false, true)
        } else {
            if (status === a++) {
                cm.curNodeEventEnd(true);
                cm.setInGameDirectionMode(true, false, true);
                cm.inGameDirectionEvent_AskAnswerTime(5000);
                cm.effect_Direction("Effect/Direction18.img/StarForce/Scene1", 1, 0, -83)
            } else {
                if (status === a++) {
                    cm.setInGameDirectionMode(false, true, false);
                    cm.sendNormalTalk("不过它很快就消失在时间裂缝中了，我也不知道那到底是个什么。是什么呢？你就不好奇吗？", 4, 2041021, false, true)
                } else {
                    if (status === a++) {
                        cm.askAcceptDecline("(要听听他怎么说吗？) ", 2, 0)
                    } else {
                        if (status === a++) {
                            cm.forceStartQuest(3462, "");
                            cm.sendNormalTalk("这里，#m220050300#下面是无穷无尽的时间之次元。说实话，我们不可能在里面找到光束的踪迹。不过还是先看看有没有什么线索吧。", 5, 2041021, false, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("去#b#m220050300##k见#e幽灵猎人巴柏#n，向他询问有关混沌之光的线索吧。", 4, 2041021, true, false)
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/3462.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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