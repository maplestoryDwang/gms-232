function start() {
    if (cm.getQuestStatus(6134) == 1) {
        var a = cm.getEventManager("s4resurrection2");
        if (a == null) {
            cm.playerMessage("由于未知的原因，你不能进入到里面。")
        } else {
            var b = a.getProperty("started");
            if (b == null || b.equals("false")) {
                a.startInstance(cm.getPlayer());
                return true
            } else {
                cm.playerMessage("已经有人在挑战任务。")
            }
        }
    } else {
        cm.playerMessage("你不能进入到里面。")
    }
    return false
};