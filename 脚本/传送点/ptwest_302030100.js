function enter() {
    cm.openScriptNpc()
}
var status = -1;
var selectionLog = [];

function start() {
    action(1, 0, 0)
}

function action(d, c, b) {
    status++;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status === a++) {
            cm.sendNormalTalk("不知不觉，怪物们……？！\r\n\r\n#b(消灭区域的所有怪物，前进吧。)#k", 16, 0, false, true);
            cm.playerMessage(5, "必须消灭区域内的所有怪物，才能移动到下一阶段。")
        } else {
            if (status === a++) {
                cm.dispose();
                cm.openNpc("次元图书馆_Ep1_白魔法师_静谧之林")
            }
        }
    }
};