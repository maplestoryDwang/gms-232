var status = -1;
var selectionLog = [];

function action(h, f, e) {
    if (status == 0 && h == 0) {
        cm.dispose();
        return
    }(h == 1) ? status++ : status--;
    selectionLog[status] = e;
    var c = -1;
    if (status <= c++) {
        cm.dispose()
    } else {
        if (status === c++) {
            cm.getMap().resetFully();
            var b = cm.getEventInstance();
            if (b != null) {
                var a = b.getEventManager();
                var d = randomNum(1, 10);
                if (d >= 4) {
                    var g = 3300007
                } else {
                    if (d >= 1) {
                        var g = 3300006
                    } else {
                        var g = 3300005
                    }
                }
                cm.getMap().spawnMonsterOnGroundBelow(a.getMonster(g), cm.getPlayer().getPosition())
            }
            cm.dispose()
        } else {
            cm.dispose()
        }
    }
}

function randomNum(b, a) {
    switch (arguments.length) {
        case 1:
            return parseInt(Math.random() * b + 1, 10);
            break;
        case 2:
            return parseInt(Math.random() * (a - b + 1) + b, 10);
            break;
        default:
            return 0;
            break
    }
}

function start() {
    status = -1;
    action(1, 0, 0)
};