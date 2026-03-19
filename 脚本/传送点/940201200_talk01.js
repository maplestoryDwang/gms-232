function enter() {
    cm.addPopupSay(3001251, 1000, "#face0#呃啊，卡德娜，我好像要打、打、打喷嚏……", "", 0);
    cm.addPopupSay(3001251, 1000, "#face0#啊啊啊啊啊～嚏！", "", 0);
    cm.addPopupSay(3001269, 1000, "#face0#哦，怎么了？我好像听到打雷了……", "", 0);
    cm.addPopupSay(3001251, 1000, "#face0#呼，差点就危险了。", "", 0)
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
            cm.sendOk("这个传送点的脚本尚未修复。\r\n脚本位于： 脚本/传送点/940201200_talk01.js ", 0)
        } else {
            cm.dispose()
        }
    }
};