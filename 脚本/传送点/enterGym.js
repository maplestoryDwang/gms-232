function start() {
    if (cm.getQuestStatus(21701) == 1) {
        cm.warp(914010000, 1)
    } else {
        if (cm.getQuestStatus(21702) == 1) {
            cm.warp(914010100, 1)
        } else {
            if (cm.getQuestStatus(21703) == 1) {
                cm.warp(914010200, 1)
            } else {
                cm.playerMessage(5, "Only if you are recieving a lesson from Puo, you will be allowed to enter the Pengiun Training Ground.")
            }
        }
    }
};