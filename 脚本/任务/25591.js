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
            cm.forceStartQuest();
            cm.dispose()
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/25591.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk("来啦，夜光法师。找到秘宝了吗？", 0, 1032209, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("找到了。和传言所说的一样，秘宝在贪婪的怪物手里。但那家伙似乎还没发现秘宝的存在。", 2, 1032209, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("之前不是说了嘛，没有光之力量的人是无法发现欧罗拉的秘宝的。辛苦你了。", 1, 1032209, true, true)
                } else {
                    if (status === a++) {
                        cm.forceCompleteQuest(25591);
                        cm.gainExp(5045);
                        cm.forceStartQuest(25507, "1");
                        cm.gainItem(4033328, -1);
                        cm.dispose()
                    }
                }
            }
        }
    }
};