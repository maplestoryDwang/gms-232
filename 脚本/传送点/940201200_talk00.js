function enter() {
    cm.addPopupSay(3001269, 1000, "#face0#唔，哪里飘来的奇怪气味？", "", 0);
    cm.addPopupSay(3001251, 1000, "#face0#呃啊，有监视者！小心别被发现……", "", 0);
    cm.addPopupSay(3001251, 1000, "#face0#幽、幽灵野狗好像也被我们驯服了。", "", 0)
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
            cm.sendOk("这个传送点的脚本尚未修复。\r\n脚本位于： 脚本/传送点/940201200_talk00.js ", 0)
        } else {
            cm.dispose()
        }
    }
};