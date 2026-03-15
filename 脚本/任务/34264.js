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
            cm.sendNormalTalk_Bottom("#face0#好，快快快~下一个目的地是#b封锁区3#k", 37, 3003406, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#我先走了~哈哈！", 37, 3003406, true, true)
            } else {
                if (status === a++) {
                    cm.forceStartQuest(34264, "");
                    cm.updateInfoQuest(34271, "20=h1;30=h0;21=h0;31=h1;32=h0;23=h0;33=h0;34=h0;52=h0;53=h1;35=h0;54=h1;18=h0;36=h0;28=h1;29=h1");
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
            cm.sendNormalTalk_Bottom("#face0#竟然这么快？可惜还是没我快~", 37, 3003406, false, true)
        } else {
            if (status === a++) {
                cm.forceCompleteQuest(34264);
                cm.dispose()
            }
        }
    }
};