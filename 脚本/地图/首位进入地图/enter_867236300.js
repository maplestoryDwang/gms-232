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
            cm.sendNormalTalk_Bottom("#face0#该死，我来处理这帮家伙，你别操心！", 37, 9400582, false, true)
        } else {
            if (status === b++) {
                cm.sendNormalTalk_Bottom("#face0#吉莉！赶快清除恶心的粉红触手！趁它们还没落地！", 37, 9400582, true, true)
            } else {
                if (status === b++) {
                    cm.sendNormalTalk_Bottom("#face0#好！明白！", 37, 9400583, true, true)
                } else {
                    if (status === b++) {
                        cm.sendNormalTalk_Bottom("#face0#雪原弓箭手！和骑士吉莉一起朝恶心的粉红触手射箭！", 37, 9400587, true, true)
                    } else {
                        if (status === b++) {
                            cm.setInGameDirectionMode(false, true, false);
                            var a = em.getMonster(9402279);
                            a.setStance(4);
                            a.setHp(eim.getNumberProperty("bossHP"));
                            cm.getMap().spawnMonsterWithEffectBelow(a, new java.awt.Point(-1200, 458), 1);
                            cm.dispose()
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