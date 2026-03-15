var status = -1;
var selectionLog = [];

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
            cm.sendNormalTalk_Bottom("#face0#这话传得可真有意思。\r\n真的是斗战俱乐部的#b马罗尼#k导致塞妮娅飞艇坠落的吗？\r\n就为了抢走净化装置？", 36, 3004000, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#还是因为听说那是公司的东西，所以动了要抢走的念头？", 36, 3004000, true, true)
            } else {
                if (status === a++) {
                    cm.askAcceptDecline_Bottom("#face0#嗯……还需要点线索，走吧。去#b斗战俱乐部#k。", 36, 3004000)
                } else {
                    if (status === a++) {
                        cm.forceStartQuest(37113, "");
                        cm.updateInfoQuest(37100, "40=h1;31=h0;41=h0;50=h1;32=h0;42=h0;51=h1;33=h1;52=h1;dir=off;53=h0;35=h1;36=h1;37=h1;47=h1;38=h1;39=h1");
                        cm.OnStartNavigation(402000300, 0, "", 0);
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
    }(d == 1) ? status++ : status--;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            cm.sendNormalTalk_Bottom("#face0#听说今天会召开一场大会。\r\n马罗尼那家伙是想拿商品作诱饵，增加自己的同伙。", 36, 3004000, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("大会？", 56, 0, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0#这是斗战俱乐部有名的活动，格斗大会。\r\n优胜品竟然是#b‘公司制作的生化兵器’#k。", 36, 3004000, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("！！", 56, 0, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face0#是的，这是我们在找的东西。\r\n但居然说是公司制作的生化兵器……我当时说这话不过是为了吓唬那群孩童，没想到会弄得人尽皆知。", 36, 3004000, true, true)
                        } else {
                            if (status === a++) {
                                cm.forceCompleteQuest(37113);
                                cm.gainExp(9487412);
                                cm.dispose()
                            }
                        }
                    }
                }
            }
        }
    }
};