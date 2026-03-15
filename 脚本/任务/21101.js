var status = -1;

function start(c, b, a) {
    if (c == 1) {
        status++
    } else {
        if (status == 0) {
            cm.sendNext("#b(你仔细思考了一番...)#k");
            cm.dispose();
            return
        } else {
            if (status == 2) {
                cm.warp(914090100, 0);
                cm.dispose();
                return
            }
        }
        status--
    }
    if (status == 0) {
        cm.askYesNo("#b(让我确认自己是不是使用#p1201001#的英雄？使劲抓住#p1201001#试试，肯定会有什么反映的。)#k")
    } else {
        if (status == 1) {
            if (cm.getJob() == 2000) {
                cm.changeJob(2100);
                cm.resetStats(35, 4, 4, 4);
                cm.expandInventory(1, 4);
                cm.expandInventory(2, 4);
                cm.expandInventory(3, 4);
                cm.expandInventory(4, 4);
                cm.gainItem(1142129, 1);
                cm.teachSkill(20009000, 0, -1);
                cm.teachSkill(20009000, 1, 0)
            }
            cm.forceStartQuest(21101, "");
            cm.forceCompleteQuest(21101);
            cm.teachSkill(20000297, 0, -1);
            cm.teachSkill(20001296, 0, -1);
            cm.teachSkill(20001296, 1, 0);
            cm.playerMessage(-1, "学会了返回里恩技能。");
            cm.forceStartQuest(10335, "0");
            cm.sendNormalTalk("#b（似乎想起来了什么……）#k", 3, 1201001, false, true)
        } else {
            if (status == 2) {
                cm.gainItem(1142129, 1);
                cm.forceStartQuest(29924, "");
                cm.forceCompleteQuest(29924);
                cm.eventSKill(0);
                cm.setStandAloneMode(true);
                cm.dispose();
                cm.warp(914090100, 0, false)
            }
        }
    }
}

function end(c, b, a) {
    cm.dispose()
};