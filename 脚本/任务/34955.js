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
            cm.sendNormalTalk_Bottom("啊，你是来自其他次元的人吗？好像不是这里的冒险家。虽然长着尖耳朵，但应该不是精灵……", 37, 1012100, 0, 1)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#（说自己怀着对冒险岛世界的好奇，穿越次元来到了这里，但是却不知道该到哪里去。）", 37, 3001500 + cm.getPlayer().getGender(), 1, 1)
            } else {
                if (status === a++) {
                    cm.askYesNo_Bottom("如果是那样……你愿意先去帮助有困难的人吗？那样一来，也许可以解开你对这里的疑问。", 37, 1012100)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("我果然没有看错人。虽然我们素未谋面，但我可以感觉到，你拥有一颗善良的心。", 37, 1012100, 0, 1)
                    } else {
                        if (status === a++) {
                            cm.forceStartQuest(34955, "");
                            cm.dispose()
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/34955.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk_Bottom("有#b妖精学院艾利涅、金海滩度假村、列娜海峡#k等很多需要帮助的地方。", 37, 1012100, 0, 1)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#（要到哪里去看来得由我决定了。）", 37, 3001508, 1, 1)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("祝你一路顺风。希望你能度过一次有意义的旅程。", 37, 1012100, 1, 1)
                } else {
                    if (status === a++) {
                        cm.forceCompleteQuest(34955);
                        cm.dispose()
                    }
                }
            }
        }
    }
};