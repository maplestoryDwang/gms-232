function start() {
    switch (cm.getMapId()) {
        case 807040000:
            if (cm.getPlayer().getJob() == 4100) {
                if (cm.isQuestActive(57104)) {
                    cm.warp(807040100, 0)
                } else {
                    cm.playerMessage(5, "和山中幸盛进行对话吧。")
                }
            } else {
                if (cm.getQuestStatus(57402) == 1) {
                    cm.warp(807040100, 0)
                } else {
                    cm.playerMessage(5, "和直江兼续进行对话吧。")
                }
            }
            break;
        case 807040100:
            if (cm.getPlayer().getJob() == 4100) {
                if (cm.isQuestFinished(57104)) {
                    cm.warp(807000000, 0)
                } else {
                    cm.playerMessage(5, "和山中幸盛进行对话吧。")
                }
            } else {
                if (cm.isQuestFinished(57402)) {
                    cm.warp(807000000, 0)
                } else {
                    cm.playerMessage(5, "和直江兼续进行对话吧。")
                }
            }
            break
    }
};