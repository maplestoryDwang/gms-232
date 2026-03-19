function enter() {
    var b = pi.getPortal().getId();
    var a = pi.getPortal().getName();
    if (cm.getNumberFromQuestCustomData(40005) == 0) {
        cm.openScriptNpc()
    } else {
        cm.warp(321000100, 0, false)
    }
}
var status = -1;
var selectionLog = [];

function start() {
    action(1, 0, 0)
}

function action(d, c, b) {
    if (status == 0 && d == 0) {
        cm.dispose();
        return
    }(d == 1) ? status++ : status--;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status === a++) {
            cm.curNodeEventEnd(true);
            cm.setInGameDirectionMode(true, true, true);
            cm.fieldEffect_PlayBGM("Bgm33.img/ShadowKnight", 0, 0);
            cm.inGameDirectionEvent_MoveAction(0);
            cm.inGameDirectionEvent_AskAnswerTime(2000);
            cm.effect_OnUserEff("Effect/OnUserEff.img/questEffect/phantom/tutorial")
        } else {
            if (status === a++) {
                cm.sendNormalTalk("#face11# #b(难道这次也出不去了吗)", 41, 2410008, false, true);
                cm.effect_Voice("Voice.img/Alpha/9", 100)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("#face11# #b(#o9300744#？守护世界？是因为我太有用了，所以才不能出去？其他人都可以，为什么我就不行？)", 41, 2410008, true, true);
                    cm.effect_Voice("Voice.img/Alpha/10", 100)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("#face11# #b(他们分明是在说谎，他们肯定不希望我到外界去。总有一天，不管用什么方法我都要走出这里。)", 41, 2410008, true, true);
                        cm.effect_Voice("Voice.img/Alpha/11", 100)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("#face11# #b(估计，他们要给我新的任务，想把我困在村子里，不让我再去想那事情。)", 41, 2410008, true, true);
                            cm.effect_Voice("Voice.img/Alpha/12", 100)
                        } else {
                            if (status === a++) {
                                cm.dispose();
                                cm.warp(321000100, 0, false);
                                cm.setInGameDirectionMode(false, true, false)
                            }
                        }
                    }
                }
            }
        }
    }
};