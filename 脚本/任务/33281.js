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
            cm.sendNormalTalk_Bottom("大家要各走各的路了。", 37, 1540453, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("我会回到射手村。\r\n去培养新的弓箭手。", 37, 1540453, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("现在大家都要回到原本自己应该待的地方，但……\r\n相信我们大家应该还会再见吧？", 37, 1540453, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("如果我去射手村，我会顺便去拜访你的。", 57, 0, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face2#这是真的吗？精灵是不会轻易忘记约定的哦。", 37, 1540453, true, true)
                        } else {
                            if (status === a++) {
                                cm.fieldEffect_KinesisEXP(Math.pow(cm.getLevel(), 3) * 3);
                                cm.forceCompleteQuest(33281);
                                cm.gainExp(Math.pow(cm.getLevel(), 3) * 3);
                                cm.effect_Voice("Field.img/masteryBook/EnchantSuccess", 100);
                                cm.dispose()
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/33281.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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