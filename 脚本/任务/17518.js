var status = -1;

function start(c, b, a) {
    if (c == 1) {
        status++
    } else {
        status--
    }
    if (status == 0) {
        cm.sendNext("So, you came.")
    } else {
        if (status == 1) {
            cm.sendNextPrevS("...Hilla?")
        } else {
            if (status == 2) {
                cm.sendNextPrev("I told you to go away, but you wouldn't listen.")
            } else {
                if (status == 3) {
                    cm.sendNextPrevS("YOU're the one behind all the nonsense!")
                } else {
                    if (status == 4) {
                        cm.sendNextPrev("What of it?")
                    } else {
                        if (status == 5) {
                            cm.sendNextPrevS("What are you scheming?!")
                        } else {
                            if (status == 6) {
                                cm.sendNextPrev("Scheming? I'm not scheming. I'm working on getting what I want.")
                            } else {
                                if (status == 7) {
                                    cm.sendNextPrevS("I'll stop whatever horrible ritual you've got cooked up!")
                                } else {
                                    if (status == 8) {
                                        cm.askYesNo("You really don't have to beg me to destroy you. I'll happily oblige.")
                                    } else {
                                        if (status == 9) {
                                            cm.sendNext("Are you ready to join my undead army? It'll only take a minute.")
                                        } else {
                                            if (status == 10) {
                                                cm.warp(863100105);
                                                cm.forceStartQuest();
                                                cm.dispose()
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}

function end(c, b, a) {
    cm.dispose()
};