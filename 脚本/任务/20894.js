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
            cm.sendNormalTalk("#h0#……这是……？", 0, 1101000, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("啊，女皇，那是南哈特让我交给你的冒险骑士团活动报告书。", 2, 1101000, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("呵呵，南哈特是那么说的？这是推荐书。他说这段时间你比任何人都努力，变强了不少。还有，他说你为了骑士团尽了自己的全力。内容就是这些。", 0, 1101000, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("嗯？南哈特大人？", 2, 1101000, true, true)
                    } else {
                        if (status === a++) {
                            cm.askAcceptDecline("我认可你这段时间以来的努力、成就和功劳……我决定授予你新的职位。希望……你能接受。", 0, 1101000)
                        } else {
                            if (status === a++) {
                                cm.updateInfoQuest(1073, "1100=10;1110=201;1111=201;1112=201");
                                cm.teachSkill(10001005, 1, 1);
                                if (cm.getJob() == 1111 || cm.getJob() == 1211 || cm.getJob() == 1311 || cm.getJob() == 1411 || cm.getJob() == 1511) {
                                    cm.changeJob(cm.getJob() + 1)
                                }
                                cm.sendNormalTalk("#h0#，你拥有面对黑魔法师的勇气。从现在开始，你就是冒险骑士团的信任骑士团长了。希望你能将你的力量用于冒险岛世界的和平……", 0, 1101000, false, false)
                            } else {
                                if (status === a++) {
                                    cm.gainItem(1142069, 1);
                                    cm.forceCompleteQuest(20894);
                                    cm.forceCompleteQuest(20768);
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/20894.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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