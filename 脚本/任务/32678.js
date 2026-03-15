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
            cm.sendNormalTalk_Bottom("(脉搏消失了。帮他合上了双眼。)", 56, 0, false, true)
        } else {
            if (status === a++) {
                cm.askYesNo_Bottom("(认错人了……看来要赶快回头去找迈勒。)", 56, 0)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("去#b左边#k就行了。", 56, 0, false, true)
                } else {
                    if (status === a++) {
                        cm.forceStartQuest(32678, "");
                        cm.OnStartNavigation(306010100, 0, "", 0);
                        cm.dispose()
                    }
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
            cm.sendNormalTalk_Bottom("怎么样？", 36, 2550002, false, true)
        } else {
            if (status === a++) {
                cm.forceCompleteQuest(32678);
                cm.dispose()
            }
        }
    }
};