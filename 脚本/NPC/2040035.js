var status = -1;
var selectionLog = [];
function start() {
    action(1, 0, 0);
}
function action(f, d, c) {
    if (status == 0 && f == 0) {
        cm.dispose();
        return;
    }
    f == 1 ? status++ : status--;
    selectionLog[status] = c;
    var a = -1;
    if (status <= a++) {
        cm.dispose();
    } else {
        if (status === a++) {
            cm.removeAll(4001022);
            cm.removeAll(4001023);
            var e = [
                '领导力',
                '感性',
                '洞察力',
                '意志',
                '手技',
                '魅力'
            ];
            var b = cm.rand(0, e.length - 1);
            cm.addTrait(e[b], 30);
            cm.endPartyQuest(1202);
            if (cm.getPlayerLog('组队任务_玩具城101层') < 5) {
                cm.setPlayerLog('组队任务_玩具城101层',0,1);
                cm.getPlayer().modifyCSPoints(1, 2000);
                cm.gainItem(5062002, 1);
                cm.gainItem(5062000, 1);
                cm.gainItem(5062009, 1);
                cm.gainItem(5062500, 1);
                cm.gainItem(2430384, 1);
            }
            cm.warp(221023300, 0, false);
            cm.dispose();
        }
    }
}