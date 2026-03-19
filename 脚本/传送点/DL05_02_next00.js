function start() {
    if (cm.getMapId() == 307000310) {
        cm.warp(307000320, 0);
        cm.playerMessage(-1, "冲出包围，继续向神殿深处前进。")
    } else {
        if (cm.getMapId() == 307000320) {
            cm.warp(307000330, 0);
            cm.playerMessage(-1, "冲出包围，继续向神殿深处前进。")
        } else {
            if (cm.getMapId() == 307000330) {
                cm.warp(307000340, 0);
                cm.forceCompleteQuest(32985);
                cm.updateInfoQuest(32985, "exp=1");
                cm.playerMessage(-1, "冲出包围，继续向神殿深处前进。")
            }
        }
    }
};