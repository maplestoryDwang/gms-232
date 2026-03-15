var status = -1;

function start(c, b, a) {
    if (c == 1) {
        status++
    } else {
        status--
    }
    if (status == 0) {
        cm.sendNext("Who are you?")
    } else {
        if (status == 1) {
            cm.sendNextPrev("This place looks ancient... who knows how long it's been since anyone set foot here?")
        } else {
            if (status == 2) {
                cm.askYesNo("Who are you?")
            } else {
                if (status == 3) {
                    cm.sendOk("This is no place for you. Get lost.")
                } else {
                    if (status == 4) {
                        cm.forceStartQuest();
                        cm.dispose()
                    }
                }
            }
        }
    }
}

function end(c, b, a) {
    cm.dispose()
};