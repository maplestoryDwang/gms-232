var status = -1;

function start(c, b, a) {
    cm.sendOk("Go to #bChief Tatamo#k in Leafre and bring back a Dragon Moss Extract.");
    cm.forceStartQuest();
    cm.dispose()
}

function end(c, b, a) {
    status++;
    if (status == 0) {
        if (cm.haveItem(4032531, 1)) {
            cm.sendNext("Great！Please wait till I mix these ingredients together...")
        } else {
            cm.sendOk("Please go to #bChief Tatamo#k of Leafre and bring back a Dragon Moss Extract.");
            cm.forceStartQuest();
            cm.dispose()
        }
    } else {
        cm.teachSkill(cm.getPlayer().getStat().getSkillByJob(1026, cm.getPlayer().getJob()), 1, 0);
        cm.gainExp(11000);
        cm.removeAll(4032531);
        cm.sendOk("There we go！You have learned the Soaring skill and will be able to fly, using great amounts of MP.");
        cm.forceCompleteQuest();
        cm.dispose()
    }
};