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
                case 930000000:
                    cm.getMap().startSimpleMapEffect("进入森林吧。", 5120023);
                    break;
                case 930000100:
                    cm.getMap().startSimpleMapEffect("打败这些被感染的怪物们！", 5120023);
                    break;
                case 930000200:
                    cm.getMap().startSimpleMapEffect("通过净化毒物，消灭尖刺孢子！", 5120023);
                    break;
                case 930000300:
                    cm.getMap().startSimpleMapEffect("穿过这片森林找到出口！", 5120023);
                    break;
                case 930000400:
                    cm.getMap().startSimpleMapEffect("清除被感染的怪物，并收集怪物之珠！", 5120023);
                    break;
                case 930000500:
                    cm.getMap().startSimpleMapEffect("找到紫色魔力石！", 5120023);
                    break;
                case 930000600:
                    cm.getMap().startSimpleMapEffect("用紫色魔力石净化祭坛！", 5120023);
                    break
            }
            cm.dispose()
        }
    }
};