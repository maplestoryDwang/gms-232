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
            cm.forceStartQuest(23051, "");
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/23051.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk("黑色之翼的新武器……成功地破坏掉了吗？我真不敢相信自己的眼睛。你改变了未来！真的，真的很了不起！你能加入反抗者，真是太好了！真的！真的……太好了！", 0, 2159112, false, true)
        } else {
            if (status === a++) {
                cm.askYesNo("啊……我一时激动，都忘了要紧事。#p2154009#知道新武器被毁后，一定会率领手下攻来。在此之前赶快逃跑吧。我这就使用地下总部#t4032740#。一……二……三！", 0, 2159112)
            } else {
                if (status === a++) {
                    cm.forceCompleteQuest(23051);
                    cm.gainItem(4032743, -1);
                    cm.dispose();
                    cm.warp(310010000, 0, false)
                }
            }
        }
    }
};