var status = -1;
function action(e, c, b) {
    if (e == 1) {
        status++;
    } else {
        if (status == 0) {
            cm.dispose();
        }
        status--;
    }
    if (status == 0) {
        if (cm.getMap().getNumMonsters() <= 0) {
            cm.sendOk('当前地图没有刷新怪物，无法查看爆率。');
            cm.dispose();
            return;
        }
        var d = '请选择你要查看怪物的爆率。\r\n\r\n#b';
        var f = cm.getMap().getAllUniqueMonsters().iterator();
        while (f.hasNext()) {
            var a = f.next();
            d += '#L' + a + '##o' + a + '##l\r\n';
        }
        if (cm.getPlayer().isAdmin()) {
            //d += '\r\n#L0# #r查看地图爆率#k#l';
        }
        cm.askMenu(d);
    } else {
        if (status == 1) {
            if (b == 0) {
                cm.sendNext(cm.checkMapDrop());
            } else {
                cm.sendNext(cm.checkDrop(b));
            }
            cm.dispose();
        }
    }
}
function start() {
    status = -1;
    action(1, 0, 0);
}