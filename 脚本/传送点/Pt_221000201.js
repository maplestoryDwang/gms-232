function enter() {
    if (cm.isQuestActive(3476)) {
        cm.openScriptNpc()
    } else {
        cm.warp(221000100, 0)
    }
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
            cm.sendNormalTalk_Bottom("#face0#去找到机库的姐姐哥哥们，让他们来参加会议吧！", 37, 2052004, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#大家都穿得和我一样，找起来应该不难的！", 37, 2052004, true, false)
            } else {
                if (status === a++) {
                    cm.dispose()
                }
            }
        }
    }
};