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
            cm.sendNormalTalk_Bottom("你已经休息好了吗？哈哈\r\n再搜集一点材料，#b海鲜饼#k应该就能完成了。", 0, 3003163, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("你能前往艾尔达谷深处，狩猎#b犀牛龟#k和#b犀牛队长#k，搜集#i4034952:##z4034952:##i4034953:##z4034953:##k吗~？", 0, 3003163, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("放入那种软壳，味道会…好吃吗？", 2, 3003154, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("吼吼~ 旅行者，你是在怀疑我的#b口味#k吗？\r\n我保证会好吃的，你快点去吧……。不对，请你快去快回，哈哈！", 0, 3003163, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("对了！这次只要分别搜集#b30个#k就行了~", 0, 3003163, true, true)
                        } else {
                            if (status === a++) {
                                cm.forceStartQuest(34212, "");
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
    }
}

function end(d, c, b) {
    status++;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            cm.sendNormalTalk_Bottom("噢！你躲过了#b犀牛龟#k犄角的攻击啊？哈哈~", 0, 3003163, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("好了~现在海鲜饼已经完成了~你快看，看起来是不是很美味啊？", 0, 3003163, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("穆托肯定会非常~非常喜欢#b三明治#k的，哈哈哈`", 0, 3003163, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("我………… 我也…想…帮忙…姐…姐姐…呵呵呵", 0, 3003164, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("天啊~我们善良的哔嘟！好的，好的，你也快点帮助旅行者吧~", 0, 3003163, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("怎么觉得要加的东西越来多了……。", 2, 3003154, true, true)
                            } else {
                                if (status === a++) {
                                    cm.gainItem(4034952, -30);
                                    cm.gainItem(4034953, -30);
                                    cm.forceCompleteQuest(34212);
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
            }
        }
    }
};