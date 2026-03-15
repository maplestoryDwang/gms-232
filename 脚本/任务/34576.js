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
            cm.sendNormalTalk_Bottom("#face1#这根棍子，不，这根法杖不是随便就能使用的。\r\n必须消灭周围的怪物……", 36, 3003500, false, true)
        } else {
            if (status === a++) {
                cm.askAcceptDecline_Bottom("#face0#那去消灭200个#b光之凝视者#k……", 36, 3003504)
            } else {
                if (status === a++) {
                    cm.forceStartQuest(34576, "");
                    cm.sendNormalTalk_Bottom("#face1#他们不是和你一起的吗？", 36, 3003500, false, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face0#我只是在听从声音。", 36, 3003504, true, true);
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
            cm.sendNormalTalk_Bottom("#face3#充能完成了。", 36, 3003500, false, true)
        } else {
            if (status === a++) {
                cm.askAcceptDecline_Bottom("#face3#现在马上使用吗？\r\n#b（接受时立即移动。）#k", 36, 3003500)
            } else {
                if (status === a++) {
                    cm.dispose();
                    cm.warp(450007440, 0)
                }
            }
        }
    }
};