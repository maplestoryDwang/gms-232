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
            if (cm.getMap().getNumMonsters() > 0) {
                cm.getTopMsgFont("地图剩余怪物：" + cm.getMap().getNumMonsters() + "", 3, 20, 4, 0, 0)
            } else {
                if (cm.getMapId() == 940200700) {
                    cm.warp(940200800, 0, false)
                } else {
                    if (cm.getMapId() == 940200800) {
                        cm.warp(940200900, 0, false)
                    } else {
                        if (cm.getMapId() == 940200900) {
                            cm.warp(402000210, 0, false);
                            cm.forceStartQuest(34611, "");
                            cm.updateInfoQuest(34611, "clear=1")
                        } else {
                            if (cm.getMapId() == 940201500) {
                                cm.warp(940201600, 0, false)
                            } else {
                                if (cm.getMapId() == 940201600) {
                                    cm.warp(940201700, 0, false)
                                } else {
                                    if (cm.getMapId() == 940201700) {
                                        cm.askYesNo("呃啊，你该不会扔下我不管吧！？快帮我解开啊！", 4, 3001243)
                                    }
                                }
                            }
                        }
                    }
                }
            }
            cm.dispose()
        }
    }
};