var status = -1;
var selectionLog = [];

function action(e, d, c) {
    if (status == 0 && e == 0) {
        cm.dispose();
        return
    }
    status++;
    selectionLog[status] = c;
    var b = -1;
    if (status <= b++) {
        cm.dispose()
    } else {
        if (status === b++) {
            cm.updateInfoQuest(64271, "5=1");
            var a = em.getMonster(9402270);
            a.setStance(4);
            eim.setProperty("bossHP", a.getHp());
            cm.getMap().spawnMonsterWithEffectBelow(a, new java.awt.Point(-1050, 665), 1);
            cm.spawnMobLimit(9402300, 1, 580, 665, 1);
            cm.Hidden_background("explode00", 1, 0, 2, 0);
            cm.Hidden_background("explode01", 1, 0, 2, 0);
            cm.Hidden_background("explode02", 1, 0, 2, 0);
            cm.onTeleport(0, 3, cm.getPlayer().getId(), -189, 436);
            cm.updateInfoQuest(64201, "event1_camera=1;event1_wall=1");
            cm.updateInfoQuest(64202, "");
            cm.updateInfoQuest(64203, "");
            cm.updateInfoQuest(64204, "");
            cm.updateInfoQuest(64205, "");
            cm.updateInfoQuest(64206, "");
            cm.curNodeEventEnd(true);
            cm.eventSKill(0);
            cm.setInGameDirectionMode(true, false, false);
            cm.inGameDirectionEvent_MoveAction(0);
            cm.inGameDirectionEvent_PushScaleInfo(1500, 0, 1000, 1500, -235, 375)
        } else {
            if (status === b++) {
                cm.inGameDirectionEvent_AskAnswerTime(1000)
            } else {
                if (status === b++) {
                    cm.showMapEffect(true, 5120180, "斯库亚斯市区战斗开始。", 8, false);
                    cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                    cm.eventSKill(0);
                    cm.setInGameDirectionMode(false, true, false);
                    cm.getPlayer().scheduleWarpTask(5 * 60, 867236150, 0, false);
                    cm.dispose();
                    cm.getPlayer().scheduleOpenNpcTask(30, 74, "莫奈德_延时任务");
                    cm.getPlayer().scheduleOpenNpcTask(35, 75, "莫奈德_延时任务");
                    cm.getPlayer().scheduleOpenNpcTask(60, 76, "莫奈德_延时任务");
                    cm.getPlayer().scheduleOpenNpcTask(65, 77, "莫奈德_延时任务");
                    cm.getPlayer().scheduleOpenNpcTask(90, 78, "莫奈德_延时任务");
                    cm.getPlayer().scheduleOpenNpcTask(95, 79, "莫奈德_延时任务")
                }
            }
        }
    }
}

function start() {
    status = -1;
    action(1, 0, 0)
};