function enter() {
    if (cm.isQuestFinished(34925)) {
        cm.warp(402000616, 1, false)
    } else {
        if (cm.isQuestFinished(34915)) {
            cm.sendNormalTalk_Bottom("#face0#（暂时还不需要探索这里。）", 37, 3001500 + cm.getPlayer().getGender(), 0, 1)
        } else {
            cm.sendNormalTalk_Bottom("#face0#（现在不是乱跑的时候。）", 37, 3001500 + cm.getPlayer().getGender(), 0, 1)
        }
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
            cm.sendOk("这个传送点的脚本尚未修复。\r\n脚本位于： 脚本/传送点/top_402000615.js ", 0)
        } else {
            cm.dispose()
        }
    }
};