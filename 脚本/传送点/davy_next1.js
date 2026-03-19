function start() {
    var a = parseInt(em.getProperty("stage2"));
    if (a > 3 && cm.isLeader()) {
        cm.warpParty(925100200, 0)
    } else {
        cm.playerMessage(5, "完成任务后请队长申请通过" + (cm.getPlayer().isGM() ? " 【GM可见消息 Property[stage2]=" + a + "】" : "。"))
    }
};