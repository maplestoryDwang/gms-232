var status = -1;

function start(c, b, a) {
    if (c == -1) {
        cm.dispose()
    } else {
        if (c == 1) {
            status++
        } else {
            status--
        }
        if (status == 0) {
            if (cm.getPlayer().getJob() == 520) {
                cm.sendNext("All you have to do is go where I tell you, beat an enemy, and bring back the spoils... If you don't think you can handle that, go back to Victoria Island now. Ossyria is no place for weaklings.")
            } else {
                if (status == 1) {
                    cm.sendNextPrev("There is an obelisk at Sharp Cliff I near El Nath. Behind it, there's a path to the Holy Ground at the Snowfield. Touch the Holy Stone there, and you'll be warped to another dimension. Your enemy is waiting for you there.")
                } else {
                    if (status == 2) {
                        cm.sendNextPrev("Bring me proof of your victory, and we'll see if you're ready.")
                    } else {
                        if (status == 3) {
                            cm.forceStartQuest();
                            cm.dispose()
                        }
                    }
                }
            }
        }
    }
}

function end(c, b, a) {
    if (c == -1) {
        cm.dispose()
    } else {
        if (c == 1) {
            status++
        } else {
            status--
        }
        if (status == 0) {
            if (!cm.haveItem(4031059)) {
                cm.sendOk("Very good. Now come back to me when you have received #i4031059");
                cm.forceStartQuest();
                cm.dispose()
            } else {
                cm.getPlayer().changeJob(521);
                cm.gainSp(3);
                cm.sendOk("You have advanced to Outlaw. Good luck, see you again at level 120.");
                cm.forceCompleteQuest();
                cm.dispose()
            }
        }
    }
};