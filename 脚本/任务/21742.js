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
            cm.sendNormalTalk("虽说也不是什么着急的活儿，不过你这么问总让人觉得有些不爽。我是不是应该让你下次再来找我呢？反正没什么事情，就请让我清净一点行吗？", 8, 2090004, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("我听说你见过黑色之翼的武士……", 2, 2090004, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("啊，你是说一身漆黑，眉宇间皱纹很深的那个男人吗？是见过。不但见过而且他有东西放在我这里，让我转交给#p2091007#老头子。", 8, 2090004, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("东西？", 2, 2090004, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("嗯，好大一个#b#t4220151##k塞给我，让我一定要转交。他一脸杀气的，好像我不转交的话，他还会来找我似的。哎呦，真是吓死人了。", 8, 2090004, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("然后呢，#t4220151#转交出去了吗？", 2, 2090004, true, true)
                            } else {
                                if (status === a++) {
                                    cm.askAcceptDecline("没有，那个……其实出了点问题……你愿意听我说吗？", 0, 2090004)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("是这样的，我正在做一种新药水，当时正好在煮草药，结果没想到#t4220151#一下子掉了进去。我虽然以最快速度把它捞了出来，不过#t4220151#浸水后，上面的字都消失了。", 0, 2090004, false, true)
                                    } else {
                                        if (status === a++) {
                                            cm.gainItem(4220151, 1);
                                            cm.sendNormalTalk("于是我就发愁了，这怎么转交给#p2091007#老头子啊。于是我决定先把#t4220151#修复好，再转交给他。正好你能帮我一个忙。#t4220151#上面的字是#m250000000#最有名的画师#b#p2091008##k写的，你去的话，他一定会帮你修复#t4220151#的。", 0, 2090004, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.OnStartNavigation(250000000, 0, "q21743", 21742);
                                                cm.forceStartQuest(21742, "");
                                                cm.forceStartQuest(21763, "0");
                                                cm.forceCompleteQuest(21743);
                                                cm.gainItem(4000588, -25);
                                                cm.gainItem(4000589, -25);
                                                cm.gainItem(4000590, -50);
                                                cm.gainItem(4032342, 8);
                                                cm.forceStartQuest(21742, "");
                                                cm.forceCompleteQuest(21742);
                                                cm.forceCompleteQuest(21763);
                                                cm.gainExp(27150);
                                                cm.sendNormalTalk("哎哎哎哎？这是什么？", 0, 2090004, true, false);
                                                cm.gainItem(4220151, -1);
                                                cm.dispose();
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

function stage0(d, c, b) {
    if (status == 0 && d == 0) {
        cm.dispose();
        return
    }
    status++;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            var e = cm.getQuest();
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/21742.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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