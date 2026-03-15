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
            cm.sendNormalTalk("好久不见，恩人！主人的伤势已经好了，正在忙着寻找落脚点，一直没有跟我联系。不久前，他终于和我联系了！", 0, 1063018, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("我跟主人说了你的事情，他说如果你是好人的话，随时欢迎加入他的团体！但有个条件。要想加入团体，好像要通过最基本的考试。", 0, 1063018, true, true)
            } else {
                if (status === a++) {
                    cm.askAcceptDecline("像恩人这么强的人，我想应该很容易就能通过那种考试。需要我说明一下考试的内容吗？", 0, 1063018)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("考验非常简单！你只要前往#b#m103000000# 沼泽地带#k，消灭#r150只#o3110100# #k就行了。主人想在那里建造据点，目前正因#o3110100#的威胁而发愁。", 0, 1063018, false, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("当然能在其他地方建立根据地的话就更好了……但是不久前#b他想在有个叫什么寺院的地方建立根据地，结果那里的怪物太强，发生了暴乱#k。所以这次他很慎重。", 0, 1063018, true, false)
                        } else {
                            if (status === a++) {
                                cm.dispose();
                                cm.forceStartQuest(22560, "");
                                cm.warp(103030000, 8, false)
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/22560.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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