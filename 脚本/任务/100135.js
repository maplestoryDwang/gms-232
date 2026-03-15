var status = -1;
var selectionLog = [];

function start(d, c, b) {
    if (status == 0 && d == 0) {
        cm.dispose();
        return
    }(d == 1) ? status++ : status--;
    var a = -1;
    selectionLog[status] = b;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status === a++) {
            cm.askYesNo("怎么样，#b#h0##k～？准备好带上我的#e#b经验值包#k#n，来一场真正的冒险吧！", 9010010)
        } else {
            if (status === a++) {
                cm.sendOk("\r\n很好！在去冒险之前一定要做好充分的准备～！", 9010010)
            } else {
                if (status == a++) {
                    cm.forceStartQuest();
                    cm.gainExp(Math.pow(cm.getPlayer().getLevel(), 4));
                    cm.forceCompleteQuest();
                    cm.dispose()
                }
            }
        }
    }
}

function end(c, b, a) {
    cm.dispose()
};