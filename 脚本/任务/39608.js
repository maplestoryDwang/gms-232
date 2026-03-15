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
            cm.askAcceptDecline_Bottom("#face0#我得去见见可能会知道这副画作的人。\r\n这期间，你就在这附近逛逛好吗？", 36, 3001952, 1)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#那一会儿据点见，我会在钟声敲响五次之前回来。\r\n布乌，拜托你给阿黛尔好好带路哦！", 36, 3001952, false, true, 1)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face2#布！", 36, 3001960, true, true, 1)
                } else {
                    if (status === a++) {
                        cm.forceStartQuest(39608, "");
                        cm.updateInfoQuest(39660, "00=h0;01=h0;10=h0;02=h0;11=h0;20=h0;03=h0;12=h0;04=h0;13=h0;40=h0;05=h0;14=h1;23=h0;41=h0;60=h0;06=h0;61=h0;07=h0;09=h0;19=h0;37=f;47=h0");
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/39608.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.warp(993162012, 0, false);
            cm.dispose()
        }
    }
};