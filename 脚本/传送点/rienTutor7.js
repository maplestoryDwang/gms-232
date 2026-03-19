function start() {
    if (cm.getQuestStatus(21014) == 2 || cm.getPlayer().getJob() != 2000) {
        cm.warp(140010100, 2)
    } else {
        cm.playerMessage(5, "The town of Rien is to the right. Take the portal on the right and go into town to meet Lilin.")
    }
};