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
            cm.sendNormalTalk("时空门肯定和黑魔法师有关系。他通过操纵时空门吸取怪物们的气息！但是为什么要这样呢？难道是为了给冒险岛世界制造混乱吗？不管怎样，赶紧把这一情况报告给格莱特吧。我还要再调查几个地方，所以你先去报告吧。", 0, 9073015, false, true)
        } else {
            if (status === a++) {
                cm.askYesNo("那么现在立刻把你送去埃德尔斯坦。准备好了吗？", 0, 9073015)
            } else {
                if (status === a++) {
                    cm.forceStartQuest(1637, "");
                    cm.dispose();
                    cm.warp(310000000, 3, false)
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b %SCRIPT_PATH%#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk("在神木村发现了什么吗？先找个安静的地方再说吧。", 0, 9073003, false, true)
        } else {
            if (status === a++) {
                cm.forceCompleteQuest(1637);
                cm.gainExp(164200);
                cm.dispose();
                cm.warp(931050500, 0, false)
            }
        }
    }
};