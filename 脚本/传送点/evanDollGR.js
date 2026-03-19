function start() {
    if (cm.isQuestActive(22556)) {
        cm.forceStartQuest(22598, "1");
        cm.sendNormalTalk("放有奇怪玩偶的建筑……不过可能是被锁上了，无法进去。还是回去向#b长老斯坦#k说明情况吧。", 16, 0, false, true)
    } else {
        if (cm.isQuestActive(22557)) {
            cm.warp(910600010, 0, false);
            cm.forceCompleteQuest(22557);
            cm.forceCompleteQuest(22558);
            cm.getPlayer().scheduleWarpTask(6, cm.getMap(100000000))
        } else {
            if (cm.isQuestActive(22559)) {
                cm.warp(910600010, 0, false)
            } else {
                if (cm.isQuestActive(21734)) {
                    cm.warp(910510100, 0, false);
                    cm.getPlayer().scheduleWarpTask(1 * 60 * 10, pi.getMap(100040000))
                } else {
                    if (cm.isQuestActive(25584)) {
                        cm.warp(910600201, 0, false);
                        cm.updateInfoQuest(25583, "enter=1")
                    } else {
                        if (cm.isQuestActive(25555)) {
                            cm.warp(910600201, 0, false);
                            cm.updateInfoQuest(25554, "enter=1")
                        } else {
                            cm.warp(910600100, 0)
                        }
                    }
                }
            }
        }
    }
};