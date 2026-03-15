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
            cm.sendNormalTalk_Bottom("#face0##fc0xFFbfbfbf#(狂龙战士……他被称为诺巴的守护者。\r\n守护者好像是世代继承的？)", 36, 3001951 - cm.getPlayer().getGender(), false, true, 1)
        } else {
            if (status === a++) {
                cm.askAcceptDecline_Bottom("#face0##fc0xFFbfbfbf#(如果他也继承了先代的记忆……\r\n我应该去见见他。)\r\n\r\n #r ※ 自动转至任务地图。#k", 36, 3001951 - cm.getPlayer().getGender(), 1)
            } else {
                if (status === a++) {
                    cm.updateInfoQuest(39668, "rMap=" + cm.getMapId());
                    cm.dispose();
                    cm.warp(993162067, 0, false)
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/39668.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk_Bottom("#face0##fc0xFFbfbfbf#(这么看来，儿时与我对练剑术的人……\r\n就是我曾经的同僚，青梅竹马的……维罗妮卡。)", 36, 3001951 - cm.getPlayer().getGender(), false, true, 1)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face3##fc0xFFbfbfbf#(是我背叛了主君……背叛了维罗妮卡吗？\r\n这就是我一直寻觅的过去吗……)", 36, 3001951 - cm.getPlayer().getGender(), true, true, 1)
            } else {
                if (status === a++) {
                    cm.forceCompleteQuest(39668);
                    cm.updateInfoQuest(39601, "50=h0;51=h0;52=h0;53=h0;54=h0;j=4;55=h0;56=h0;57=h0;58=h0;59=h0;q=8");
                    cm.teachSkill(150020006, 8, 10);
                    cm.getTopMsgFont("<回忆>技能的等级提高了。", 3, 20, 20, 0, 0);
                    cm.dispose()
                }
            }
        }
    }
};