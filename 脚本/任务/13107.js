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
            cm.sendNextS("You already got all #i3994660##bParty Outfix Box#k items from #o9300313#? Splendid！You took care of those unsightly #e#b#o9300313##n#k monsters. Thanks！Now, you want to know more about the #bSignature Tablet#k right?")
        } else {
            if (status == 1) {
                cm.sendNextPrevS("This stone tablet contains the signatures of #bMaple Castle#k students from thousands of years ago. The writing is ancient, but you can still make the signatures out. There's a message, as well:#b'We are destroying the magic scrolls and sealing up the castle to prevent the innocent and pure knowledge from falling into the hands of evil.'")
            } else {
                if (status == 2) {
                    cm.sendNextPrevS("What exactly were the students afraid of? Whatever it was, it was surely a #bhuge threat#k.")
                } else {
                    if (status == 3) {
                        cm.sendNextPrevS("Well, that's all I have for you. Here, the #bSignature Tablet#k is yours. Run along to Neinheart, and make sure he knows how I sacrificed to get him this information.")
                    } else {
                        if (status == 4) {
                            cm.sendPrevS("#fUI/UIWindow2.img/QuestIcon/4/0#\r\n#i3994658# #bSignature Tablet x1#k\r\n\r\nThanks for your help！Go tell Neinheart about the tablet!", 1);
                            cm.forceCompleteQuest();
                            cm.removeAll(3994660);
                            cm.gainItem(3994658, 1);
                            cm.dispose()
                        }
                    }
                }
            }
        }
    }
};