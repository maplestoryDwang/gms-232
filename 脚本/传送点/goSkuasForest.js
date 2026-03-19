function enter() {
    cm.openScriptNpc()
}
var status = -1;
var selectionLog = [];

function start() {
    action(1, 0, 0)
}

function action(d, c, b) {
    status++;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status === a++) {
            if (cm.isQuestActive(64107)) {
                cm.askMenu_Bottom("跟我来！这片森林里有不少的圆木独眼触须怪！#b\r\n#L0#现在立刻出发吧。#l\r\n#L1#稍作整顿后再出发吧。#l", 36, 9400603)
            } else {
                if (cm.isQuestActive(64109)) {
                    cm.dispose();
                    cm.warp(867202620, 0)
                } else {
                    if (cm.isQuestActive(64121)) {
                        cm.dispose();
                        cm.warp(867202660, 1)
                    } else {
                        if (cm.isQuestActive(64133)) {
                            cm.askMenu_Bottom("我可是狩猎专家外加森林专家，在我看来这里就是聚宝盆。#b\r\n#L0#现在立刻出发吧。#l\r\n#L1#稍作整顿后再出发吧。#l", 56, 0)
                        } else {
                            cm.dispose();
                            cm.warp(867202680, 1)
                        }
                    }
                }
            }
        } else {
            if (status === a++) {
                if (b == 0) {
                    if (cm.isQuestActive(64107)) {
                        cm.warp(867202600, 0)
                    } else {
                        if (cm.isQuestActive(64109)) {
                            cm.warp(867202620, 0)
                        } else {
                            if (cm.isQuestActive(64121)) {
                                cm.warp(867202660, 1)
                            } else {
                                if (cm.isQuestActive(64133)) {
                                    cm.warp(867202800, 0)
                                } else {
                                    cm.warp(867202680, 1)
                                }
                            }
                        }
                    }
                }
                cm.dispose()
            }
        }
    }
};