var status = -1;

function start(c, b, a) {
    if (c == 1) {
        status++
    } else {
        status--
    }
    if (status == 0) {
        cm.askMenu("The #rSurvivalism Challenge#k is a test of skill, where up to five players compete for the top spot in four mini-games. I'll send you an invitation between #rQRQRQR#k and #rQRQRQR#k, every #b10#k, #b30#k, and #b50#k minutes on the hour.\r\n\r\n(You can play #b10#k more games today.)");
        cm.dispose()
    }
}

function end(c, b, a) {
    cm.dispose()
};