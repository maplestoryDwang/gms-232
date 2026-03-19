function enter() {
    cm.openScriptNpc()
}
var status = -1;
var selectionLog = [];

function start() {
    action(1, 0, 0)
}

function action(d, c, b) {
    if (status == 0 && d == 0) {
        cm.dispose();
        return
    }(d == 1) ? status++ : status--;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status === a++) {
            cm.askYesNo_Bottom("是朵长得像传送口一样的花……\r\n进去看看吗？", 37, 1540807)
        } else {
            if (status === a++) {
                cm.onSetMapTagedObjectVisible(1, "pt00", 0);
                cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/HofM/act4/ptin", 100);
                cm.curNodeEventEnd(true);
                cm.setInGameDirectionMode(true, false, true);
                cm.inGameDirectionEvent_AskAnswerTime(600)
            } else {
                if (status === a++) {
                    cm.inGameDirectionEvent_SetHideEffect(1);
                    cm.inGameDirectionEvent_AskAnswerTime(600)
                } else {
                    if (status === a++) {
                        cm.dispose();
                        cm.openNpc("冒险岛英雄_Act4_堕落世界树")
                    }
                }
            }
        }
    }
};