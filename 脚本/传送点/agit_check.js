function start() {
    if (cm.isQuestActive(25871) || cm.isQuestActive(25726) || cm.isQuestActive(25728) || cm.isQuestActive(25757)) {
        cm.warp(400020300, 1, false)
    } else {
        if (cm.isQuestActive(25729)) {
            cm.warp(940000060, 1, false)
        } else {
            cm.playerMessage(-1, "我现在没事.")
        }
    }
};