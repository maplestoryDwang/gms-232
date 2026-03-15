var status = -1;

function start(c, b, a) {
    if (c == 1) {
        status++
    } else {
        cm.dispose();
        return
    }
    if (status == 0) {
        cm.askYesNo("首先，我们得弄明白是什么引起了这场地震！听我#b#m600000000##k的那些个蛋头伙计说，这地震可不是什么自然现象。我觉得你应该从这点着手开始调查。", 0, 9201050)
    } else {
        if (status == 1) {
            cm.sendNormalTalk("给，拿好这个叫…………#b#i2430680# #t2430680:##k…………玩意儿。造出它的哥们儿说你“能用它来找到地震的震中”什么的。就照他们说的去做吧。", 0, 9201050, false, true)
        } else {
            if (status == 2) {
                cm.forceStartQuest(28746, "");
                cm.forceStartQuest(28746, "0");
                cm.gainItem(2430680, 1);
                cm.dispose()
            }
        }
    }
};