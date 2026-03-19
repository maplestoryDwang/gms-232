function start() {
    if (cm.getMapId() == 105200100 || cm.getMapId() == 105200500) {
        cm.warp(105200000, 2)
    } else {
        if (cm.getMapId() == 105200200 || cm.getMapId() == 105200600) {
            cm.warp(105200000, 3)
        } else {
            if (cm.getMapId() == 105200300 || cm.getMapId() == 105200700) {
                cm.warp(105200000, 4)
            } else {
                if (cm.getMapId() == 105200400 || cm.getMapId() == 105200800) {
                    cm.warp(105200000, 5)
                } else {
                    var a = parseInt(cm.getInfoQuest(105200000));
                    if (isNaN(a) || a < 1) {
                        a = 105000000
                    }
                    cm.warp(a, 0);
                    cm.playerMessage("从鲁塔比斯回到原来所在的地方。")
                }
            }
        }
    }
    return true
};