var status = -1;

function start(c, b, a) {
    status++;
    if (status == 0) {
        if (cm.isQuestFinished(56023)) {
            cm.dispose()
        } else {
            cm.sendOk("恭喜！你获得了#v2022457# x 100，#v4006000# x 100，#v4006001# x 100。");
            cm.gainItem(2022457, 100);
            cm.gainItem(4006000, 100);
            cm.gainItem(4006001, 100);
            cm.forceCompleteQuest();
            cm.dispose()
        }
    }
};