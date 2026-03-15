var status = -1;

function start(c, b, a) {
    cm.dispose()
}

function end(c, b, a) {
    if (cm.getPlayer().getMarriageId() > 0 && cm.getPlayer().getGuildId() > 0 && cm.getPlayer().getJunior1() > 0 && cm.canHold(1142081, 1)) {
        cm.sendNext("Wow. Here you are!");
        cm.forceCompleteQuest();
        cm.gainItem(1142081, 1)
    } else {
        cm.sendNext("I don't think you fit the requirements. Get in a wedding, family, and guild.")
    }
    cm.dispose()
};