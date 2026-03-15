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
            cm.sendNormalTalk_Bottom("#face0#自麦格纳斯的侵略之后，我们一直没能夺回首都赫里希安。\r\n只能以万神殿为据点培植力量，准备与敌人决一死战。", 36, 3000002, false, true, 1)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#最近，我们思索着已积蓄了足够的力量，也做好了诸多准备，于是成立赫里希安反攻总部，迈出了准备夺回首都的第一步。", 36, 3000002, true, true, 1)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0#然而，麦格纳斯的军力比想象中更强大许多，连好不容易成立的反攻总部，也面临着即将被攻陷的危机。", 36, 3000002, true, true, 1)
                } else {
                    if (status === a++) {
                        cm.askAcceptDecline_Bottom("#face0#你要做的，就是去跟那里负责指挥的伊黛娜和皮塔斯见面，给他们提供协助。\r\n怎么样，能办到吗？", 36, 3000002, 1)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face0#你走上右边的台阶，乘传送口去到#b赫里希安#k地区，就能见到侦察兵#b提洛#k。\r\n他会给你提供指引。", 36, 3000002, false, true, 1)
                        } else {
                            if (status === a++) {
                                cm.forceStartQuest(39685, "");
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
    }
    status++;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            var e = cm.getQuest();
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/39685.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk_Bottom("#face0#啊，你就是那位高等翼人的……骑士？\r\n我刚接到了贝尔德的消息。\r\n我是侦察兵提洛。", 36, 3001007, false, true, 1)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#唉，我们辛辛苦苦地维持着反攻总部，谁知却遭到了幽灵部队的空袭。\r\n呜呜……反攻总部现在很危险。", 36, 3001007, true, true, 1)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0#等等，\r\n先擦擦眼泪……", 36, 3001007, true, true, 1)
                } else {
                    if (status === a++) {
                        cm.forceCompleteQuest(39685);
                        cm.dispose()
                    }
                }
            }
        }
    }
};