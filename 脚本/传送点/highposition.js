function start() {
    if (cm.getPlayer().getLevel() < 15 || cm.isQuestFinished(29004)) {
        return false
    }
    if (!cm.isQuestActive(29004)) {
        cm.forceStartQuest(29004);
        cm.updateInfoQuest(27017, "enter=00000");
        cm.forceStartQuest(27018, "0")
    }
    var b = cm.getInfoQuest(27017);
    var d = parseInt(cm.getQuestRecord(27018).getCustomData());
    var a = "enter=";
    var g = Array(120000000, 103000000, 101020300, 102000000, 200080100);
    var f = false;
    for (var c = 0; c < g.length; c++) {
        var e = false;
        if (cm.getPlayer().getMapId() == g[c]) {
            if (b.substring(c + 6, c + 7).equals("0")) {
                a += "1";
                e = true;
                f = true
            }
        }
        if (!e) {
            a += b.substring(c + 6, c + 7)
        }
    }
    if (f) {
        cm.updateInfoQuest(27017, a);
        cm.forceStartQuest(27018, d + 1, true);
        cm.getPlayer().dropMessage(-1, (d + 1) + "/5 completed");
        cm.getPlayer().dropMessage(-1, "成就 - 站在最高处")
    }
};