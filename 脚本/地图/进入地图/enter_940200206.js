var status = -1;
var selectionLog = [];

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
    } else if (status === a++) {
        //setPartnerʱ
        cm.onTeleport(0, 3, cm.getPlayer().getId(), -225, -4475);
        cm.setInGameDirectionMode(true, false, true);
        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(500)
    }
    //
    // else if (status === a++) {
    //     cm.onTeleport(0, 3, cm.getPlayer().getId(), -225, -4475);
    //     cm.setPartner(1, 3003306, 80002275, 0);
    //     cm.setPartner(1, 3003351, 80002274, 0);
    //     cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0)
    // }
    else if (status === a++) {
        cm.inGameDirectionEvent_AskAnswerTime(300)
    } else if (status === a++) {
        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 300, 0);
        cm.inGameDirectionEvent_AskAnswerTime(300)
    } else if (status === a++) {
        cm.inGameDirectionEvent_PushScaleInfo(500, 1000, 2147483647, 2147483647, 2147483647)
    } else if (status === a++) {
        cm.inGameDirectionEvent_AskAnswerTime(500)
    } else if (status === a++) {
        cm.setInGameDirectionMode(false, true, false);
        cm.dispose()
    }
}

function start() {
    status = -1;
    action(1, 0, 0)
};