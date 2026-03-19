function start() {
    if (cm.getQuestStatus(64605) == 1) {
        cm.warp(871000014, 0)
    } else {
        var a = cm.getNumberFromQuestInfo(500767, "type");
        if (a == 8 || a == 9 || a == 10) {
            cm.warp(871000027, 0)
        } else {
            if (a == 11) {
                cm.warp(871000028, 0)
            } else {
                cm.warp(871000001, 0)
            }
        }
    }
};