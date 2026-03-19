function start() {
    var b = 0;
    var a = 0;
    switch (cm.getMapId()) {
        case 100000201:
            b = 450000100;
            break;
        case 400000001:
            b = 450000110;
            break;
        case 105300000:
            b = 450000120;
            break;
        case 105300300:
        case 105300301:
        case 105300302:
            if (cm.isQuestActive(1464)) {
                b = 450000120;
                cm.setNumberForQuestInfo(1464, "find", 1)
            } else {
                return
            }
            break
    }
    cm.warp(b, 0)
};