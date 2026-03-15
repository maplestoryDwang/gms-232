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
            cm.askAcceptDecline_Bottom("#face0##fc0xFFbfbfbf#（饕餮再次叫了我，说是感觉到那里有怪物的气息……\r\n去饕餮指引的地方看看吧？）", 36, 3001674 + cm.getPlayer().getGender(), 1)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0##fc0xFFbfbfbf#（饕餮发挥了力量，只见周围亮了一下，\r\n就感觉像是被吸进了什么地方似的。）", 36, 3001674 + cm.getPlayer().getGender(), false, true, 1)
            } else {
                if (status === a++) {
                    cm.updateInfoQuest(39597, "40=h0;41=h0;42=h0;07=h0;43=h0;44=h0;45=h1;37=h2;38=h2;39=h2");
                    cm.forceStartQuest(39563, "");
                    cm.dispose();
                    cm.warp(993160158, 0, false)
                }
            }
        }
    }
}

function stage0(d, c, b) {
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
            cm.sendNormalTalk_Bottom("#face0#……那家伙可能是蜥蜴怪。", 36, 3001651, false, true, 1)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#如果是蜥蜴……也就是说会形成保护色？\r\n不过若是遭受攻击，难道不会现出原形吗？", 36, 3001674 + cm.getPlayer().getGender(), true, true, 1)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0#这便是那个家伙的命门。", 36, 3001651, true, true, 1)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face5#好吧，究竟该怎么对付这个家伙，我差不多有数了，\r\n那我这就进去了，觉悟吧，怪物！", 36, 3001674 + cm.getPlayer().getGender(), true, true, 1)
                    } else {
                        if (status === a++) {
                            cm.updateInfoQuest(39563, "NpcSpeech=30016831");
                            cm.updateInfoQuest(39563, "NpcSpeech=30016831;do=1");
                            cm.dispose()
                        }
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
            cm.sendNormalTalk_Bottom("#face12#哈哈！遁甲术之类的对我这个道士而言还不是分分钟的事。", 36, 3001674 + cm.getPlayer().getGender(), false, true, 1)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#完成回收。", 36, 3001651, true, true, 1)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face12#如果再感觉到怪物的气息就叫我，饕餮。", 36, 3001674 + cm.getPlayer().getGender(), true, true, 1)
                } else {
                    if (status === a++) {
                        cm.teachSkill(160000076, 7, 10);
                        cm.updateInfoQuest(39597, "40=h0;41=h0;42=h0;07=h0;43=h0;44=h0;45=h0;37=h2;38=h2;39=h2");
                        cm.forceCompleteQuest(39563);
                        cm.getTopMsgFont("<怪异封印>技能等级已提升。", 3, 20, 20, 0, 0);
                        cm.dispose()
                    }
                }
            }
        }
    }
};