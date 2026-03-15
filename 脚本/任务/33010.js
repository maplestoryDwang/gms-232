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
            cm.askYesNo_Bottom("先清理这里的第一个尘土地带吧。你只要消灭#r60只尘土怪#k就行了。剩下的事就包在我身上吧。", 36, 1530030)
        } else {
            if (status === a++) {
                cm.forceStartQuest(33010, "");
                cm.sendNormalTalk_Bottom("我在这里帮助你，用我的#b真心#k。\r\n#b（进入尘土地带吧）#k", 37, 1530030, false, false)
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
            cm.askYesNo_Bottom("很好，阅览室的怪物已经被消灭得差不多了。接下来我们去#b3楼科学室#k看看吧？\r\n#b（接受时将自动移动到那里。#k", 37, 1530030)
        } else {
            if (status === a++) {
                cm.gainExp(Math.pow(cm.getLevel(), 3));
                cm.forceCompleteQuest(33010);
                cm.dispose();
                cm.warp(330001300, 0)
            }
        }
    }
};