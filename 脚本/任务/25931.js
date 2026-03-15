var status = -1;

function start(c, b, a) {
    if (c == 1) {
        status++
    } else {
        status--
    }
    if (status == 0) {
        cm.sendNext("Hello, #b#h ##k. Don't you wish you could see other peoples' farms? Thay way, you'd know how much better than them you are！You'd never have to guess again.")
    } else {
        if (status == 1) {
            cm.askAcceptDecline("You should start cataloging your friends based on their inferiority to you right now. I've got you in my Basically a Servant book, but I might raise you up if you go visit your friends. Are you ready for a lesson in humiliation?\r\n#r(Click Accept to move to the tutorial.)")
        } else {
            if (status == 2) {
                cm.warp(100000000);
                cm.forceStartQuest();
                cm.forceCompleteQuest();
                cm.dispose()
            }
        }
    }
}

function end(c, b, a) {
    cm.dispose()
};