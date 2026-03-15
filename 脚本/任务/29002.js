var status = -1;

function start(c, b, a) {
    if (c == -1) {
        cm.sendNext("Come back when you're ready.");
        cm.dispose()
    } else {
        if (c > 0) {
            status++
        } else {
            status--
        }
        if (status == 0) {
            cm.askAcceptDecline("#v1142003# #e#b#t1142003##k \r\n- Time Limit 30 Days \r\n- Popularity 1000Increase \r\n#nDo you want to test your skills to see if you're worthy of this title?")
        } else {
            if (status == 1) {
                cm.sendNext("I'll give you 30 days to reach your goal.  Once you're finished, come back and see me.  Remember that you have to come back and see me within the time limit in order for it to be approved.  Also, unless you complete this challenge or quit first, you can't try out for another title.");
                cm.forceStartQuest()
            }
        }
    }
}

function end(c, b, a) {
    if (cm.canHold(1142003, 1) && !cm.haveItem(1142003, 1) && cm.getPlayer().getJob() % 100 > 0 && cm.getPlayer().getJob() < 1000) {
        cm.gainItem(1142003, 1);
        cm.forceStartQuest();
        cm.forceCompleteQuest()
    }
    cm.dispose()
};