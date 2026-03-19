function start() {
    if (cm.getQuestStatus(6241) == 1 || cm.getQuestStatus(6243) == 1) {
        if (cm.getJob() == 312) {
            if (cm.haveItem(4001113)) {
                if (cm.getPlayerCount(924000100) > 0) {
                    cm.playerMessage("挑战已经开始了，你不能进去。");
                    return false
                }
                var a = cm.getEventManager("s4nest");
                if (a == null) {
                    cm.playerMessage("由于未知的原因，你不能进入。")
                } else {
                    a.startInstance(cm.getPlayer());
                    return true
                }
            } else {
                cm.playerMessage("你没有火凤凰的卵，不能进入。")
            }
        } else {
            if (cm.getJob() == 322) {
                if (cm.haveItem(4001114)) {
                    if (cm.getPlayerCount(924000100) > 0) {
                        cm.playerMessage("挑战已经开始了，你不能进去。");
                        return false
                    }
                    var a = cm.getEventManager("s4nest");
                    if (a == null) {
                        cm.playerMessage("由于未知的原因，你不能进入。")
                    } else {
                        a.startInstance(cm.getPlayer());
                        return true
                    }
                } else {
                    cm.playerMessage("你没有冰凤凰的卵，不能进入。")
                }
            }
        }
    } else {
        cm.playerMessage("未知的力量阻挡着你的前进。")
    }
    return false
};