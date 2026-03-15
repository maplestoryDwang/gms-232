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
            cm.forceStartQuest();
            cm.dispose()
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/41251.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk("这真的是朱丽叶亲手做的便当吗？头一次收到这么有诚意的礼物！这是……用豌豆做成的心形？！啊啊，还没吃上都已经感觉到了朱丽叶的爱了！", 0, 2460003, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("便当已经交给你了，那么我就……", 2, 2460003, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("既然来了，就一起来吃便当嘛。当然，我的意思不是让你一起分享朱丽叶的爱。嘻嘻。", 0, 2460003, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("不不，我就算了……", 2, 2460003, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("不过第一口我可不能让给任何人，这可是朱丽叶给我做的便当。那么我就来尝一口。吧唧吧唧~……？嗯？啊……(晕倒)", 0, 2460003, true, true)
                        } else {
                            if (status === a++) {
                                cm.updateInfoQuest(41269, "");
                                cm.forceStartQuest(41269, "");
                                cm.sendNormalTalk("呜哇，有人倒下了！", 3, 2460003, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("便当到底有多好吃，都晕过去了？我也吃一口，吧唧~吧唧吧唧~啊，这味道是……！（惊讶）\r\n\r\n#fUI/UIWindow2.img/QuestIcon/4/0#\r\n#v4310085# #t4310085#15个\r\n#v2001530# #t2001530#60个\r\n\r\n#fUI/UIWindow2.img/QuestIcon/8/0# 3900000 exp", 5, 2460004, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.forceCompleteQuest(41251);
                                        cm.gainExp(3900000);
                                        cm.sendNormalTalk("又有一人倒下去了！这难道是……便当杀人事件？！难道我要变成罪人了？要先给#b朱丽叶#k报告一下情况了。", 2, 2460003, true, false);
                                        cm.gainItem(4033840, -1);
                                        cm.gainItem(4310085, 15);
                                        cm.gainItem(2001530, 60)
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
};