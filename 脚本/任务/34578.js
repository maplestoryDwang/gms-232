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
            cm.sendNormalTalk_Bottom("#face0#前面无法通过。必须击败凝视者，削弱镜世界的力量。", 36, 3003504, false, true)
        } else {
            if (status === a++) {
                cm.askAcceptDecline_Bottom("#face0#消灭200个#b暗之凝视者#k。", 36, 3003504)
            } else {
                if (status === a++) {
                    cm.forceStartQuest(34578, "");
                    cm.sendNormalTalk_Bottom("#face3#但要是塔纳的力量变弱了，军团长威尔不就可以使用力量了吗？", 36, 3003500, false, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face0#不用担心。", 36, 3003504, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face0#凝视者是力量的残片，执行者拥有实体。", 36, 3003504, true, true);
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
            cm.sendNormalTalk_Bottom("#face0#结界解开了。", 36, 3003504, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0##b右边#k。", 36, 3003504, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face3#好像跟着走就行。往#b右边#k走！", 36, 3003500, true, true)
                } else {
                    if (status === a++) {
                        cm.OnStartNavigation(450007170, 0, "", 0);
                        cm.updateInfoQuest(34560, "30=h0;50=h0;31=h1;51=h0;32=h1;52=h0;33=h0;53=h1;34=h0;54=h0;35=h0;55=h0;36=h0;56=h0;37=h0;57=h0;38=h0;58=h0;39=h0;59=h0;40=h0;60=h0;41=h0;42=h0;43=h0;44=h0;45=h0;46=h0;47=h0;48=h0;49=h0");
                        cm.updateInfoQuest(34560, "30=h0;50=h0;31=h1;51=h1;32=h1;52=h0;33=h0;53=h1;34=h0;54=h0;35=h0;55=h0;36=h0;56=h0;37=h0;57=h0;38=h0;58=h0;39=h0;59=h0;40=h0;60=h0;41=h0;42=h0;43=h0;44=h0;45=h0;46=h0;47=h0;48=h0;49=h0");
                        cm.updateInfoQuest(34560, "30=h0;50=h0;31=h1;51=h1;32=h1;52=h0;33=h0;53=h0;34=h0;54=h0;35=h0;55=h0;36=h0;56=h0;37=h0;57=h0;38=h0;58=h0;39=h0;59=h0;40=h0;60=h0;41=h0;42=h0;43=h0;44=h0;45=h0;46=h0;47=h0;48=h0;49=h0");
                        cm.forceCompleteQuest(34578);
                        cm.dispose()
                    }
                }
            }
        }
    }
};