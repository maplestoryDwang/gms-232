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
            if (cm.isQuestActive(32248)) {
                cm.updateInfoQuest(32362, "lastPortal=1");
                cm.sendNormalTalk("命名掉到这附近了，到哪儿去了呢？你认识在那儿打瞌睡的#b鲁克#k吗？", 16, 0, false, true)
            } else {
                cm.dispose();
                return
            }
        } else {
            if (status === a++) {
                cm.sendNormalTalk("明明是掉在这附近的，到底去哪儿了呢？正在那边打瞌睡的#b鲁克#k会不会知道呢？", 16, 0, true, false);
                cm.dispose()
            }
        }
    }
};