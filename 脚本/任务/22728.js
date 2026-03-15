var status = -1;

function start(c, b, a) {
    cm.forceStartQuest();
    cm.dispose()
}

function end(e, d, c) {
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
            cm.curNodeEventEnd(true);
            cm.eventSKill(0);
            cm.setInGameDirectionMode(true, false, true);
            cm.setStandAloneMode(true);
            cm.sendNormalTalk_Bottom("到底是什么状况？\r\n持续不断地有怪物冒出来。", 37, a, false, true)
        } else {
            if (status === b++) {
                cm.sendNormalTalk_Bottom("好像也没有学生身陷危险，继续留在这里只是浪费时间，\r\n还是先回去吧？", 37, a, true, true)
            } else {
                if (status === b++) {
                    cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                    cm.inGameDirectionEvent_AskAnswerTime(500)
                } else {
                    if (status === b++) {
                        cm.dispose();
                        cm.warp(331002500, 0, true)
                    }
                }
            }
        }
    }
};