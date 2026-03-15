var status = -1;

function start(c, b, a) {
    if (c == 1) {
        status++
    } else {
        status--
    }
    if (status == 0) {
        cm.sendOk("#b#eEnjoy your #e#t1012367##n. Aren't I just the most generous person EVER? Ha!\r\n\r\n#fUI/UIWindow2.img/QuestIcon/4/0#\r\n#i1012367# #t1012367# x1(10 days)");
        cm.gainItem(1012367, 1)
    } else {
        if (status == 1) {
            cm.sendPrev("If you come back tomorrow with the Glowing Nose, I'll #e#bupgrade it#k#n. So come say hi tomorrow!");
            cm.forceStartQuest();
            cm.dispose()
        }
    }
};