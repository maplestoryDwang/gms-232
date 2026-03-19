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
            cm.askYesNo("#b(看起来很可疑的洞。不知道阿班会不会躲在里面。要进去看看吗?？)#k", 0, 2159011)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("#b(就算是阿班，应该也不会躲在这里吧……应该不会吧？)#k", 0, 2159011, false, true)
            } else {
                if (status === a++) {
                    cm.updateInfoQuest(25980, "normal=#");
                    cm.updateInfoQuest(25980, "normal=#;hard=#");
                    cm.gainExp(35);
                    cm.dispose();
                    cm.warp(931000010, 0, false)
                }
            }
        }
    }
};