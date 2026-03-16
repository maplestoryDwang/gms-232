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
                case 920010000:
                    cm.getMap().startSimpleMapEffect("请收集云片来救我！！", 5120019);
                    break;
                case 920010100:
                    cm.getMap().startSimpleMapEffect("请带回来所有的女神像碎片！！", 5120019);
                    break;
                case 920010200:
                    cm.getMap().startSimpleMapEffect("消灭所有怪物并收集碎片！", 5120019);
                    break;
                case 920010300:
                    cm.getMap().startSimpleMapEffect("这里好像没有事情了！", 5120019);
                    break;
                case 920010400:
                    cm.getMap().startSimpleMapEffect("获得女神的LP，把LP放在中央的留声机面前，可以演奏音乐！", 5120019);
                    break;
                case 920010500:
                    cm.getMap().startSimpleMapEffect("找到正确的组合!", 5120019);
                    break;
                case 920010600:
                    cm.getMap().startSimpleMapEffect("消灭所有怪物并收集碎片！", 5120019);
                    break;
                case 920010700:
                    cm.getMap().startSimpleMapEffect("到达顶部，并正确的组合！!", 5120019);
                    break;
                case 920010800:
                    cm.getMap().startSimpleMapEffect("召唤并击杀远古精灵！", 5120019);
                    break
            }
            cm.dispose()
        }
    }
};