var status = -1;
var selectionLog = [];

function action(h, f, e) {
    if (status == 0 && h == 0) {
        cm.dispose();
        return
    }
    status++;
    selectionLog[status] = e;
    var d = cm.getMapId();
    var c = cm.getEventInstance();
    var b = c.getEventManager();
    var g = b.getMapFactoryMap(d);
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status === a++) {
            cm.setNumberForQuestInfo(59785, d, 1);
            if (d == 867110600) {
                mob(b, g, 9410855, 1)
            } else {
                if (d == 867110650) {
                    mob(b, g, 9410801 + cm.rand(0, 1) * 20, 1)
                } else {
                    mob(b, g, 9410801, 1);
                    mob(b, g, 9410821, 1)
                }
            }
            checkStage();
            cm.dispose()
        } else {
            cm.dispose()
        }
    }
}

function checkStage() {
    for (var a = 867110050; a <= 867110700; a += 50) {
        if (!cm.getInfoQuest(59785).contains("" + a)) {
            return
        }
    }
    cm.setNumberForQuestInfo(59785, "stage", 1)
}

function mob(c, g, f, e) {
    var b = cm.getEventInstance();
    for (var a = 0; a < e; a++) {
        var d = c.getMonster(f);
        b.registerMonster(d);
        var b = cm.getEventInstance();
        g.spawnMonsterOnGroundBelow(d, new java.awt.Point(cm.rand(-300, 600), 45))
    }
}

function start() {
    status = -1;
    action(1, 0, 0)
};