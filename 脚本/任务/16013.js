var status = -1;

function start(d, c, b) {
    status++;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status === a++) {
            cm.forceCompleteQuest(16013);
            cm.forceCompleteQuest(16173);
            cm.updateInfoQuest(18793, "q0=1;q1=0;q2=0;pq=0;q1Date=" + cm.getNowTimeString(3) + ";q2Date=" + cm.getNowTimeString(3) + ";pqDate=" + cm.getNowTimeString(3));
            cm.sendNormalTalk("勇士！\r\n现在你可以创建#b#e<冒险岛联盟>#k#n了。", 4, 9010106, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("<冒险岛联盟>是指#b同一世界内我的角色们#k组成的集团。#r只有60级以上/完成2转的角色#k可以进入联盟。", 4, 9010106, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("将<冒险岛联盟>所属的角色配置在#b战斗地图#k中，可以获得#r特别的效果#k。\r\n根据如何配置角色，可以获得各种不同的效果。", 4, 9010106, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("此外，配置在战斗地图上的攻击队员们可以合力挑战#b巨大的龙#k，获得#r联盟币#k。\r\n可以在联盟币商店中购买珍贵的道具。", 4, 9010106, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("好了，让#b协作的力量#k变得更强吧！\r\n\r\n我会在各个村庄中和我的新职员斗篷先生待在一起。如果想听听更详细的说明，请随时来找我。", 4, 9010106, true, true)
                        } else {
                            if (status === a++) {
                                cm.openUI(1148);
                                cm.getTopMsgFont("从现在起，可以在详细菜单中对冒险岛联盟进行管理了。", 3, 20, 20, 0);
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
        if (status === a++) {
            cm.forceCompleteQuest();
            cm.dispose()
        } else {
            cm.dispose()
        }
    }
};