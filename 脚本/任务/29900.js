var status = -1;

function start(c, b, a) {
    if (cm.getPlayer().getJob() > 0 && cm.getPlayer().getJob() < 1000) {
        cm.forceStartQuest()
    }
    cm.dispose()
}

function end(c, b, a) {
    cm.gainItem(1142107, 1);
    cm.forceStartQuest();
    cm.forceCompleteQuest();
    cm.dispose();
    cm.sendOk("送给你的#v1142107#请妥善保管哦。")
};