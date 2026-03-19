function enter() {
    cm.openScriptNpc()
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
            if (cm.getMapId() <= 940303700) {
                if (cm.isQuestActive(35706)) {
                    cm.askYesNo("(声音似乎是从这里传来的，进去看看吧。)\r\n\r\n#e#r※ 移动后，将无法重新返回。#k#n", 2, 0)
                } else {
                    if (cm.isQuestActive(35708)) {
                        cm.askYesNo("（痕迹好像一直通向这里。进去看看吧。）\r\n\r\n#e#r※ 移动后，将无法重新返回。#k#n", 2, 0)
                    }
                }
            } else {
                if (cm.getMapId() <= 940404900) {
                    cm.askYesNo("(从这边走会不会有路呢？进去看看吧。)\r\n\r\n#e#r※ 移动后，将无法重新返回。#k#n", 2, 0)
                } else {
                    cm.askYesNo("(声音似乎是从这里传来的，进去看看吧。)\r\n\r\n#e#r※ 移动后，将无法重新返回。#k#n", 2, 0)
                }
            }
        } else {
            if (status === a++) {
                cm.dispose();
                cm.playerMessage(5, "移动到痛苦迷宫的更深处。");
                if (cm.getMapId() <= 940303700) {
                    if (cm.isQuestActive(35706)) {
                        cm.warp(993063003, 0, false)
                    } else {
                        if (cm.isQuestActive(35708)) {
                            cm.warp(940300000, 0, false)
                        }
                    }
                } else {
                    if (cm.getMapId() <= 940404900) {
                        cm.warp(940400000, 0, false)
                    } else {
                        cm.warp(940500000, 0, false)
                    }
                }
            }
        }
    }
};