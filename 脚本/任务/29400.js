var status = -1;

function start(c, b, a) {
    status++;
    if (c != 1) {
        cm.sendNext("Come back when you're ready.");
        cm.dispose();
        return
    }
    if (status == 0) {
        cm.askAcceptDecline("#v1142004# #e#b#t1142004##k\r\n\r - 时间限制30天\r-狩猎100000个怪物 ,只有处于您R级别或更高级别的怪物才被批准。\\r是否要测试您的技能以查看您是否有权查看此标题？")
    } else {
        if (status == 1) {
            cm.sendNext("当前排名\r\n1。#bmoole k:r538673 k怪物\r\n2。#bzeroquanta k:r111421 k怪物\r\n别忘了记录在每个月初重置。")
        } else {
            if (status == 2) {
                cm.sendNextPrev("我给你30天时间来达到你的狩猎目标。一旦你完成了，回来看看我。记住，你必须在规定的时间内回来见我才能被批准。此外，除非您先完成或放弃此挑战，否则您将被禁止尝试其他标题。")
            } else {
                if (status == 3) {
                    cm.forceStartQuest();
                    cm.dispose()
                }
            }
        }
    }
}

function end(c, b, a) {
    status++;
    if (c != 1) {
        if (b == 1 && c == 0) {
            return
        } else {
            cm.dispose();
            return
        }
        if (status == 0) {
            cm.sendOk("Not coded yet.");
            cm.dispose()
        }
    }
};