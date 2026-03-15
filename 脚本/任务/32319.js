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
            cm.sendNormalTalk("我听到修嘉的联络，急忙赶过来了。这到底是怎么回事啊？天呐……", 0, 1520036, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("奥利维亚, 你也来了啊。", 16, 1520036, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("我和伦多也来了。到底出了什么事？为何整个冒险岛变成火炉了呢？", 4, 1520035, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("(说了有关黑魔法师从封印中苏醒的事情，以及他袭击冒险岛的事情。)", 16, 1520036, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("你是说黑魔法师？我只以为是个传说，没想到是真的啊。", 4, 1520037, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("那么，黑魔法师之所以会攻击冒险岛，是因为你没有听从他的话吗？那个可耻的家伙……！", 0, 1520036, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("冒险岛是所有冒险家开始冒险的地方。如果刚一来到这里就看到此番情景的话，大家肯定会因为害怕而不敢对抗黑魔法师的。这应该就是黑魔法师的诡计吧。", 4, 1520035, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("不过，不知道他为何没有将冒险岛完全摧毁。因为只要冒险岛不复存在的话，冒险家们就无法来到冒险岛世界了。", 4, 1520035, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk("你别……别说那种听着吓人的话！", 0, 1520036, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk("难不成这是故意做给谁看的吗？虽然不知道是做给谁看的。", 4, 1520037, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk("我们现在不能就这样干愣着。难道就没有什么办法能让冒险岛恢复原貌吗？", 4, 1520034, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk("慢着，这么说来，不是有那个东西嘛？", 4, 1520035, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.forceCompleteQuest(32319);
                                                            cm.gainExp(150000);
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
    }
    status++;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            var e = cm.getQuest();
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/32319.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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