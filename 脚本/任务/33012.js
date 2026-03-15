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
            cm.askYesNo_Bottom("好的，那现在开始动手吧？去迅速消灭#r90只尘土怪#k吧。", 36, 1530030)
        } else {
            if (status === a++) {
                cm.forceStartQuest(33012, "");
                cm.sendNormalTalk_Bottom("我会像个男子汉一样，在这里为你加油的。加油！#b（进入尘土地带吧。）#k", 36, 1530030, false, false)
            } else {
                if (status === a++) {
                    cm.dispose()
                }
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
            cm.sendNormalTalk_Bottom("怪物全部消灭了吗？", 37, 1530030, false, true)
        } else {
            if (status === a++) {
                cm.askYesNo_Bottom("辛苦你了。现在只剩下最后一处了。那就是#b4楼的音乐室#k。\r\n#b（接受时将自动移动到那里。）#k", 37, 1530030)
            } else {
                if (status === a++) {
                    cm.forceCompleteQuest(33012);
                    cm.dispose();
                    cm.gainExp(Math.pow(cm.getLevel(), 3));
                    cm.warp(330001400, 0)
                }
            }
        }
    }
};