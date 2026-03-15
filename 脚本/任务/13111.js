var status = -1;

function start(c, b, a) {
    if (c == 1) {
        status++
    } else {
        status--
    }
    if (status == 0) {
        cm.askAcceptDecline("#bMaple Castle#k is open for the Halloween season！Anyone wearing a #rHalloween Costume#k can enter.")
    } else {
        if (status == 1) {
            cm.sendNext("Wow, your outfit is FANTASTIC. You're definitely invited to the #bMaple Castle#k Halloween party.")
        } else {
            if (status == 2) {
                cm.warp(910028300, 0);
                cm.dispose()
            }
        }
    }
}

function end(c, b, a) {
    cm.dispose()
};