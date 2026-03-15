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
            cm.sendNormalTalk_Bottom("#face0#啊，还好能收到电波装置的电波，叽勒。一共……有两个地方。", 36, 3001510, 0, 1)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#嗯，你来带路。", 36, 3001500 + cm.getPlayer().getGender(), 1, 1)
            } else {
                if (status === a++) {
                    cm.askAcceptDecline_Bottom("#face0#叽，叽勒……那就出发吧。好了，沿着电波指示的方向走。", 36, 3001510)
                } else {
                    if (status === a++) {
                        cm.updateInfoQuest(34995, "00=h1;10=h0;01=h0;11=h0;02=h0;12=h0;13=h0;04=h0;23=h0;14=h0;05=h0;24=h0;15=h0;06=h0;16=h0;07=h0;17=h0;09=h0");
                        cm.updateInfoQuest(34995, "00=h1;10=h0;01=h0;11=h0;02=h0;12=h1;13=h0;04=h0;23=h0;14=h0;05=h0;24=h0;15=h0;06=h0;16=h0;07=h0;17=h0;09=h0");
                        cm.forceStartQuest(34932, "");
                        cm.OnStartNavigation(402000631, 0, "", 0);
                        cm.setPartner(1, 3001510, 80002397, 0);
                        cm.dispose()
                    }
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/34932.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk_Bottom("#face2#哎呀，什，什么东西……有奇怪的东西从沙子里爬出来了，好恶心……", 36, 3001510, 0, 1)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face2#呃，这样就没办法继续往前走了。哎呀，哎呀呀……", 36, 3001510, 1, 1)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face6#（呃……又是那种既视感……会不会和这些东西有什么关系呢……）", 36, 3001500 + cm.getPlayer().getGender(), 1, 1);
                    cm.spawnMobLimit(2400358, 1, 464, 68, 100)
                } else {
                    if (status === a++) {
                        cm.forceCompleteQuest(34932);
                        cm.gainExp(6379);
                        cm.updateInfoQuest(34932, "exp=1");
                        cm.dispose()
                    }
                }
            }
        }
    }
};