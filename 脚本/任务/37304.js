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
            cm.sendNormalTalk_Bottom("#face2#埃尔文。听说汉斯大人开启空间门后就消失了。你可以追踪到他的去向吗？", 36, 1540451, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#让我来看看……目的地是神秘河。\r\n虽然可以勉强开启次元门，但无法立刻得知里面的情况。", 36, 3004322, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0#该不会需要战斗吧？", 36, 3004322, true, true)
                } else {
                    if (status === a++) {
                        cm.askYesNo_Bottom("#face4##h0#，能帮我一个忙吗？\r\n请你与埃尔文和莉莉同行寻找#r汉斯#k大人。", 36, 1540451)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face0#传送口打开了。", 36, 3004322, false, true)
                        } else {
                            if (status === a++) {
                                cm.forceStartQuest(37304, "");
                                cm.npc_SetSpecialAction("oid=2700210", "special", 1, 1);
                                cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/borderless/createPortal", 100);
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/37304.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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