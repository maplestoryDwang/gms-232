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
            cm.askAcceptDecline_Bottom("（有了其他火力的加持，终于到达了躯干所在的地方。\r\n现在向着巨大怪兽突击吧。）", 56, 0)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("(为了穿过迷雾，打开前往黑太阳的路……\r\n打败巨大怪兽吧。)\r\n\r\n #r ※ 需要击败BOSS<至暗魔晶>。#k", 56, 0, false, true)
            } else {
                if (status === a++) {
                    cm.forceStartQuest(35630, "")
                }
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/35630.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            if (cm.getPlayer().getParty() != null) {
                cm.sendNormalTalk_Bottom("#face0#啊，在组成了队伍的状态下无法开始<月桥>任务。\r\n请在其他地方再试一次吧。", 36, 3003650, false, true);
                cm.dispose();
                return
            }
            cm.askAcceptDecline_Bottom("#face0#舰炮即将发射。请趁此机会进入内部。\r\n\r\n #r ※ 接受时，自动移动到任务地图。#k", 36, 3003651)
        } else {
            if (status == a++) {
                cm.dispose();
                cm.warp(993060077, 0, false)
            }
        }
    }
};