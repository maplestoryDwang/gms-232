function start() {
    if (cm.getInfoQuest(36102) == "First=1" && cm.getQuestStatus(34626) == 0) {
        cm.warp(940200509, 0, false);
        return
    }
    cm.warp(402000300, 2)
};