function start() {
    if (cm.isQuestFinished(40060)) {
        cm.warp(321190350, 1, false)
    } else {
        if (cm.isQuestFinished(40055)) {
            cm.warp(321190340, 2, false)
        } else {
            cm.warp(321190330, 1, false)
        }
    }
};