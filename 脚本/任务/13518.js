var status = -1;

function start(c, b, a) {
    if (c == 1) {
        status++
    } else {
        if (status == 0) {
            cm.sendOk("Eh, I can't force you. You're missing out on some fantastic rewards, though!");
            cm.dispose()
        }
        status--
    }
    if (status == 0) {
        cm.askAcceptDeclineS("You're not alone！Now you can play the Game of Yut with your friends. You want to give it a shot now?")
    } else {
        if (status == 1) {
            cm.forceStartQuest();
            cm.dispose()
        }
    }
};