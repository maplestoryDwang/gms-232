var status = -1;
var selectionLog = [];

function start(e, d, c) {
    if (status == 0 && e == 0) {
        cm.dispose();
        return
    }(e == 1) ? status++ : status--;
    selectionLog[status] = c;
    var b = -1;
    if (status <= b++) {
        cm.dispose()
    } else {
        if (status == b++) {
            cm.updateInfoQuest(34436, "s1=1");
            cm.sendNormalTalk("恩，我想要立刻开始出道准备工作，可是迪亚去哪儿了？你见过她人没？", 0, 1052203, false, true)
        } else {
            if (status === b++) {
                cm.askAcceptDecline("迪亚居然不在……真奇怪，#b#ho##k，可否请你帮忙去找一找迪亚呢？", 0, 1052203)
            } else {
                if (status === b++) {
                    cm.sendNormalTalk("啊，应该走不了多远的……要是你找到了迪亚，请转告她我在找她。", 0, 1052203, false, true)
                } else {
                    if (status === b++) {
                        cm.sendNormalTalk("#b（还是先从大厅开始找起吧。）", 2, 1052203, true, false)
                    } else {
                        if (status === b++) {
                            var a = cm.getQuestRecord(34418);
                            a.setStatus(1);
                            cm.getPlayer().updateQuest(a, true);
                            cm.dispose()
                        }
                    }
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