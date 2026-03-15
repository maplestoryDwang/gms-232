var status = -1;

function start(c, b, a) {
    if (c == 1) {
        status++
    } else {
        if (status == 0) {
            cm.sendNext("Really? Aww... Well, talk to me again if you change your mind!");
            cm.dispose();
            status--
        }
    }
    if (status == 0) {
        cm.askYesNo("Hello, #b#h0##k!\r\nYou know that #e#bWinter Attendance Check Season 1#k#n is in progress, right? Wanna try now?")
    } else {
        if (status == 1) {
            cm.forceStartQuest();
            cm.dispose()
        }
    }
};