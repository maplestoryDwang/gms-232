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
            cm.askYesNo("这个任务的开始脚本还没有修复哦。它的脚本位于： #b 脚本/任务/57118.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/57118.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk_Bottom("#face0#剑斗，辛苦你了。待在这个本阵里，都能清楚看到敌兵们自乱阵脚的模样。如此一来，敌人应该需要花费很长一段时间才能重整阵势。所以说，他们在短时间内应该不会从正面向枫叶山丘发起进攻了。", 37, 9130006, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#没有必要强行战斗下去了，快点返回本阵吧。我也会要求其他士兵一起回去本阵的。", 37, 9130006, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("嗯，我明白了。对了，我在敌阵的中央部位发现了一个神秘的狐狸尾巴。按理说，这种东西根本不会出现在这样一个时间和地点的，所以我有些在意……这会不会是来自那只春秋一直坐着的狐狸呢？", 57, 0, true, true)
                } else {
                    if (status === a++) {
                        cm.askYesNo_Bottom("#face0#狐狸尾巴……？这还真是其妙啊。先不说这个了，可不可以请你尽快返回本阵？等我们返回本阵后再继续详谈吧。", 37, 9130006)
                    } else {
                        if (status === a++) {
                            cm.forceCompleteQuest(57118);
                            cm.gainExp(2596);
                            cm.gainItem(4033307, -1);
                            cm.dispose();
                            cm.warp(807000000, 2, false)
                        }
                    }
                }
            }
        }
    }
};