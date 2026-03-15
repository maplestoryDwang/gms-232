var status = -1;

function start(c, b, a) {
    if (c == 1) {
        status++
    } else {
        status--
    }
    if (status == 0) {
        cm.forceStartQuest();
        cm.dispose()
    }
}

function end(c, b, a) {
    if (c == 0 && b == 0) {
        status--
    } else {
        if (c == -1) {
            cm.dispose();
            return
        } else {
            status++
        }
    }
    if (status == 0) {
        cm.askAcceptDecline("Open #i2431140# #bGhastly Purple Letter#k?")
    } else {
        if (status == 1) {
            cm.sendNextS("#e#bHappy Halloween!#n#k Tonight was the best cure for 1000 years of boredom I could have imagined!")
        } else {
            if (status == 2) {
                cm.sendNextPrevS("We're the students of #bMaple Castle#k. It's just as you heard #b#h ##k. We went to school here before we sealed it off from the Black Mage.")
            } else {
                if (status == 3) {
                    cm.sendNextPrevS("Remember the Sealed Emblem from the sugar bowl? That was supposed to be our promised to come back every Halloween. I'm really glad we made that before we bit the dust!")
                } else {
                    if (status == 4) {
                        cm.sendNextPrevS("It's been 1000 years since we sealed up the school. You spend that long bored, you have to make a big come-back！That's why we wanted to trick all of you, in case you haven't figured out, we were the people dressed up in the main castle hall!")
                    } else {
                        if (status == 5) {
                            cm.sendNextPrevS("So, thanks for entertaining us！This has been the most exciting thing to happen in 1000 years. You don't have to report anything back to Neinheart, we already sent him a letter. Ah, I wish I could see his expression...")
                        } else {
                            if (status == 6) {
                                cm.sendPrevS("We've got 1000 years to think of more pranks. When you're dead, you can help us come up with some！Hahaha!", 1)
                            } else {
                                if (status == 7) {
                                    cm.forceCompleteQuest();
                                    cm.removeAll(3994663);
                                    cm.removeAll(3994661);
                                    cm.warp(100000000, 1);
                                    cm.dispose()
                                }
                            }
                        }
                    }
                }
            }
        }
    }
};