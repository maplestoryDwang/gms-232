function start() {
    var a = cm.getMapId() - 744000000;
    cm.getPlayer().dropMessage(5, "mapId = " + a);
    var d = eim.getProperty("map_" + a);
    if (d != null && d.equals("clear")) {
        var c = eim.getNumberProperty("state");
        eim.setProperty("state", c + 1);
        if (c == 5) {
            var b = 2
        } else {
            if (c > 5) {
                var b = parseInt(eim.getProperty("next_map_" + c))
            } else {
                var b = parseInt(eim.getProperty("next_map_" + (c + 1)))
            }
        }
        cm.getPlayer().dropMessage(5, "state = " + c);
        cm.getPlayer().dropMessage(5, "next = " + b);
        cm.warp(744000000 + b, 0)
    } else {
        cm.getPlayer().dropMessage(5, "这里的考试还没有结束，不能前往下一间教室。");
        cm.getPlayer().dropMessage(-1, "这里的考试还没有结束，不能前往下一间教室。")
    }
    return true
};