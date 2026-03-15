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
            cm.forceStartQuest(33110, "")
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("如果你想让装备获得成长，不如去旧楼看看如何？你会在那里找到更多的#b刺针#k。", 37, 1530040, true, true)
            } else {
                if (status === a++) {
                    cm.getTopMsgFont("如果完成了章节6，就能开启副本，使徽章成长，获得针。", 3, 20, 20, 0);
                    cm.forceCompleteQuest(33110);
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
            cm.sendNormalTalk_Bottom("辛苦你了，#h0#。我为你准备了很多礼物。", 37, 1530040, false, true)
        } else {
            if (status === a++) {
                cm.forceCompleteQuest(33028);
                cm.forceCompleteQuest(32705);
                cm.finishAchievement(1210);
                cm.sendNormalTalk_Bottom("我给你的#e#r#t1182079##n#k#e是种很神奇的异界物品。它会与你共同成长。", 37, 1530040, true, true);
                cm.gainItem(1142732, 1);
                cm.gainItem(3010867, 1);
                cm.gainItem(1182079, 1);
                cm.gainItem(4310125, 2)
            } else {
                if (status === a++) {
                    cm.dispose()
                }
            }
        }
    }
};