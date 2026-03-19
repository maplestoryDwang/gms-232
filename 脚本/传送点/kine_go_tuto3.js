function enter() {
    if (cm.getMap().getNumMonsters() == 0) {
        cm.openScriptNpc()
    } else {
        cm.playerMessage(-1, "还有目标没有消灭干净。");
        cm.playerMessage(5, "还有目标没有消灭干净。")
    }
}
var status = -1;
var selectionLog = [];

function start() {
    action(1, 0, 0)
}

function action(e, d, c) {
    if (e === 0) {
        status--
    } else {
        status++
    }
    if (cm.getPlayer().getGender() == 0) {
        var a = 1531000
    } else {
        var a = 1531052
    }
    var b = -1;
    if (status <= b++) {
        cm.dispose()
    } else {
        if (status === b++) {
            cm.sendNormalTalk_Bottom("杰~慢慢走实在是有些无聊，现在差不多可以动起来了吧？", 36, a, false, true)
        } else {
            if (status === b++) {
                cm.sendNormalTalk_Bottom("#face9#知道了，在最后阶段我会帮你进行数据升级，你就可以使用#b三段跳#k和#b攻击技能#k了。", 36, 1531001, true, true)
            } else {
                if (status === b++) {
                    cm.curNodeEventEnd(true);
                    cm.eventSKill(0);
                    cm.setInGameDirectionMode(true, false, true);
                    cm.setStandAloneMode(true);
                    cm.fieldEffect_PlayFieldSound("Sound/Field.img/masteryBook/EnchantSuccess", 100);
                    cm.fieldEffect_KinesisEXP(600);
                    cm.updateInfoQuest(22700, "V01=1;V02=1;kinetuto=1;E1=1;E2=1");
                    cm.gainExp(600);
                    cm.inGameDirectionEvent_AskAnswerTime(2500);
                    cm.effect_Voice("Voice3.img/Kinesis/guide_04", 100)
                } else {
                    if (status === b++) {
                        cm.setStandAloneMode(false);
                        cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                        cm.eventSKill(0);
                        cm.setInGameDirectionMode(false, true, false);
                        cm.dispose();
                        cm.warp(331001130, 0, false)
                    }
                }
            }
        }
    }
};