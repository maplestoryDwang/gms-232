function start() {
    if (cm.getQuestStatus(1041) == 1) {
        cm.warp(1010100, 4)
    } else {
        if (cm.getQuestStatus(1042) == 1) {
            cm.warp(1010200, 4)
        } else {
            if (cm.getQuestStatus(1043) == 1) {
                cm.warp(1010300, 4)
            } else {
                if (cm.getQuestStatus(1044) == 1) {
                    cm.warp(1010400, 4)
                } else {
                    cm.playerMessage(5, "Only the adventurers that have been trained by Mai may enter.")
                }
            }
        }
    }
};