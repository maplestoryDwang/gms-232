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
                case 926110000:
                    cm.getMap().startSimpleMapEffect("请找到隐藏的门，通过调查实验室!", 5120022);
                    break;
                case 926110001:
                    cm.getMap().startSimpleMapEffect("通过实验室走廊！", 5120022);
                    break;
                case 926110100:
                    cm.getMap().startSimpleMapEffect("灌满所有烧杯后离开这里。", 5120022);
                    break;
                case 926110200:
                    cm.getMap().startSimpleMapEffect("解决这里的问题继续前进。", 5120022);
                    break;
                case 926110203:
                    cm.getMap().startSimpleMapEffect("请打败所有的怪物!", 5120022);
                    break;
                case 926110300:
                    cm.getMap().startSimpleMapEffect("找到你的方法通过实验室!", 5120022);
                    break;
                case 926110401:
                    cm.getMap().startSimpleMapEffect("请保护我的爱!", 5120022);
                    break
            }
            cm.dispose()
        }
    }
};