var status = -1;
var selectionLog = [];

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
            switch (cm.getMapId()) {
                case 926100000:
                    cm.getMap().startSimpleMapEffect("请找到隐藏的门，通过调查实验室!", 5120021);
                    break;
                case 926100001:
                    cm.getMap().startSimpleMapEffect("请找到隐藏的门，通过调查实验室!", 5120021);
                    break;
                case 926100100:
                    cm.getMap().startSimpleMapEffect("充满能量的烧杯!", 5120021);
                    break;
                case 926100200:
                    cm.getMap().startSimpleMapEffect("获取实验的文件通过每个门!", 5120021);
                    break;
                case 926100203:
                    cm.getMap().startSimpleMapEffect("请打败所有的怪物!", 5120021);
                    break;
                case 926100300:
                    cm.getMap().startSimpleMapEffect("找到你的方法通过实验室!", 5120021);
                    break;
                case 926100401:
                    cm.getMap().startSimpleMapEffect("请保护我的爱!", 5120021);
                    break
            }
            cm.dispose()
        } else {
            cm.dispose()
        }
    }
}

function start() {
    status = -1;
    action(1, 0, 0)
};