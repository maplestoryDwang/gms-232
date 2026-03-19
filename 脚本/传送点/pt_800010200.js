function enter() {
    if (cm.getQuestStatus(58790) > 0) {
        cm.warp(800026000, 2, false)
    } else {
        if (cm.isQuestFinished(58778)) {
            cm.warp(800024008, 1, false)
        } else {
            if (cm.isQuestFinished(58774)) {
                cm.warp(800024004, 1, false)
            } else {
                if (cm.isQuestFinished(58773)) {
                    cm.warp(800024003, 1, false)
                } else {
                    if (cm.isQuestActive(58773)) {
                        cm.warp(800024002, 1, false)
                    } else {
                        if (cm.isQuestActive(58772)) {
                            cm.warp(800024001, 1, false)
                        } else {
                            if (cm.getQuestStatus(58771) > 0) {
                                cm.warp(800024000, 0, false)
                            } else {
                                cm.warp(800026000, 2, false)
                            }
                        }
                    }
                }
            }
        }
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
            cm.sendOk("这个传送点的脚本尚未修复。\r\n脚本位于： 脚本/传送点/pt_800010200.js ", 0)
        } else {
            cm.dispose()
        }
    }
};