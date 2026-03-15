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
            cm.sendNormalTalk_Bottom("#face14#这次终于要轮到我们尖耳守备队出手了……", 36, 3002110, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face11#对了！我有个好主意！快走吧！", 36, 3002110, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#b（是什么好主意呢？……先跟去看看吧！）#k", 56, 0, true, true)
                } else {
                    if (status === a++) {
                        cm.setPartner(0, 3002020, 0, 0);
                        cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                        cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                        cm.forceStartQuest(34751, "");
                        cm.updateInfoQuest(34749, "enter=0");
                        cm.dispose();
                        cm.warp(410000100, 0)
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
            cm.sendNormalTalk_Bottom("#face11#首先，必须到狐狸森林去！快跟我来！", 36, 3002110, false, true)
        } else {
            if (status === a++) {
                cm.gainExp(16918334);
                cm.forceCompleteQuest(34751);
                cm.updateInfoQuest(34751, "exp=1");
                cm.updateInfoQuest(34770, "20=h0;21=h0;22=h0;23=h0;24=h0;25=h0;29=h0");
                cm.updateInfoQuest(34770, "20=h0;21=h0;22=h1;23=h0;24=h0;25=h0;29=h0");
                cm.OnStartNavigation(410000114, 0, "", 0);
                cm.dispose()
            }
        }
    }
};