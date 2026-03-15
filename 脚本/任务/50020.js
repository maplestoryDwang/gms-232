var status = -1;

function start(c, b, a) {
    cm.sendNext("Auf Haven the angel is defeated...");
    cm.forceCompleteQuest(50019);
    cm.forceStartQuest();
    cm.dispose()
}

function end(c, b, a) {};