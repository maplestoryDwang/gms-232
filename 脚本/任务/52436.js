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
            cm.sendNormalTalk("假皇帝的话，还有你的话…不能回答吗？去哪里可以抓到这个家伙吗？", 2, 9330209, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("之后会告诉你我知道的所有内容。我们的力量还不能影响他。还需要更多修炼。", 0, 9330209, true, true)
            } else {
                if (status === a++) {
                    cm.askYesNo("现在教你宏武团的所有武功。准备，现在，所有准备都做好了吗？", 0, 9330209)
                } else {
                    if (status === a++) {
                        cm.updateInfoQuest(1073, "570=201;571=201;508=10;572=201;0=1");
                        cm.forceStartQuest(52436, "");
                        cm.changeJob(572);
                        cm.sendNormalTalk("教你宏武团的所有武功。以后要更精进。", 0, 9330209, false, true)
                    } else {
                        if (status === a++) {
                            cm.gainItem(1492148, 1);
                            cm.gainItem(1142730, 1);
                            cm.sendNormalTalk("还有…成为继承团长的遗志，可以坚守侠和义的侠客。", 0, 9330209, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("以经有了这么大的发展…心情真是微妙。", 0, 9330209, true, true)
                            } else {
                                if (status === a++) {
                                    cm.forceCompleteQuest(52436);
                                    cm.forceStartQuest(29903, "");
                                    cm.playerMessage(5, "获得了<大师级冒险家>称号。");
                                    cm.dispose()
                                }
                            }
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
    }
    status++;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            var e = cm.getQuest();
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/52436.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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