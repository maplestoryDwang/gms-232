var status = -1;

function start(c, b, a) {
    if (c == 1) {
        status++
    } else {
        status--
    }
    if (status == 0) {
        cm.askAcceptDecline("My goodness！My goodness！Always so busy. If you help me, out of the graciousness of your big heart, I may be able to give you something that you'll find useful--in the name of the Witch Malady!")
    } else {
        if (status == 1) {
            cm.sendNext("Kekeke！I knew from the moment you spoke that you would be lending me a hand.")
        } else {
            if (status == 2) {
                cm.sendPrevOk("Talk to me if you want to know more about the things you can do for me.")
            } else {
                if (status == 3) {
                    cm.forceStartQuest();
                    cm.forceCompleteQuest();
                    cm.dispose()
                }
            }
        }
    }
}

function end(c, b, a) {
    cm.dispose()
};