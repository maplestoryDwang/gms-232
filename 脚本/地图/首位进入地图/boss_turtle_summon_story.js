var status = -1;
var selectionLog = [];

function action(d, e, h) {
    if (status == 0 && d == 0) {
        cm.dispose();
        return
    }
    status++;
    selectionLog[status] = h;
    var c = -1;
    if (status <= c++) {
        cm.dispose()
    } else {
        if (status === c++) {
            var j = cm.getMapId();
            var f = cm.getEventInstance();
            var b = f.getEventManager();
            var a = b.getMapFactoryMap(j);
            var g = b.getMonster(9410821);
            f.registerMonster(g);
            a.spawnMonsterOnGroundBelow(g, new java.awt.Point(cm.rand(-300, 600), 45));
            cm.fieldEffect_复合图片动画(["Map/EffectPL.img/3min/notice_spine/bossWarn/skeleton_warning_boss", "animation", "", ""], [0, 1, 1, 5000, 0, 0, 0, 0]);
            cm.dispose()
        }
    }
}

function start() {
    status = -1;
    action(1, 0, 0)
};