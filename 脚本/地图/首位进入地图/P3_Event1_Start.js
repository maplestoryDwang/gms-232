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
            var a = em.getMonster(9402275);
            a.setHp(eim.getNumberProperty("bossHP"));
            a.setStance(4);
            cm.getMap().spawnMonsterWithEffectBelow(a, new java.awt.Point(-462, -304), -2);
            cm.curNodeEventEnd(true);
            cm.setInGameDirectionMode(true, false, true);
            cm.addPopupSay(9400604, 2000, "天啊……这怪物……竟然追到这里来了……", "", 0);
            cm.inGameDirectionEvent_MoveAction(0);
            cm.inGameDirectionEvent_PushScaleInfo(2000, 1000, 2000, 206, -410)
        } else {
            if (status === b++) {
                cm.inGameDirectionEvent_AskAnswerTime(2000)
            } else {
                if (status === b++) {
                    cm.setInGameDirectionMode(false, true, false);
                    cm.getPlayer().scheduleWarpTask(60, 867236220, 0, false, true);
                    cm.addNumberForQuestInfo(64272, "28", 1);
                    cm.dispose()
                }
            }
        }
    }
}

function start() {
    status = -1;
    action(1, 0, 0)
};