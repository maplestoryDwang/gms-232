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
            cm.sendNormalTalk("去过射手村了吗？那里是什么地方？", 33, 2400001, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("#face4#射手村是个很小的村庄，可以听得到在后山玩耍的孩子们的笑声。至于骚乱嘛，也就是长老夫妻之间的互相斗气？是个非常和平的村庄。", 41, 2400005, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("看来你很喜欢射手村啊。要不下次大家一起去那里野餐吧？", 33, 2400001, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("戴尔罗……那里有个和戴尔罗长得一模一样的东西。", 41, 2400006, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("和我长得一模一样？那是什么？", 33, 2400001, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("#face5#蘑菇……绿蘑菇。和戴尔罗的发型一模一样。", 41, 2400006, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("绿……绿蘑菇？", 33, 2400001, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("噗哈哈，蘑菇啊蘑菇。而且还是绿色的蘑菇。噗哈哈哈~", 33, 2400007, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk("别再笑了！", 33, 2400001, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk("哦？原来戴尔罗也会生气啊？你是生我的气吗？还是在生贝塔的气？", 33, 2400007, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk("戴尔罗……生气了吗？", 41, 2400006, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk("不，不是。", 33, 2400001, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk("嘿嘿，我倒是挺羡慕戴尔罗神官。有没有长得像我一样的？你们也要对皮埃关注一下啊，贝塔~", 33, 2400000, true, true)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.updateInfoQuest(41402, "");
                                                                cm.forceStartQuest(41402, "");
                                                                cm.forceCompleteQuest(41402);
                                                                cm.gainExp(1150000);
                                                                cm.setInGameDirectionMode(false, true, false);
                                                                cm.gainItem(4310085, 15);
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/41402.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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