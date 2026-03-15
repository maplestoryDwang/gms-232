var status = -1;

function start(c, b, a) {
    if (cm.getPlayer().getCurrentRep() > 0) {
        cm.forceCompleteQuest();
        cm.gainExp(3000);
        cm.sendNext("Good job!")
    } else {
        cm.sendNext("Please, get some Rep!")
    }
    cm.dispose()
}

function end(c, b, a) {
    if (cm.getPlayer().getCurrentRep() > 0) {
        cm.forceCompleteQuest();
        cm.gainExp(3000);
        cm.sendNext("Good job!")
    } else {
        cm.sendNext("Please, get some Rep!")
    }
    cm.dispose()
};