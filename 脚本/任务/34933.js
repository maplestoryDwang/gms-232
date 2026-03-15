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
            cm.askAcceptDecline_Bottom("#face2#嘿，嘿，你去前面消灭掉#b50个#k#b#o2400358##k，叽勒。我必须集中精神捕捉电波。", 36, 3001510)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face2#哎呀，这里充满了不祥的电波……真想快点离开这里……", 36, 3001510, 0, 1)
            } else {
                if (status === a++) {
                    cm.forceStartQuest(34933, "");
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/34933.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk_Bottom("#face4#啊，终于可以逃出去了，叽勒。快出发吧，叽，叽楞……", 36, 3001510, 0, 1)
        } else {
            if (status === a++) {
                cm.forceCompleteQuest(34933);
                cm.gainExp(8342);
                cm.updateInfoQuest(34933, "exp=1");
                cm.updateInfoQuest(34995, "00=h1;10=h0;01=h0;11=h0;02=h0;12=h0;13=h0;04=h0;23=h0;14=h0;05=h0;24=h0;15=h0;06=h0;16=h0;07=h0;17=h0;09=h0");
                cm.updateInfoQuest(34995, "00=h1;10=h0;01=h0;11=h0;02=h0;12=h0;13=h1;04=h0;23=h0;14=h0;05=h0;24=h0;15=h0;06=h0;16=h0;07=h0;17=h0;09=h0");
                cm.setPartner(1, 3001510, 80002397, 0);
                cm.OnStartNavigation(402000633, 0, "", 0);
                cm.dispose()
            }
        }
    }
};