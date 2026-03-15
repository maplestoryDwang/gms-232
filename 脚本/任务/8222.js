var status = -1;

function start(c, b, a) {
    cm.sendNext("Find 10 Stormbreaker Badges.");
    cm.forceStartQuest();
    cm.dispose()
}

function end(c, b, a) {
    if (cm.haveItem(4032006, 10)) {
        cm.sendNext("Good job!");
        cm.gainExp(85000);
        cm.forceCompleteQuest();
        cm.gainItem(4032006, -10)
    } else {
        cm.sendNext("Please find 10 Stormbreaker Badges.")
    }
    cm.dispose()
};