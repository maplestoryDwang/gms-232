var status = -1;

function start(c, b, a) {
    if (c == 1) {
        status++
    } else {
        cm.dispose();
        return
    }
    if (status == 0) {
        cm.sendNext("Well hello my friend, I'm #bBjorn!#k, I need some help could you mind to help me?")
    } else {
        if (status == 1) {
            cm.askAcceptDecline("Oh right!, Thank you so much, but are you sure you are ready?")
        } else {
            if (status == 2) {
                cm.forceStartQuest();
                cm.dispose()
            }
        }
    }
};