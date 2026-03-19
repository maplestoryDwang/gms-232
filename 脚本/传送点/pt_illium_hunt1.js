function enter() {
    cm.openScriptNpc()
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
            if (cm.getMap().getNumMonsters() > 0) {
                cm.playerMessage(5, "必须消灭掉所有怪物，才能继续前进。")
            } else {
                cm.updateInfoQuest(34801, "hunt1=1");
                cm.updateInfoQuest(16027, "ComboK=3");
                cm.sendNormalTalk_Bottom("#face0#呃……全都消灭了！？", 37, 3001351, false, true, 1)
            }
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#很遗憾,消灭怪物时,没发现什么有用的配件。看来要再找些豪猪才行。", 37, 3001300, true, true, 1)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0#呃呃……感觉好可怕啊……不过还要找配件……快点走吧。", 37, 3001351, true, true, 1)
                } else {
                    if (status === a++) {
                        cm.playerMessage(5, "消灭区域内的所有怪物后,才能前往其他地区。");
                        cm.dispose();
                        cm.warp(940203000, 0, false)
                    }
                }
            }
        }
    }
};