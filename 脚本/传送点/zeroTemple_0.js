function start() {
    if (cm.getQuestStatus(40050) > 0) {
        cm.warp(320000100, 1, false)
    } else {
        cm.playerMessage(5, "先了解下神殿的情况再离开。");
        cm.playerMessage(-1, "先了解下神殿的情况再离开。")
    }
};