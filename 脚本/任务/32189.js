var status = -1;

function start(c, b, a) {
    status++;
    cm.forceStartQuest();
    cm.dispose()
}

function end(c, b, a) {
    status++;
    if (status == 0) {
        cm.sendNormalTalk("来啦。你手上拿着的那个是……？", 1, 1510007, false, true)
    } else {
        if (status == 1) {
            cm.gainExp(107676);
            cm.forceStartQuest(32189, "");
            cm.gainItem(4030030, -30);
            cm.forceCompleteQuest(32189);
            cm.sendNormalTalk("#i4030030##b#t4030030##k\r\n\r\n这是冰川之核碎片……冰川之核是一种具有极强冷却效果的神秘物质。他们居然大量搜集这种物质，难道是想用来启动某个巨大的引擎装置？", 1, 1510007, true, true)
        } else {
            if (status == 2) {
                cm.sendNormalTalk("这事很可疑。敌人的目的到底是什么？", 3, 1510007, true, true)
            } else {
                if (status == 3) {
                    cm.dispose();
                    cm.warp(141050400, 0, false)
                }
            }
        }
    }
};