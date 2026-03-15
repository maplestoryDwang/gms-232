var status = -1;
var selectionLog = [];

function start() {
    action(1, 0, 0)
}

function start(d, c, b) {
    if (status == 0 && d == 0) {
        cm.dispose();
        return
    }(d == 1) ? status++ : status--;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            cm.sendNormalTalk("从出现的时间不久来看，应该是刚才的战斗造成的。既然已经受到惩罚，我就不说什么了。\r\n", 0, 3001202, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("给，这是治疗药，快用这个治疗一下吧。\r\n", 0, 3001202, true, true)
            } else {
                if (status === a++) {
                    cm.forceStartQuest(34603, "");
                    cm.openUIWithOption(0, 2);
                    cm.sendNormalTalk("我给了你治疗药。快打开背包的消耗栏，使用治疗药吧。点击快捷键(I)即可打开背包。\r\n", 4, 3001250, true, true)
                } else {
                    if (status === a++) {
                        cm.gainItem(2437264, 1);
                        cm.sendNormalTalk("虽然味道不怎么样，但疗效还不错。结束治疗后就来找我吧。我会交给你只有正式支部成员才能学习的技术。\r\n", 4, 3001250, true, false);
                        cm.dispose()
                    }
                }
            }
        }
    }
}

function end(d, c, b) {
    if (status == 0 && d == 0) {
        cm.dispose();
        return
    }
    status++;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            cm.sendNormalTalk("#b（……啊，突然想起了过去的事……但现在不是想这些的时候。）#k", 2, 0, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("#b（对，对了，支部长说要传授我新技能。现在他应该在据点里。到那里去吧。）#k", 2, 0, true, true)
            } else {
                if (status === a++) {
                    cm.OnStartNavigation(402000001, 1, "3001200", 0);
                    cm.forceCompleteQuest(34603);
                    cm.dispose()
                }
            }
        }
    }
};