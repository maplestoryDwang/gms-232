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
            cm.sendNormalTalk_Bottom("#face0#从现在开始，我们诺特勒斯号\r\n会把全部精力放在和其他舰船的沟通上。", 36, 3003673, false, true)
        } else {
            if (status === a++) {
                cm.askAcceptDecline_Bottom("#face0#在此期间可能会遇到危险的情况……\r\n#b#ho##k，请你暂时搭乘护卫船，在一旁警戒。\r\n\r\n #r ※ 接受时，自动移动到任务地图。#k", 36, 3003673)
            } else {
                if (status === a++) {
                    cm.forceStartQuest(35618, "");
                    cm.dispose();
                    cm.warp(993060046, 0, false)
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/35618.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk_Bottom("#face0#嗬呃……啊，咦，#b#ho##k，你来啦！！\r\n呜呜……吓死我了！！还以为敌人又出现了呢！", 36, 3003659, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("（告诉他说是接受了凯琳的委托，正在护卫船上负责警戒。）", 56, 0, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0#啊……原，原来如此。\r\n不过这里暂时没有敌人出现。", 36, 3003659, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face0#刚好外围护卫船发来了消息，说那里的情况很危险。\r\n希望你能去支援他们。", 36, 3003659, true, true)
                    } else {
                        if (status === a++) {
                            cm.forceCompleteQuest(35618);
                            cm.gainExp(85793345);
                            cm.dispose()
                        }
                    }
                }
            }
        }
    }
};