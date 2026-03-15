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
            cm.curNodeEventEnd(true);
            cm.setInGameDirectionMode(true, false, true);
            cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
            cm.inGameDirectionEvent_AskAnswerTime(1000)
        } else {
            if (status === a++) {
                cm.inGameDirectionEvent_AskAnswerTime(5000);
                cm.effect_Voice("SoundEff.img/BandNoise", 100)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("嗬，你刚才听到了吗？从屋顶上传来了很可怕的声音，难道发生了袭击吗？", 37, 1530030, false, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("应该是乐器的声音吧……", 57, 0, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#b(我得上屋顶看看。)#k", 57, 0, true, true)
                        } else {
                            if (status === a++) {
                                cm.forceStartQuest(33511, "");
                                cm.setInGameDirectionMode(false, true, false);
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
            cm.sendNormalTalk_Bottom("辛苦你了，#h0#。现在我们开始正式练习吧？", 37, 1530120, false, true);
            cm.gainItem(4034346, -10)
        } else {
            if (status === a++) {
                cm.gainExp(Math.pow(cm.getLevel(), 3));
                cm.forceCompleteQuest(33511);
                cm.dispose();
                cm.warp(330002610, 0)
            }
        }
    }
};