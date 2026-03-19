function start() {
    var c = cm.getMapId();
    var b = cm.getEventInstance();
    var a = b.getEventManager();
    if (a.getNumberProperty("clear") == 0) {
        cm.playerMessage(5, "请先消灭所有的怪物.");
        return
    }
    if (c <= 867110550) {
        cm.addNumberForQuestInfo(59792, "score", 10);
        cm.warp(867110050 + randomNum(1, 10) * 50)
    } else {
        cm.addNumberForQuestInfo(59792, "score", 20);
        cm.warp(867110050 + randomNum(1, 9) * 50)
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
};