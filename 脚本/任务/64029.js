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
            cm.sendNormalTalk_Bottom("#b述拉，你又在找什么？", 57, 0, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("……", 37, 9400591, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("……村长说得没错，现在不是沉浸在悲伤之中的时候。", 37, 9400591, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("……", 37, 9400591, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("去下个村庄得走上大半天才能到达。", 37, 9400591, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("途中肯定会有人肚子饿，不管怎样都得吃点，才有力气赶路啊", 37, 9400591, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("#b（帮助述拉搜寻粮食）", 57, 0, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.forceStartQuest(64029, "");
                                        cm.playerMessage(-1, "帮助述拉在坍塌的房屋底下搜寻食物。");
                                        cm.Hidden_background("guide136", 1);
                                        cm.Hidden_background("guide137", 1);
                                        cm.Hidden_background("guide135", 1);
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
            cm.Hidden_background("guide136", 0);
            cm.Hidden_background("guide137", 0);
            cm.Hidden_background("guide135", 0);
            cm.sendNormalTalk_Bottom("#b（……这都被火烧焦了，还沾满了灰，不能吃了……）", 57, 0, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#b（得想个其他办法弄到食物。）", 57, 0, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#b（去找佩图尔商量一下。）", 57, 0, true, true)
                } else {
                    if (status === a++) {
                        cm.forceCompleteQuest(64029);
                        cm.gainItem(4036371, -3);
                        cm.npc_LeaveField("oid=201375");
                        cm.npc_LeaveField("oid=201378");
                        cm.npc_LeaveField("oid=201379");
                        cm.npc_LeaveField("oid=201380");
                        cm.npc_LeaveField("oid=3660659");
                        cm.dispose()
                    }
                }
            }
        }
    }
};