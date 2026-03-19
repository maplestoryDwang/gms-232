function enter() {
    cm.openScriptNpc()
}
var status = -1;
var selectionLog = [];

function start() {
    action(1, 0, 0)
}

function action(e, c, b) {
    if (status == 0 && e == 0) {
        cm.dispose();
        return
    }(e == 1) ? status++ : status--;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status === a++) {
            var d = "你想去哪里？\r\n#b#L0#月桥#l\r\n#b#L1#痛苦迷宫#l#k\r\n#b#L2#世界尽头#l\r\n#b#L3#埃斯佩拉#l\r\n#b#L4#射手村#l";
            if (cm.isQuestFinished(35601) && !cm.isQuestFinished(35814)) {
                d += "\r\n#b#L9#继续剧情故事#l"
            }
            cm.askMenu(d, 3003568)
        } else {
            if (status === a++) {
                if (selectionLog[1] == 0) {
                    cm.askYesNo("确定要去#b月桥#k吗？", 3003568)
                } else {
                    if (selectionLog[1] == 1) {
                        cm.askYesNo("确定要去#b痛苦迷宫#k吗？", 3003568)
                    } else {
                        if (selectionLog[1] == 2) {
                            cm.askYesNo("确定要去#b世界尽头#k吗？", 3003568)
                        } else {
                            if (selectionLog[1] == 3) {
                                cm.askYesNo("确定要去#b埃斯佩拉#k吗？", 3003568)
                            } else {
                                if (selectionLog[1] == 4) {
                                    cm.askYesNo("确定要去#b射手村#k吗？", 3003568)
                                } else {
                                    cm.askYesNo("确定要#b继续剧情故事#k吗？", 3003568)
                                }
                            }
                        }
                    }
                }
            } else {
                if (selectionLog[0] == 0) {
                    cm.warp(450009100, 0)
                } else {
                    if (selectionLog[0] == 1) {
                        cm.warp(450011120, 0)
                    } else {
                        if (selectionLog[0] == 2) {
                            cm.warp(450012000, 0)
                        } else {
                            if (selectionLog[0] == 3) {
                                cm.warp(450007160, 0)
                            } else {
                                if (selectionLog[0] == 4) {
                                    cm.warp(100000000, 0)
                                } else {
                                    cm.warp(cm.getNumberFromQuestInfo(35601, "map"), 0)
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