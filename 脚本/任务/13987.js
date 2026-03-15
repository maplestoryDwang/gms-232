var status = -1;

function start(c, b, a) {
    if (c == 1) {
        status++
    } else {
        if (status == 0) {
            cm.sendOk("Well, think again.");
            cm.dispose();
            status--
        }
    }
    if (status == 0) {
        cm.askAcceptDecline("RED just keeps on rolling, and we've got even more achievements to celebrate！Are you up to the challenge?")
    } else {
        if (status == 1) {
            cm.sendOk("Click on the #e#b#fEffect/BasicEff.img/MainNotice/Achieve/Default/0#Trophy Icon#k#n on the left side of your screen to check your Achievements!");
            cm.forceStartQuest();
            cm.forceCompleteQuest();
            cm.dispose()
        }
    }
};