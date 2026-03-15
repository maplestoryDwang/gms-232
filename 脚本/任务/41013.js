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
            cm.askMenu("肯定很好吃，不管是炖的、炒的还是直接吃……不，应该是烤的最好吃！好想吃，好想吃。\r\n#b#L0#什么东西那么好吃？#l", 0, 2411013)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("看看那边正在烤着的龙蛋，是不是看起来非常好吃？啊啊，我只想尝一口。虽然是因为偷蛋才会被抓，不过也不能这么放弃，总有一天我一定要吃到！", 0, 2411013, false, true)
            } else {
                if (status === a++) {
                    cm.askAcceptDecline("你！要不要帮我去拿龙蛋过来？我绝对不会亏待你的！", 0, 2411013)
                } else {
                    if (status === a++) {
                        cm.updateInfoQuest(41013, "");
                        cm.forceStartQuest(41013, "");
                        cm.sendNormalTalk("(这家伙精神不正常吧，在他吃掉龙蛋之前得采取点措施。去找#r7个#t4000921##k来骗骗他。)", 2, 2411013, false, true)
                    } else {
                        if (status === a++) {
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/41013.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.gainExp(420000);
            cm.npc_SetSpecialAction("oid=23644", "act41013", 0, 0);
            cm.forceCompleteQuest(41013);
            cm.gainItem(4000921, -7);
            cm.gainItem(4310085, 3);
            cm.gainItem(2001530, 20);
            cm.dispose()
        }
    }
};