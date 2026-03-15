var status = -1;

function start(c, b, a) {
    end(c, b, a)
}

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
        cm.askYesNo("You've saved Erev. Do you want to become a Captain Knight?")
    } else {
        if (status == 1) {
            if (!cm.canHold(1142069, 1)) {
                cm.sendOk("Please make space.");
                cm.dispose();
                return
            }
            cm.forceCompleteQuest();
            if (cm.getJob() == 1111) {
                cm.changeJob(1112)
            } else {
                if (cm.getJob() == 1211) {
                    cm.changeJob(1212)
                } else {
                    if (cm.getJob() == 1311) {
                        cm.changeJob(1312)
                    } else {
                        if (cm.getJob() == 1411) {
                            cm.changeJob(1412)
                        } else {
                            if (cm.getJob() == 1511) {
                                cm.changeJob(1512)
                            }
                        }
                    }
                }
            }
            cm.teachSkill(10001005, 1, 0);
            cm.gainItem(1142069, 1);
            cm.sendNext("You are now an official knight of the Knights of Cygnus.")
        } else {
            if (status == 3) {
                cm.sendPrev("Now that you are officially a Knight of cygnus, act like one so you will keep Goodness's name up high.");
                cm.dispose()
            }
        }
    }
};