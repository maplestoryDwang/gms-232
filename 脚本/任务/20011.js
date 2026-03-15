var status = -1;

function start(c, b, a) {
    if (c == 1) {
        status++
    } else {
        if (status == 2) {
            cm.sendNext("你不想要这个东西吗？");
            cm.dispose();
            return
        }
        status--
    }
    if (status == 0) {
        cm.sendNext("有许多方式可以来打猎，但是最基本的方式就是#b“基础攻击”#k。你只要一把武器，只要简单的操作就可以杀死敌人。")
    } else {
        if (status == 1) {
            cm.sendNextPrev("按 #bCtrl#k 键即可普通攻击，如果你不常用这个按键，可以在右下角的键盘设置处更换其它的按键。")
        } else {
            if (status == 2) {
                cm.askAcceptDecline("试一下吧！你可以找到 #r#o100120##k，打败他们，然后和我谈话。")
            } else {
                if (status == 3) {
                    cm.forceStartQuest();
                    cm.hireTutorMsg(4);
                    cm.dispose()
                }
            }
        }
    }
}

function end(c, b, a) {
    if (c == 1) {
        status++
    } else {
        status--
    }
    if (status == 0) {
        cm.sendNext("噢，看来你已经成功打败了 #o100120#。很简单，不是吗？这些只是普通的怪物，更厉害的怪物在外面非常危险的世界。好了，看来你已经通过了我的测试，我送给你一点东西吧。")
    } else {
        if (status == 1) {
            cm.gainItem(1002869, 1);
            cm.gainItem(1052177, 1);
            cm.forceCompleteQuest();
            cm.gainExp(30);
            cm.hireTutorMsg(6);
            cm.dispose()
        }
    }
};