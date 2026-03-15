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
    if (c == -1) {
        cm.dispose()
    } else {
        if (c == 1) {
            status++
        } else {
            status--
        }
        if (status == 0) {
            cm.sendNextS("Oh, are those tests? Hm... they look like they're from some kind of #bMagic School#k. I wonder if they came from the #btop magic school of Maple World#k...")
        } else {
            if (status == 1) {
                cm.sendNextPrevS("I've heard legends of this school, but seeing these test results really makes it real. Er... I will take care of these...embarrassing test sheets. Hey, don't look at the name！Stop stop stop！STOP！Wait！I thought of some more #binteresting than check names on the test sheets!")
            } else {
                if (status == 2) {
                    cm.sendNextPrevS("#bNeinheart#k apparently found #bMaple Castle artifacts#k while preparing for the party. I bet #bNeinheart#k knows a lot about this place. Why don't you talk to him? And get away from the test sheets!")
                } else {
                    if (status == 3) {
                        cm.sendPrevS("#fUI/UIWindow2.img/QuestIcon/4/0#\r\n#i2431132##bHalloween Mask Fragment x1#k\r\n#i3994650##bBoo Buddy Candy x1#k\r\n\r\nThank you for your help!!", 1);
                        cm.forceCompleteQuest();
                        cm.removeAll(3994656);
                        cm.gainItem(2431132, 1);
                        cm.gainItem(3994650, 1);
                        cm.dispose()
                    }
                }
            }
        }
    }
};