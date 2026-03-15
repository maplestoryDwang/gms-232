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
            cm.sendNormalTalk("#h0#，你知道#e战神#n吗？", 4, 9400211, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("据说战神身材比我们高大数倍，他一跺脚，天地就为之震动，战士们也像稻草人一样哗啦啦-倒掉一片。", 4, 9400211, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("真想亲眼见见啊。", 4, 9400211, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("#b(财物之地的曼沙也是个大个子，这说的该不是他吧？这么说起来，我也能变得更高大！)", 2, 0, true, true)
                    } else {
                        if (status === a++) {
                            cm.forceStartQuest(63065, "");
                            cm.dispose()
                        }
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
    }(d == 1) ? status++ : status--;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            var e = cm.getQuest();
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/63065.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
        } else {
            if (status == a++) {
                cm.forceStartQuest();
                cm.dispose()
            }
        }
    }
}

function end(e, d, c) {
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
            cm.sendNormalTalk("天啊？我没看错吧！你是#e战神#n吗？", 4, 9400211, false, true)
        } else {
            if (status === b++) {
                cm.sendNormalTalk("噢！尊敬的#e战神#n！我一直很期望见到你！\r\n我还准备了礼物要献给你。", 4, 9400211, true, true)
            } else {
                if (status === b++) {
                    var a = cm.addNumberForQuestInfo(63099, "keyCount", 1);
                    cm.getPlayer().getTopMsgByItem(4036001, "获得了可以开启巨门的钥匙。(" + a + "/12)");
                    cm.forceCompleteQuest(63065);
                    cm.gainExp(476400);
                    cm.updateInfoQuest(63065, "exp=1");
                    cm.sendNormalTalk("请你收下，尊敬的#e战神#n！", 4, 9400211, true, true);
                    cm.gainItem(4036002, 1)
                } else {
                    if (status === b++) {
                        cm.sendNormalTalk("#b(#e战神#n的称呼让我不太适应，但我获得了钥匙！)", 2, 0, true, false);
                        cm.dispose()
                    }
                }
            }
        }
    }
};