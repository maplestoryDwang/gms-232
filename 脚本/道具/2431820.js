var status = -1;
var selectionLog = [];

function start() {
    action(1, 0, 0)
}

function action(d, c, b) {
    if (cm.isQuestFinished(32359)) {
        cm.playerMessage(-1, "好像没什么作用");
        cm.dispose();
        return
    }
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
            cm.curNodeEventEnd(true);
            cm.setInGameDirectionMode(true, true, false);
            cm.fieldEffect_PlayFieldSound("advStory/stoneUse", 100);
            cm.fieldEffect_ScreenMsg("demonSlayer/whiteOut");
            cm.inGameDirectionEvent_AskAnswerTime(1950)
        } else {
            if (status === a++) {
                cm.dispose();
                cm.warp(1130020, 0, false);
                cm.forceCompleteQuest(32358);
                cm.gainExp(500000);
                cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                cm.setInGameDirectionMode(false, true, false);
                cm.gainItem(2431820, -1)
            }
        }
    }
};