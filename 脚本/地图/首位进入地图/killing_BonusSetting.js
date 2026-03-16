var status = -1;
var selectionLog = [];

function action(d, f, k) {
    if (status == 0 && d == 0) {
        cm.dispose();
        return
    }(d == 1) ? status++ : status--;
    selectionLog[status] = k;
    var c = -1;
    if (status <= c++) {
        cm.dispose()
    } else {
        if (status === c++) {
            cm.getMap().resetFully();
            cm.fieldEffect_ScreenMsg("killing/bonus/bonus");
            cm.fieldEffect_ScreenMsg("killing/bonus/stage");
            var j, h, g;
            var l = 0,
                b = 0;
            if (cm.getMapId() >= 910320010 && cm.getMapId() <= 910320029) {
                j = new java.awt.Point(121, 218);
                h = new java.awt.Point(396, 43);
                g = new java.awt.Point(-63, 43);
                b = 9700020;
                l = 10
            } else {
                if (cm.getMapId() >= 926010010 && cm.getMapId() <= 926010029) {
                    j = new java.awt.Point(0, 88);
                    h = new java.awt.Point(-326, -115);
                    g = new java.awt.Point(361, -115);
                    b = 9700019;
                    l = 10
                } else {
                    if (cm.getMapId() >= 926010030 && cm.getMapId() <= 926010049) {
                        j = new java.awt.Point(0, 88);
                        h = new java.awt.Point(-326, -115);
                        g = new java.awt.Point(361, -115);
                        b = 9700019;
                        l = 15
                    } else {
                        if (cm.getMapId() >= 926010050 && cm.getMapId() <= 926010069) {
                            j = new java.awt.Point(0, 88);
                            h = new java.awt.Point(-326, -115);
                            g = new java.awt.Point(361, -115);
                            b = 9700019;
                            l = 20
                        } else {
                            if (cm.getMapId() >= 926010070 && cm.getMapId() <= 926010089) {
                                j = new java.awt.Point(0, 88);
                                h = new java.awt.Point(-326, -115);
                                g = new java.awt.Point(361, -115);
                                b = 9700029;
                                l = 20
                            } else {
                                return
                            }
                        }
                    }
                }
            }
            var e = cm.getEventInstance();
            if (e != null) {
                var a = e.getEventManager();
                for (var c = 0; c < l; c++) {
                    cm.getMap().spawnMonsterOnGroundBelow(a.getMonster(b), j);
                    cm.getMap().spawnMonsterOnGroundBelow(a.getMonster(b), h);
                    cm.getMap().spawnMonsterOnGroundBelow(a.getMonster(b), g)
                }
            }
            cm.getPlayer().scheduleWarpTask(120, cm.getMap().getReturnMap());
            cm.dispose()
        } else {
            cm.dispose()
        }
    }
}

function start() {
    status = -1;
    action(1, 0, 0)
};