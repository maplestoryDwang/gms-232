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
            cm.sendNormalTalk_Bottom("#face7#不知不觉间，一直在用的那些法术都达到了极限，\r\n我开始觉得差不多需要学点新的招式了……", 36, 3001674 + cm.getPlayer().getGender(), false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0##fc0xFF25f1ca#若要钻研道术，就必须要有道术集在手……\r\n是不是该重新回到那座道观呢？", 36, 3001651, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face10#饕餮，你还不明白我天才道士嘛？\r\n我早就知道用不了多久会发生这种事，提前做好了应对的准备。", 36, 3001674 + cm.getPlayer().getGender(), true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face0##fc0xFF25f1ca#做好准备是指什么？", 36, 3001651, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face9#嘻嘻……我从抽屉里偷偷顺了一个。", 36, 3001674 + cm.getPlayer().getGender(), true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face0##fc0xFF25f1ca#这法子倒是符合你的风格，啧啧……", 36, 3001651, true, true)
                            } else {
                                if (status === a++) {
                                    cm.askAcceptDecline_Bottom("#face12##fc0xFFbfbfbf#（取出师父写好的道术集，学习全新的法术吧，\r\n师父……可别太苛责我这个出色的弟子啊。）", 36, 3001674 + cm.getPlayer().getGender())
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("#face5#呵呵……在这儿呢，我珍贵的道术集，赶紧打开看看吧。", 36, 3001674 + cm.getPlayer().getGender(), false, true)
                                    } else {
                                        if (status === a++) {
                                            cm.forceStartQuest(39552, "");
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/39552.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.forceCompleteQuest(39552);
            cm.changeJob(16410);
            cm.sendNormalTalk_Bottom("#face5#法术已经在我的脑海里了，\r\n之前偷看的时候，还只是单纯的文字而已……", 36, 3001674 + cm.getPlayer().getGender(), false, true);
            cm.forceCompleteQuest(39506)
        } else {
            if (status === a++) {
                cm.openUIWithOption(3, 164101000);
                cm.sendNormalTalk_Bottom("#face5#哈哈！总感觉又成长了一个阶段呢，\r\n真想赶紧学习学习新道术呢！", 36, 3001674 + cm.getPlayer().getGender(), true, true)
            } else {
                if (status === a++) {
                    cm.dispose()
                }
            }
        }
    }
};