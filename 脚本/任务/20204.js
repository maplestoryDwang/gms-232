var status = -1;

function start(c, b, a) {}

function end(c, b, a) {
    if (c == 0) {
        if (status == 0) {
            cm.sendNext("I guess you are not ready to tackle on the responsibilities of an official knight.");
            cm.dispose();
            return
        } else {
            if (status >= 2) {
                status--
            } else {
                cm.dispose();
                return
            }
        }
    } else {
        status++
    }
    if (status == 0) {
        if (cm.getQuestStatus(20204) == 0) {
            cm.forceStartQuest();
            cm.dispose()
        } else {
            if (cm.haveItem(4032099, 30)) {
                cm.askYesNo("So you brought all of Proof of Test... Okay, I believe that you are now qualified to become an official knight. Do you want to become one?")
            } else {
                cm.dispose()
            }
        }
    } else {
        if (status == 1) {
            if (cm.getPlayerStat("RSP") > (cm.getPlayerStat("LVL") - 30) * 3) {
                cm.sendOk("Hmm...You have too many #bSP#k. You can't make the job advancement with too many SP left.");
                cm.dispose();
                return
            }
            if (!cm.canHold(1142067)) {
                cm.sendOk("You are currently in full inventory, please check.");
                cm.dispose()
            } else {
                cm.forceCompleteQuest();
                if (cm.getJob() != 1410) {
                    cm.changeJob(1410);
                    cm.gainItem(4032099, -30);
                    cm.gainItem(1142067, 1)
                }
                cm.sendNext("The knight-in-training has ended. You are now an official knight of the Knights of Cygnus.")
            }
        } else {
            if (status == 2) {
                cm.sendNextPrev("I have given you some #bSP#k. I have also given you a number of skills for a Soul Master that's only available to knights, so I want you to work on it and hopefully cultivate it as much as your soul.")
            } else {
                if (status == 3) {
                    cm.sendPrev("Now that you are officially a Knight of cygnus, act like one so you will keep Goodness's name up high.");
                    cm.dispose()
                }
            }
        }
    }
};