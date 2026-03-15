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
            cm.sendNormalTalk("#face0#那就是说，幻影这家伙一直把神之子蒙骗在鼓里？", 33, 2400000, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("咿呀，这家伙还真行啊。且不论不懂世间险恶的贝塔，如此有心机的阿尔法也会被他给骗了。", 33, 2400007, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("#face1#你说的话更让我不爽？", 41, 2400005, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("哈哈，你知道我是在开玩笑的。不过那家伙还真了不起。", 33, 2400007, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("#face0#有什么了不起的？竟敢欺骗我们的神之子……我皮埃绝对不会忘记的！", 33, 2400000, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("皮埃神官，你在写什么？", 33, 2400007, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("我皮埃不会忘恩，但是也绝对不会忘记仇恨的。所以才记录下来，早晚有一天我肯定会还给他的。可以说是……死亡羊皮纸？", 33, 2400000, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("哎唷，其实你最令人恐怖了。该不会，那里也写着我的名字吧？", 33, 2400007, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk("……(微笑)", 33, 2400000, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk("#face1#……！！！", 33, 2400007, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.updateInfoQuest(41401, "");
                                                    cm.forceStartQuest(41401, "");
                                                    cm.forceCompleteQuest(41401);
                                                    cm.gainExp(720000);
                                                    cm.setInGameDirectionMode(false, true, false);
                                                    cm.gainItem(4310085, 10);
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/41401.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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