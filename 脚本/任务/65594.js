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
            cm.sendNormalTalk("在#r威尔#k服务器中编织新的记忆吧！\n搜集冒险岛世界全境的精英怪物掉落的#t4034885#，可以交换#b特别的椅子#k。", 5, 9010000, false, true)
        } else {
            if (status === a++) {
                cm.askAcceptDecline("你想现在马上参加吗？\r\n#r[服务器内只能有1个角色参加。]#k", 1, 9010000)
            } else {
                if (status === a++) {
                    cm.forceStartQuest(65590, "");
                    cm.forceStartQuest(65594, "");
                    cm.sendNormalTalk("快去搜集精英怪物掉落的#t4034885#吧！", 5, 9010000, false, false)
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/65594.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
        } else {
            if (status == a++) {
                cm.forceStartQuest();
                cm.dispose()
            }
        }
    }
}
var items = [
    [3018431, 300],
    [3010188, 100],
    [3018432, 350],
    [3018433, 350],
    [3010676, 500],
    [3010290, 150],
    [3010493, 250],
    [3010568, 200],
    [3018434, 300]
];

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
            cm.askMenu("搜集到足够多的#t4034885#了吗？快选择自己想要的椅子吧。\r\n#b#e- 拥有#t4034885#：" + cm.itemQuantity(4034885) + "个#k#n\r\n\r\n#L0# #i3018431:# #t3018431# (300个) #l\r\n#L1# #i3010188:# #t3010188# (100个) #l\r\n#L2# #i3018432:# #t3018432# (350个) #l\r\n#L3# #i3018433:# #t3018433# (350个) #l\r\n#L4# #i3010676:# #t3010676# (500个) #l\r\n#L5# #i3010290:# #t3010290# (150个) #l\r\n#L6# #i3010493:# #t3010493# (250个) #l\r\n#L7# #i3010568:# #t3010568# (200个) #l\r\n#L8# #i3018434:# #t3018434# (300个) #l", 1, 9010000)
        } else {
            if (status == a++) {
                if (cm.haveItem(4034885, items[b][1])) {
                    cm.gainItem(4034885, -items[b][1]);
                    cm.gainItem(items[b][0], 1);
                    cm.sendNormalTalk("给，请收好~\r\n#i" + items[b][0] + "##t" + items[b][0] + "#", 5, 9010000, false, false)
                } else {
                    cm.sendNormalTalk("嗯，#t4034885#好像还不够。再去搜集一点吧。", 5, 9010000, false, false)
                }
                cm.dispose()
            }
        }
    }
};