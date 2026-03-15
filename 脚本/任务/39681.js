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
            cm.sendNormalTalk_Bottom("阿黛尔，冒险岛世界的各个势力组成冒险岛联盟共同对抗黑魔法师的事情，你知道吗？", 36, 3003658, false, true, 1)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("最近，随着联盟决定与格兰蒂斯的万神殿议会结成同盟，包括诺巴种族在内，格兰蒂斯的众多勇士也参与了进来。", 36, 3003658, true, true, 1)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("可以的话，我希望你也加入联盟……\r\n你愿意与我们合作吗？", 36, 3003658, true, true, 1)
                } else {
                    if (status === a++) {
                        cm.askAcceptDecline_Bottom("有兴趣的话，我现在就送你去女皇之岛圣地。\r\n请你去面见希纳斯陛下，和她面谈吧。\r\n\r\n #r ※ 自动转至任务地图。#k", 36, 3003658, 1)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("到达圣地后，你就去找南哈特。\r\n他应该已经从传闻中得知你的情况……\r\n估计用不着过多说明。", 36, 3003658, false, true, 1)
                        } else {
                            if (status === a++) {
                                cm.forceStartQuest(39681, "");
                                cm.dispose();
                                cm.warp(130000000, 0, false)
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/39681.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk_Bottom("#face0#欢迎来到女皇之岛圣地。\r\n我是冒险骑士团的谋士，南哈特。", 36, 3003651, false, true, 1)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#fc0xFFbfbfbf#(南哈特……他给人的印象很清廉坦诚。\r\n……但是，我不喜欢他那种似乎想看穿我的眼神。)", 56, 0, true, true, 1)
            } else {
                if (status === a++) {
                    cm.forceCompleteQuest(39681);
                    cm.dispose()
                }
            }
        }
    }
};