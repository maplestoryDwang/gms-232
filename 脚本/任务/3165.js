var status = -1;

function start(d, c, b) {
    (d == 1) ? status++ : status--;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            cm.forceStartQuest();
            cm.dispose()
        }
    }
}

function end(d, c, b) {
    (d == 1) ? status++ : status--;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            cm.sendOk("这是#t4032832#。如果不小心丢了，我可以重新为你制作，你只要来找我就行。……反正我很闲。");
            cm.forceCompleteQuest();
            cm.gainItem(4000625, -100);
            if (!cm.haveItem(4032832)) {
                cm.gainItem(4032832, 1)
            }
            cm.dispose()
        }
    }
};