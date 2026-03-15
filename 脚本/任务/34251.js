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
            cm.askYesNo_Bottom("#face0#先消灭一些再前进吧。我在#b通往珊瑚树林的路4#k上等你。", 36, 3003409)
        } else {
            if (status === a++) {
                cm.forceStartQuest(34251, "");
                cm.updateInfoQuest(34271, "20=h0;30=h0;21=h0;31=h0;32=h0;33=h0;34=h0;35=h0;36=h0;29=h1");
                cm.updateInfoQuest(34271, "20=h0;30=h0;21=h1;31=h0;32=h0;33=h0;34=h0;35=h0;36=h0;29=h1");
                cm.dispose()
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
            cm.sendNormalTalk_Bottom("这里也有超级人造人啊。", 56, 0, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("脑袋上全是海鲜……", 56, 0, true, true)
            } else {
                if (status === a++) {
                    cm.forceCompleteQuest(34251);
                    cm.dispose()
                }
            }
        }
    }
};