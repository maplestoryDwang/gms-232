function start() {
    var b = cm.getPortal().getId();
    var a = cm.getPortal().getName();
    if (cm.isQuestActive(32712)) {
        cm.warp(330002051, 0)
    } else {
        if (cm.isQuestActive(32738)) {
            cm.warp(330002106, 0)
        } else {
            if (cm.isQuestActive(33518) && cm.getNumberFromQuestInfo(33518, "enter") == 0) {
                cm.warp(330002619, 0)
            } else {
                if (cm.isQuestActive(33530)) {
                    if (cm.isQuestFinished(33517) && !cm.isQuestFinished(33527)) {
                        cm.warp(330000661, 0)
                    } else {
                        cm.warp(330000660, 0)
                    }
                } else {
                    cm.warp(330000005, 1)
                }
            }
        }
    }
};