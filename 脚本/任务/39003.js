var status = -1;
var selectionLog = [];

function start(c, b, a) {}

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
            cm.forceCompleteQuest();
            cm.addNumberForQuestInfo(15708, "cq", 1);
            cm.gainExp(40000000);
            cm.sendNormalTalk("#r堕落的树液#k消灭掉啦……\r\n受到#r魔法之力#k影响的东西一定很不好对付吧……", 4, 1540895, false, true);
            cm.gainItem(4001868, 2)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("来，这是我们#b说好的礼物#k。\r\n#i4001868:# #b#t4001868##k\r\n谢谢你能够帮忙遏制这个我们种族所播下的#r恶种#k……", 4, 1540895, true, false)
            } else {
                if (status === a++) {
                    cm.dispose()
                }
            }
        }
    }
};