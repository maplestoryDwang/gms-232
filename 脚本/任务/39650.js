var status = -1;
var selectionLog = [];
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
            cm.sendOk_Bottom("#face0##fc0xFFbfbfbf#(不行，现在还不是响应的时候。)\r\n\r\n #r ※ 需要完成前置剧情任务才可进行第二次转职。#k", 3001951 - cm.getPlayer().getGender())
        } else {
            if (status === a++) {
                cm.dispose()
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/39650.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.forceCompleteQuest(39650);
            cm.updateInfoQuest(39601, "50=h0;51=h0;52=h0;53=h0;j=2;54=h0;55=h0;56=h0;57=h0;58=h0;59=h0;q=3");
            cm.updateInfoQuest(39627, "end=1");
            cm.updateInfoQuest(1073, "15100=10;15110=30");
            cm.openUIWithOption(3, 151101000);
            cm.sendNormalTalk_Bottom("#face0##fc0xFFbfbfbf#(神秘光芒激发出了刻印在我灵魂深处的力量。\r\n集中精神接收那份力量吧。)", 36, 3001951 - cm.getPlayer().getGender(), false, true, 1)
        } else {
            if (status === a++) {
                cm.forceStartQuest(39691, "");
                cm.forceCompleteQuest(39691);
                cm.changeJob(15110);
                cm.sendNormalTalk_Bottom("#face6#当年，我最终没能守护主君吗……\r\n但这次，我想再失去侍奉的主君了。", 36, 3001951 - cm.getPlayer().getGender(), true, true, 1)
            } else {
                if (status == a++) {
                    cm.dispose()
                }
            }
        }
    }
};