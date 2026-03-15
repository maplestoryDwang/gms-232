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
            cm.askAcceptDecline_Bottom("#face0##fc0xFFbfbfbf#(我收到消息说有人见到了平民翼人少年。\r\n现在马上前往勇士部落北部。)\r\n\r\n #r ※ 自动转至任务地图。#k", 36, 3001951 - cm.getPlayer().getGender(), 1)
        } else {
            if (status === a++) {
                cm.updateInfoQuest(39665, "rMap=" + cm.getMapId());
                cm.dispose();
                cm.warp(993162063, 0, false)
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/39665.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk_Bottom("#face0##fc0xFFbfbfbf#(与平民翼人开战的导火索是神王之死。\r\n正是在与他们的战争中，达尔莫尔觉醒成为了超越者。)", 36, 3001951 - cm.getPlayer().getGender(), false, true, 1)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0##fc0xFFbfbfbf#(如果像他们所说，这一切都是达尔莫尔策划的？\r\n他搞出那么惊天动地的事情……到底想得到什么？)", 36, 3001951 - cm.getPlayer().getGender(), true, true, 1)
            } else {
                if (status === a++) {
                    cm.forceCompleteQuest(39665);
                    cm.updateInfoQuest(39601, "50=h0;51=h0;52=h0;53=h0;j=3;54=h0;55=h0;56=h0;57=h0;58=h0;59=h0;q=5");
                    cm.teachSkill(150020006, 5, 10);
                    cm.getTopMsgFont("<回忆>技能的等级提高了。", 3, 20, 20, 0, 0);
                    cm.dispose()
                }
            }
        }
    }
};