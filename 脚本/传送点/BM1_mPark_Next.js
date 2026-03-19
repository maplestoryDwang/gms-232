function enter() {
    if (em.getNumberProperty("clear") == 1) {
        var a = cm.getMapId();
        if (a == 993061600) {
            cm.warp(993060039, 0, false)
        } else {
            if (a == 993061900) {
                cm.warp(993060043, 0, false)
            } else {
                if (a == 993065500) {
                    cm.warp(993060051, 0, false)
                } else {
                    if (a == 993066100) {
                        cm.warp(993060079, 0, false)
                    } else {
                        if (a == 993066700) {
                            cm.warp(993060067, 0, false)
                        } else {
                            if (a == 993067000) {
                                cm.warp(993060069, 0, false)
                            } else {
                                cm.warp(a + 100, 0, false)
                            }
                        }
                    }
                }
            }
        }
    } else {
        cm.playerMessage(5, "还没有消灭足够多的怪物。");
        cm.playerMessage(-1, "还没有消灭足够多的怪物。")
    }
}
var status = -1;
var selectionLog = [];

function start() {
    action(1, 0, 0)
}

function action(d, c, b) {
    if (status == 0 && d == 0) {
        cm.dispose();
        return
    }(d == 1) ? status++ : status--;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status === a++) {
            cm.sendOk("这个传送点的脚本尚未修复。\r\n脚本位于： 脚本/传送点/BM1_mPark_Next.js ", 0)
        } else {
            cm.dispose()
        }
    }
};