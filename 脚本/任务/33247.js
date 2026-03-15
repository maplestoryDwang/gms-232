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
            cm.curNodeEventEnd(true);
            cm.setInGameDirectionMode(true, false, true);
            cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/lever", 100);
            cm.npc_SetSpecialAction("oid=285775330", "left", -1, 1);
            cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/metaldown", 100);
            cm.npcMove(1540747, 0, 353, 3000);
            cm.addPopupSay(1540452, 2000, "……这些炸弹的量真是惊人. ", "", 0);
            cm.addPopupSay(1540451, 2000, "这肯定不是普通的炸弹. ", "", 0);
            cm.inGameDirectionEvent_AskAnswerTime(3000)
        } else {
            if (status === a++) {
                cm.onSetBackEffect("down", 1, 1, 0, 0);
                cm.地图特效_开关落脚点([73], [0]);
                cm.forceCompleteQuest(33247);
                cm.setInGameDirectionMode(false, true, false);
                cm.dispose();
                cm.npc_LeaveField("oid=285775330")
            }
        }
    }
}

function stage0(d, c, b) {
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/33233.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.curNodeEventEnd(true);
            cm.setInGameDirectionMode(true, false, true);
            cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
            cm.sendNormalTalk_Bottom("哼……你找到管道了吗？\r\n你在磨蹭什么，快走。", 37, 1540490, false, true)
        } else {
            if (status === a++) {
                cm.updateInfoQuest(33234, "start=0;done=1");
                cm.forceCompleteQuest(33234);
                cm.gainItem(4034271, -3);
                cm.dispose();
                cm.warp(350053250, 0, true);
                cm.npc_LeaveField("oid=284798173");
                cm.npc_LeaveField("oid=284798173");
                cm.setInGameDirectionMode(false, true, false);
                cm.dispose()
            }
        }
    }
};