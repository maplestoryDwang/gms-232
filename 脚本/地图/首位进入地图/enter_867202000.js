var status = -1;
var selectionLog = [];

function action(d, c, b) {
    if (status == 0 && d == 0) {
        cm.dispose();
        return
    }
    status++;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status === a++) {
            cm.gainSkillBuff(80011554);
            cm.onActionBarResult(5, 1009);
            cm.addPopupSay(9400580, 3000, "#face3#小石啊！小心 ", "", 0);
            cm.setMobImage("PL_MONAD.img/EP1/ACT2/juliet", 100);
            cm.getPlayer().scheduleOpenNpcTask(30, 66, "莫奈德_延时任务");
            cm.getPlayer().scheduleOpenNpcTask(60, 67, "莫奈德_延时任务");
            cm.getPlayer().scheduleOpenNpcTask(90, 68, "莫奈德_延时任务");
            cm.dispose()
        }
    }
}

function start() {
    status = -1;
    action(1, 0, 0)
};