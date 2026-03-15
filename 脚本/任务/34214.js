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
            cm.sendNormalTalk_Bottom("呵呵呵，这次…是最后一次了…呵呵呵", 0, 3003164, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("你去狩猎#b天宇鲸山#k的#b暴怒鲨#k和#b暴怒鲨族长#k，搜集#i4034956:##z4034956:##i4034957:##z4034957:##k吧，呵呵呵", 0, 3003164, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("它们的尖牙非常锋利…下吧的力量也很强~你最好小心点！", 0, 3003164, true, true)
                } else {
                    if (status === a++) {
                        cm.forceStartQuest(34214, "");
                        cm.npc_LeaveField("oid=1");
                        cm.npc_LeaveField("oid=1");
                        cm.npc_LeaveField("oid=2");
                        cm.npc_LeaveField("oid=2");
                        cm.npc_LeaveField("oid=3");
                        cm.npc_LeaveField("oid=3");
                        cm.npc_LeaveField("oid=4");
                        cm.npc_LeaveField("oid=4");
                        cm.npc_LeaveField("oid=5");
                        cm.npc_LeaveField("oid=5");
                        cm.dispose()
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
            cm.sendNormalTalk_Bottom("哇啊啊~ 完成…啦~~转转转！", 0, 3003164, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("旅行者~ #b三明治#k终于完成了！你快看~~", 0, 3003160, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("好了~那现在我们一起用餐吧？", 0, 3003160, true, true)
                } else {
                    if (status === a++) {
                        cm.gainItem(4034956, -30);
                        cm.gainItem(4034957, -30);
                        cm.forceCompleteQuest(34214);
                        cm.Hidden_background("obj_01", 1, cm.isQuestFinished(34208) ? 1 : 0, 0, 0);
                        cm.Hidden_background("obj_02", 1, cm.isQuestFinished(34212) ? 1 : 0, 0, 0);
                        cm.Hidden_background("obj_03", 1, cm.isQuestFinished(34214) ? 1 : 0, 0, 0);
                        cm.Hidden_background("obj_04", 1, cm.isQuestFinished(34215) ? 1 : 0, 0, 0);
                        cm.dispose()
                    }
                }
            }
        }
    }
};