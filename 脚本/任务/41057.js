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
            var e = cm.getQuest();
            cm.askYesNo("这个任务的开始脚本还没有修复哦。它的脚本位于： #b 脚本/任务/41057.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
        } else {
            if (status == a++) {
                cm.forceStartQuest();
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
            cm.updateInfoQuest(41057, "NpcSpeech=24200011");
            cm.dispose()
        }
    }
}

function stage1(d, c, b) {
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
            cm.updateInfoQuest(41057, "NpcSpeech=24200011/24200192");
            cm.dispose()
        }
    }
}

function stage2(d, c, b) {
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
            cm.sendNormalTalk("你，你的姐姐是不是叫#b世赫拉#k？", 2, 2420006, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("你知道我姐姐吗？！", 0, 2420006, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("啊啊，因为各种姻缘？你知道你姐姐现在最想要的是什么吗？", 2, 2420006, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("我姐姐知道很多很多有趣的故事，所以王妃才要强行把姐姐带进宫里。虽然宫廷里什么都不缺，不过我姐姐现在最想看的应该是我吧。", 0, 2420006, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("原来世赫拉最想要的是你啊？那么你和我一起去宫里吧。", 2, 2420006, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("虽然我也很想去看姐姐，但是宫廷不是随便能进的。尤其像我这种穷人……不过，你把这封#r信#k交给我姐姐吧，是我边想着姐姐边写的。一定要交给她，智由拉真的很想念姐姐。", 0, 2420006, true, true)
                            } else {
                                if (status === a++) {
                                    cm.updateInfoQuest(41057, "NpcSpeech=24200011/24200192/24200063");
                                    cm.gainItem(4033808, 1);
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
            cm.sendNormalTalk("这次……你好像没有答对。我最想要的东西在任何地方都看不到。", 0, 2420003, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("你把我当成什么了？还有，你要的东西根本就带不到这个地方来。不过，这个给你吧。", 2, 2420003, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("智由拉……这个是智由拉写的信啊！你找到我妹妹智由拉了？！智由拉过得还好吗？这孩子从小体弱，不知道有没有生病？啊啊，真的是非常感谢你。能知道智由拉的消息，我现在也可以放心了。", 0, 2420003, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("虽然我最想要的东西是智由拉，这封信就足够了。你答对了我出的所有问题。按照约定，我要送你一样好东西。", 0, 2420003, true, true)
                    } else {
                        if (status === a++) {
                            cm.updateInfoQuest(41057, "");
                            cm.forceStartQuest(41057, "");
                            cm.forceCompleteQuest(41057);
                            cm.gainExp(640000);
                            cm.gainItem(4033808, -1);
                            cm.gainItem(2040803, 1);
                            cm.gainItem(4310085, 5);
                            cm.dispose()
                        }
                    }
                }
            }
        }
    }
};