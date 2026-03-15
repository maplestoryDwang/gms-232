var status = -1;

function start() {
    action(1, 0, 0)
}

function start(d, c, b) {
    status++;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            cm.npc_ChangeController(3003305, "oid=49286", -433, 139, 13, -483, -383, 1, false, false);
            cm.npc_ChangeController(3003303, "oid=49287", -262, 139, 14, -312, -212, 5, true, false);
            cm.npc_ChangeController(3003304, "oid=49288", -116, 139, 17, -166, -66, 5, true, false);
            cm.npc_ChangeController(3003326, "oid=49289", 900, -191, 4, 850, 950, 1, false, false);
            cm.npc_ChangeController(3003337, "oid=49290", 1617, -101, 38, 1567, 1667, 1, false, false);
            cm.forceCompleteQuest(34459);
            cm.sendNormalTalk("……得把它搬到最容易照到月光的地方！啊，当然要搬运整个草叶笛可能会有些困难。", 0, 3003303, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("让我瞧瞧，种子……啊，真是万幸，种子囊的生命力还没有消失殆尽……我们还有希望！", 0, 3003303, true, true)
            } else {
                if (status === a++) {
                    cm.askAcceptDecline("从凋零的草叶笛中获得种子，运到这里最容易照到月光的地方种下吧！", 0, 3003303)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("好吧，就让草叶笛重焕新生吧，走起，走起！", 0, 3003303, false, true)
                    } else {
                        if (status === a++) {
                            cm.playerMessage(5, "从凋零的草叶笛中获得种子，运到这里最容易照到月光的地方种下吧。");
                            cm.dispose();
                            cm.warp(940200330, 0)
                        }
                    }
                }
            }
        }
    }
}

function end(d, c, b) {
    status++;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            var e = cm.getQuest();
            cm.askYesNo("它的脚本位于： #b /脚本/任务/#e" + e + "#n.js#k你要立刻完成这个任务吗？")
        } else {
            if (status == a++) {
                cm.forceCompleteQuest();
                cm.dispose()
            }
        }
    }
};