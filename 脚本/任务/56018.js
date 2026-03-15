var status = -1;

function start(c, b, a) {
    status++;
    if (status == 0) {
        if (cm.isQuestFinished(56018)) {
            cm.dispose()
        } else {
            cm.sendOk("恭喜！你获得了#v2022457# x 100。");
            cm.gainItem(2022457, 100);
            cm.forceCompleteQuest();
            cm.dispose()
        }
    }
};