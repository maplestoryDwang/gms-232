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
            cm.gainExp(8371);
            cm.sendNormalTalk_Bottom("#face1#呼，好像彻底甩掉那些家伙了？", 37, 3001270, false, true, 1)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#好、好像顺利通过了。快去下一个地区看看吧。", 37, 3001251, true, true, 1)
            } else {
                if (status === a++) {
                    cm.forceStartQuest(34628, "");
                    cm.updateInfoQuest(34628, "clear=1");
                    cm.forceCompleteQuest(34628);
                    cm.warp(402000302, 0, false);
                    cm.dispose()
                }
            }
        }
    }
};