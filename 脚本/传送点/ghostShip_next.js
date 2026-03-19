function start() {
    if (!cm.isLeader()) {
        cm.playerMessage(5, "The leader must be here")
    } else {
        if (cm.getMap().getNumMonsters() != 0) {
            cm.playerMessage(5, "Please, clear all of the monsters!");
            return
        }
        if (((cm.getMapId() % 10) | 0) == 4) {
            if (cm.getMap().getReactorByName("switch0").getState() < 1 || cm.getMap().getReactorByName("switch1").getState() < 1) {
                cm.playerMessage(5, "Both switches must be turned on.");
                return
            }
            var a = cm.getMapId() + 66;
            if (((a % 100) | 0) != 90) {
                a += 10
            }
            cm.warpParty(a, 0)
        } else {
            cm.warpParty(cm.getMapId() + 1, ((cm.getMapId() % 10) | 0) == 3 ? 1 : 2)
        }
    }
};