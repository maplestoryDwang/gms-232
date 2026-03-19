function enter() {
    cm.openScriptNpc()
}
var status = -1;
var selectionLog = [];

function start() {
    action(1, 0, 0)
}

function action(f, e, d) {
    if (status == 0 && f == 0) {
        cm.dispose();
        return
    }(f == 1) ? status++ : status--;
    selectionLog[status] = d;
    var c = -1;
    if (status <= c++) {
        cm.dispose()
    } else {
        if (status === c++) {
            cm.onSetMapTagedObjectVisible(1, "pt00", 0);
            cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/HofM/act4/ptin", 100);
            cm.curNodeEventEnd(true);
            cm.setInGameDirectionMode(true, false, true);
            cm.inGameDirectionEvent_AskAnswerTime(600)
        } else {
            if (status === c++) {
                cm.inGameDirectionEvent_SetHideEffect(1);
                cm.inGameDirectionEvent_AskAnswerTime(600)
            } else {
                if (status === c++) {
                    cm.onTeleport(0, 3, cm.getPlayer().getId(), 481, -396);
                    cm.onSetMapTagedObjectVisible(1, "pt01", 64);
                    cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/HofM/act4/ptout", 100);
                    cm.inGameDirectionEvent_AskAnswerTime(1000)
                } else {
                    if (status === c++) {
                        cm.inGameDirectionEvent_SetHideEffect(0);
                        cm.setInGameDirectionMode(false, true, false);
                        var b = cm.getNumberFromQuestInfo(34021, "hero1");
                        var a = cm.getNumberFromQuestInfo(34021, "hero2");
                        cm.addPopupSay(1540805, 1000, "#p" + (1540801 + b) + "#, #p" + (1540801 + a) + "#！这是最后一场战斗，拜托你了！", "", 0);
                        cm.addPopupSay(1540801 + b, 1000, "#face1#是的，一起战斗！", "", 0);
                        cm.addPopupSay(1540801 + a, 1000, "#face1#是我拜托你才是，龙神。", "", 0);
                        cm.addPopupSay(1540807, 1000, "我也会全力以赴的，主人！", "", 0);
                        cm.dispose()
                    }
                }
            }
        }
    }
};