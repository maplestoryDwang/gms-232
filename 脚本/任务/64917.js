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
            cm.sendNormalTalk_Bottom("这里不是有门吗，把门打开不就可以出去了吗？", 56, 9401085, 0, 1)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("赛恩编了程序，只要我离开这里，我的电源芯片就会立刻爆炸。\r\n所以我出不去。", 36, 9401085, 1, 1)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("这附近应该有可以#b控制那个功能的电脑#k。\r\n#h0#把那个功能关闭后，剩下的事情交给我来解决，怎么样？", 36, 9401085, 1, 1)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("奥利弗，可以放开这个家伙吗？", 56, 9401085, 1, 1)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("不会有什么害处的。\r\n赛恩只为他加入了基本功能，他现在只是一个裸机的形态，所以他很单纯……", 36, 9401084, 1, 1)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("怎么说呢，就像是人类的#b小孩子#k。", 36, 9401084, 1, 1)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("所以放开他也没关系的。\r\n感觉他一直被关在这里还蛮可怜的……", 56, 9401085, 1, 1)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("#face0#你在同情我吗？谢谢你，#h0#。\r\n哇，我刚刚竟然学会了#b感谢#k。哈哈哈。", 36, 9401085, 1, 1)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("真是个奇怪的家伙……", 56, 9401085, 1, 1)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("我很快就会回来。奥利弗，你好好看着这小子。\r\n如果有什么事，就赶紧藏起来。", 56, 9401085, 1, 1)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom("#h0#，不用担心我，你要小心一点。", 36, 9401084, 1, 1)
                                                } else {
                                                    if (status === a++) {
                                                        cm.forceStartQuest(64917, "");
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
    }
    status++;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            var e = cm.getQuest();
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/64917.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk_Bottom("啊，真的关闭了呢？\r\n现在我好像可以出去了。这种感觉好棒棒。", 36, 9401085, 0, 1)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#赛恩肯定会被气死吧，想想就兴奋。", 36, 9401085, 1, 1)
            } else {
                if (status === a++) {
                    cm.gainExp(Math.pow(cm.getLevel(), 3) * 2);
                    cm.forceCompleteQuest(64917);
                    cm.dispose()
                }
            }
        }
    }
};