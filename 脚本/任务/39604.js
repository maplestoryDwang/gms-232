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
            cm.sendNormalTalk_Bottom("#face0#那么，我给你说说我们接下来要做的事。\r\n走，后巷有我们自卫队的据点。", 36, 3001952, false, true, 1)
        } else {
            if (status === a++) {
                cm.askAcceptDecline_Bottom("#face0#周围有些狂暴的家伙出没，很让人头疼！\r\n先干掉#r15个#k#r#o2400600##k再走。", 36, 3001952, 1)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0#它们一直吃不饱，所以变得很凶猛。\r\n你要当心别受伤，知道吗？", 36, 3001952, false, true, 1)
                } else {
                    if (status === a++) {
                        cm.forceStartQuest(39604, "");
                        cm.updateInfoQuest(39660, "00=h0;01=h0;10=h0;02=h0;11=h0;20=h0;03=h0;12=h0;04=h0;13=h0;40=h0;05=h0;14=h0;23=h0;41=h0;60=h0;06=h0;61=h0;07=h0;09=h0;19=h0;37=f;47=h0");
                        cm.OnStartNavigation(410000311, 0, "", 39604);
                        cm.setPartner(1, 3001919, 80002879, 0);
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/39604.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            var e = cm.getQuest();
            cm.sendNormalTalk_Bottom("#face0#这样一来,后街猫咪应该会老实点了。\r\n我们可以到自卫队据点去了。\r\n\r\n #r ※ 自动转至任务地图。#k", 36, 3001952, false, true)
        } else {
            if (status === a++) {
                cm.dispose();
                cm.warp(993162007, 0, false)
            }
        }
    }
};