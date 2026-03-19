function start() {
    if (!cm.isLeader()) {
        cm.playerMessage("Only the leader can go in this portal.");
        return
    }
    var d = cm.getPlayer().getEventInstance();
    if (d == null || d.getProperty("mode") == null) {
        cm.warp(502029000, 0)
    } else {
        var c = 502030000 + (parseInt(d.getProperty("mode")) * 16);
        var a = cm.getMap().getNumMonsters() == 0;
        if (a) {
            switch (cm.getMapId() - c) {
                case 5:
                case 8:
                    a = d.getProperty("stage" + (cm.getMapId() - c)).equals("0");
                    break
            }
        }
        if (!a) {
            cm.playerMessage("The portal is locked. All monsters must be defeated.")
        } else {
            var b = (cm.getMapId() + 1);
            switch (cm.getMapId() - c) {
                case 13:
                case 14:
                case 15:
                    b = (c + (cm.getMapId() - c) - 4);
                    break;
                case 8:
                case 9:
                case 10:
                    b = (c + (cm.getMapId() - c) + 5);
                    break;
                case 11:
                    b = 502029000;
                    break
            }
            cm.warpParty(b, 0)
        }
    }
};