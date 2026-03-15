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
            cm.sendNormalTalk_Bottom("#b#h0#！#k\r\n不知不觉间，你的出色战绩已经传遍新复古王国各地了呢！", 36, 9062179, false, true, 3)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("呵呵，谢谢你。\r\n我会更加努力，争取早日打败#r魔王皮洛克#k，救出#b奥罗拉公主#k。\r\n对了，你有什么事？", 56, 0, true, true, 3)
            } else {
                if (status === a++) {
                    cm.askYesNo_Bottom("不瞒你说，我们新复古王国的百姓们为了感激你的帮助，准备了一点\r\n小礼物。即……新复古王国特产的#b银色野猪#k！\r\n希望你收下！", 36, 9062179, 3)
                } else {
                    if (status === a++) {
                        cm.teachSkill(80002747, 0, -1);
                        cm.teachSkill(80002747, 1, 0);
                        cm.teachSkill(80002747, 1, 0);
                        cm.forceStartQuest(100276, "");
                        cm.forceCompleteQuest(100276);
                        cm.openUIWithOption(3, 80002747);
                        cm.sendNormalTalk_Bottom("好，我已经给你发放了可以召唤#b银色野猪#k的#b技能#k。#b\r\n\r\n#e获得#s80002747# 召唤银色野猪#k技能！#n", 36, 9062179, false, true, 3)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("在#b召唤出银色野猪#k的状态下，去#b狩猎等级范围怪物#k\r\n可以获得#r新复古能量#k。\r\n银色野猪会吸收你获得的新复古能量，气息渐渐增强。", 36, 9062179, true, true, 3)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("银色野猪完全变强时，再次输入#b技能键#k，\r\n即可#r骑乘银色野猪#k发动突进，狩猎怪物。", 36, 9062179, true, true, 3)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("那么，麻烦你好好照顾银色野猪哦！", 36, 9062179, true, false, 3)
                                } else {
                                    if (status === a++) {
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/100276.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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