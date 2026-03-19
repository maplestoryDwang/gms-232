function start() {
    try {
        var j = cm.getMapId();
        var c = ((j / 100) | 0) - 9800400;
        var h = 0;
        var a = "";
        switch (c) {
            case 10:
                a = "WitchTower_EASY";
                h = 130000;
                break;
            case 11:
                a = "WitchTower_EASY";
                h = 80000;
                break;
            case 20:
                a = "WitchTower_Med";
                h = 130000;
                break;
            case 21:
                a = "WitchTower_Med";
                h = 80000;
                break;
            case 30:
                a = "WitchTower_Hard";
                h = 510000;
                break;
            case 31:
                a = "WitchTower_Hard";
                h = 460000;
                break;
            default:
                cm.playerMessage("Error: Invalid mapId " + cm.getPlayer().getMapId());
                return
        }
        var f = cm.getEventManager(a).getInstance(cm.getName());
        if (f != null) {
            if (f.getTimeLeft() > h) {
                cm.playerMessage(5, "You have been moved to another location due to usage of illegal 3rd party programme.");
                cm.warp(980040000, 0);
                return true
            }
            switch (c) {
                case 11:
                case 21:
                case 31:
                    f.restartEventTimer(180000);
                    break
            }
        }
        for (var d = 0; d < 10; d++) {
            var b = j + 100 + d;
            if (cm.getPlayerCount(b) == 0) {
                cm.warp(b, 0);
                return true
            }
        }
        cm.playerMessage(5, "All of the maps are currently in use.");
        return false
    } catch (g) {
        cm.playerMessage(5, "Error: " + g)
    }
};