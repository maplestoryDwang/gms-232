var status = -1;
var selectionLog = [];

function action(e, c, b) {
    if (status == 0 && e == 0) {
        cm.dispose();
        return
    }
    status++;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status === a++) {
            cm.getMap().startSimpleMapEffect("那些家伙从四面八方涌过来了！消灭它们应该能够得到超多的经验值！", 5120159);
            cm.dispose();
            cm.setQuestCustomData(9930001, 1);
            cm.fieldEffect_ScreenMsg("defense/count");
            eim.schedule("mob1", 3 * 1000);
            var d = em.getMonster(9833004);
            d.changeLevel(cm.getPlayer().getLevel());
            cm.getPlayer().getMap().spawnMonsterOnGroundBelow(d, new java.awt.Point(-10, 153))
        }
    }
}

function start() {
    status = -1;
    action(1, 0, 0)
};