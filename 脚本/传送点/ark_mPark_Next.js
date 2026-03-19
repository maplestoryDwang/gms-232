function enter() {
    if (cm.getMap().getNumMonsters() == 0) {
        if (cm.getMapId() == 940205300) {
            cm.forceStartQuest(34938, "");
            cm.forceCompleteQuest(34938);
            cm.gainExp(7360);
            cm.updateInfoQuest(34938, "exp=1");
            cm.updateInfoQuest(34995, "00=h1;10=h0;01=h0;11=h0;02=h0;12=h0;13=h0;04=h0;23=h0;14=h0;05=h0;24=h0;15=h0;06=h0;16=h0;07=h0;17=h0;09=h0");
            cm.warp(402090007, 0, false)
        } else {
            if (cm.getMapId() == 940205600) {
                cm.forceStartQuest(34940, "");
                cm.forceCompleteQuest(34940);
                cm.gainExp(7749);
                cm.updateInfoQuest(34940, "exp=1");
                cm.updateInfoQuest(34995, "00=h1;10=h0;01=h0;11=h0;02=h0;12=h0;13=h0;04=h0;23=h0;14=h0;05=h0;24=h1;15=h0;06=h0;16=h0;07=h0;17=h0;09=h0");
                cm.updateInfoQuest(34940, "dir=1;exp=1");
                cm.warp(402000644, 0, false)
            } else {
                cm.warp(cm.getMapId() + 100, 0, false)
            }
        }
    } else {
        cm.playerMessage(-1, "还有怪物没有消灭干净。");
        cm.playerMessage(5, "还有怪物没有消灭干净。")
    }
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
            cm.sendOk("这个传送点的脚本尚未修复。\r\n脚本位于： 脚本/传送点/ark_mPark_Next.js ", 0)
        } else {
            cm.dispose()
        }
    }
};