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
            if (cm.getMapId() == 915000301) {
                cm.dispose();
                return
            }
            cm.sendNormalTalk("切……凭我的实力，这种事情太简单了。现在该把准备好的衣服穿上去了吗？", 17, 0, false, true)
        } else {
            if (status === a++) {
                cm.dispose();
                cm.warp(915000301, 0, false)
            }
        }
    }
};