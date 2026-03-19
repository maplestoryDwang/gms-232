function start() {
    var b = cm.getPortal().getId();
    var a = cm.getPortal().getName();
    if (a.contains("ch01_")) {
        if (a.equals("ch01_" + eim.getNumberProperty("portal1"))) {
            cm.onTeleport(0, 3, cm.getPlayer().getId(), -669, -3);
            cm.setNumberForQuestInfo(100240, "progress", 20);
            cm.新复古_爬高高_设置完成率(20)
        } else {
            cm.onTeleport(0, 3, cm.getPlayer().getId(), -715, 1013)
        }
    } else {
        if (a.contains("ch02_")) {
            if (a.equals("ch02_" + eim.getNumberProperty("portal2"))) {
                cm.onTeleport(0, 3, cm.getPlayer().getId(), -663, -2763);
                cm.setNumberForQuestInfo(100240, "progress", 60);
                cm.新复古_爬高高_设置完成率(60)
            } else {
                cm.onTeleport(0, 3, cm.getPlayer().getId(), -759, -640)
            }
        } else {
            if (a.contains("ch03_")) {
                if (a.equals("ch03_" + eim.getNumberProperty("portal3"))) {
                    cm.onTeleport(0, 3, cm.getPlayer().getId(), -342, -4980);
                    cm.setNumberForQuestInfo(100240, "progress", 100);
                    cm.新复古_爬高高_设置完成率(100)
                } else {
                    cm.onTeleport(0, 3, cm.getPlayer().getId(), -772, -3907)
                }
            }
        }
    }
};