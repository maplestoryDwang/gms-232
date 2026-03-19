function enter() {
    cm.openScriptNpc()
}
var status = -1;
var selectionLog = [];

function start() {
    action(1, 0, 0)
}

function action(d, c, b) {
    status++;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status === a++) {
            cm.curNodeEventEnd(true);
            cm.setInGameDirectionMode(true, false, true);
            cm.npc_SetForceMove("oid=2280248", 1, 150, 100);
            cm.npc_SetForceMove("oid=2280249", 1, 150, 100);
            cm.updateInfoQuest(64015, "chk1=1;chk2=1;slaDir=1;chk3=1;chk4=1;chk5=1;chk6=1;chk7=1;chk8=1");
            cm.sendNormalTalk_Bottom("#face0#天啊，真是太危险了。感谢的话下去再说！", 37, 9400580, false, true)
        } else {
            if (status === a++) {
                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                cm.inGameDirectionEvent_AskAnswerTime(500)
            } else {
                if (status === a++) {
                    cm.setInGameDirectionMode(false, true, false);
                    cm.monadEndingScene(135 * Math.pow(cm.getLevel(), 3), 50 * Math.pow(cm.getLevel(), 2), [2439150]);
                    cm.sendNormalTalk_Bottom("#face0#谢谢，要不是你，我们肯定就……简直不敢想象。", 37, 9400580, false, true)
                } else {
                    if (status === a++) {
                        cm.effect_Voice("Field.img/masteryBook/EnchantSuccess", 100);
                        cm.sendNormalTalk_Bottom("#face0#改日我一定会报答你的救命之恩。", 37, 9400580, true, true)
                    } else {
                        if (status === a++) {
                            cm.forceCompleteQuest(64015);
                            cm.updateInfoQuest(64009, "money=0");
                            cm.gainItem(2439150, 1);
                            cm.gainExp(135 * Math.pow(cm.getLevel(), 3));
                            cm.gainMeso(50 * Math.pow(cm.getLevel(), 2));
                            cm.npc_LeaveField("oid=2280248");
                            cm.npc_LeaveField("oid=2280248");
                            cm.npc_LeaveField("oid=2280249");
                            cm.npc_LeaveField("oid=2280249");
                            cm.npc_LeaveField("oid=2280250");
                            cm.npc_LeaveField("oid=2280250");
                            cm.dispose();
                            cm.warp(867200401, 3)
                        }
                    }
                }
            }
        }
    }
};