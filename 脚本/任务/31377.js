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
            cm.askAcceptDecline("来体验一下仅用2。5秒就从90米高空坠落的惊险刺激感吧！心脏较脆弱的人限制入场。你说你去体验过幽灵屋了？那你现在就能进去，小心长头发飘过时一并流下来的唾沫哦~你准备好了吗？", 0, 2192026)
        } else {
            if (status === a++) {
                cm.forceStartQuest(31377, "");
                cm.updateInfoQuest(31389, "ex=3");
                cm.dispose();
                cm.warp(921170041, 0)
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
            cm.sendNormalTalk("从你的表情来看，似乎很是满足嘛。", 0, 2192026, false, true)
        } else {
            if (status === a++) {
                cm.forceCompleteQuest(31377);
                cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/heartFast", 128);
                cm.sendNormalTalk("那下次再见咯~？", 1, 2192026, true, false)
            } else {
                if (status === a++) {
                    cm.dispose()
                }
            }
        }
    }
};