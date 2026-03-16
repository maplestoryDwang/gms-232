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
            cm.spawnMobLimit(9402299, 1, 5550, 1140, 2);
            cm.spawnMobLimit(9402299, 1, 5840, 1140, 2);
            cm.spawnMobLimit(9402285, 1, 5250, 1140, 3);
            cm.spawnMobLimit(9402285, 1, 5150, 1140, 3);
            cm.spawnMobLimit(9402285, 1, 5100, 1140, 3);
            cm.updateInfoQuest(64206, "count=0;ScreenMob=1");
            cm.curNodeEventEnd(true);
            cm.setInGameDirectionMode(true, false, true);
            cm.inGameDirectionEvent_MoveAction(0);
            cm.inGameDirectionEvent_AskAnswerTime(200)
        } else {
            if (status === b++) {
                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                cm.inGameDirectionEvent_AskAnswerTime(1200)
            } else {
                if (status === b++) {
                    cm.inGameDirectionEvent_MoveAction(5);
                    cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 2000, 0);
                    cm.inGameDirectionEvent_AskAnswerTime(2000)
                } else {
                    if (status === b++) {
                        cm.setInGameDirectionMode(false, true, false);
                        cm.addPopupSay(9400602, 2000, "#face1#脚陷在烂泥里……！而且面前还有一群怪物！", "", 0);
                        cm.addPopupSay(9400603, 2000, "拦住那家伙，好让勇士脱身！", "", 0);
                        var a = em.getMonster(9402277);
                        a.setHp(eim.getNumberProperty("bossHP"));
                        a.setStance(4);
                        cm.getMap().spawnMonsterWithEffectBelow(a, new java.awt.Point(5500, 1190), 1);
                        cm.getPlayer().scheduleWarpTask(5 * 60, 867236300, 0, false, true);
                        cm.getMap().startSimpleMapEffect("首领怪冲过来了，快退后。", 5120180);
                        cm.dispose()
                    }
                }
            }
        }
    }
}
6;

function start() {
    status = -1;
    action(1, 0, 0)
};