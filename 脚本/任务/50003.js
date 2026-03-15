var status = -1;

function start(c, b, a) {
    if (c == 1) {
        status++
    } else {
        cm.sendNext("...What is it? Ah, I see that he's coming really close!");
        cm.dispose();
        return
    }
    if (status == 0) {
        cm.askAcceptDecline("Watch out, because he seems... much more powerful than before. Do not underestimate him!")
    } else {
        if (status == 1) {
            cm.forceStartQuest();
            cm.dispose()
        }
    }
}

function end(c, b, a) {
    cm.forceCompleteQuest();
    cm.dispose()
};