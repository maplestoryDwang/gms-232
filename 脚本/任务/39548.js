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
            cm.askAcceptDecline_Bottom("#face10#一直以来只负责做杂务的我终于迎来了机会，\r\n去#r#m410000201##k见见#b#p3001604##k吧。", 36, 3001674 + cm.getPlayer().getGender())
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face12#哈哈！给我等着，事件委托。\r\n我虎影一定会全都包下来。", 36, 3001674 + cm.getPlayer().getGender(), false, true)
            } else {
                if (status === a++) {
                    cm.forceStartQuest(39548, "");
                    cm.OnStartNavigation(410000201, 0, "", 39548);
                    cm.dispose()
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/39548.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk_Bottom("#face1#你来了啊，虎影解决师~！", 36, 3001652, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face2#相信你听帕拉希解决师说了，应该也知道了，正式委托终于到了，\r\n比我预想得要早呢！", 36, 3001652, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face12#我不是说过嘛，你很快就会认可我的。", 36, 3001674 + cm.getPlayer().getGender(), true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face1#那是，当然要认可了。", 36, 3001652, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face11#对了，还是告诉我什么叫正式委托吧，我都快好奇死了。", 36, 3001674 + cm.getPlayer().getGender(), true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face6#啊，这次的委托是窃案……以及失踪事件。", 36, 3001652, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("#face7#失窃加……失踪！？", 36, 3001674 + cm.getPlayer().getGender(), true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("#face6#事件会重叠是挺微妙的……总之先听我说完吧。", 36, 3001652, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.forceCompleteQuest(39548);
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