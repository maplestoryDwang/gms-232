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
            if (cm.getNumberFromQuestInfo(39558, "clear") > 0) {
                cm.sendNormalTalk_Bottom("#face0#这里似乎没什么要办的事了。", 36, 3001674 + cm.getPlayer().getGender(), false, true, 1)
            } else {
                if (cm.getNumberFromQuestInfo(39558, "do") > 0) {
                    cm.askAcceptDecline_Bottom("#face0##fc0xFFbfbfbf#（在扭曲空间的那一头看到怪物的影子，这就过去看看吧？）", 36, 3001674 + cm.getPlayer().getGender(), 1)
                } else {
                    cm.sendNormalTalk_Bottom("#face0##fc0xFFbfbfbf#（在进入扭曲空间之前，最好和饕餮商量一下。）", 36, 3001674 + cm.getPlayer().getGender(), false, true, 1);
                    cm.dispose()
                }
            }
        } else {
            if (status === a++) {
                cm.dispose();
                cm.warp(993160150, 0, false)
            }
        }
    }
};