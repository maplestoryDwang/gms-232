function start() {
    if (cm.getQuestStatus(21000) == 0) {
        cm.playerMessage(5, "必须接受了赫丽娜的任务才能通过。")
    } else {
        cm.teachSkill(20000017, 0, -1);
        cm.teachSkill(20000018, 0, -1);
        cm.teachSkill(20000017, 1, 0);
        cm.teachSkill(20000018, 1, 0);
        cm.warp(914000200, 1)
    }
};