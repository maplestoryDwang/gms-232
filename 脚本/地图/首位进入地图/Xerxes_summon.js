var status = -1;
var selectionLog = [];

function action(f, e, d) {
    if (status == 0 && f == 0) {
        cm.dispose();
        return
    }(f == 1) ? status++ : status--;
    selectionLog[status] = d;
    var c = -1;
    if (status <= c++) {
        cm.dispose()
    } else {
        if (status === c++) {
            cm.getMap().resetFully();
            var b = cm.getEventInstance();
            if (b != null) {
                var a = b.getEventManager();
                cm.getMap().spawnMonsterOnGroundBelow(a.getMonster(6160003), cm.getPlayer().getPosition())
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