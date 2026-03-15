var status = -1;

function start(c, b, a) {
    cm.sendNext("Royal Guard Ani comes out every hour, but right now he's not feeling like fighting.");
    cm.forceStartQuest();
    cm.dispose()
}

function end(c, b, a) {
    cm.dispose()
};