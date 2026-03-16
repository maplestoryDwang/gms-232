var status = -1;
var selectionLog = [];

function start() {
    status = -1;
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
            switch (cm.getMapId()) {
                case 910340100:
                    cm.getMap().startSimpleMapEffect("与<克鲁特>对话进行第一次考验吧！", 5120017);
                    break;
                case 910340200:
                    cm.getMap().startSimpleMapEffect("派出2位成员爬上绳索，并找出正确的组合！", 5120017);
                    break;
                case 910340300:
                    cm.getMap().startSimpleMapEffect("派出2位成员站在平台上，并找出正确的组合！", 5120017);
                    break;
                case 910340400:
                    cm.getMap().startSimpleMapEffect("热身运动！清理这些暴乱的怪物！", 5120017);
                    break;
                case 910340500:
                    cm.getMap().startSimpleMapEffect("打败绿水灵王！", 5120017);
                    break;
                case 910340501:
                    cm.getMap().startSimpleMapEffect("打败绿水灵王！", 5120017);
                    break
            }
            cm.dispose()
        }
    }
};