function enter() {
    cm.openScriptNpc()
}
var status = -1;
var selectionLog = [];

function start() {
    action(1, 0, 0)
}

function action(d, c, b) {
    if (status == 0 && d == 0) {
        cm.dispose();
        return
    }(d == 1) ? status++ : status--;
    if (cm.getQuestStatus(21720) == 1) {
        cm.warp(910050200, 0);
        cm.dispose();
        return
    } else {
        if (cm.isQuestActive(21728)) {
            cm.forceStartQuest(21761, "0");
            cm.warp(101000000, 0, false);
            cm.dispose();
            return
        } else {
            if (cm.isQuestActive(21731)) {
                action21731(d, c, b);
                return
            } else {
                if (cm.isQuestActive(20912)) {
                    if (cm.getPlayerCount(910510002) == 0) {
                        cm.warp(910510002, 0, false)
                    } else {
                        cm.getTopMsgFont("等一会，里面好像有动静。", 3, 20, 4, 0, 0)
                    }
                    cm.dispose();
                    return
                }
            }
        }
    }
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status === a++) {
            cm.warp(910050300, 0);
            cm.dispose()
        }
    }
}

function action21731(d, c, b) {
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status === a++) {
            cm.askText("要是想进去，就说出暗号！\n\n #b（听到了奇怪的声音。说出通过调查知道的暗号吧。“弗朗西斯是天才人偶师！”）#k", "", 1063011, 0, 23, 0)
        } else {
            if (status === a++) {
                if (cm.getText() == "弗朗西斯是天才人偶师！") {
                    cm.dispose();
                    cm.warp(910510201, 0, false);
                    cm.spawnMobLimit(9300344, 1, 590, 230, 100)
                } else {
                    cm.sendNormalTalk("奇怪的声音嘲笑道。#b你是傻瓜吗？密码错了！连空格和感叹号都不能错！", 0, 1063011, false, true);
                    cm.dispose()
                }
            }
        }
    }
};