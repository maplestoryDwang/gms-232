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
            cm.sendNormalTalk_Bottom("#face1#让我看看……嗯？这根法杖是充能式的。", 36, 3003500, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("切，什么破法杖，又不是电池……", 56, 0, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face3#如果光变弱了，就需要充能。\r\n消灭周围的生物，就会自动吸收魔力……上面是这么写的。", 36, 3003500, true, true)
                } else {
                    if (status === a++) {
                        cm.askAcceptDecline_Bottom("#face0#刚好周围有怪物。\r\n去消灭200个#b贝拉里翁#k，应该就行了。", 36, 3003500)
                    } else {
                        if (status === a++) {
                            cm.forceStartQuest(34568, "");
                            cm.sendNormalTalk_Bottom("#face0#那就拜托了。", 36, 3003500, false, true);
                            cm.dispose()
                        }
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
            cm.sendNormalTalk_Bottom("#face0#好像行了。\r\n为了以防万一，最好移动到附近没人的地方，然后再使用。", 36, 3003500, false, true)
        } else {
            if (status === a++) {
                cm.askAcceptDecline_Bottom("#face0#你想现在出发吗？\r\n#b（接受时立即移动。）#k", 36, 3003500)
            } else {
                if (status === a++) {
                    cm.dispose();
                    cm.warp(450007320, 0)
                }
            }
        }
    }
};