var status = -1;

function start(c, b, a) {
    if (c == 1) {
        status++
    } else {
        if (status == 0) {
            cm.sendNext("Psh, FINE. I'll be here whenever you find the time.");
            cm.dispose();
            status--
        }
    }
    if (status == 0) {
        cm.askYesNo("Finally！I need help！Can you come meet me?\r\n#r(Click Yes to teleport to the Victoria Tree Platform where Instructor Irvin is.)#k")
    } else {
        if (status == 1) {
            cm.forceStartQuest();
            cm.forceCompleteQuest();
            cm.warp(104020100, 0);
            cm.dispose()
        }
    }
};