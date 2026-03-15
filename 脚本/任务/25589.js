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
            cm.sendNormalTalk("一般人发现不了欧罗拉的秘宝，但具有光之力量的人走近的话，它自然会露出本体的。", 0, 1032209, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("这样说来，找起来应该比想象中简单。", 2, 1032209, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("并不一定是那样的。在我看来，如果实力不够优秀的话，即使可以使用光之力量，也很难办到。听说第一个秘宝在金银岛上贪婪的怪物王手里。", 0, 1032209, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("最可疑的地方就是最近刚为人所知的金银岛东北部的#b妖精学院艾利涅#k。那地方的地鼠王极其贪婪狡猾。", 0, 1032209, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("最近那片妖精的土地好像出了问题，你去帮助他们，并趁机搜寻秘宝吧。我现在就把你#b送到那附近去。#k", 0, 1032209, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("你到了那边后，就去找一只名叫#b潘喜#k的猫。回来的时候，使用次元三棱镜就可以了。", 1, 1032209, true, true)
                            } else {
                                if (status === a++) {
                                    cm.forceStartQuest(25589, "");
                                    cm.forceStartQuest(32147, "0");
                                    cm.dispose();
                                    cm.warp(101030000, 0, false)
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/25589.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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