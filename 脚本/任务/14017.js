var status = -1;

function start(c, b, a) {
    if (c == 1) {
        status++
    } else {
        if (status == 0) {
            cm.sendNext("Let me know whenever you want to learn more about the Winter Event.");
            cm.dispose();
            status--
        }
    }
    if (status == 0) {
        cm.askYesNo("Hello #b#ho##k. Are you here to learn more about the new #eWinter Event#n?")
    } else {
        if (status == 1) {
            cm.sendNextS("Everyone above Lv. 13 who stays #eonline for 30 minutes#n will receive a special gift during the Winter Event.")
        } else {
            if (status == 2) {
                cm.sendNextPrevS("The timer will start automatically when you log in. Once you've been online for #e30 minutes#n, click on the notice icon to the left, then click on the icon below to get your reward.\r\n\r\n #i3800578# #eWinter Event Notice Icon#n")
            } else {
                if (status == 3) {
                    cm.sendNextPrevS("You can also click on #i3800578# to see how much longer before you can claim your reward.")
                } else {
                    if (status == 4) {
                        cm.sendNextPrevS("The timer's already ticking！Check the alert after we end this conversation. Just know that the timer will #e#rreset#k#n if you #e#rlog out#k#n during the event.")
                    } else {
                        if (status == 5) {
                            cm.forceStartQuest();
                            cm.dispose()
                        }
                    }
                }
            }
        }
    }
};