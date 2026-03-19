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
            cm.askYesNo("要移动到时空门外面吗？", 0, 9073013)
        } else {
            switch (cm.getMapId()) {
                case 931050410:
                    cm.warp(102040600, 1, false);
                    break;
                case 931050413:
                    cm.warp(220040200, 3, false);
                    break;
                case 931050415:
                    cm.warp(260010201, 2, false);
                    break;
                case 931050417:
                    cm.warp(261020500, 1, false);
                    break;
                case 931050418:
                    cm.warp(251010500, 3, false);
                    break;
                case 931050419:
                    cm.warp(240010200, 4, false);
                    break;
                case 931050420:
                    cm.warp(240010600, 7, false);
                    break;
                case 931050422:
                    cm.warp(240020200, 3, false);
                    break;
                case 931050424:
                    cm.warp(261020200, 2, false);
                    break;
                case 931050425:
                    cm.warp(240020401, 2, false);
                    break;
                case 931050426:
                    cm.warp(240020101, 2, false);
                    break;
                case 931050427:
                    cm.warp(220080000, 3, false);
                    break;
                case 931050428:
                    cm.warp(211041400, 0, false);
                    break;
                case 931050429:
                    cm.warp(230040410, 1, false);
                    break;
                case 931050430:
                    cm.warp(240040400, 4, false);
                    break;
                case 931050431:
                    cm.warp(270010500, 6, false);
                    break;
                case 931050432:
                    cm.warp(270020500, 2, false);
                    break;
                case 931050433:
                    cm.warp(270030500, 2, false);
                    break;
                case 931050434:
                    cm.warp(261010002, 1, false);
                    break;
                case 931050435:
                    cm.warp(261010103, 1, false);
                    break;
                case 931050436:
                    cm.warp(250010502, 2, false);
                    break
            }
            cm.dispose()
        }
    }
};