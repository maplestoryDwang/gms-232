var status = -1;

function start(c, b, a) {
    status++;
    if (status == 0) {
        cm.sendNext("航海士，你搜集的木材就是这种吧？\r\n\r\n#b#i4030022##z4030022#", 1510006)
    } else {
        if (status == 1) {
            cm.gainItem(4030022, 1);
            cm.forceStartQuest();
            cm.dispose()
        }
    }
};