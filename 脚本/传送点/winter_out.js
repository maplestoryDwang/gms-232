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
            cm.askMenu("你要去哪里呢？\r\n\r\n#b#L0#暖春之国#l\r\n#L1#盛夏之国#l\r\n#L2#晚秋之国#l\r\n\r\n#L3#重返冒险岛#l", 4, 9201326)
        } else {
            if (status === a++) {
                if (selectionLog[1] == 0) {
                    cm.askYesNo("需要前往暖春之国吗？", 4, 9201326)
                } else {
                    if (selectionLog[1] == 1) {
                        cm.askYesNo("需要前往盛夏之国吗？", 4, 9201326)
                    } else {
                        if (selectionLog[1] == 2) {
                            cm.askYesNo("需要前往晚秋之国吗？", 4, 9201326)
                        } else {
                            if (selectionLog[1] == 3) {
                                cm.askYesNo("需要前往冒险岛世界吗？", 4, 9201326)
                            }
                        }
                    }
                }
            } else {
                if (selectionLog[1] == 0) {
                    cm.warp(693000000, 2)
                } else {
                    if (selectionLog[1] == 1) {
                        cm.warp(693000020, 2)
                    } else {
                        if (selectionLog[1] == 2) {
                            cm.warp(693000040, 2)
                        } else {
                            if (selectionLog[1] == 3) {
                                cm.warp(100000000, 0)
                            }
                        }
                    }
                }
                cm.dispose()
            }
        }
    }
};