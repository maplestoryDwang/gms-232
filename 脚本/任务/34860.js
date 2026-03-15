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
            cm.sendNormalTalk_Bottom("#face0#我感觉到#b古代水晶…#k强大的力量了。\r\n如何将这力量用在战斗中呢？", 37, 3001354, false, true, 1)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#先使用#b#fUI/UIWindow6/illiumSkillTutorial/0#水晶控制#k，即可#b召唤水晶#k。\r\n处于召唤水晶状态时，即可自由移动到#b我面前#k，按#r↓键#k，水晶#b就能瞬间移动到我的位置吗？#k", 37, 3001354, true, true, 1)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0#嗯……使用这水晶的力量，应该可以#r增强我的魔法能力#k。", 37, 3001354, true, true, 1)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face0#使用#b#fUI/UIWindow6/illiumSkillTutorial/5##b#fUI/UIWindow6/illiumSkillTutorial/4#秘技技能#k命中水晶后，#r#fUI/UIWindow6/illiumSkillTutorial/1##r,#fUI/UIWindow6/illiumSkillTutorial/2##r反应技能#k会在水晶发动。", 37, 3001354, true, true, 1)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face0#按照这个原理……把水晶转移到#b适当的位置#k，启动#r反应技能#k，就能在战斗时事半功倍了。", 37, 3001354, true, true, 1)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face0#嗯，命中水晶的#b#fUI/UIWindow6/illiumSkillTutorial/4#秘技：标枪#b#fUI/UIWindow6/illiumSkillTutorial/5#秘技：宝珠#k后，#b水晶中好像积累了一些魔力#k了？", 37, 3001354, true, true, 1)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("#face0#可是#b充入水晶的力量数量#k好像有点不一样啊，如果想迅速充值魔力，最好#r混合使用#k两种技能。", 37, 3001354, true, true, 1)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("#face0#哦！#b水晶的魔力积累到一定程度#k，#r水晶的外形#k就会改变。\r\n水晶外形改变后，就能使用#b#fUI/UIWindow6/illiumSkillTutorial/3#水晶技能#k了吧？", 37, 3001354, true, true, 1)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("#face0#虽然暂时#r无法完全掌握#k水晶的力量，但只要认真研究水晶，一定能发挥出#b更强大的力量#k！", 37, 3001354, true, true, 1);
                                            cm.forceStartQuest(34860, "");
                                            cm.forceCompleteQuest(34860);
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
    }
    status++;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            var e = cm.getQuest();
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/34860.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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