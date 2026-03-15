var status = -1;

function start(c, b, a) {
    if (c == 1) {
        status++
    } else {
        if (status == 0) {
            cm.sendNext("Well, think again.");
            cm.dispose();
            status--
        }
    }
    if (status == 0) {
        cm.askAcceptDeclineNoESC("Hello, #b#h0##k！Now that RED is here, it's time to challenge yourself with some exciting achievements. Go the extra mile to earn your goodies！What do you say?")
    } else {
        if (status == 1) {
            cm.sendNext("Click on the #e#b#fEffect/BasicEff.img/MainNotice/Achieve/Default/0#Trophy Icon#k#n on the left side of your screen to check your Achievements!")
        } else {
            if (status == 2) {
                cm.forceStartQuest();
                cm.forceCompleteQuest();
                cm.dispose()
            }
        }
    }
};