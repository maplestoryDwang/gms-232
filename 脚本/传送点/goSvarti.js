function start() {
    if (cm.getMapId() == 867201000) {
        if (cm.isQuestFinished(64047)) {
            cm.warp(867201020, 0)
        } else {
            cm.sendOkS_Bottom("大门紧锁，进不去。")
        }
    } else {
        if (cm.getMapId() == 867201050) {
            cm.warp(867201100, 1)
        } else {
            if (cm.isQuestActive(64044)) {
                cm.warp(867201000, 1)
            } else {
                if (cm.isQuestActive(64045)) {
                    cm.warp(867201000, 1)
                } else {
                    if (cm.isQuestActive(64047)) {
                        cm.warp(867201000, 1)
                    } else {
                        cm.warp(867201050, 1)
                    }
                }
            }
        }
    }
};