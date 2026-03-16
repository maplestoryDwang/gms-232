var status = -1;
var selectionLog = [];

function start() {
    action(1, 0, 0)
}

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
            var d = cm.getJob();
            if (cm.getPlayer().getLevel() < 12 && (d == 2004 || d == 2700 || d == 2710 || d == 2711 || d == 2712)) {
                cm.curNodeEventEnd(true);
                cm.eventSKill(0);
                cm.setInGameDirectionMode(true, false, true);
                cm.inGameDirectionEvent_AskAnswerTime(900)
            } else {
                cm.dispose()
            }
        } else {
            if (status === a++) {
                cm.getTopMsgFont("点击灯泡就能开始任务。任务状态快捷键 [Q]/ 选择型[J]", 3, 20, 20, 0, 0);
                cm.inGameDirectionEvent_AskAnswerTime(3000)
            } else {
                if (status === a++) {
                    cm.forceStartQuest(25518, "");
                    cm.forceCompleteQuest(25518);
                    cm.inGameDirectionEvent_AskAnswerTime(900)
                } else {
                    if (status === a++) {
                        cm.effect_OnUserEff("UI/tutorial.img/34");
                        cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                        cm.eventSKill(0);
                        cm.setInGameDirectionMode(false, true, false);
                        cm.dispose()
                    }
                }
            }
        }
    }
};