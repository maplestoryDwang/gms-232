function start() {
    var a = cm.getPlayer().getEventInstance();
    if (a != null && cm.getPlayer().getCarnivalParty() != null) {
        if (cm.getPlayer().getCarnivalParty().getTeam() == 0) {
            if (a.getProperty("Red_Stage").equals("B")) {
                cm.warp(a.getMapInstance(5).getId(), 1)
            } else {
                if (a.getProperty("Red_Stage").equals("BC")) {
                    cm.warp(a.getMapInstance(0).getId(), 1)
                } else {
                    cm.warp(a.getMapInstance(5 + parseInt(a.getProperty("Red_Stage"))).getId(), 1)
                }
            }
        } else {
            if (a.getProperty("Blue_Stage").equals("B")) {
                cm.warp(a.getMapInstance(5).getId(), 1)
            } else {
                if (a.getProperty("Blue_Stage").equals("BC")) {
                    cm.warp(a.getMapInstance(0).getId(), 1)
                } else {
                    cm.warp(a.getMapInstance(10 + parseInt(a.getProperty("Blue_Stage"))).getId(), 1)
                }
            }
        }
    }
};