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
            cm.sendNormalTalk_Bottom("#face3#请小心。这片海是神秘河中流淌的艾尔达经过精炼后形成的高纯度的海。", 36, 3003500, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face3#它们是在艾尔达精髓构成的海洋中诞生的生物，应该不是普通的怪物。", 36, 3003500, true, true)
            } else {
                if (status === a++) {
                    cm.askAcceptDecline_Bottom("#face0#请帮我从#b亚图斯#k身上搜集#b白色木柴#k。100个应该就够了。", 36, 3003500)
                } else {
                    if (status === a++) {
                        cm.forceStartQuest(34565, "");
                        cm.sendNormalTalk_Bottom("#face0#我会注意观察四周有没有危险的东西靠近。", 36, 3003500, false, true);
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
            var e = cm.getQuest();
            cm.sendNormalTalk_Bottom("木柴搜集到了。", 56, 0, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#这么多应该足够了。我来点上火，把信号弹烤干。", 36, 3003500, true, true)
            } else {
                if (status === a++) {
                    cm.forceCompleteQuest(34565);
                    cm.gainItem(4036450, -100);
                    cm.dispose()
                }
            }
        }
    }
};