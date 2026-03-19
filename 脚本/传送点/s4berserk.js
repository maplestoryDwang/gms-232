function start() {
    if (cm.getQuestStatus(6153) == 1) {
        if (!cm.haveItem(4031471)) {
            if (cm.haveItem(4031475)) {
                var a = cm.getEventManager("4jberserk");
                if (a == null) {
                    cm.playerMessage("由于未知的原因，你不能进入到里面。")
                } else {
                    a.startInstance(cm.getPlayer());
                    return true
                }
            } else {
                cm.playerMessage("To enter, you need a key to Forgotten Shrine.")
            }
        } else {
            cm.playerMessage("Sayram already has shield.")
        }
    } else {
        cm.playerMessage("你不能进入到里面。")
    }
    return false
};