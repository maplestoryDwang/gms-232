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
            cm.sendNormalTalk("在这个洞穴深处有一条邪恶的#e#r暗黑龙#k#n. 要想前往那里, 必须带着#e#b#t4001086##k#n从秘密通道通过才行. ", 0, 2081006, 0, 1)
        } else {
            if (status === a++) {
                cm.forceStartQuest(7313, "");
                cm.forceCompleteQuest(7313);
                cm.sendNormalTalk("勇敢的人啊, 现在的你应该比我更需要这件东西. 我要将\r\n\r\n#i4001086##e#b#t4001086##k#n给你. ", 0, 2081006, 1, 1);
                cm.gainItem(4001086, 1)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("只有拥有此物的人才能够在#e#b敢死队的暗号石板#k#n中发现秘密通道. 如果不小心将证物丢失, 就请再来和我对话吧. ", 0, 2081006, 1, 0)
                } else {
                    if (status === a++) {
                        cm.dispose()
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/7313.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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