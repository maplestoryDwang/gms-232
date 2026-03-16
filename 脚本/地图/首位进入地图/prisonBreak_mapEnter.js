var status = -1;
var selectionLog = [];

function start() {
    action(1, 0, 0)
}

function action(d, c, b) {
    if (status == 0 && d == 0) {
        cm.dispose();
        return
    }
    status++;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status === a++) {
            switch (cm.getMapId()) {
                case 921160100:
                    cm.showMapEffect(true, 5120053, "嘘！必须悄悄地避开障碍物，从塔里出去。", 10, false);
                    break;
                case 921160200:
                    cm.showMapEffect(true, 5120053, "必须消灭所有警卫。否则他们会叫来其他警卫。", 10, false);
                    break;
                case 921160300:
                    cm.showMapEffect(true, 5120053, "为了防止有人接近监狱，他们建造了迷宫。请寻找通往空中监狱的门！", 10, false);
                    break;
                case 921160400:
                    cm.showMapEffect(true, 5120053, "请消灭守护门的警卫！", 10, false);
                    break;
                case 921160500:
                    cm.showMapEffect(true, 5120053, "这是最后的障碍物。请通过障碍物，到空中监狱来。", 10, false);
                    break;
                case 921160600:
                    cm.showMapEffect(true, 5120053, "请消灭警卫，找到监狱钥匙，打开监狱门。", 10, false);
                    break;
                case 921160700:
                    cm.showMapEffect(true, 5120053, "请消灭看守，让我们重获自由！！！", 10, false);
                    break;
                default:
                    break
            }
            cm.dispose()
        }
    }
};