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
            cm.sendNormalTalk_Bottom("#face0##fc0xFFbfbfbf#(似乎摆脱追踪了,可以出去了。\r\n一下子经历太多事,有点晕头转向。)", 36, 3001951 - cm.getPlayer().getGender(), false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face6##fc0xFFbfbfbf#(我在黑漆漆的亚空间里被关了好久。\r\n不,在此之前,还有在战场上作战的记忆。)", 36, 3001951 - cm.getPlayer().getGender(), true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face6##fc0xFFbfbfbf#(为了保护某人……我要保护的究竟是谁？\r\n我只记得自己身上流着翼人之血,擅长剑术。)", 36, 3001951 - cm.getPlayer().getGender(), true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face6##fc0xFFbfbfbf#(可是,我为什么无法展开翼人的红色翅膀。\r\n在那段时间里……我到底经历了什么事？)", 36, 3001951 - cm.getPlayer().getGender(), true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face2##fc0xFFbfbfbf#(脑子好乱……突如其来的意外情况，这个陌生的城市，\r\n还有那个似乎认识我的少年……)", 36, 3001951 - cm.getPlayer().getGender(), true, true)
                        } else {
                            if (status === a++) {
                                cm.askAcceptDecline_Bottom("#face0##fc0xFFbfbfbf#(虽说离约定的时间还有很久,但我必须找他问个清楚。\r\n循着那少年跑走的方向追过去看看吧。)\r\n\r\n #r ※ 自动转至任务地图。#k", 36, 3001950)
                            } else {
                                if (status === a++) {
                                    cm.dispose();
                                    cm.warp(993162005, 0, false);
                                    cm.dispose()
                                }
                            }
                        }
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/39602.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.askYesNo("这个任务的结束脚本还没有修复哦。它的脚本位于： #b /脚本/任务/#e" + e + "#n.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻完成这个任务吗？")
        } else {
            if (status == a++) {
                cm.forceCompleteQuest();
                cm.dispose()
            }
        }
    }
};