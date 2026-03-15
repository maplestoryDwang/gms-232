var status = -1;

function start(c, b, a) {
    if (c == 1) {
        status++
    } else {
        if (status == 0) {
            cm.sendOk("Let me know if you change your mind. You're missing out!");
            cm.dispose();
            status--
        }
    }
    if (status == 0) {
        cm.askAcceptDeclineS("Maple Mayhem Bingo is ready to play！Wanna give it a try now?")
    } else {
        if (status == 1) {
            cm.dispose()
        }
    }
};