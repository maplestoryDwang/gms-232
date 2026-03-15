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
            cm.sendNormalTalk_Bottom("#face1#右边有#r蜘蛛#k群。好像是威尔放出来的。", 36, 3003500, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face3#最好现在先消灭掉一些。如果数量多起来，就会很难对付。", 36, 3003500, true, true)
            } else {
                if (status === a++) {
                    cm.askAcceptDecline_Bottom("#face0#请移动到#b镜澄之海2#k，消灭掉200个#b阿拉涅#k。", 36, 3003500)
                } else {
                    if (status === a++) {
                        cm.updateInfoQuest(34560, "30=h0;50=h0;31=h1;51=h0;32=h1;52=h0;33=h0;53=h0;34=h0;54=h0;35=h0;55=h0;36=h0;56=h0;37=h0;57=h0;38=h0;58=h0;39=h0;59=h0;40=h0;60=h0;41=h0;42=h0;43=h0;44=h0;45=h0;46=h0;47=h0;48=h0;49=h0");
                        cm.updateInfoQuest(34560, "30=h0;50=h0;31=h1;51=h0;32=h1;52=h0;33=h0;53=h0;34=h0;54=h0;35=h0;55=h0;36=h0;56=h0;37=h0;57=h0;38=h0;58=h0;39=h0;59=h0;40=h0;60=h0;41=h0;42=h0;43=h0;44=h0;45=h0;46=h0;47=h1;48=h0;49=h0");
                        cm.forceStartQuest(34572, "");
                        cm.sendNormalTalk_Bottom("#face0#那我先走了。就在#b右边#k。", 36, 3003500, false, true)
                    } else {
                        if (status === a++) {
                            cm.OnStartNavigation(450007110, 0, "", 0);
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
            cm.sendNormalTalk_Bottom("狩猎结束了。嗯？又有什么东西？", 56, 0, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face3#好像……在战斗。", 36, 3003500, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("战斗？", 56, 0, true, true)
                } else {
                    if (status === a++) {
                        cm.forceCompleteQuest(34572);
                        cm.dispose()
                    }
                }
            }
        }
    }
};