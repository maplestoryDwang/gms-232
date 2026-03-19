function enter() {
    cm.openScriptNpc()
}
var status = -1;
var selectionLog = [];

function start() {
    action(1, 0, 0)
}

function action(d, c, b) {
    if (status == 0 && d == 0) {
        cm.dispose();
        return
    }(d == 1) ? status++ : status--;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status === a++) {
            if (cm.isQuestActive(22580)) {
                cm.sendNormalTalk("为什么……进不去呢？我觉得#o9300391#上似乎被施了某种魔法。看起来明明就是同类，感觉那么亲切和熟悉，却怎么都无法靠近……#k", 8, 1013000, false, true)
            } else {
                cm.dispose()
            }
        } else {
            if (status === a++) {
                cm.sendNormalTalk("似乎在唤醒那个#o9300391#之前，是无法通过这里的……而它似乎又不是一时半会儿能醒过来的样子。要不还是先修炼着，说不定什么时候就能发现突破那堵墙的线索呢。 ", 8, 1013000, false, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("等那个时候再……一定要再回到这座岛上来，主人。", 8, 1013000, false, true)
                } else {
                    if (status === a++) {
                        cm.forceCompleteQuest(22580);
                        cm.warp(922030000, 0, false);
                        cm.forceStartQuest(22581, "");
                        cm.addPopupSay(0, 4000, "等变强了再回来吧！");
                        cm.dispose()
                    }
                }
            }
        }
    }
};