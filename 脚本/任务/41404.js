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
            cm.setInGameDirectionMode(true, true, true);
            cm.sendNormalTalk("那么阿尔法最喜欢什么颜色？", 33, 2400007, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("阿尔法最喜欢红色了~啊，贝塔最喜欢白色。", 33, 2400000, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("对，我是喜欢红色。", 41, 2400005, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("我也喜欢白色。", 41, 2400006, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("哇，菲恩神官真厉害。真的全都答对了。", 33, 2400007, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("那是当然，皮埃对阿尔法和贝塔可是无所不知啊。", 33, 2400000, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("无所不知？", 33, 2400007, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("必须的。比如，贝塔的头发长度有89。4公分，阿尔法鼻梁的角度是36。2度，贝塔的手腕周长有13。8公分，阿尔法的脚是261。4mm，脚掌是243。9mm，脚趾长度……", 33, 2400000, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk("#face1#太，太了不起了。这种情报是从哪得到的？", 33, 2400007, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk("因为我的工作就是记录阿尔法和贝塔的所有事情。啊，有趣的是他们俩眉毛数量是一样的。但是身上的点，阿尔法比贝塔多两个。", 33, 2400000, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk("#face6#……等下，你怎么会知道我身上有多少个点？！", 41, 2400005, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.updateInfoQuest(41404, "");
                                                        cm.forceStartQuest(41404, "");
                                                        cm.forceCompleteQuest(41404);
                                                        cm.gainExp(3800000);
                                                        cm.setInGameDirectionMode(false, true, false);
                                                        cm.gainItem(4310085, 25);
                                                        cm.gainItem(2001530, 100);
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/41404.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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