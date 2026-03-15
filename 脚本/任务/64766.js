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
            cm.askYesNo("这个任务的开始脚本还没有修复哦。它的脚本位于： #b 脚本/任务/64766.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            var e = cm.getQuest();
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/64766.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk_Bottom("队长！队长！！！", 36, 9401029, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#b怎么了，莫妮卡！", 56, 0, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("我升级了！技能，我终于可以学习新技能了！", 36, 9401029, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#b呼，我还以为出什么大事了呢。", 56, 0, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("嘿嘿，确实是件大事嘛！", 36, 9401029, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("队长，你能打开远征队管理窗口中我的信息窗口，然后将背包中的技能拖过去为我装备吗？", 37, 9401029, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("#b稍等一下。", 56, 0, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.openNewUI(1, "UIAbyssExpedition");
                                        cm.playerMessage(5, "[深渊远征队教程] 远征队队员达到5级、10级时，会开启可以装备新技能的栏位。");
                                        cm.playerMessage(5, "[深渊远征队教程] 根据职业对远征队队员的技能进行分类，只能装备符合职业的技能。");
                                        cm.playerMessage(5, "[深渊远征队教程]可随时变更除固有技能以外所装备的技能。");
                                        cm.forceCompleteQuest(64766);
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
};