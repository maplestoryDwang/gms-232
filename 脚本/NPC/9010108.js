var status = -1;
var selectionLog = [];
var map;

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
            cm.sendNormalTalk("嗯~联盟币拿到了吗？如果觉得太难获得，就过一阵子再来吧，联盟的成员们会认真收集联盟币的。", 1, 9010108, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("那我就送你去你之前过来的地方，走好哦~", 1, 9010108, true, true)
            } else {
                if (status === a++) {
                    cm.dispose();
                    map = cm.getNumberFromQuestInfo(18792, 'map');
                    cm.warp(map > 0 ? map : 100000000, 0)
                } else {
                    cm.dispose()
                }
            }
        }
    }
};