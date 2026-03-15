var status = -1;

function start(c, b, a) {
    if (c == 1) {
        status++
    } else {
        status--
    }
    if (status == 0) {
        cm.askAcceptDecline("It's a gift-giving festival, and have I got some gifts for you?\r\nThat was a rhetorical question, OF COURSE I DO!\r\nHelp me brighten up the mood around Maple World, and take this gift.")
    } else {
        if (status == 1) {
            cm.sendOk("I can always count on you to bring the fun.\r\nAnd also the guacemole, which I totally meant to tell you to bring. We'll just leave chips off the menu this time around. Check your Cash tab for the gift!")
        } else {
            if (status == 2) {
                cm.forceStartQuest();
                cm.forceCompleteQuest();
                cm.gainItem(5010114, 1);
                cm.dispose()
            }
        }
    }
}

function end(c, b, a) {
    cm.dispose()
};