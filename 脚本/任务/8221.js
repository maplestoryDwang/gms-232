var status = -1;

function start(c, b, a) {
    cm.sendNext("Find 10 Gold Ore, 4 Typhon Feather, 1 Power Crystal Ore.");
    cm.forceStartQuest();
    cm.dispose()
}

function end(c, b, a) {
    cm.dispose()
};