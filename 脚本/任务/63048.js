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
            cm.sendNormalTalk("#b怎么会这样……我也变成白色的了。我该不是以后只能留在这里了吧？我还没找到钥匙的线索……", 2, 0, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("喂，你过来", 4, 9400221, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("到这边来！", 4, 9400221, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("你在愁什么~？你可以去其他世界，别担心，过来吧。", 4, 9400221, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("虽然他们抢走了你的色彩，你别太伤心。他们也是因为你才产生了更多想法，你就当是“自己的错-”吧。那样心里会舒服一些。", 4, 9400221, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("#b你是谁？", 2, 0, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("我叫阿德勒。", 4, 9400221, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("#b我必须回到我原先所在的地方，现在我没了色彩，还能回去吗？", 2, 0, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk("原先所在的地方？你难道是……", 4, 9400221, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk("#b你知道冒险岛世界吗？你知不知道怎么去那里，或是关于打开巨门的钥匙的有关信息？", 2, 0, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk("唔……看来这都是命运注定的。", 4, 9400221, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.askAcceptDecline("你等等~我要找点东西，你待会儿再跟我对话。", 1, 9400221)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.forceStartQuest(63048, "");
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
    }(d == 1) ? status++ : status--;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            var e = cm.getQuest();
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/63048.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
        } else {
            if (status == a++) {
                cm.forceStartQuest();
                cm.dispose()
            }
        }
    }
}

function end(e, d, c) {
    if (status == 0 && e == 0) {
        cm.dispose();
        return
    }(e == 1) ? status++ : status--;
    selectionLog[status] = c;
    var b = -1;
    if (status <= b++) {
        cm.dispose()
    } else {
        if (status == b++) {
            cm.sendNormalTalk("你要找的东西是这个吧？", 4, 9400221, false, true)
        } else {
            if (status === b++) {
                cm.forceCompleteQuest(63048);
                cm.gainExp(476400);
                cm.updateInfoQuest(63048, "exp=1");
                cm.sendNormalTalk("#b这个该不会是？", 3, 0, true, true);
                cm.gainItem(4036000, 1)
            } else {
                if (status === b++) {
                    var a = cm.addNumberForQuestInfo(63099, "keyCount", 1);
                    cm.getPlayer().getTopMsgByItem(4036000, "获得了可以开启巨门的钥匙。(" + a + "/12)");
                    cm.dispose()
                }
            }
        }
    }
};