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
            cm.sendNormalTalk_Bottom("好了现在去搜集其他肉吧！", 0, 3003162, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("你快去呲溜森林，狩猎#b夹生的卢斯狼#k和#b熟透的卢斯狼#k搜集#i4034948:##z4034948:##i4034949:##z4034949:##k吧！", 0, 3003162, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("虽然它们长得很可爱，看起来又很美味，但它们骑士呲溜森林里最强的家伙，你那么弱小，一定要格外小心！", 0, 3003162, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("你这个小不点…怎么总轻视我啊……", 2, 3003153, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("不要啰嗦了，快去吧！对了！这次请#b分别搜集30个#k！", 0, 3003162, true, true)
                        } else {
                            if (status === a++) {
                                cm.forceStartQuest(34210, "");
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
            cm.sendNormalTalk_Bottom("什么啊？！我还以为你被吃了呢，没想到活着回来了？！", 0, 3003162, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("好啦！快看看我做的肉饼！#b都很奇怪啊！现在够了！转转转！三明治#k现在可以说是已经完成了！", 0, 3003162, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("嗯嗯！那我先尝一口吧？！", 0, 3003162, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("哥哥，如果你现在不拿开你的嘴，我会让你以后#b很难吃饭#k的哦？哈哈", 0, 3003163, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("该死，现在我的作用已经结束了，现在你去找我的妹妹#b哔美#k吧！", 0, 3003162, true, false)
                        } else {
                            if (status === a++) {
                                cm.gainItem(4034948, -30);
                                cm.gainItem(4034949, -30);
                                cm.forceCompleteQuest(34210);
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
};