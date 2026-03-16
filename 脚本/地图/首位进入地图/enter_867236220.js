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
            var d = em.getMonster(9402277);
            d.setOverrideStats();
            d.getChangedStats().hp = 10000 * 10000 * 10000 * 10000;
            d.heal();
            cm.getMap().spawnMonsterOnGroundBelow(d, new java.awt.Point(-13, -365));
            cm.npc_ChangeController(9400604, "oid=7555469", -253, -366, 25, -303, -203, 1, true, false);
            cm.npc_SetSpecialAction("oid=7555469", "summon", 0, 0);
            cm.npc_setForceFlip("oid=7555469", 1);
            cm.curNodeEventEnd(true);
            cm.setInGameDirectionMode(true, false, true);
            cm.setStandAloneMode(true);
            cm.sendNormalTalk_Bottom("接着！最后一个地雷！", 37, 9400604, false, true)
        } else {
            if (status === a++) {
                cm.npc_SetSpecialAction("oid=7555469", "mine", 0, 1);
                cm.fieldEffect_ScreenMsg("Map/EffectPL.img/MainStream/Skuas/screenEff/mine");
                cm.fieldEffect_ScreenMsg("Map/EffectPL.img/MainStream/Skuas/screenEff/mine2");
                cm.fieldEffect_ScreenMsg("Map/EffectPL.img/MainStream/Skuas/screenEff/mine3");
                cm.sendNormalTalk_Bottom("#face0##h0#！后面没路走了，往前方远处跳下去！相信我！", 37, 9400580, true, true)
            } else {
                if (status === a++) {
                    cm.inGameDirectionEvent_MoveAction(1);
                    cm.inGameDirectionEvent_AskAnswerTime(2000)
                } else {
                    if (status === a++) {
                        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 350, 0);
                        cm.inGameDirectionEvent_AskAnswerTime(300)
                    } else {
                        if (status === a++) {
                            cm.setInGameDirectionMode(false, true, false);
                            cm.npc_LeaveField("oid=7555469");
                            cm.npc_LeaveField("oid=7555469");
                            cm.dispose();
                            cm.warp(867236250, 0, true)
                        }
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