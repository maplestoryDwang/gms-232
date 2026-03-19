var portals = [
    [29, 30, 31, 32, 45],
    [33, 34, 35, 36, 46],
    [37, 38, 39, 40, 47],
    [41, 42, 43, 28, 48],
    [50, 51, 52, 53, 54]
];
var next = [
    [0, -1],
    [-1, 0],
    [0, 1],
    [1, 0]
];

function start() {
    var c = cm.getPortal().getId();
    var d = cm.getEventManager("副本_起源之塔");
    var i = d.getInstance("副本_起源之塔");
    var h = parseInt(d.getProperty("stage33_teleport"));
    var b = d.getMapFactoryMap(cm.getMapId());
    if (c == 49) {
        var j = cm.getMap().getPortal(44).getPosition();
        cm.onTeleport(1, cm.getPlayer().getId(), j.getX(), j.getY() - 30);
        if (h >= 9) {
            d.setProperty("stage33", "clear");
            cm.fieldEffect_ScreenMsg("UI/UIWindowPL.img/HiddenCatch/StageImg/clear")
        }
        return true
    }
    var g = findPortal(c);
    var e = b.getReactorByName(g[0] + "" + g[1]);
    var a = parseInt(e.getState());
    var f = [g[0] + next[a][0], g[1] + next[a][1]];
    if (f[0] == 5 && f[1] == 4) {
        var j = cm.getMap().getPortal(49).getPosition();
        cm.onTeleport(1, cm.getPlayer().getId(), j.getX(), j.getY() - 30);
        d.setProperty("stage33_teleport", h + 1)
    } else {
        if (f[0] >= 0 && f[0] < 5 && f[1] >= 0 && f[1] < 5) {
            var j = cm.getMap().getPortal(portals[f[0]][f[1]]).getPosition();
            cm.onTeleport(1, cm.getPlayer().getId(), j.getX(), j.getY() - 30);
            d.setProperty("stage33_teleport", h + 1)
        } else {
            cm.fieldEffect_ScreenMsg("Effect/OnUserEff.img/aquarisTower/failed");
            cm.playerMessage(5, "这样哪里也去不了。")
        }
    }
    return true
}

function findPortal(c) {
    for (var b = 0; b < 5; b++) {
        for (var a = 0; a < 5; a++) {
            if (portals[b][a] == c) {
                return [b, a]
            }
        }
    }
    return [-99, -99]
};