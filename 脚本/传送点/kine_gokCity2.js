function enter() {
    cm.openScriptNpc()
}
var status = -1;
var selectionLog = [];

function start() {
    action(1, 0, 0)
}

function action(e, d, c) {
    if (cm.getPlayer().getGender() == 0) {
        var a = 1531000
    } else {
        var a = 1531052
    }
    if (status == 0 && e == 0) {
        cm.dispose();
        return
    }(e == 1) ? status++ : status--;
    selectionLog[status] = c;
    var b = -1;
    if (status <= b++) {
        cm.dispose()
    } else {
        if (status === b++) {
            if (cm.isQuestActive(22730)) {
                cm.sendNormalTalk_Bottom("等下，内罗！你可不能跟来啊！\r\n杰，帮我抓牢内罗，别让它跟过来。", 37, a, false, true)
            } else {
                cm.warp(331000000, 2, true);
                cm.dispose()
            }
        } else {
            if (status === b++) {
                cm.sendNormalTalk_Bottom("#face4#喵……呜！", 37, 1531003, true, true)
            } else {
                if (status === b++) {
                    cm.sendNormalTalk_Bottom("#face1#你……你让我抓住那东西？！", 37, 1531001, true, true)
                } else {
                    if (status === b++) {
                        cm.sendNormalTalk_Bottom("总不能带着小猫到那么危险的地方去啊，\r\n这可是特殊任务！", 37, a, true, true)
                    } else {
                        if (status === b++) {
                            cm.dispose();
                            cm.warp(331000000, 2, true)
                        }
                    }
                }
            }
        }
    }
};