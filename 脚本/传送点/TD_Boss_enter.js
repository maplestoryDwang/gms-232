function start() {
    if (cm.getPlayer().getParty() == null || !cm.isLeader()) {
        cm.playerMessage("The leader of the party must be here.")
    } else {
        var a = cm.getPlayer().getParty().getMembers();
        var e = cm.getPlayer().getMapId();
        var g = true;
        var d = 0;
        var f = a.iterator();
        while (f.hasNext()) {
            var h = f.next();
            var b = cm.getPlayer().getMap().getCharacterById(h.getId());
            if (b == null) {
                g = false;
                break
            }
            d += (b.isGM() ? 4 : 1)
        }
        if (g && (cm.getPlayer().isGM() || d >= 2)) {
            for (var c = 0; c < 7; c++) {
                if (cm.getMap(cm.getMapId() + 1 + c) != null && cm.getMap(cm.getMapId() + 1 + c).getCharactersSize() == 0) {
                    cm.warpParty(cm.getMapId() + 1 + c);
                    cm.dispose();
                    return
                }
            }
            cm.playerMessage("Another party quest has already entered this channel.")
        } else {
            cm.playerMessage("All 2+ members of your party must be here.")
        }
    }
};