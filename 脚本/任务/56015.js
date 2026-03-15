var status = -1;

function start(c, b, a) {
    status++;
    if (status == 0) {
        if (cm.isQuestFinished(56015)) {
            cm.dispose()
        } else {
            cm.sendOk("恭喜！你获得了#v2022457# x 50。");
            cm.gainItem(2022457, 50);
            cm.forceCompleteQuest();
            cm.dispose()
        }
    }
};