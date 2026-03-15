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
            cm.sendNextS("Did you collect the #bMaple Castle clues#k from Phantom, Lania, and Angelic Buster?")
        } else {
            if (status == 1) {
                cm.sendNextPrevS("Ah, so that's how #bMaple Castle#k faded away into history... I doubt we'll find any remaining magic if the students already destroyed it all.\r\nStill, I have nothing but respect for the Maple Castle students who made such sacrifices to prevent the Black Mage from becoming stronger.")
            } else {
                if (status == 2) {
                    cm.sendNextPrevS("Thanks for all your help, #b#h ##k. I don't think we should pry into Maple Castle history any further. Seems it was another victim of the Black Mage's nefarious schemes. What a shame.")
                } else {
                    if (status == 3) {
                        cm.sendNextPrevS("......")
                    } else {
                        if (status == 4) {
                            cm.sendNextPrevS("I can't help but notce your skeptical gaze. Forget what I said earlier about the empress's test sheet. I suggest you be about your business.")
                        } else {
                            if (status == 5) {
                                cm.sendPrevS("#fUI/UIWindow2.img/QuestIcon/4/0#\r\n#i2431132##bHalloween Mask Fragment x4#k\r\n#i3994650##bBoo Buddy Candy x1#k\r\n\r\nAnyway, thank you for your help with finding the castle secrets.", 1);
                                cm.forceCompleteQuest();
                                cm.removeAll(3994657);
                                cm.removeAll(3994658);
                                cm.removeAll(3994659);
                                cm.gainItem(2431132, 4);
                                cm.gainItem(3994650, 1);
                                cm.dispose()
                            }
                        }
                    }
                }
            }
        }
    }
};