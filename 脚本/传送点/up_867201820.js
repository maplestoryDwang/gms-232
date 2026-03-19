function start() {
    var c = cm.getPortal().getId();
    var a = cm.getPortal().getName();
    if (cm.getInfoQuest(64088).contains("coll5=1")) {
        var b = cm.getMap().getPortal(5 + 2).getPosition()
    } else {
        if (cm.getInfoQuest(64088).contains("coll4=1")) {
            var b = cm.getMap().getPortal(4 + 2).getPosition()
        } else {
            if (cm.getInfoQuest(64088).contains("coll3=1")) {
                var b = cm.getMap().getPortal(3 + 2).getPosition()
            } else {
                if (cm.getInfoQuest(64088).contains("coll2=1")) {
                    var b = cm.getMap().getPortal(2 + 2).getPosition()
                } else {
                    if (cm.getInfoQuest(64088).contains("coll1=1")) {
                        var b = cm.getMap().getPortal(1 + 2).getPosition()
                    } else {
                        var b = cm.getMap().getPortal(0).getPosition()
                    }
                }
            }
        }
    }
    cm.onTeleport(1, cm.getPlayer().getId(), b.getX(), b.getY() - 10)
};