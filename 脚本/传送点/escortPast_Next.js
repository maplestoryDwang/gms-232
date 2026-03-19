function start() {
    if (em.getNumberProperty("clear") == 1) {
        cm.updateInfoQuest(32628, "guard1=1");
        cm.warp(302010400, 0)
    } else {
        cm.playerMessage(5, "还没护送完成。");
        cm.playerMessage(-1, "还没护送完成。")
    }
};