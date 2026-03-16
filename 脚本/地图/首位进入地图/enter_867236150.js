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
            cm.curNodeEventEnd(true);
            cm.setInGameDirectionMode(true, false, true);
            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
            cm.inGameDirectionEvent_MoveAction(2);
            cm.inGameDirectionEvent_AskAnswerTime(200)
        } else {
            if (status === b++) {
                cm.inGameDirectionEvent_AskAnswerTime(1000)
            } else {
                if (status === b++) {
                    cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1500, 0);
                    cm.inGameDirectionEvent_AskAnswerTime(1500)
                } else {
                    if (status === b++) {
                        cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                        cm.eventSKill(0);
                        cm.setInGameDirectionMode(false, true, false);
                        cm.onNewSpecialEffect(2, 3000);
                        cm.dispose();
                        var a = em.getMonster(9402273);
                        a.setHp(eim.getNumberProperty("bossHP"));
                        a.setStance(2);
                        cm.getMap().spawnMonsterWithEffectBelow(a, new java.awt.Point(-1200, 1056), 1);
                        cm.addPopupSay(9400604, 2000, "城塔上方！到城塔上方去！我们来争取时间！！", "", 0);
                        cm.setNumberForQuestInfo(64204, "LadderMob", 0);
                        cm.setNumberForQuestInfo(64204, "RushMob", 1);
                        cm.getPlayer().scheduleWarpTask(80, 867236200, 0, false);
                        cm.getPlayer().scheduleOpenNpcTask(30, 83, "莫奈德_延时任务");
                        cm.getPlayer().scheduleOpenNpcTask(60, 84, "莫奈德_延时任务")
                    }
                }
            }
        }
    }
}

function start() {
    status = -1;
    action(1, 0, 0)
};