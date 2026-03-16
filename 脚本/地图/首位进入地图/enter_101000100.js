var status = -1;
var selectionLog = [];

function start() {
    action(1, 0, 0)
}

function action(d, c, b) {
    if (status == 0 && d == 0) {
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
            if (!cm.isQuestFinished(25510) && (!cm.isQuestFinished(25117) && cm.getInfoQuest(25505) == "route=0")) {
                cm.curNodeEventEnd(true);
                cm.setInGameDirectionMode(true, false, false);
                cm.effect_Text(["#fnNanum ExtraBold##fs20#-几个月后，好不容易把森林和房子恢复后-", ""], [100, 2500, 4, 0, 0, 1, 4, 0, 0, 0, 0, 0]);
                cm.inGameDirectionEvent_AskAnswerTime(6200)
            } else {
                cm.dispose()
            }
        } else {
            if (status === a++) {
                cm.forceStartQuest(25517, "");
                cm.forceCompleteQuest(25517);
                cm.getTopMsgFont("点击灯泡就能开始任务。任务状态快捷键 [Q]/ 选择型[J]", 3, 20, 20, 0, 0);
                cm.inGameDirectionEvent_AskAnswerTime(1500)
            } else {
                if (status === a++) {
                    cm.inGameDirectionEvent_AskAnswerTime(1200)
                } else {
                    if (status === a++) {
                        cm.effect_OnUserEff("UI/tutorial.img/34");
                        cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                        cm.setInGameDirectionMode(false, true, false);
                        cm.dispose()
                    }
                }
            }
        }
    }
};