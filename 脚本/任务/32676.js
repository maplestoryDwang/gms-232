var status = -1;

function start() {
    action(1, 0, 0)
}

function start(d, c, b) {
    status++;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            cm.sendNormalTalk_Bottom("#b右边#k，#b塔的背面#k。离得不远。", 36, 2550002, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("我去去就回，你继续施展探测魔法。", 56, 0, true, true)
            } else {
                if (status === a++) {
                    cm.forceStartQuest(32676, "");
                    cm.OnStartNavigation(306010300, 0, "", 0);
                    cm.dispose()
                }
            }
        }
    }
}

function end(d, c, b) {
    status++;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            cm.sendNormalTalk_Bottom("喂，没事吧？醒醒啊。", 56, 0, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("呃，呃呃呃。", 36, 2550104, true, true)
            } else {
                if (status === a++) {
                    cm.forceCompleteQuest(32676);
                    cm.dispose()
                }
            }
        }
    }
};