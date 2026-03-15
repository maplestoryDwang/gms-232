var status = -1;

function start(c, b, a) {
    status++;
    if (status == 0) {
        cm.askAcceptDecline("Have you been mastering your skills? I am sure you've mastered all your skills, which means... it's time for you to learn a #bnew skill#k, right?")
    } else {
        if (status == 1) {
            if (c == 0) {
                cm.sendOk("Well, what you're doing right now doesn't make you look like someone that's humble. You just look complacent by doing that, and that's never a good thing.")
            } else {
                cm.forceStartQuest()
            }
            cm.dispose()
        }
    }
}

function end(c, b, a) {
    cm.dispose()
};