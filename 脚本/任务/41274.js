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
            cm.updateInfoQuest(41274, "");
            cm.forceStartQuest(41274, "");
            cm.sendNormalTalk("完成了，是不是有点拙劣？性能也不是很好，可能会有点累……不过还能怎么样呢？还不是你自找的麻烦。", 0, 2460009, false, false);
            cm.gainItem(4033853, 1)
        } else {
            if (status === a++) {
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
            var e = cm.getQuest();
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/41274.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk("(给人造人A安装了新的心脏)", 0, 2460027, false, true)
        } else {
            if (status === a++) {
                cm.updateInfoQuest(41272, "");
                cm.forceStartQuest(41272, "");
                cm.forceCompleteQuest(41272);
                cm.updateInfoQuest(41274, "");
                cm.forceStartQuest(41274, "");
                cm.forceCompleteQuest(41274);
                cm.gainExp(6000000);
                cm.sendNormalTalk("哔哔！人造人A重新启动。", 4, 2460006, true, true);
                cm.gainItem(4033853, -1);
                cm.gainItem(4310085, 15)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("醒了！人造人A醒了，认识我吗？", 2, 2460027, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("这是怎么一回事？是不是没有把我的心脏移植给氯化洛伊德？", 4, 2460006, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("不，看你旁边。氯化洛伊德不是还在吗？给你的心脏是德朗博士临时制作的机械心脏。", 2, 2460027, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("是真的啊。氯化洛伊德……氯化洛伊德果然还活着！氯化洛伊德，我是你爸爸，我就是你爸爸。", 4, 2460006, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("正在识别。爸爸。正在确认。我的父亲是人造人A，人造人A非常爱我。信息确认完毕。", 4, 2460007, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("真是太谢谢你了，多亏了你我才可以有了孩子。如果不是你，这孩子也不会存在，你就是孩子的母亲！", 4, 2460006, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk("我，我是母亲？这个就没必要吧……", 2, 2460027, true, false)
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
};