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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/20033.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.askMenu("鸡蛋拿来了吗？没打碎吧？等等，怎么成了这个样子？发生了什么事？\r\n#b\r\n#L0#嗯……“沃尔夫”突然攻击了我……然后……“沃尔夫”逃走了。#l", 0, 1106002)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("什么！“沃尔夫”逃走了？你这没用的东西！！今天不许吃饭！！如果找不到“沃尔夫”，你也别回来了！", 0, 1106002, false, true)
            } else {
                if (status === a++) {
                    cm.forceCompleteQuest(20033);
                    cm.gainExp(372);
                    cm.gainExp(560);
                    cm.gainItem(4033196, -10);
                    cm.gainItem(2000016, 30);
                    cm.gainItem(2000018, 30);
                    cm.dispose();
                    cm.warp(913070004, 0, false)
                }
            }
        }
    }
};