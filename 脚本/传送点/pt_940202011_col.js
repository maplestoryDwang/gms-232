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
            cm.sendNormalTalk_Bottom("#face0#谁在那！", 37, 3001306, false, true, 1)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#哎呀,难道被发现了！？", 37, 3001351, true, true, 1)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0#快,快后退！", 37, 3001300, true, true, 1)
                } else {
                    if (status === a++) {
                        cm.updateInfoQuest(34800, "back=1");
                        cm.onTeleport(0, 3, cm.getPlayer().getId(), -412, 37);
                        cm.dispose()
                    }
                }
            }
        }
    }
};