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
            cm.sendOk("喏，你找的#t4032834#来了。你一定要打败#o8210007#，帮助人们。如果弄丢了钥匙就回来找我，重做一把还是很简单的。");
            cm.forceCompleteQuest();
            cm.gainItem(4000627, -100);
            if (!cm.haveItem(4032834)) {
                cm.gainItem(4032834, 1)
            }
            cm.dispose()
        }
    }
};