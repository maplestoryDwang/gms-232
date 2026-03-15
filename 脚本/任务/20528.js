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
            cm.gainItem(4032196, 3);
            cm.sendNormalTalk("哦，你搜集来断奶食啦。那么，接下来就让#t1902005#蜕皮吧。给它喂食你搜集来的断奶食的话……", 0, 1102002, false, true)
        } else {
            if (status === a++) {
                cm.teachSkill(80001307, -1, 0);
                cm.teachSkill(80001308, 1, 1);
                cm.forceCompleteQuest(20528);
                cm.sendNormalTalk("#t1902005#已经蜕皮了。哦，不对，现在应该叫做#t1902006#，而不是#t1902005#了吧。蜕皮之后的#t1902006#将会比以前更加强大，就能成为你更可靠的朋友。你得到了一个很不错的骑宠啊。", 0, 1102002, true, false)
            } else {
                if (status === a++) {
                    cm.gainItem(4032196, -3);
                    cm.dispose()
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/20528.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.forceCompleteQuest(20528);
            cm.dispose()
        }
    }
};