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
            cm.askAcceptDecline_Bottom("#face0#决定之后，就走吧。#b镜澄之海7#k，她所在的地方。", 36, 3003504)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face3#等一下。请先告诉我。为什么要帮助我们？", 36, 3003500, false, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0#是她的意思。", 36, 3003504, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face0#蜘蛛是敌人。敌人的敌人是朋友。", 36, 3003504, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face0#走吧。右边。", 36, 3003504, true, true)
                        } else {
                            if (status === a++) {
                                cm.forceStartQuest(34577, "");
                                cm.updateInfoQuest(34560, "30=h0;50=h0;31=h1;51=h0;32=h1;52=h1;33=h0;53=h0;34=h0;54=h0;35=h0;55=h0;36=h0;56=h0;37=h0;57=h0;38=h0;58=h0;39=h0;59=h0;40=h0;60=h0;41=h0;42=h0;43=h0;44=h0;45=h0;46=h0;47=h0;48=h0;49=h0");
                                cm.updateInfoQuest(34560, "30=h0;50=h1;31=h1;51=h0;32=h1;52=h1;33=h0;53=h0;34=h0;54=h0;35=h0;55=h0;36=h0;56=h0;37=h0;57=h0;38=h0;58=h0;39=h0;59=h0;40=h0;60=h0;41=h0;42=h0;43=h0;44=h0;45=h0;46=h0;47=h0;48=h0;49=h0");
                                cm.updateInfoQuest(34560, "30=h0;50=h1;31=h1;51=h0;32=h1;52=h0;33=h0;53=h0;34=h0;54=h0;35=h0;55=h0;36=h0;56=h0;37=h0;57=h0;38=h0;58=h0;39=h0;59=h0;40=h0;60=h0;41=h0;42=h0;43=h0;44=h0;45=h0;46=h0;47=h0;48=h0;49=h0");
                                cm.updateInfoQuest(34560, "30=h0;50=h1;31=h1;51=h0;32=h1;52=h0;33=h0;53=h1;34=h0;54=h0;35=h0;55=h0;36=h0;56=h0;37=h0;57=h0;38=h0;58=h0;39=h0;59=h0;40=h0;60=h0;41=h0;42=h0;43=h0;44=h0;45=h0;46=h0;47=h0;48=h0;49=h0");
                                cm.OnStartNavigation(450007160, 0, "", 0);
                                cm.dispose()
                            }
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
            cm.sendNormalTalk_Bottom("#face0#这里。", 36, 3003504, false, true)
        } else {
            if (status === a++) {
                cm.forceCompleteQuest(34577);
                cm.dispose()
            }
        }
    }
};