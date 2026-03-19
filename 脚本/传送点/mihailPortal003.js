function start() {
    if (cm.isQuestActive(20033)) {
        var a = true;
        for (var b = 913070020; b <= 913070039; b++) {
            if (cm.getPlayerCount(b) == 0) {
                if (cm.itemQuantity(4033196) >= 1) {
                    cm.gainItem(4033196, -cm.itemQuantity(4033196))
                }
                cm.resetMap(b);
                cm.warp(b, 0);
                a = false;
                return true;
                break
            }
        }
    } else {
        cm.topMsg("Limbert wants to see you.");
        a = false;
        return false
    }
    if (a) {
        cm.getPlayer().dropMessage(5, "Someone is already in this map.")
    }
    return true
};