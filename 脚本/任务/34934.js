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
            cm.askAcceptDecline_Bottom("#face0#果然这里被沙怪们挡住了。亚克，请你到前面去消灭掉#b50个#k#b#o2400359##k，叽勒。", 36, 3001510)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face2#哎呀呀，不知道为什么，不祥的电波好像比刚才更强了……", 36, 3001510, 0, 1)
            } else {
                if (status === a++) {
                    cm.forceStartQuest(34934, "");
                    cm.dispose()
                }
            }
        }
    }
}

function stage0(d, c, b) {
    if (status == 0 && d == 0) {
        cm.dispose();
        return
    }
    status++;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            var e = cm.getQuest();
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/34934.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
        } else {
            if (status == a++) {
                cm.forceStartQuest();
                cm.dispose()
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
            cm.sendNormalTalk_Bottom("#face1#啊，捕捉到电波了。快走吧。现在应该可以离开这里了，叽勒。", 36, 3001510, 0, 1)
        } else {
            if (status === a++) {
                cm.forceCompleteQuest(34934);
                cm.gainExp(8832);
                cm.updateInfoQuest(34934, "exp=1");
                cm.updateInfoQuest(34995, "00=h1;10=h0;01=h0;11=h0;02=h0;12=h0;13=h0;04=h0;23=h0;14=h0;05=h0;24=h0;15=h0;06=h0;16=h0;07=h0;17=h0;09=h0");
                cm.setPartner(1, 3001510, 80002397, 0);
                cm.OnStartNavigation(402000635, 0, "", 0);
                cm.dispose()
            }
        }
    }
};