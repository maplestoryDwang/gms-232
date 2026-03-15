var status = -1;

function start(c, b, a) {
    status++;
    if (status == 0) {
        cm.askAcceptDecline("#h0#. Have you been slacking off on training since reaching Level 100? We all know how powerful you are, but the training is not complete. Take a look at these Knight Commanders. They train day and night, preparing themselves for the possible encounter with the Black Wizard.")
    } else {
        if (c == 1) {
            cm.forceStartQuest()
        }
        cm.dispose()
    }
}

function end(c, b, a) {
    cm.dispose()
};