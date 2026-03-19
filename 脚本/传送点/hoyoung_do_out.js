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
            cm.askAcceptDecline_Bottom("#face0##fc0xFFbfbfbf#（还没回收魂魄，现在要暂时离开吗？）", 36, 3001674 + cm.getPlayer().getGender(), 1)
        } else {
            cm.dispose();
            switch (cm.getMapId()) {
                case 993161000:
                    cm.warp(103030200, 1, false);
                    break;
                case 993161100:
                case 993161200:
                    cm.warp(105010300, 0, false);
                    break;
                case 993161300:
                    cm.warp(260010200, 0, false);
                    break;
                case 993161400:
                    cm.warp(211040300, 0, false);
                    break;
                case 993161500:
                    cm.warp(240040400, 1, false);
                    break;
                case 993161600:
                    cm.warp(221030530, 0, false);
                    break;
                case 993161700:
                    break
            }
        }
    }
};