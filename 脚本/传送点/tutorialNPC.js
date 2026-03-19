function start() {
    if (cm.getPlayer().getLevel() <= 10 && cm.getPlayer().getJob() == 0) {
        var a = cm.getPlayer().getMapId();
        var b = 0;
        if (a == 120000101) {
            b = 1090000
        } else {
            if (a == 102000003) {
                b = 1022000
            } else {
                if (a == 103000003) {
                    b = 1052001
                } else {
                    if (a == 100000201) {
                        b = 1012100
                    } else {
                        if (a == 101000003) {
                            b = 1032001
                        }
                    }
                }
            }
        }
        if (b != 0) {
            cm.openNpc(b)
        }
    }
    return false
};