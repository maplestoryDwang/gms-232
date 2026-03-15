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
            cm.askAcceptDecline_Bottom("#face0#我们将新的据点称作枫叶山丘。这是一个飘散着鲜红枫叶的地方。好了，去营地看看吧。我来帮忙带路。", 36, 9130024)
        } else {
            if (status === a++) {
                cm.forceStartQuest(57104, "");
                cm.OnStartNavigation(807040100, 1, "9130024", 0);
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
            cm.npc_ChangeController(9130024, "oid=104901", 501, 32, 8, 451, 551, 1, false, false);
            cm.npc_ChangeController(9130083, "oid=104902", 501, 32, 8, 451, 551, 1, false, false);
            cm.sendNormalTalk_Bottom("#face0#这里就是被称作枫叶山丘的据点。已经有不少人先一步到达这里了。如果有什么问题，可以直接去问他们。", 36, 9130024, false, true)
        } else {
            if (status === a++) {
                cm.forceCompleteQuest(57104);
                cm.updateInfoQuest(25980, "normal=#;hard=#");
                cm.sendNormalTalk_Bottom("#face0#那我就先离开了。我正在四处寻找，看有没有还没能到达“这边”的人。而且在据点里，也有我不想遇到的人在。好了，我们有缘再会吧。", 37, 9130024, true, true)
            } else {
                if (status === a++) {
                    cm.gainItem(2001503, 100);
                    cm.gainItem(2001500, 100);
                    cm.gainItem(1352800, 1);
                    cm.gainItem(1082434, 1);
                    cm.gainItem(1072668, 1);
                    cm.gainItem(1052463, 1);
                    cm.gainItem(1003554, 1);
                    cm.gainItem(1542000, 1);
                    cm.sendNormalTalk_Bottom("#face1#啊，你现在并没有能够立刻使用的武器啊。那就请收下我用过的这套装备吧。虽说并不是什么好东西，但总算是聊胜于无嘛。", 37, 9130024, true, true)
                } else {
                    if (status === a++) {
                        cm.OnStartNavigation(807000000, 1, "9130008", 0);
                        cm.gainExp(1242);
                        cm.dispose()
                    }
                }
            }
        }
    }
};