var status = -1;

function start(c, b, a) {
    if (c == 1) {
        status++
    } else {
        status--
    }
    if (status == 0) {
        cm.sendNextS("Hi #b#h0##k, are you enjoying Christmas in Maple World? I've prepared something special, a Christmas costume set!")
    } else {
        if (status == 1) {
            cm.sendNextPrevS("Come see me during the Christmas Event, and I'll give you #bone of 4 Christmas outfits#k!\r\nYou can #bonly wear it today#k, though. You don't want to be out of season.")
        } else {
            if (status == 2) {
                cm.sendNextPrevS("Here's your Christmas Costume. I will be giving away #rChristmas gifts#k everyday during the #bChristmas Event#k, so I hope to see you around again!")
            } else {
                if (status == 3) {
                    cm.sendOk("#fUI/UIWindow2.img/QuestIcon/4/0#\r\n#b#i1003737# #t1003737# x1#k\r\n\r\n #b#i1052566# #t1052566# x1#k\r\n\r\nEnjoy your gifts!")
                } else {
                    if (status == 4) {
                        cm.forceStartQuest();
                        cm.forceCompleteQuest();
                        cm.dispose()
                    }
                }
            }
        }
    }
};