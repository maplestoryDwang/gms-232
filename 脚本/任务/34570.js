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
            cm.sendNormalTalk_Bottom("#face3#还好没看见军团长威尔。", 36, 3003500, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#从它们身上应该能搜集到动物油脂。", 36, 3003500, true, true)
            } else {
                if (status === a++) {
                    cm.askAcceptDecline_Bottom("#face0#请你去消灭#b贝拉里斯#k，搜集100瓶#b动物油脂#k。", 36, 3003500);
                    cm.forceStartQuest(34570);
                    cm.dispose()
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
            cm.sendNormalTalk_Bottom("#face0#好像足够了。现在可以回大本营了。", 36, 3003500, false, true)
        } else {
            if (status === a++) {
                cm.updateInfoQuest(34560, "30=h0;50=h0;31=h1;51=h0;32=h1;52=h0;33=h0;53=h0;34=h0;54=h0;35=h0;55=h0;36=h0;56=h0;37=h0;57=h0;38=h0;58=h0;39=h0;59=h0;40=h0;60=h0;41=h0;42=h0;43=h0;44=h0;45=h0;46=h0;47=h0;48=h0;49=h0");
                cm.updateInfoQuest(34560, "30=h1;50=h0;31=h1;51=h0;32=h1;52=h0;33=h0;53=h0;34=h0;54=h0;35=h0;55=h0;36=h0;56=h0;37=h0;57=h0;38=h0;58=h0;39=h0;59=h0;40=h0;60=h0;41=h0;42=h0;43=h0;44=h0;45=h0;46=h0;47=h0;48=h0;49=h0");
                cm.forceCompleteQuest(34570);
                cm.gainItem(4036451, -100);
                cm.dispose()
            }
        }
    }
};