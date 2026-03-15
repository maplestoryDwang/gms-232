var status = -1;

function start(c, b, a) {
    cm.sendNext("Go to Rex, but don't put your hands on the seal. Got it? You can enter Ice Ravine through the entrance in Ice Valley II.");
    cm.forceStartQuest(3122, "0");
    cm.dispose()
}

function end(c, b, a) {
    cm.sendNext("Thank you.");
    cm.forceCompleteQuest();
    cm.dispose()
};